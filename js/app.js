/*if (navigator.serviceWorker) {
    navigator.serviceWorker.register("/sw.js");
}*/
let url = window.location.href;
let swDirect = "/PWA-FGE-U2-P5/sw.js";

if (navigator.serviceWorker) {
    if (url.includes("localhost")) {
        swDirect = "/sw.js";
    }
    navigator.serviceWorker.register(swDirect);
} else {
    console.log("Cambia de Navegador...");
}