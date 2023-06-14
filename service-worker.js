//Apolline LEHIRITTE

var cacheName = "offline-cache";

var resourcesToCache = [
    "offline.html",
    "css/style.css",
];

/* This code is registering an event listener for the "install" event on the service worker. When the
service worker is installed, first it will skip the waiting to axtivate it, then it will open a cache
with the name "offline-cache" and add the resources listed in the "resourcesToCache" array to the cache.
The "waitUntil" method ensures that the installation process is not considered complete until all the
resources have been added to the cache. */
self.addEventListener("install", event => {
    console.log("install");
    self.skipWaiting();
    event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(resourcesToCache)));
    console.log("installed");
});

/* This code is registering an event lister for the "activate" event on the service worker. When the
service worker is activated, it will claim the clients to make it work immedialty instead of needing
one more realoed to work. */
self.addEventListener("activate", () => {
    console.log("activate");
    clients.claim();
    console.log("activated");
});

/* This code is registering an event listener for the "fetch" event on the service worker. When a
network request is made, the service worker will intercept it and try to fetch the requested
resource from the network. If the network request fails (e.g. due to a lack of internet connection),
the service worker will try to retrieve the resource from the cache using the `caches.match()`
method. If the resource is found in the cache, it will be returned to the browser. If the resource
is not found in the cache, the service worker will return the "offline.html" page, which is one of
the resources that was previously cached during the installation process. */
self.addEventListener("fetch", event => {
    console.log("fetch");
    event.respondWith(
        fetch(event.request)
            .catch(() => caches.match(event.request).then(response => response ?? caches.match("offline.html")))
    );
    console.log("fetched");
});
