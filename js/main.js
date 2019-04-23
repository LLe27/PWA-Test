// Registers service worker
window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js');
    } else {
        console.log('ERROR: Unable to register service worker.');
    }
}