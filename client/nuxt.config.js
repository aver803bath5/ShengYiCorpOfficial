const pkg = require('./package')
const serveStatic = require('serve-static')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: '昇儀股份有限公司 Sheng Yi Tech & Analytics Co., Ltd.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '昇儀股份有限公司 Sheng Yi Tech & Analytics Co., Ltd.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: '#3B8070',
    height: '3px'
  },

  router: {
    middleware: 'i18n',
  },

  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/all.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/i18n'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    'nuxt-fontawesome'
    // 'qonfucius-nuxt-fontawesome' <-坑貨
  ],

  fontawesome: {
    imports: [
        {
          set: '@fortawesome/fontawesome-free-brands',
          icons: ['faFacebook', 'faYoutube']
        },
        {
          set: '@fortawesome/fontawesome-free-solid',
          icons: ['faThumbtack']
        }
    ],
  },

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },


  serverMiddleware: [
    // We can create custom instances too
    { path: '/admin', handler: serveStatic(__dirname + '/admin') },
    { path: '/admin/login', handler: serveStatic(__dirname + '/admin') },
    { path: '/static', handler: serveStatic(__dirname + '/static') }
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    babel: {
      presets: ['es2015', 'stage-0'],
      plugins: ['transform-runtime']
    },
    vendor: [
      'babel-polyfill',
      'event-source-polyfill',
      'vue-i18n',
      '@/assets/js/flexibility.js'
    ],

    extend(config, ctx) {
      // Run ESLint on save
      config.resolve.alias['@fortawesome/fontawesome-free-brands$'] = '@fortawesome/fontawesome-free-brands/shakable.es.js'
      config.resolve.alias['@fortawesome/fontawesome-free-solid$'] = '@fortawesome/fontawesome-free-solid/shakable.es.js'
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
