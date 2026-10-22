// Generates VAPID keys (P-256) + APP_KEY into .secrets.local (gitignored). Won't overwrite an existing file.
import { webcrypto as c } from 'node:crypto'; import fs from 'node:fs';
if (fs.existsSync('.secrets.local')) { console.log('.secrets.local exists — not overwriting'); process.exit(0); }
const kp = await c.subtle.generateKey({ name: 'ECDSA', namedCurve: 'P-256' }, true, ['sign', 'verify']);
const raw = Buffer.from(await c.subtle.exportKey('raw', kp.publicKey)).toString('base64url');
const jwk = await c.subtle.exportKey('jwk', kp.privateKey);
const app = Buffer.from(c.getRandomValues(new Uint8Array(24))).toString('base64url');
fs.writeFileSync('.secrets.local', `VAPID_PUBLIC_KEY=${raw}\nVAPID_PRIVATE_KEY=${jwk.d}\nVAPID_SUBJECT=mailto:herbwriteswords@users.noreply.github.com\nAPP_KEY=${app}\n`, { mode: 0o600 });
console.log('wrote .secrets.local; public key:', raw);
