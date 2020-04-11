/*
 ** Access to ENV variables
 */

require('dotenv').config()

export default {
  mode: 'universal',
  /**
   * Headers of the page
   */
  head: {
    title: 'get it!',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0',
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  env: {
    VUE_APP_GOOGLE_MAPS_API_KEY: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
    VUE_APP_CLOUDINARY_CLOUD_NAME: process.env.VUE_APP_CLOUDINARY_CLOUD_NAME,
    VUE_APP_CLOUDINARY_API_KEY: process.env.VUE_APP_CLOUDINARY_API_KEY,
    VUE_APP_CLOUDINARY_API_SECRET: process.env.VUE_APP_CLOUDINARY_API_SECRET,
    VUE_APP_GOOGLE_ID: process.env.VUE_APP_GOOGLE_ID,
    VUE_APP_FACEBOOK_ID: process.env.VUE_APP_FACEBOOK_ID,
    VUE_APP_MASTER_KEY: process.env.VUE_APP_MASTER_KEY,
  },
  /**
   * Vue configuration
   */
  vue: {
    config: {
      productionTip: false,
      devtools: true,
    },
  },
  /**
   * Customize the progress-bar color
   */
  loading: { color: '#3fe19b' },
  /**
   * PWA configuration
   */

  pwa: {
    meta: {
      theme_color: '#01374c',
      name: 'get it!',
      author: 'tayfun guelcan',
      lang: 'de',
    },
  },
  /**
   * Global CSS
   */
  css: ['~/assets/css/custom.scss', '~/assets/css/animations.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/utils.js',
    '@/plugins/mixins/components.js',
    { src: '@/plugins/axios', ssr: true },
    { src: '@/plugins/vue-timeago.js', ssr: false },
    { src: '@/plugins/socialAuth', ssr: false },
    { src: '@/plugins/map', ssr: false },
    { src: '@/plugins/validate.js', ssr: false },
  ],
  /**
   * Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/Developmint/nuxt-webfontloader
    'nuxt-webfontloader',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-161423817-1',
      },
    ],
  ],
  /**
   * Webfontloader
   */
  webfontloader: {
    google: {
      families: ['Nunito:300,400,700'],
    },
  },
  /**
   * Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/device-module#readme
    '@nuxtjs/device',
    // Doc: https://github.com/microcipcip/cookie-universal/tree/master/packages/cookie-universal-nuxt
    'cookie-universal-nuxt',
    // Currency input
    ['vue-currency-input/nuxt', { globalOptions: { currency: 'EUR' } }],
  ],
  /**
   * Axios module configuration
   * See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true,
  },

  proxy: {
    '/api': { target: process.env.API_URL },
  },
  /**
   ** PurgeCSS configuration
   */
  purgeCSS: {
    whitelistPatterns: [
      /-(leave|enter|appear)(|-(to|from|active))$/,
      /^(?!(|.*?:)cursor-move).+-move$/,
      /^nuxt-link(|-exact)-active$/,
    ],
  },

  tailwindcss: {
    purgeCSSInDev: true,
  },

  /**
   ** Server Middleware configuration
   */
  serverMiddleware: ['redirect-ssl', '~/api/index.js'],

  /**
   * Build configuration
   */
  build: {
    /**
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
}
