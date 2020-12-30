import ampify from './plugins/amplfy.js'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - nisshii.dev.v2',
    title: 'nisshii.dev.v2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'NisshiiのNisshiiによるNisshiiのためのボートフォリオサイト兼ブログ',
      },
    ],
    link: [
      { hid: 'canonical', rel: 'canonical', href: process.env.BASE_URL },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdn.jsdelivr.net/npm/destyle.css@2.0.2/destyle.css',
      },
      {
        rel: 'preload',
        type: 'font/woff2',
        as: 'font',
        href: '/font/DQ.woff2',
        crossOrigin: 'anonymous',
      },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'prefetch',
        href:
          'https://res.cloudinary.com/ddkwdet2n/image/upload/v1607069677/ruby_rcedus.svg',
      },
      {
        rel: 'prefetch',
        href:
          'https://res.cloudinary.com/ddkwdet2n/image/upload/v1607069677/ts_vhckk8.svg',
      },
      {
        rel: 'prefetch',
        href:
          'https://res.cloudinary.com/ddkwdet2n/image/upload/v1607069677/vue_hcg62l.svg',
      },
      {
        rel: 'prefetch',
        href:
          'https://res.cloudinary.com/ddkwdet2n/image/upload/v1607069676/elixir_oadnwd.svg',
      },
      {
        rel: 'prefetch',
        href:
          'https://res.cloudinary.com/ddkwdet2n/image/upload/v1607069675/kube_pv6kee.svg',
      },
      {
        rel: 'prefetch',
        href:
          'https://res.cloudinary.com/ddkwdet2n/image/upload/v1607069675/react_huyjrw.svg',
      },
      {
        rel: 'prefetch',
        href:
          'https://res.cloudinary.com/ddkwdet2n/image/upload/v1607069675/go_eqy1my.svg',
      },
      {
        rel: 'prefetch',
        href:
          'https://res.cloudinary.com/ddkwdet2n/image/upload/v1607069675/docker_atu6bp.svg',
      },
      {
        rel: 'prefetch',
        href:
          'https://res.cloudinary.com/ddkwdet2n/image/upload/v1607069675/rails_wuuvl3.svg',
      },
      {
        rel: 'prefetch',
        href:
          'https://res.cloudinary.com/ddkwdet2n/image/upload/v1607069540/twitter_cx3qyc.svg',
      },
      {
        rel: 'prefetch',
        href:
          'https://res.cloudinary.com/ddkwdet2n/image/upload/v1607069539/aoba_pegfa4.svg',
      },
      {
        rel: 'prefetch',
        href:
          'https://res.cloudinary.com/ddkwdet2n/image/upload/v1607069538/facebook_scc9xe.svg',
      },
      {
        rel: 'prefetch',
        href:
          'https://res.cloudinary.com/ddkwdet2n/image/upload/v1607069538/qiita_wtznsv.svg',
      },
      {
        rel: 'prefetch',
        href:
          'https://res.cloudinary.com/ddkwdet2n/image/upload/v1607069538/speaker-deck_ul68bi.svg',
      },
      {
        rel: 'prefetch',
        href:
          'https://res.cloudinary.com/ddkwdet2n/image/upload/v1607069538/github_o0dg95.svg',
      },
      {
        rel: 'prefetch',
        href:
          'https://res.cloudinary.com/ddkwdet2n/image/upload/v1607069538/hatena_nepawz.svg',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
  ],

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    loader: {
      registerStylesSSR: true,
    },
  },

  hooks: {
    'generate:page': (page) => {
      page.html = ampify(page.html)
    },
    'render:route': (_url, page) => {
      page.html = ampify(page.html)
    },
  },

  generate: {
    subFolders: false,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    analyze: false,
    parallel: true,
  },
}
