const publicConfig = require("./runtimePublic.config.js");

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "ResumeKMA",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "node-snackbar/dist/snackbar.min.css",
    "noty/lib/noty.css",
    "noty/lib/themes/metroui.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",

    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",

    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",

    "nuxt-fontawesome",

    'nuxt-i18n'
  ],

  i18n:{
    locales: [
      {
        name: 'Español',
        code: 'es',
        iso: 'es-CR',
        file: 'es-CR.js'
      },
      {
        name: 'English',
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js'
      },
    ],
    langDir: 'lang/',
    defaultLocale: 'en',
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: "Resume - Kevin Monestel Amador",
      short_name: "ResumeKMA",
      lang: "es",
      display: "standalone"
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  loading: {
    height: "2px",
    throttle: 0,
    color: "#1BA1E2"
  },

  loadingIndicator: {
    name: "wandering-cubes",
    color: "white",
    background: "#222"
  },

  publicRuntimeConfig: {
    publicConfig
  },

  privateRuntimeConfig: {},

  fontawesome: {
    imports: [
      {
        set: "@fortawesome/free-solid-svg-icons",
        icons: ["fas"]
      }
    ]
  }
};
