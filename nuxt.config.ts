// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src/",
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@pinia/nuxt"],

  googleFonts: {
    families: {
      Poppins: true,
    },
  },

  compatibilityDate: "2024-07-14",
})