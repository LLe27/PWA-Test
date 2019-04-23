var CACHE_NAME = 'hello-pwa';
var filesToCache = [
  './',
  './index.html',
  './css/style.css',
  './js/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  // Performs cache file install
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

// Fetches any cached results from any of the service workers created
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});