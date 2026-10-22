import test from 'node:test'; import assert from 'node:assert';
import { cleanReminders, dueNow } from '../src/index.js';
test('clean drops old/invalid and sorts', () => {
  const now = 1e12; const r = cleanReminders([{ at: now + 5000, title: 'b' }, { at: now - 2 * 3600e3 }, { at: 'x' }, { at: now + 1000, title: 'a' }], now);
  assert.deepStrictEqual(r.map(x => x.title), ['a', 'b']);
});
test('dueNow skips sent', () => {
  const now = 1e12; const rec = { reminders: [{ at: now - 1000, tag: 't1' }, { at: now - 500, tag: 't2' }, { at: now + 10, tag: 't3' }], sent: ['t1@' + (now - 1000)] };
  assert.deepStrictEqual(dueNow(rec, now).map(x => x.tag), ['t2']);
});
