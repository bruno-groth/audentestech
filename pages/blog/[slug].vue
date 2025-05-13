<template>
  <div>
    <article class="article-content" itemscope itemtype="http://schema.org/BlogPosting">
      <!-- Hero Section -->
      <section class="relative min-h-[50vh] flex items-center">
        <div class="absolute inset-0">
          <img 
            :src="post.image" 
            :alt="post.title"
            class="w-full h-full object-cover"
            itemprop="image"
          />
          <div class="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark"></div>
        </div>
        
        <div class="container relative">
          <div class="max-w-3xl">
            <!-- Article Meta -->
            <div class="mb-6 flex items-center gap-4 text-sm text-light/80">
              <time :datetime="post.date" itemprop="datePublished">{{ post.date }}</time>
              <span>•</span>
              <span>{{ post.readingTime }} min de leitura</span>
            </div>

            <h1 class="heading-1 mb-6" itemprop="headline">{{ post.title }}</h1>
            
            <!-- Tags -->
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tag in post.tags" 
                :key="tag"
                class="text-sm bg-primary/20 text-primary px-3 py-1 rounded-full"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Article Content -->
      <section class="section">
        <div class="container">
          <div class="max-w-3xl mx-auto">
            <!-- Article Body -->
            <div 
              class="prose prose-lg prose-invert max-w-none"
              itemprop="articleBody"
            >
              <div v-html="post.content"></div>
            </div>

            <!-- Author Info -->
            <div class="mt-12 pt-8 border-t border-primary/10">
              <div class="flex items-center gap-4" itemprop="author" itemscope itemtype="http://schema.org/Person">
                <img 
                  :src="post.author.avatar" 
                  :alt="post.author.name"
                  class="w-16 h-16 rounded-full"
                  itemprop="image"
                />
                <div>
                  <h3 class="font-bold text-lg" itemprop="name">{{ post.author.name }}</h3>
                  <p class="text-light/80" itemprop="description">{{ post.author.bio }}</p>
                </div>
              </div>
            </div>

            <!-- Share Links -->
            <div class="mt-8 flex items-center gap-4">
              <span class="text-light/80">Compartilhe:</span>
              <a 
                :href="'https://twitter.com/intent/tweet?text=' + encodeURIComponent(post.title) + '&url=' + encodeURIComponent(currentUrl)"
                target="_blank"
                rel="noopener noreferrer"
                class="text-light/80 hover:text-primary transition-colors"
              >
                <i class="i-mdi-twitter text-2xl"></i>
                <span class="sr-only">Compartilhar no Twitter</span>
              </a>
              <a 
                :href="'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(currentUrl) + '&title=' + encodeURIComponent(post.title)"
                target="_blank"
                rel="noopener noreferrer"
                class="text-light/80 hover:text-primary transition-colors"
              >
                <i class="i-mdi-linkedin text-2xl"></i>
                <span class="sr-only">Compartilhar no LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>

    <!-- Related Posts -->
    <section class="section bg-dark/50">
      <div class="container">
        <h2 class="heading-2 text-center mb-12">Artigos Relacionados</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <article 
            v-for="relatedPost in relatedPosts" 
            :key="relatedPost.slug"
            class="card group hover:scale-[1.02] transition-all duration-300"
          >
            <NuxtLink :to="'/blog/' + relatedPost.slug">
              <div class="relative aspect-video mb-6 overflow-hidden rounded-lg">
                <img 
                  :src="relatedPost.image" 
                  :alt="relatedPost.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
              </div>
              <div class="mb-4">
                <span class="text-xs text-primary">{{ relatedPost.date }}</span>
                <h3 class="text-xl font-bold mt-2 group-hover:text-primary transition-colors">
                  {{ relatedPost.title }}
                </h3>
              </div>
              <p class="text-light/80 line-clamp-2">
                {{ relatedPost.excerpt }}
              </p>
            </NuxtLink>
          </article>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="section">
      <div class="container">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="heading-2 mb-6">Inscreva-se na nossa newsletter</h2>
          <p class="text-light/80 mb-8">
            Receba mais conteúdo como este diretamente no seu e-mail.
          </p>
          <form @submit.prevent="subscribeNewsletter" class="flex gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              v-model="newsletterEmail"
              placeholder="Seu melhor e-mail"
              required
              class="flex-1 px-4 py-2 bg-dark rounded-lg border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
            />
            <button type="submit" class="btn-primary whitespace-nowrap">
              Inscrever-se
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const route = useRoute()
const newsletterEmail = ref('')

