const routerBase = {
  router: {
    base: '/', // change router in here!
  },
};

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'RiThom CRM',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  ...routerBase,
  transition: 'home',
  // Global CSS: https://go.nuxtjs.dev/config-css
  styleResources: {
    scss: ['~/assets/sass/abstracts/index.scss'],
  },
  css: [
    '~/assets/sass/abstracts/_global.css',
    'ant-design-vue/dist/antd.css',
    '~/assets/sass/abstracts/index.scss',
    '~/assets/sass/base/index.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    { src: '~/plugins/cookies.js', ssr: false },
    '@/plugins/scroll.ts',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/style-resources', '@nuxtjs/i18n'],
  i18n: {
    vueI18nLoader: true,
    locales: ['en'],
    defaultLocale: 'en',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  loading: '~/components/LoadingBar.vue',
};
