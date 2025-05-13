<template>
  <div>
    <!-- Hero Section -->
    <section class="section">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="heading-1 mb-6">Blog</h1>
          <p class="text-xl text-light/80">
            Dicas, estratégias e novidades sobre desenvolvimento web,
            presença digital e tecnologia.
          </p>
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section class="py-8 bg-dark/50">
      <div class="container">
        <div class="flex flex-wrap justify-center gap-4">
          <button 
            v-for="category in categories" 
            :key="category.slug"
            @click="currentCategory = category.slug"
            :class="[
              'px-6 py-2 rounded-full transition-all duration-300',
              currentCategory === category.slug
                ? 'bg-primary text-dark'
                : 'bg-dark/50 text-light hover:bg-primary/20'
            ]"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Blog Posts -->
    <section class="section">
      <div class="container">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="post in filteredPosts" 
            :key="post.slug"
            class="card group hover:scale-[1.02] transition-all duration-300"
          >
            <NuxtLink :to="'/blog/' + post.slug">
              <div class="relative aspect-video mb-6 overflow-hidden rounded-lg">
                <img 
                  :src="post.image" 
                  :alt="post.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent"></div>
              </div>
              <div class="mb-4">
                <span class="text-xs text-primary">{{ post.date }}</span>
                <h2 class="text-xl font-bold mt-2 group-hover:text-primary transition-colors">
                  {{ post.title }}
                </h2>
              </div>
              <p class="text-light/80 mb-4 line-clamp-3">
                {{ post.excerpt }}
              </p>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tag in post.tags" 
                  :key="tag"
                  class="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                >
                  {{ tag }}
                </span>
              </div>
            </NuxtLink>
          </article>
        </div>

        <!-- Pagination -->
        <div class="mt-12 flex justify-center gap-2">
          <button 
            v-for="page in totalPages" 
            :key="page"
            @click="currentPage = page"
            :class="[
              'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300',
              currentPage === page
                ? 'bg-primary text-dark'
                : 'bg-dark/50 text-light hover:bg-primary/20'
            ]"
          >
            {{ page }}
          </button>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="section bg-dark/50">
      <div class="container">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="heading-2 mb-6">Fique por dentro das novidades</h2>
          <p class="text-light/80 mb-8">
            Receba conteúdo exclusivo sobre desenvolvimento web, dicas de otimização
            e tendências do mercado digital.
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
const categories = [
  { slug: 'all', name: 'Todos' },
  { slug: 'desenvolvimento', name: 'Desenvolvimento Web' },
  { slug: 'design', name: 'Design UI/UX' },
  { slug: 'seo', name: 'SEO' },
  { slug: 'tecnologia', name: 'Tecnologia' }
]

const posts = [
  {
    slug: 'importancia-site-rapido',
    title: 'A importância de ter um site rápido em 2024',
    excerpt: 'Descubra como a velocidade do seu site impacta diretamente nas conversões e no SEO.',
    image: '/blog/post-1.jpg',
    date: '10 Jan 2024',
    category: 'desenvolvimento',
    tags: ['Performance', 'SEO', 'Web Vitals'],
  },
  {
    slug: 'tendencias-design-web',
    title: 'Tendências de Design Web para 2024',
    excerpt: 'As principais tendências de design que vão dominar a web neste ano.',
    image: '/blog/post-2.jpg',
    date: '15 Jan 2024',
    category: 'design',
    tags: ['Design', 'Tendências', 'UI/UX'],
  },
  {
    slug: 'otimizacao-seo-2024',
    title: 'Guia Completo de SEO para 2024',
    excerpt: 'Aprenda as melhores práticas de SEO para melhorar o ranking do seu site.',
    image: '/blog/post-3.jpg',
    date: '20 Jan 2024',
    category: 'seo',
    tags: ['SEO', 'Marketing Digital', 'Google'],
  }
]

const currentCategory = ref('all')
const currentPage = ref(1)
const postsPerPage = 6
const newsletterEmail = ref('')

const totalPages = computed(() => Math.ceil(filteredPosts.value.length / postsPerPage))

const filteredPosts = computed(() => {
  if (currentCategory.value === 'all') return posts
  return posts.filter(post => post.category === currentCategory.value)
})

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage
  const end = start + postsPerPage
  return filteredPosts.value.slice(start, end)
})

const subscribeNewsletter = () => {
  // Implement newsletter subscription logic
  console.log('Newsletter subscription:', newsletterEmail.value)
  newsletterEmail.value = ''
  alert('Obrigado por se inscrever! Em breve você receberá nossas novidades.')
}

useHead({
  title: 'Blog - Audentes Tech',
  meta: [
    {
      name: 'description',
      content: 'Blog da Audentes Tech: Artigos sobre desenvolvimento web, design, SEO e tecnologia. Fique por dentro das últimas tendências do mercado digital.'
    }
  ]
})
</script>