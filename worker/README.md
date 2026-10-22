# weekly-push

Cloudflare Worker that delivers Weekly's sticker reminders as Web Push (works for iPhone Home Screen web apps on iOS 16.4+).

- `POST /sync` `{id, subscription, enabled, reminders:[{at, title, body, tag}]}`: the app sends its next ~10 days of reminders after every change.
- `POST /unsubscribe`, `POST /test`, `GET /vapid-public-key`. Every POST needs the `X-App-Key` header, and CORS only allows https://herbwriteswords.github.io.
- A cron runs every 5 minutes and sends due reminders (up to 1 hour late at most). Expired subscriptions (404/410) are deleted.
- Secrets live only in Cloudflare and in the gitignored `.secrets.local`, which `node gen-keys.mjs` creates. **Never commit them.** `APP_KEY` and the VAPID *public* key are public and go in the app's `config.js`.

## Deploy (Node 22+)
    npm install
    ./deploy.sh          # uses CLOUDFLARE_API_TOKEN or `wrangler login`
Then put the printed workers.dev URL, APP_KEY and VAPID_PUBLIC_KEY into `../config.js`.

## Test
    npm test
