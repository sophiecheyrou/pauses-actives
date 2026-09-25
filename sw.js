const CACHE='pause5-v24i-20260924-about-logo-ios';
const CORE=['./','./index.html','./app.js','./manifest.webmanifest','./icon-192.png','./icon-512.png','./logo-academie-paris.jpg','./logo-college-actif.png','./logo-pause5-about.png','./hero-classroom.jpg','./hero-banner.jpg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  const u=new URL(e.request.url);
  const isMedia=u.pathname.includes('/audio/')||u.pathname.includes('/videos/')||e.request.destination==='audio'||e.request.destination==='video';
  if(isMedia){
    // V23 : médias 100 % réseau. Aucun fallback Cache Storage.
    // Le paramètre ?v=... ajouté par app.js change aussi l'URL côté navigateur/CDN.
    e.respondWith(fetch(e.request,{cache:'no-store'}));
    return;
  }
  // V23r : réseau prioritaire aussi pour le code afin d'éviter un ancien app.js/index.html.
  e.respondWith(fetch(e.request,{cache:'no-store'}).then(resp=>{
    if(resp.ok){const copy=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}
    return resp;
  }).catch(()=>caches.match(e.request)));
});
