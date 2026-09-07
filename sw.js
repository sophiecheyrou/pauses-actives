const CACHE='pause5-v17';
const CORE=['./','./index.html','./app.js','./manifest.webmanifest','./icon-192.png','./icon-512.png','./logo-academie-paris.jpg','./logo-college-actif.png','./hero-classroom.jpg','./hero-banner.jpg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  const u=new URL(e.request.url);
  const isMedia=u.pathname.includes('/audio/')||u.pathname.includes('/videos/')||e.request.destination==='audio'||e.request.destination==='video';
  if(isMedia){
    // Safari/Chrome peuvent utiliser des requêtes Range : on les laisse au réseau.
    if(e.request.headers.has('range')){ e.respondWith(fetch(e.request)); return; }
    e.respondWith(fetch(e.request).then(resp=>{
      if(resp.ok){const copy=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}
      return resp;
    }).catch(()=>caches.match(e.request)));
    return;
  }
  e.respondWith(caches.match(e.request).then(cached=>cached||fetch(e.request).then(resp=>{
    if(resp.ok){const copy=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}
    return resp;
  })));
});
