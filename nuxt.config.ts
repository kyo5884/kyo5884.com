// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@vesp/nuxt-fontawesome'],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  googleFonts: {
    families: {
      'Josefin+Slab': [100, 200, 300],
    },
  },
  fontawesome: {
    icons: {
      brands: ['x-twitter', 'wordpress', 'itunes', 'spotify', 'youtube', 'bandcamp'],
    },
  },
})
