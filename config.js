/* Weekly push config. APP_KEY is a light gate only (it ships to every browser, so it's public).
   VAPID_PUBLIC_KEY is public by design; the private key lives only in the Worker's secrets. */
window.WEEKLY_CONFIG = {
  WORKER_URL: 'https://weekly-push.herb-remember.workers.dev',
  APP_KEY: 'JzUv91Zc2L0ykmYXtopUEMjlwGxnUDf2',
  VAPID_PUBLIC_KEY: 'BOzgs8u-BX61ficVOZ4ePaS06kALnahtXKkU3TnZjpcBbmR3tTe7INB9hs8cPaTshsx4LDysk9O7XCfMBKLoH1k',
};
