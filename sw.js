self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('hisn-muslim-cache').then((cache) => {
            return cache.addAll([
                './index.html',
                './manifest.json',
                './icon.png',
                './audio1.mp3',
                './audio2.mp3',
                './audio3.mp3'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});