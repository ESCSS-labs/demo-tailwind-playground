// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-10-21',

  // Tailwind 
  // modules: ["@nuxtjs/tailwindcss"],
  // postcss: {
  //   plugins: {
  //     tailwindcss: {},
  //     autoprefixer: {},
  //   },
  // },

  // Sass
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: `
          @use 'assets/css/_awaken.scss' as *;
          `,
        },
      },
    },
  },

})