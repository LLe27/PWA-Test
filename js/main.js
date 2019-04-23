// Registers service worker
window.onload = () => {
    'use strict';

    console.log(navigator.serviceWorker);
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js');
    }
    else {
        console.log('hbyei');

    }
}