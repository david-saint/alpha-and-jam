importScripts('/cache-polyfill.js');

var VERSION = '1.0.0.0.11'; // the version of the site
var CACHENAME = 'TRWC' + VERSION; // the name of the cache

// URLs to cache
var CACHEURL = [
  '/time',
  '/dist/build.js'
];

// On install
self.addEventListener('install', function (event) {
  // Wait until something is done before installing
  event.waitUntil(
    // open the cache ? new or old.
    caches.open(CACHENAME)
      .then(function (cache) {
        return cache.addAll(CACHEURL); // add the urls to cache
      })
  );
});

// On activate
self.addEventListener('activate', function (event) {
  // Wait until something is done before activating
  event.waitUntil(
    // Loop through all the caches keys
    caches.keys()
      .then(function (cacheNames) {
        // return a promise of an array
        return Promise.all(
          // find the caches that aren't CACHENAME
          cacheNames.map(function (name) {
            if (name !== CACHENAME)
              return caches.delete(name);
          })
        );
      })
  );
});

// For all the fetchings that go on
self.addEventListener('fetch', function (event) {
  // Give a response depending on ...
  event.respondWith(
    // if the request URL matches any cache URL
    caches.match(event.request)
      .then(function (response) {
        return response || fetch(event.request); // return the cache or the response
      })
  );
});
