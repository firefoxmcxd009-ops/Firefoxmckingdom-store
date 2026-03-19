// sw.js
self.addEventListener('install', event => {
  console.log('Service Worker Installed');
  // caching files during installation (optional)
  event.waitUntil(
    caches.open('my-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/script.js',
        '/Icon.svg/Server-Logo.webp',
        '/Icon.svg/Server-Logo.webp',
        '/ServerStatus.js',
        '/Rank Store/script.js',
        '/Rank Store/Successfully.html',
        '/Discord/index.html',
        '/Icon.svg',
        '/Ranks',
        '/Static',
        '/previews',
        '/Gamemodes',
        '/offline.html'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request) // check if request is in cache
      .then(response => {
        return response || fetch(event.request); // use network if not cached
      })
  );
});