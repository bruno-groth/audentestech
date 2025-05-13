<template>
  <div>
    <article v-if="post" class="article-content" itemscope itemtype="http://schema.org/BlogPosting">
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
              v-html="post.content"
            ></div>

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
                <Icon name="mdi:twitter" class="text-2xl" />
                <span class="sr-only">Compartilhar no Twitter</span>
              </a>
              <a 
                :href="'https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(currentUrl) + '&title=' + encodeURIComponent(post.title)"
                target="_blank"
                rel="noopener noreferrer"
                class="text-light/80 hover:text-primary transition-colors"
              >
                <Icon name="mdi:linkedin" class="text-2xl" />
                <span class="sr-only">Compartilhar no LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>

    <!-- Related Posts -->
    <section v-if="post" class="section bg-dark/50">
      <div class="container">
        <h2 class="heading-2 text-center mb-12">Artigos Relacionados</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

  </div>
</template>

<script setup>
const route = useRoute()
const { getPost, getRelatedPosts } = useBlogPosts()

const post = ref(getPost(route.params.slug))
const relatedPosts = ref(getRelatedPosts(route.params.slug))

// Current URL for sharing
const currentUrl = computed(() => {
  if (process.client) {
    return window.location.href
  }
  return ''
})


// Watch for route changes to update content
watch(
  () => route.params.slug,
  (newSlug) => {
    post.value = getPost(newSlug)
    relatedPosts.value = getRelatedPosts(newSlug)
  }
)

// SEO metadata
useHead(() => ({
  title: post.value ? `${post.value.title} - Blog Audentes Tech` : 'Blog - Audentes Tech',
  meta: [
    {
      name: 'description',
      content: post.value?.excerpt || 'Blog da Audentes Tech'
    },
    {
      property: 'og:title',
      content: post.value ? `${post.value.title} - Blog Audentes Tech` : 'Blog - Audentes Tech'
    },
    {
      property: 'og:description',
      content: post.value?.excerpt || 'Blog da Audentes Tech'
    },
    {
      property: 'og:image',
      content: post.value?.image || '/images/default-og.jpg'
    },
    {
      property: 'og:type',
      content: 'article'
    },
    post.value && {
      property: 'article:published_time',
      content: post.value.date
    },
    post.value && {
      property: 'article:author',
      content: post.value.author.name
    },
    post.value && {
      property: 'article:tag',
      content: post.value.tags.join(',')
    }
  ].filter(Boolean),
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.value?.title,
        image: post.value?.image,
        datePublished: post.value?.date,
        author: post.value ? {
          '@type': 'Person',
          name: post.value.author.name,
          image: post.value.author.avatar
        } : undefined,
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
}))
</script>