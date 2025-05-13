// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@vueuse/nuxt', '@nuxt/icon'],

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
        { name: 'description', content: 'Criação de sites profissionais, landing pages e aplicações web. Especialistas em desenvolvimento web com foco em performance e resultados.' },
        { property: 'og:title', content: 'Audentes Tech - Desenvolvimento Web Profissional' },
        { property: 'og:description', content: 'Criação de sites profissionais, landing pages e aplicações web. Especialistas em desenvolvimento web com foco em performance e resultados.' },
        { property: 'og:type', content: 'website' },
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
    domains: ['audentestech.com.br'],
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
        '/blog/importancia-site-rapido',
        '/blog/tendencias-design-web',
        '/blog/otimizacao-seo-2024'
      ]
    }
  },
  site: {
    url: 'https://audentestech.com.br'
  },
  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: '/sitemap.xml'
  },
  sitemap: {
    hostname: 'https://audentestech.com.br',
    gzip: true,
    exclude: [
      '/admin/**'
    ],
    defaults: {
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString()
    }
  },
  experimental: {
    payloadExtraction: true
  },
  build: {
    transpile: ['@headlessui/vue']
  }
})