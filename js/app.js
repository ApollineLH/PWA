//Apolline LEHIRITTE

/* This code is checking if the browser supports service workers by checking if the "serviceWorker"
property exists in the "navigator" object. If it does, it registers a service worker located at
"/service-worker.js" and logs a message to the console indicating whether the registration was
successful or not. */
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js")
        .then(registration => {
            console.log("Service Worker registered");
            registration.update();
        })
        .catch(err => console.warn("Service worker registration failed:", err));
}
else console.warn("Service worker unavailable on this navigator.");
