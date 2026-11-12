/* Raag Explorer service worker — precache everything, serve cache-first, so the app
   works with no signal once it has been opened.
   Bump CACHE whenever any file below changes (including the shared raag data after
   _Tools/sync-core.js), or phones keep showing the old copy. */
const CACHE = "raag-explorer-v5";
const ASSETS = [
  "./", "./index.html", "./manifest.webmanifest",
  "./css/fonts.css", "./css/styles.css", "./css/brand.css",
  "./js/core/ragas-data.js", "./js/core/ragas-variants.js", "./js/app.js",
  "./assets/medallion.png",
  "./icons/icon-192.png", "./icons/icon-512.png",
  "./icons/icon-192-maskable.png", "./icons/icon-512-maskable.png",
  "./icons/apple-touch-icon.png", "./icons/favicon-32.png",
  "./fonts/archivo-latin.woff2", "./fonts/archivo-latin-ext.woff2",
  "./fonts/source-serif-4-latin.woff2", "./fonts/source-serif-4-latin-ext.woff2",
  "./fonts/noto-serif-gurmukhi-gurmukhi.woff2", "./fonts/noto-serif-gurmukhi-latin.woff2",
  "./fonts/noto-serif-gurmukhi-latin-ext.woff2"
];

self.addEventListener("install", e => {
  // cache: "reload" skips the browser's own HTTP cache, so a new version never
  // precaches a stale copy of a file that has just changed.
  e.waitUntil(caches.open(CACHE)
    .then(c => c.addAll(ASSETS.map(u => new Request(u, { cache: "reload" }))))
    .then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(hit => hit || fetch(e.request).then(res => {
      if (res.ok && new URL(e.request.url).origin === location.origin) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
      }
      return res;
    }).catch(() => e.request.mode === "navigate" ? caches.match("./index.html") : undefined))
  );
});
