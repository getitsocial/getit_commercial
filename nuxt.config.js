export default {
  mode: 'universal',
  /**
   * Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  env: {
    VUE_APP_GOOGLE_MAPS_API_KEY: process.env.VUE_APP_GOOGLE_MAPS_API_KEY
  },
  /**
   * Vue configuration
   */
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },
  /**
   * Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /**
   * PWA configuration
   */

  pwa: {
    meta: {
      theme_color: '#fff7ab'
    }
  },
  /**
   * Global CSS
   */
  css: ['~/assets/css/custom.scss', '~/assets/css/animations.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/vue-timeago.js', ssr: false },
    { src: '@/plugins/map', ssr: false },
    { src: '@/plugins/mixins/components.js' }
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
    // Doc: https://github.com/Developmint/nuxt-webfontloader
    'nuxt-webfontloader',
    // Doc: https://github.com/microcipcip/cookie-universal/tree/master/packages/cookie-universal-nuxt
    'cookie-universal-nuxt'
  ],
  /**
   * Webfontloader
   */
  webfontloader: {
    google: {
      families: ['Nunito:300,400,700']
    }
  },
  /**
   * Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/nuxt-community/device-module#readme
    '@nuxtjs/device'
  ],
  /**
   * Axios module configuration
   * See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true
  },

  /**
   ** Server Middleware configuration
   */
  serverMiddleware: ['~/api/index.js'],

  /**
   * Build configuration
   */
  build: {
    /**
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
