import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@sanity/visual-editing", "@sanity/ui", "@sanity/insert-menu", "react-compiler-runtime"],
      esbuildOptions: {
        target: "esnext",
      },
    },
    build: {
      target: "esnext",
    },
  },
  modules: ["@nuxt/image", "@nuxt/ui", "@nuxt/eslint", "@nuxtjs/sanity", "@pinia/nuxt", "@vite-pwa/nuxt"],

  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "GPhil - Explore Orchestral Music",
      short_name: "GPhil",
      description: "Explore orchestral music with interactive scores, playlists, and composer insights.",
      theme_color: "#27272a",
      background_color: "#18181b",
      display: "standalone",
      orientation: "portrait",
      scope: "/",
      start_url: "/",
      icons: [
        {
          src: "/icons/Icon-192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/icons/Icon-512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "/icons/Icon-maskable-192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable",
        },
        {
          src: "/icons/Icon-maskable-512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
      globPatterns: ["**/*.{js,css,html,png,svg,ico,woff,woff2}"],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/cdn\.sanity\.io\/.*/i,
          handler: "CacheFirst",
          options: {
            cacheName: "sanity-cdn-cache",
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 60 * 60 * 24 * 30,
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          urlPattern: /^https:\/\/i\.ytimg\.com\/.*/i,
          handler: "CacheFirst",
          options: {
            cacheName: "youtube-thumbnails-cache",
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 60 * 60 * 24 * 7,
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },
    devOptions: {
      enabled: false,
    },
  },
  sanity: {
    projectId: "b8uar5wl",
    dataset: "production",
    apiVersion: "2025-05-03",
    visualEditing: false,
  },
  nitro: {
    esbuild: {
      options: {
        target: "esnext",
      },
    },
    preset: "netlify",
  },
  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1.0, viewport-fit=cover" },
        { name: "theme-color", content: "#27272a" },
      ],

      link: [
        { rel: "icon", type: "image/png", href: "/favicon.png" },
        { rel: "apple-touch-icon", href: "/icons/Icon-192.png" },
        { rel: "manifest", href: "/manifest.webmanifest" },
        { rel: "dns-prefetch", href: "https://www.youtube.com" },
        { rel: "dns-prefetch", href: "https://cdn.sanity.io" },
        { rel: "preconnect", href: "https://cdn.sanity.io", crossorigin: "" },
      ],
    },
  },
});
