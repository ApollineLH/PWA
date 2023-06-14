//polline LEHIRITTE

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
self.addEventListener("install", function (event) {
    self.skipWaiting();
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(resourcesToCache);
        })
    );
});

<<<<<<< HEAD
/**
* Ce code enregistre un écouteur d'événements pour l'événement "fetch" sur le service worker.
*Lorsqu'une requête réseau est effectuée, le service worker l'intercepte et essaie de récupérer
*la ressource demandée depuis le réseau. Si la requête réseau échoue par exemple,
*en raison d'une absence de connexion Internet), le service worker essaie de récupérer la ressource depuis 
*le cache en utilisant la méthode `caches.match()`. Si la ressource est trouvée dans le cache, elle est renvoyée au navigateur.
*Si la ressource n'est pas trouvée dans le cache, le service worker renvoie la page "offline.html", 
*qui fait partie des ressources précédemment mises en cache lors du processus d'installation. 
*/
=======
/* This code is registering an event lister for the "activate" event on the service worker. When the
service worker is activated, it will claim the clients to make it work immedialty instead of needing
one more realoed to work. */
self.addEventListener("activate", function() {
    clients.claim();
});

/* This code is registering an event listener for the "fetch" event on the service worker. When a
network request is made, the service worker will intercept it and try to fetch the requested
resource from the network. If the network request fails (e.g. due to a lack of internet connection),
the service worker will try to retrieve the resource from the cache using the `caches.match()`
method. If the resource is found in the cache, it will be returned to the browser. If the resource
is not found in the cache, the service worker will return the "offline.html" page, which is one of
the resources that was previously cached during the installation process. */
>>>>>>> e966e3236368a8bb0c98b44d883d5c238fd8ca05
self.addEventListener("fetch", function (event) {
    event.respondWith(
        fetch(event.request).catch(function () {
            return caches.match(event.request).then(function (response) {
                if (response) {
                    return response;
                } else {
                    return caches.match("offline.html");
                }
            });
        })
    );
});
