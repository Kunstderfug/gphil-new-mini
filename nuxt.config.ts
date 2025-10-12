import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      esbuildOptions: {
        target: "esnext",
      },
    },
    build: {
      target: "esnext",
    },
  },
  modules: ["@nuxt/image", "@nuxt/ui", "@nuxt/eslint", "@nuxtjs/sanity", "@pinia/nuxt"],
  sanity: {
    projectId: "b8uar5wl",
    dataset: "production",
    apiVersion: "2025-05-03",
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
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
});
