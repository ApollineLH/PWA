//polline LEHIRITTE

var cacheName = "offline-cache";

var resourcesToCache = [
    "offline.html",
    "css/style.css",
];

/**
* Ce code enregistre un écouteur d'événement pour l'événement "install" sur le service worker. Lorsque
*le service worker est installé, il ouvrira un cache avec le nom "offline-cache" et ajoutera
*les ressources répertoriées dans le tableau "resourcesToCache" au cache. La méthode "waitUntil" garantit que
*le processus d'installation n'est considéré comme terminé que lorsque toutes les ressources ont été ajoutées au
*cache.
*/
self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(resourcesToCache);
        })
    );
});

/**
* Ce code enregistre un écouteur d'événements pour l'événement "fetch" sur le service worker.
*Lorsqu'une requête réseau est effectuée, le service worker l'intercepte et essaie de récupérer
*la ressource demandée depuis le réseau. Si la requête réseau échoue par exemple,
*en raison d'une absence de connexion Internet), le service worker essaie de récupérer la ressource depuis 
*le cache en utilisant la méthode `caches.match()`. Si la ressource est trouvée dans le cache, elle est renvoyée au navigateur.
*Si la ressource n'est pas trouvée dans le cache, le service worker renvoie la page "offline.html", 
*qui fait partie des ressources précédemment mises en cache lors du processus d'installation. 
*/
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
