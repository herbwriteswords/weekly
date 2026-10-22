const C='weekly-v4-2';
const F=['./','index.html','styles.css','app.js','config.js','iconlib.js','manifest.webmanifest','icons/logo.svg','icons/wordmark.svg','icons/icon-180.png','icons/icon-192.png','icons/icon-512.png','favicon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put(e.request,cp));return r}).catch(()=>caches.match(e.request,{ignoreSearch:true})))});
self.addEventListener('push',e=>{let d={};try{d=e.data.json()}catch(_){d={title:'Weekly',body:e.data&&e.data.text()}}
  e.waitUntil(self.registration.showNotification(d.title||'Weekly',{body:d.body||'',tag:d.tag||'weekly',icon:'icons/icon-192.png',badge:'icons/icon-192.png',data:{url:d.url||'./'}}))});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(clients.matchAll({type:'window',includeUncontrolled:true}).then(ws=>{for(const w of ws)if('focus' in w)return w.focus();return clients.openWindow(e.notification.data&&e.notification.data.url||'./')}))});
