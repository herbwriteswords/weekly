#!/usr/bin/env bash
# Deploy Weekly push worker. Auth: CLOUDFLARE_API_TOKEN (+ optional CLOUDFLARE_ACCOUNT_ID) if set, else `wrangler login` (browser).
set -euo pipefail
cd "$(dirname "$0")"
WR="npx wrangler"
[ -f .secrets.local ] || node gen-keys.mjs
set -a; . ./.secrets.local; set +a
if [ -z "${CLOUDFLARE_API_TOKEN:-}" ]; then $WR whoami >/dev/null 2>&1 || $WR login; fi
$WR whoami
if grep -q 'REPLACE_WITH_KV_ID' wrangler.toml; then
  out=$($WR kv namespace create weekly-subs 2>&1 | tee /dev/stderr)
  id=$(printf '%s' "$out" | grep -oE '[0-9a-f]{32}' | head -1)
  [ -n "$id" ] || { echo "Could not read KV id from wrangler output" >&2; exit 1; }
  sed -i.bak "s/REPLACE_WITH_KV_ID/$id/" wrangler.toml && rm -f wrangler.toml.bak
  echo "KV namespace id: $id"
fi
# First deploy creates the script so secrets can attach to it.
$WR deploy
for k in VAPID_PUBLIC_KEY VAPID_PRIVATE_KEY VAPID_SUBJECT APP_KEY; do printf '%s' "${!k}" | $WR secret put "$k"; done
$WR deploy
echo
echo "Deployed. Put the workers.dev URL above into config.js (repo root) as WORKER_URL, and APP_KEY + VAPID_PUBLIC_KEY from .secrets.local."
