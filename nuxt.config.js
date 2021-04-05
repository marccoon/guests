import ru from './langs/ru'

export default {
  server: {
    port: 3080,
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'guests',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: './plugins/swiper.js', ssr: false },
    { src: '~/plugins/vuelidate.js' },
    { src: '~/plugins/clickOutside.js' },
    { src: '~/plugins/datepicker', ssr: false },
    { src: '~/plugins/phoneMaskInput', ssr: false },
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-i18n',
  ],

  i18n: {
    locales: ['ru'],
    defaultLocale: 'ru',
    vueI18n: {
      messages: {
        ru,
      },
    },
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'http://wp.gosti-minsk.by/wp-json/wp/v2/',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    optimization: {
      minimize: false,
    },
  },
}
