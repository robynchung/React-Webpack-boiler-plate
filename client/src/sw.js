let cacheDate = 'appV1';

this.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheData).then(cache => {
      cache.addAll('build.js');
    })
  );
});
