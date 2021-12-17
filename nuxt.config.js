export default {
  // Target (https://go.nuxtjs.dev/config-target)
  ssr: true,
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: 'Pooya Golchian | %s',
    title: 'Software Engineer, Frontend developer, DevOps Engineer',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'pooya golchian, pooyagolchian, fontend developer, frontend engineer, Web Developer, Javascript Developer, Vue.js Developer, Nuxt.js Developer, React.js Developer',
      },
      { property: 'og:site_name', content: 'Pooya Golchian' },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'Pooya Golchian - Frontend developer and DevOps Engineer',
      },

      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://pooyagolchian.com',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Pooya Golchian | Software Engineer',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/css/main'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' },
    '~plugins/preview.client.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    'nuxt-compress',
    '@nuxtjs/google-analytics',
    '@nuxtjs/google-fonts',
    [
      'nuxt-fontawesome',
      {
        component: 'fa', //customize component name
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: [
              'faLightbulb',
              'faMapMarkerAlt',
              'faGlobe',
              'faMobileAlt',
              'faInbox',
            ],
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['faGithub', 'faLinkedin'],
          },
          {
            set: '@fortawesome/free-regular-svg-icons',
            icons: ['faLightbulb'],
          },
        ],
      },
    ],
  ],

  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600, 700],
    },
    display: 'swap',
  },

  googleAnalytics: {
    id: 'UA-205412246-1',
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/style-resources',
    '@nuxtjs/feed',
  ],
  pwa: {
    meta: {
      title: 'Pooya Golchian | Software Engineer',
      author: 'Pooya Golchian',
    },
    manifest: {
      name: 'Pooya Golchian Technical Blog',
      short_name: 'Pooya Golchian Blog',
      lang: 'en',
      description: 'Pooya Golchian Personal Website',
    },
    icon: {
      fileName: 'icon.png',
      source: '/static/icon.png',
    },
  },
  feed() {
    const baseUrlArticles = '';
    const baseLinkFeedArticles = '/blog';
    const feedFormats = {
      rss: { type: 'rss2', file: 'rss.xml' },
      json: { type: 'json1', file: 'feed.json' },
    };
    const { $content } = require('@nuxt/content');

    const createFeedArticles = async function (feed) {
      feed.options = {
        title: 'Pooya Golchian | Software Engineer',
        description: "I'm Frontend developer and DevOps engineer",
        link: baseUrlArticles,
      };
      const articles = await $content('articles').fetch();
      articles.forEach((article) => {
        const url = `${baseUrlArticles}/${article.slug}`;
        feed.addItem({
          title: article.title,
          id: url,
          link: url,
          date: article.published,
          description: article.description,
          content: article.description,
          author: article.author.name,
        });
      });
    };

    return Object.values(feedFormats).map(({ file, type }) => ({
      path: `${baseLinkFeedArticles}/${file}`,
      type: type,
      create: createFeedArticles,
    }));
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
    nestedProperties: ['author.name'],
  },
  generate: {
    fallback: true,
    exclude: [/code/, /^(?=.*\btest\b).*$/],
    crawler: false,
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  loading: false,

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
};
