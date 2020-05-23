
export default {
  mode: 'spa',
  globalName:process.env.npm_package_name,
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/normalize.css',
    // 'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '@/plugins/element-ui'
    '@/assets/lui.umd.min.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '~/modules/qiankun'
  ],
  MFE: {
    force: true
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  router: {
    base: process.env.NODE_ENV === "production" ? '/workbench/' : '/',
    __ROUTEPATH__: '/micro-frontends/nuxt'
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    publicPath: "//leooman.com/workbench",
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
