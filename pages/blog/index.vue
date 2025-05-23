<template>
  <div>
    <!-- Hero Section -->
    <section class="section relative overflow-hidden">
      <!-- Elementos decorativos hero -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Símbolos de conteúdo -->
        <div class="absolute left-[5%] top-[20%] opacity-10 text-primary">
          <svg class="w-12 h-12 sm:w-16 sm:h-16 animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.7a2 2 0 00-.6-1.4L17.4 3.3a2 2 0 00-1.4-.6H16v4a2 2 0 002 2h4v.6z"></path>
          </svg>
        </div>

        <!-- Círculos de conhecimento -->
        <div class="absolute right-[10%] top-[25%] w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-primary/20 opacity-20 animate-spin-slow"></div>
        <div class="absolute left-[15%] bottom-[20%] w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-primary/15 opacity-15 animate-pulse-slow"></div>

        <!-- Grid de pontos -->
        <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle at 1px 1px, #4ade80 1px, transparent 0); background-size: 35px 35px;"></div>
      </div>

      <div class="container relative z-10">
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
    <section class="py-8 bg-dark/50 relative overflow-hidden">
      <!-- Elementos decorativos categorias -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Linhas de conexão -->
        <svg class="absolute inset-0 w-full h-full opacity-5">
          <line x1="20%" y1="50%" x2="80%" y2="50%" stroke="currentColor" class="text-primary animate-draw" stroke-width="1" />
        </svg>

        <!-- Pontos de categoria -->
        <div class="absolute left-[10%] top-[50%] grid grid-cols-3 gap-1 opacity-10">
          <div class="w-1.5 h-1.5 bg-primary rounded-full animate-ping"></div>
          <div class="w-1.5 h-1.5 bg-primary rounded-full animate-ping" style="animation-delay: 0.2s"></div>
          <div class="w-1.5 h-1.5 bg-primary rounded-full animate-ping" style="animation-delay: 0.4s"></div>
        </div>

        <!-- Tags -->
        <div class="absolute right-[10%] top-[50%] opacity-10">
          <svg class="w-8 h-8 sm:w-10 sm:h-10 text-primary animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5a1.99 1.99 0 011.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
          </svg>
        </div>
      </div>

      <div class="container relative z-10">
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
    <section class="section relative overflow-hidden">
      <!-- Elementos decorativos posts -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Elementos de artigo -->
        <div class="absolute right-[5%] top-[10%] opacity-10">
          <svg class="w-10 h-10 sm:w-12 sm:h-12 text-primary animate-float-delay" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
          </svg>
        </div>

        <!-- Círculos de conteúdo -->
        <div class="absolute left-[8%] top-[30%] w-16 h-16 sm:w-24 sm:h-24 rounded-full border border-primary/20 opacity-20 animate-spin-reverse-slow"></div>
        
        <!-- Linhas de leitura -->
        <div class="absolute right-[15%] bottom-[20%] space-y-1 opacity-10">
          <div class="h-1 w-12 bg-primary/30 animate-width"></div>
          <div class="h-1 w-16 bg-primary/20 animate-width-delay"></div>
          <div class="h-1 w-8 bg-primary/40 animate-width-delay-2"></div>
        </div>

        <!-- Ícone de leitura -->
        <div class="absolute left-[20%] bottom-[15%] opacity-10">
          <svg class="w-8 h-8 sm:w-10 sm:h-10 text-primary animate-bounce-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
          </svg>
        </div>
      </div>

      <div class="container relative z-10">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="post in paginatedPosts" 
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
        <div v-if="totalPages > 1" class="mt-12 flex justify-center gap-2">
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

  </div>
</template>

<script setup>
const { getAllPosts } = useBlogPosts()

const categories = [
  { slug: 'all', name: 'Todos' },
  { slug: 'negocios', name: 'Negócios' },
  { slug: 'design', name: 'Design' },
  { slug: 'seo', name: 'SEO' }
]

const currentCategory = ref('all')
const currentPage = ref(1)
const postsPerPage = 6

const allPosts = getAllPosts()

const filteredPosts = computed(() => {
  if (currentCategory.value === 'all') return allPosts
  return allPosts.filter(post => post.category === currentCategory.value)
})

const totalPages = computed(() => Math.ceil(filteredPosts.value.length / postsPerPage))

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * postsPerPage
  const end = start + postsPerPage
  return filteredPosts.value.slice(start, end)
})

// Reset pagination when category changes
watch(currentCategory, () => {
  currentPage.value = 1
})


// SEO metadata
useHead({
  title: 'Blog - Audentes Tech',
  meta: [
    {
      name: 'description',
      content: 'Blog da Audentes Tech: Artigos sobre desenvolvimento web, design, SEO e tecnologia. Fique por dentro das últimas tendências do mercado digital.'
    },
    {
      property: 'og:title',
      content: 'Blog - Audentes Tech'
    },
    {
      property: 'og:description',
      content: 'Blog da Audentes Tech: Artigos sobre desenvolvimento web, design, SEO e tecnologia. Fique por dentro das últimas tendências do mercado digital.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})
</script>