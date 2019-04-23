// Registers service worker if it exists
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('./sw.js').then(function(registration){
            // Successful Registration
            console.log('ServiceWorker registration success: ', registration);
        }, function(err) {
            // Failed Registration
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}