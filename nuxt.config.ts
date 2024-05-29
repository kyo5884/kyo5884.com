// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@vesp/nuxt-fontawesome'],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  googleFonts: {
    families: {
      'Josefin+Slab': [100, 200, 300, 700],
    },
  },
  fontawesome: {
    icons: {
      brands: ['x-twitter', 'wordpress', 'itunes', 'spotify', 'youtube', 'bandcamp'],
      solid: ['earth-asia'],
    },
  },
})
