// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  googleFonts: {
    families: {
      'Josefin+Slab': true,
    },
  },
})
