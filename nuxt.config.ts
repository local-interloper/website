// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["assets/css/main.css", "assets/css/util.css", "assets/css/misc.css"],
  fonts: {
    families: [{ name: "Ubunut", provider: "google" }],
  },
  modules: [
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxt/eslint",
    "@nuxt/hints",
    "@nuxt/content",
  ],
  routeRules: {
    "/": { prerender: true },
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  app: {
    head: {
      title: "local.interloper",
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1, maxium-scale=1"
    },
  },
});
