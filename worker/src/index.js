// Weekly push reminders: Cloudflare Worker (cron every 5 min + KV "SUBS").
// The app sends its upcoming reminders (next ~10 days); the cron delivers those that are due.
import { buildPushPayload } from '@block65/webcrypto-web-push';

const json = (env, req, body, status = 200) => new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json', ...cors(env, req) } });
function cors(env, req) {
  const origin = req && req.headers.get('origin');
  const allowed = (env.ALLOWED_ORIGIN || '').split(',').map(s => s.trim());
  return origin && allowed.includes(origin)
    ? { 'access-control-allow-origin': origin, 'access-control-allow-methods': 'GET, POST, OPTIONS', 'access-control-allow-headers': 'content-type, x-app-key', 'access-control-max-age': '86400', vary: 'Origin' }
    : { vary: 'Origin' };
}
const validId = id => typeof id === 'string' && /^[A-Za-z0-9_-]{8,64}$/.test(id);
const MAX = 120, LATE = 60 * 60 * 1000; // keep at most 120 reminders; drop ones more than 1h overdue

export function cleanReminders(list, now = Date.now()) {
  if (!Array.isArray(list)) return [];
  return list.filter(r => r && Number.isFinite(r.at) && r.at > now - LATE && r.at < now + 40 * 864e5)
    .map(r => ({ at: Math.round(r.at), title: String(r.title || 'Weekly').slice(0, 80), body: String(r.body || '').slice(0, 200), tag: String(r.tag || r.at).slice(0, 80) }))
    .sort((a, b) => a.at - b.at).slice(0, MAX);
}
export function dueNow(rec, now = Date.now()) {
  const sent = new Set(rec.sent || []);
  return (rec.reminders || []).filter(r => r.at <= now && r.at > now - LATE && !sent.has(r.tag + '@' + r.at));
}

export async function sendPush(env, rec, msg) {
  const vapid = { subject: env.VAPID_SUBJECT, publicKey: env.VAPID_PUBLIC_KEY, privateKey: env.VAPID_PRIVATE_KEY };
  const payload = await buildPushPayload({ data: JSON.stringify({ title: msg.title, body: msg.body, tag: msg.tag, url: './' }), options: { ttl: 3600, urgency: 'high' } }, rec.subscription, vapid);
  const res = await (env.__fetch || fetch)(rec.subscription.endpoint, payload);
  return res.status;
}

export async function runCron(env, now = Date.now()) {
  let cursor, sent = 0, removed = 0;
  do {
    const page = await env.SUBS.list({ prefix: 'sub:', cursor });
    for (const k of page.keys) {
      const rec = await env.SUBS.get(k.name, 'json'); if (!rec || !rec.enabled) continue;
      const due = dueNow(rec, now); if (!due.length) continue;
      let gone = false;
      for (const m of due.slice(-3)) { // never burst more than 3 at once
        let st; try { st = await sendPush(env, rec, m); } catch (e) { console.log('push error', e.message); continue; }
        if (st === 404 || st === 410) { gone = true; break; }
        if (st >= 200 && st < 300) sent++; else console.log('push status', st);
      }
      if (gone) { await env.SUBS.delete(k.name); removed++; continue; }
      rec.sent = [...(rec.sent || []), ...due.map(r => r.tag + '@' + r.at)].slice(-200);
      rec.reminders = rec.reminders.filter(r => r.at > now);
      await env.SUBS.put(k.name, JSON.stringify(rec));
    }
    cursor = page.list_complete ? null : page.cursor;
  } while (cursor);
  return { sent, removed };
}

export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors(env, req) });
    if (req.method === 'GET' && url.pathname === '/vapid-public-key') return json(env, req, { key: env.VAPID_PUBLIC_KEY });
    if (req.method !== 'POST') return json(env, req, { error: 'not found' }, 404);
    // Light gate only: APP_KEY ships inside the web app.
    if (!env.APP_KEY || req.headers.get('x-app-key') !== env.APP_KEY) return json(env, req, { error: 'unauthorized' }, 401);
    let b; try { b = await req.json(); } catch { return json(env, req, { error: 'bad json' }, 400); }
    if (!validId(b.id)) return json(env, req, { error: 'bad id' }, 400);
    const key = 'sub:' + b.id;
    switch (url.pathname) {
      case '/sync': { // subscribe and/or replace the reminder list
        const prev = await env.SUBS.get(key, 'json') || {};
        const s = b.subscription || prev.subscription;
        if (!s || typeof s.endpoint !== 'string' || !s.endpoint.startsWith('https://') || !s.keys || !s.keys.p256dh || !s.keys.auth) return json(env, req, { error: 'bad subscription' }, 400);
        const rec = { subscription: { endpoint: s.endpoint, expirationTime: s.expirationTime ?? null, keys: { p256dh: s.keys.p256dh, auth: s.keys.auth } },
          enabled: b.enabled !== false, reminders: cleanReminders(b.reminders), sent: prev.sent || [], updated: Date.now() };
        await env.SUBS.put(key, JSON.stringify(rec));
        return json(env, req, { ok: true, count: rec.reminders.length });
      }
      case '/unsubscribe': await env.SUBS.delete(key); return json(env, req, { ok: true });
      case '/test': {
        const rec = await env.SUBS.get(key, 'json'); if (!rec) return json(env, req, { error: 'unknown id' }, 404);
        const st = await sendPush(env, rec, { title: 'Weekly 🌱', body: 'Reminders are on. You’re all set!', tag: 'test' });
        if (st === 404 || st === 410) { await env.SUBS.delete(key); return json(env, req, { error: 'subscription expired' }, 410); }
        return json(env, req, { ok: st < 300, status: st }, st < 300 ? 200 : 502);
      }
    }
    return json(env, req, { error: 'not found' }, 404);
  },
  async scheduled(event, env, ctx) { ctx.waitUntil(runCron(env, event.scheduledTime)); },
};