// Sample post data - In a real app, this would come from an API or CMS
const post = {
  title: 'A importância de ter um site rápido em 2024',
  slug: 'importancia-site-rapido',
  date: '10 Jan 2024',
  readingTime: '5',
  image: '/blog/post-1.jpg',
  tags: ['Performance', 'SEO', 'Web Vitals'],
  excerpt: 'Descubra como a velocidade do seu site impacta diretamente nas conversões e no SEO.',
  content: `
    <p>A velocidade de carregamento de um site é um dos fatores mais importantes para o sucesso online em 2024. Com a crescente competitividade no mercado digital, ter um site rápido não é mais um diferencial, mas uma necessidade.</p>

    <h2>Por que a velocidade é importante?</h2>
    <p>Estudos mostram que 53% dos usuários abandonam um site que demora mais de 3 segundos para carregar. Além disso, o Google considera a velocidade de carregamento como um fator importante para o ranking nas buscas.</p>

    <h2>Como melhorar a performance do seu site</h2>
    <ul>
      <li>Otimize as imagens</li>
      <li>Use um bom serviço de hospedagem</li>
      <li>Implemente cache adequadamente</li>
      <li>Minimize arquivos CSS e JavaScript</li>
    </ul>

    <h2>Impacto nas conversões</h2>
    <p>A cada segundo adicional no tempo de carregamento, as taxas de conversão caem aproximadamente 7%. Em um mercado competitivo, essa diferença pode significar milhares de reais em vendas perdidas.</p>
  `,
  author: {
    name: 'João Silva',
    avatar: '/blog/authors/joao-silva.jpg',
    bio: 'Desenvolvedor web full-stack e especialista em performance'
  }
}

// Sample related posts
const relatedPosts = [
  {
    slug: 'tendencias-design-web',
    title: 'Tendências de Design Web para 2024',
    excerpt: 'As principais tendências de design que vão dominar a web neste ano.',
    image: '/blog/post-2.jpg',
    date: '15 Jan 2024'
  },
  {
    slug: 'otimizacao-seo-2024',
    title: 'Guia Completo de SEO para 2024',
    excerpt: 'Aprenda as melhores práticas de SEO para melhorar o ranking do seu site.',
    image: '/blog/post-3.jpg',
    date: '20 Jan 2024'
  }
]

// Current URL for sharing
const currentUrl = computed(() => {
  if (process.client) {
    return window.location.href
  }
  return ''
})

const subscribeNewsletter = () => {
  // Implement newsletter subscription logic
  console.log('Newsletter subscription:', newsletterEmail.value)
  newsletterEmail.value = ''
  alert('Obrigado por se inscrever! Em breve você receberá nossas novidades.')
}

// SEO metadata
useHead({
  title: `${post.title} - Blog Audentes Tech`,
  meta: [
    {
      name: 'description',
      content: post.excerpt
    },
    {
      property: 'og:title',
      content: post.title
    },
    {
      property: 'og:description',
      content: post.excerpt
    },
    {
      property: 'og:image',
      content: post.image
    },
    {
      property: 'og:type',
      content: 'article'
    },
    {
      property: 'article:published_time',
      content: post.date
    },
    {
      property: 'article:author',
      content: post.author.name
    },
    {
      property: 'article:tag',
      content: post.tags.join(',')
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        image: post.image,
        datePublished: post.date,
        author: {
          '@type': 'Person',
          name: post.author.name,
          image: post.author.avatar
        },
        publisher: {
          '@type': 'Organization',
          name: 'Audentes Tech',
          logo: {
            '@type': 'ImageObject',
            url: '/logo.png'
          }
        }
      })
    }
  ]
})
</script>