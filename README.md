# Weekly

A simple, minimalist weekly planner web app. Open it on your phone and use Safari's **Share → Add to Home Screen** so it works like an app, offline too.

## Features
- **Day, Week and Month views.** Swipe or tap the day tabs. In Month view, tap a date to open it.
- **Stickers:** tap **+**, then tap a sticker to add it or **press and hold** to drag it onto a day. Normal swipes scroll and never pick up a sticker. While you drag toward the top of the screen, the tray slides away so you can see where you're dropping.
- **Edit a sticker** (tap it): name, time, icon (a searchable library of 150+ line icons in categories), notes, and photos. Photos are shrunk on the phone and stored in IndexedDB. Small marks on the sticker show when it has notes or photos.
- **Check off** finished items, and **star one main event** per day.
- **Weekly recap:** swipeable cards showing items done, your streak, your most-done activity, main events, a day-by-day look and your photos. The app offers it at the end of the week.
- **Every week vs. just this date:** edits go to the repeating weekly template, or to a single date.
- **Reminders** (Web Push, iPhone Home Screen app on iOS 16.4+): turn them on in Settings, then switch on “Remind me” on any sticker that has a time.
- **Settings** (bottom-left): theme Light/Dark/System, week starts Mon/Sun, 12/24h, default wake time, reminder lead time and message style, haptics, show completed, recap, export/import, sample week, start blank.

Plain HTML/CSS/JS with no build step. Hosted on GitHub Pages. The push server lives in `worker/` (Cloudflare Worker); see `worker/README.md`.
Extra icons are from [Lucide](https://lucide.dev) (ISC license).
