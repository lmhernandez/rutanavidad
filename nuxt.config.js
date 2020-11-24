const pkg = require('./package')
require('dotenv').config()
module.exports = {
  mode: 'universal',
  router: {
    base: '/rutanavidad/'
  },  
  head: {
    title: 'Ruta Navidad | Navidad',
    htmlAttrs: {
      lang: 'es',
    },    
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1, maximum-scale=6, minimum-scale=1' },
      { hid: 'description', name: 'description', content: "rutanavidad" },
      { hid: 'keywords', name: 'keywords', content: 'rutanavidad' },
      { hid: 'author', name: 'author', content: 'Luis Hernandez' },
      { hid: 'copyright', name: 'copyright', content: 'rutanavidad' },
      { hid: 'fb:og:title', property: 'og:title', content: 'rutanavidad' },
      { hid: 'fb:og:type', property: 'og:type', content: '' },
      { hid: 'fb:og:type', property: 'og:locale', content: 'es_PE' },
      { hid: 'fb:og:image', property: 'og:image', content: '' },
      { hid: 'fb:og:url', property: 'og:url', content: '' },
      { hid: 'fb:og:description', property: 'og:description', content: '' },
      { hid: 'fb:og:site_name', property: 'og:site_name', content: '' },
      { hid: 'fb:og:image:width', property: 'og:image:width', content: '800' },
      { hid: 'fb:og:image:height', property: 'og:image:height', content: '418' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  loading: { color: '#fff' },
  css: ['@/assets/css/main.scss'],
  modules: [
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt'    
  ],
  plugins: [
    // '~/plugins/vcalendar.js',
    { src: '~/plugins/vcalendar.js', ssr: false },
  ],
  axios: {
    baseURL: process.env.API_BASE_URL,
    browserBaseURL: process.env.API_BASE_URL,
    credentials: false
  },

  build: {
    extend(config, ctx) {
        config.module.rules.push(
          {
            test: /\.(pdf|docx)$/,
            use: [ { loader: 'file-loader', options: { name: '[name].[ext]', outputPath: './assets/images/' }} ] 
          }
        )
    }
  },
  env: {
    environment: process.env.ENVIRONMENT,
    URL: process.env.BASE_URL,
    baseURL: process.env.API_BASE_URL,
    culqiPK: process.env.CULQI_PK,
    culqiURL: process.env.CULQI_URL,
    url_remarketing: process.env.API_BASE_URL_REMARKETING
  }
}
