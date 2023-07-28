export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    '@nuxthq/ui',
    'nuxt-typed-router',
  ],
  
})