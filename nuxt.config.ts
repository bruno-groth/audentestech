// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true, // Mantemos true para SSG
  routeRules: {
    '/**': { static: true } // Todas as rotas serão pré-renderizadas
  },
  
  // Runtime config para variáveis de ambiente
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.audentestech.com.br'
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@vueuse/nuxt', '@nuxt/icon', '@nuxtjs/sitemap', '@nuxtjs/robots'],

  postcss: {
    plugins: {
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: 'Audentes Tech - Desenvolvimento Web Profissional',
      titleTemplate: '%s | Audentes Tech',
      htmlAttrs: {
        lang: 'pt-BR'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'robots', content: 'index,follow' },
        { name: 'description', content: 'Criação de sites profissionais, landing pages e aplicações web. Especialistas em desenvolvimento web com foco em performance e resultados.' },
        { property: 'og:title', content: 'Audentes Tech - Desenvolvimento Web Profissional' },
        { property: 'og:description', content: 'Criação de sites profissionais, landing pages e aplicações web. Especialistas em desenvolvimento web com foco em performance e resultados.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.audentestech.com.br' },
        { property: 'og:site_name', content: 'Audentes Tech' },
        { name: 'theme-color', content: '#21c063' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
      ]
    }
  },
  image: {
    format: ['webp', 'avif'],
    quality: 80,
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      '2xl': 1536
    },
    provider: 'ipx',
    domains: [process.env.NUXT_PUBLIC_SITE_URL?.replace('https://', '').replace('http://', '') || 'www.audentestech.com.br'],
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 80,
          height: 80
        }
      },
      blog: {
        modifiers: {
          format: 'webp',
          width: 800,
          height: 400
        }
      },
      thumbnail: {
        modifiers: {
          format: 'webp',
          width: 400,
          height: 300
        }
      }
    }
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/sobre',
        '/servicos',
        '/portfolio',
        '/blog',
        '/contato',
        '/criar-site-curitiba',
        '/empresa-software',
        '/blog/importancia-site-rapido',
        '/blog/tendencias-design-web',
        '/blog/otimizacao-seo-2024'
      ]
    },
    static: true
  },
  experimental: {
    payloadExtraction: true,
    componentIslands: true,
    renderJsonPayloads: false
  },
  build: {
    transpile: ['@headlessui/vue']
  }
})