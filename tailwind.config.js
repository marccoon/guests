module.exports = {
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {},
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1360px',
    },
    fontFamily: {
      title: ['CaviarDreams'],
      phrase: ['CaviarDreams'],
      body: ['OpenSans'],
    },
    borderColor: (theme) => ({
      ...theme('colors'),
      select: '#C9AB81',
      btn: '#C9AB81',
    }),
    placeholderColor: (theme) => ({
      ...theme('colors'),
      select: '#C9AB81',
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      select: '#C9AB81',
      'select-hover': '#fff',
      menu: '#C9AB81',
      title: '#C9AB81',
      link: '#C9AB81',
      'link-hover': '#fff',
      phrase: '#C9AB81',
      text: '#fff',
      btn: '#fff',
      'btn-hover': '#C9AB81',
      contact: '#C9AB81',
      footer: '#354951',
      card: '#fff',
      'dish-title': '#C9AB81',
      'dish-text': '#fff',
      category: '#fff',
      'category-active': '#C9AB81',
    }),
    backgroundColor: (theme) => ({
      ...theme('colors'),
      form: '#0F1D22',
      card: 'rgba(15,29,34,0.98)',
      pagination: '#C9AB81',
      contact: '#0F1D22',
      menu: '#0B1315',
      dishes: '#0F1D22',
    }),
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      '100%': '100%',
    },

    extend: {
      zIndex: {
        '-1': -1,
      },
      fill: {
        arrow: '#C9AB81',
        arrowHover: '#fff',
      },
      backgroundImage: (theme) => ({
        bg: "url('~assets/img/bg-body.png')",
        index: "url('~assets/img/index-bg.png')",
        'index-menu-1': "url('~assets/img/menu-img-1.png')",
        'index-menu-2': "url('~assets/img/menu-img-2.png')",
        'about-bg': "url('~assets/img/about-bg.png')",
        'main-menu': "url('~assets/img/menu-bg-1.png')",
        line: "url('~assets/img/menu-line.svg')",
        lunch: "url('~assets/img/lunch-bg.png')",
      }),
      height: {
        128: '32rem',
        144: '36rem',
      },
      maxHeight: {
        128: '32rem',
        144: '36rem',
      },
      minWidth: {
        xxs: '13rem',
        16: '4rem',
        '1/3': '33.3333333%',
      },
      maxWidth: {
        48: '12rem',
        56: '14rem',
        64: '16rem',
        72: '18rem',
        96: '24rem',
        112: '28rem',
        128: '32rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar-hide'),
  ],
}
