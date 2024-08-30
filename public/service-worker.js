const CACHE_NAME = "my-cache-v2";
const urlsToCache = [
  "/",
  "/favicon.ico",
  "/assets/wizard.jpg",
  "/fonts/NTR-Regular.ttf",
  "/fallback.html",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache).catch((error) => {
        console.error("Failed to cache initial URLs:", error);
      });
    }),
  );
});

self.addEventListener("fetch", (event) => {
  const requestUrl = new URL(event.request.url);

  // Avoid caching dynamic assets or Next.js chunks
  if (requestUrl.pathname.startsWith("/_next/static/")) {
    return; // Skip handling Next.js assets
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response; // Serve from cache if available
      }
      return fetch(event.request)
        .then((networkResponse) => {
          if (
            networkResponse &&
            networkResponse.status === 200 &&
            networkResponse.type === "basic"
          ) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse.clone()); // Cache the response
            });
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match("/fallback.html"); // Optional: serve a fallback page on failure
        });
    }),
  );
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName); // Delete old caches
          }
        }),
      );
    }),
  );
});
