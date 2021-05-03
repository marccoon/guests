import ru from './langs/ru'
const isDev = process.env.NODE_ENV !== 'production'

export default {
  server: {
    port: 3080,
  },
  ...(!isDev && {
    modern: 'client',
  }),

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'guests',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://wp.gosti-minsk.by',
        crossorigin: true,
      },
    ],
  },
  vue: {
    config: {
      productionTip: false,
      devtools: true,
    },
  },
  router: {
    prefetchLinks: false,
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: './plugins/swiper.js', mode: 'client' },
    { src: '~/plugins/vuelidate.js' },
    { src: '~/plugins/clickOutside.js' },
    { src: '~/plugins/datepicker', mode: 'client' },
    { src: '~/plugins/phoneMaskInput', mode: 'client' },
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
    baseURL: 'https://wp.gosti-minsk.by/wp-json/wp/v2/',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
