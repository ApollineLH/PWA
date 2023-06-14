// Nom du cache
var cacheName = "offline-cache";

// Liste des ressources à mettre en cache
var resourcesToCache = [
    "offline.html",
    "css/style.css",
    // Ajoutez d'autres fichiers à mettre en cache ici si nécessaire
];

// Événement d'installation du service worker
self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(resourcesToCache);
        })
    );
});

// Événement fetch du service worker
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
