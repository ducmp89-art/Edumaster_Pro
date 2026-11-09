const CACHE_NAME = 'edumaster-cache-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Cho phép app tải dữ liệu trực tiếp từ mạng, nếu mất mạng mới đọc từ cache
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});