const CACHE = 'setlist-palco-v4';
const FILES = ['./', './index.html', './manifest.json', './icon.svg'];

self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', (e)=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e)=>{
  const req = e.request;

  // Never intercept calls to the GitHub API (used for sync) — always hit the
  // network directly so sync checks see the real current state, never a
  // cached/stale API response. Also skip caching for non-GET requests
  // (PUT/POST aren't valid Cache API entries anyway).
  if(req.url.startsWith('https://api.github.com') || req.method !== 'GET'){
    return; // let the browser handle it normally, no respondWith = no interception
  }

  const isAppShell = req.mode === 'navigate' || req.url.endsWith('index.html') || req.url.endsWith('/');

  if(isAppShell){
    // Network-first for the app itself: when online, always fetch the latest
    // index.html so updates take effect right away. Falls back to the saved
    // offline copy only when there's no connection.
    e.respondWith(
      fetch(req).then(resp=>{
        const copy = resp.clone();
        caches.open(CACHE).then(c=>c.put(req, copy));
        return resp;
      }).catch(()=> caches.match(req).then(cached => cached || caches.match('./index.html')))
    );
    return;
  }

  // Cache-first (with background refresh) for static assets like icon/manifest
  e.respondWith(
    caches.match(req).then(cached=>{
      const fetchPromise = fetch(req).then(resp=>{
        const copy = resp.clone();
        caches.open(CACHE).then(c=>c.put(req, copy));
        return resp;
      }).catch(()=>cached);
      return cached || fetchPromise;
    })
  );
});
