import ampify from './plugins/amplfy.js'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nisshii.dev',
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
      { hid: 'canonical', rel: 'canonical', href: process.env.VUE_BASE_URL },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        hid: 'destyle',
        rel: 'preload',
        type: 'text/css',
        href: 'https://cdn.jsdelivr.net/npm/destyle.css@2.0.2/destyle.css',
      },
      {
        hid: 'dqfont',
        rel: 'preload',
        type: 'font/woff2',
        as: 'font',
        href: '/font/DQ.woff2',
        crossOrigin: 'anonymous',
      },
      {
        hid: 'ruby-icon',
        rel: 'prefetch',
        href:
          'https://res.cloudinary.com/ddkwdet2n/image/upload/v1607069677/ruby_rcedus.svg',
      },
      {
        hid: 'ts-icon',
        rel: 'prefetch',
        href:
          'https://res.cloudinary.com/ddkwdet2n/image/upload/v1607069677/ts_vhckk8.svg',
      },
      {
        hid: 'vue-icon',
        rel: 'prefetch',
        href:
          'https://res.cloudinary.com/ddkwdet2n/image/upload/v1607069677/vue_hcg62l.svg',
      },
      {
        hid: 'elixir-icon',
        rel: 'prefetch',
        href:
          'https://res.cloudinary.com/ddkwdet2n/image/upload/v1607069676/elixir_oadnwd.svg',
      },
      {
        hid: 'kube-icon',
        rel: 'prefetch',
        href:
          'https://res.cloudinary.com/ddkwdet2n/image/upload/v1607069675/kube_pv6kee.svg',
      },
      {
        hid: 'react-icon',
        rel: 'prefetch',
        href:
          'https://res.cloudinary.com/ddkwdet2n/image/upload/v1607069675/react_huyjrw.svg',
      },
      {
        hid: 'go-icon',
        rel: 'prefetch',
        href:
          'https://res.cloudinary.com/ddkwdet2n/image/upload/v1607069675/go_eqy1my.svg',
      },
      {
        hid: 'docker-icon',
        rel: 'prefetch',
        href:
          'https://res.cloudinary.com/ddkwdet2n/image/upload/v1607069675/docker_atu6bp.svg',
      },
      {
        hid: 'rails-icon',
        rel: 'prefetch',
        href:
          'https://res.cloudinary.com/ddkwdet2n/image/upload/v1607069675/rails_wuuvl3.svg',
      },
      {
        hid: 'twitter-icon',
        rel: 'prefetch',
        href:
          'https://res.cloudinary.com/ddkwdet2n/image/upload/v1607069540/twitter_cx3qyc.svg',
      },
      {
        hid: 'aoba-icon',
        rel: 'prefetch',
        href:
          'https://res.cloudinary.com/ddkwdet2n/image/upload/v1607069539/aoba_pegfa4.svg',
      },
      {
        hid: 'facebook-icon',
        rel: 'prefetch',
        href:
          'https://res.cloudinary.com/ddkwdet2n/image/upload/v1607069538/facebook_scc9xe.svg',
      },
      {
        hid: 'qiita-icon',
        rel: 'prefetch',
        href:
          'https://res.cloudinary.com/ddkwdet2n/image/upload/v1607069538/qiita_wtznsv.svg',
      },
      {
        hid: 'deck-icon',
        rel: 'prefetch',
        href:
          'https://res.cloudinary.com/ddkwdet2n/image/upload/v1607069538/speaker-deck_ul68bi.svg',
      },
      {
        hid: 'github-icon',
        rel: 'prefetch',
        href:
          'https://res.cloudinary.com/ddkwdet2n/image/upload/v1607069538/github_o0dg95.svg',
      },
      {
        hid: 'hatena-icon',
        rel: 'prefetch',
        href:
          'https://res.cloudinary.com/ddkwdet2n/image/upload/v1607069538/hatena_nepawz.svg',
      },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/style.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    '@nuxt/content',
  ],

  hooks: {
    'generate:page': (page) => {
      page.html = ampify(page.html)
    },
    'render:route': (_url, page) => {
      page.html = ampify(page.html)
    },
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        const { text } = require('reading-time')(document.text)
        document.readingTime = text
      }
    },
  },

  generate: {
    subFolders: false,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    analyze: false,
    parallel: true,
    extend(config, _ctx) {
      config.node = {
        fs: 'empty',
      }
    },
  },
}
