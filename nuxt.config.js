import ru from './langs/ru'
import en from './langs/en'
const isDev = process.env.NODE_ENV !== 'production'

export default {
  server: {
    port: 3080
  },
  ...(!isDev && {
    modern: 'client'
  }),

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'guests',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: '/favicon/apple-icon-57x57.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: '/favicon/apple-icon-60x60.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: '/favicon/apple-icon-72x72.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: '/favicon/apple-icon-76x76.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/favicon/apple-icon-114x114.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: '/favicon/apple-icon-120x120.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: '/favicon/apple-icon-144x144.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: '/favicon/apple-icon-152x152.png'
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/apple-icon-180x180.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: '/favicon/android-icon-192x192.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon/favicon-96x96.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon/favicon-16x16.png'
      },
      { rel: 'manifest', href: '/favicon/manifest.json' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      {
        name: 'msapplication-TileImage',
        content: '/favicon/ms-icon-144x144.png'
      },
      { name: 'theme-color', content: '#ffffff' },
      {
        rel: 'preconnect',
        href: 'https://wp.gosti-minsk.by',
        crossorigin: true
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: true
      },
      {
        rel: 'dns-prefetch',
        href: 'https://wp.gosti-minsk.by'
      }
    ]
  },
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/main.css'],

  loading: {
    color: 'rgb(201, 171, 129)',
    height: '3px'

  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/swiper.js', mode: 'client' },
    { src: '~/plugins/vuelidate.js' },
    { src: '~/plugins/clickOutside.js' },
    { src: '~/plugins/datepicker', mode: 'client' },
    { src: '~/plugins/phoneMaskInput' }
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/postcss8'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-i18n'
  ],

  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'ru',
    vueI18n: {
      messages: {
        ru,
        en
      }
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true // Can be also an object with default options
  },
  proxy: {
    '/api/': {
      target: 'https://wp.gosti-minsk.by/wp-json/wp/v2',
      pathRewrite: { '^/api/': '' }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    optimizeCss: true,
    ...(!isDev && {
      html: {
        minify: {
          collapseBooleanAttributes: true,
          decodeEntities: true,
          minifyCSS: true,
          minifyJS: true,
          processConditionalComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          trimCustomFragments: true,
          useShortDoctype: true
        }
      }
    }),
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    },
    optimization: {
      minimize: !isDev
    },
    ...(!isDev && {
      extractCSS: {
        ignoreOrder: true
      }
    }),
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
    // parallel: true
    // cache: true
  },
  render: {
    http2: {
      push: true,
      pushAssets: (req, res, publicPath, preloadFiles) =>
        preloadFiles.map(
          f => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`
        )
    }
  }
}
