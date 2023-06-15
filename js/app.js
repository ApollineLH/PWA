//Apolline LEHIRITTE

/* Ce code vérifie si le navigateur prend en charge les workers de service en vérifiant si la propriété "serviceWorker"
*existe dans l'objet "navigator". S'il existe, il enregistre un worker de service situé à l'emplacement 
*"/service-worker.js" et affiche un message dans la console indiquant si l'enregistrement a réussi ou non. 
*/
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./js/service-worker.js")
        .then(function (registration) {
            console.log("Service Worker registered with scope:",
                registration.scope);
            registration.update();
        }).catch(function (err) {
            console.log("Service worker registration failed:", err);
        });
}
