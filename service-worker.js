const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/Main.html',
  '/active_orders.html',
  '/models.html',
  '/order.html',
  '/story.html',
  '/thank_you.html',
  '/active_orders.css',
  '/admin_style.css',
  '/main_style.css',
  '/models_style.css',
  '/order_style.css',
  '/story_style.css',
  '/todo_script.js',
  '/icon-192x192.png',
  '/icon-512x512.png',
  'images/models/original.jpg',
  'images/models/g-series.jpg',
  'images/models/964.jpg',
  'images/models/993.jpg',
  'images/models/996.jpg',
  'images/models/997.jpg',
  'images/models/991.jpg',
  'images/models/992.jpg',
  'images/background.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
