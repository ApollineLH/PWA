//LEMASSON Louis

/* This code add an event listener for the "load" event on the window. When the window is loaded,
it will check if the browser supports service workers by checking if the "serviceWorker" property
exists in the "navigator" object. If it doesn't, it logs a warn message to the console. If it does,
it registers a service worker located at "/service-worker.js". If it does, it logs a succesfull
message and then manually update the service worker. If it doesn't, it logs a warn message.*/
window.addEventListener('load', () => {
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/service-worker.js")
        .then(registration => {
            console.log("Service Worker registered");
            registration.update();
        })
        .catch(err => console.warn("Service worker registration failed:", err));
    }
    else console.warn("Service worker unavailable on this navigator.");
});


// TODO : actualisation au retour en ligne (https://youtu.be/5f1M_cu2eDM?t=2023)