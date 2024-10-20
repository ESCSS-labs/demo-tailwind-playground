// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         api: 'modern-compiler',
  //         additionalData: `
  //         @use 'assets/css/_awaken.scss' as *;
  //         `,
  //       },
  //     },
  //   },
  // },
})