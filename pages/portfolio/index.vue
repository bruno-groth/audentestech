<template>
  <div>
    <!-- Hero Section -->
    <section class="section">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="heading-1 mb-6">Nossos Projetos</h1>
          <p class="text-xl text-light/80">
            Conheça alguns dos projetos que desenvolvemos e como ajudamos nossos clientes
            a alcançarem seus objetivos online.
          </p>
        </div>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="section bg-dark/50">
      <div class="container">
        <!-- Filter Tabs -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            v-for="filter in filters" 
            :key="filter.id"
            @click="currentFilter = filter.id"
            :class="[
              'px-6 py-2 rounded-full transition-all duration-300',
              currentFilter === filter.id
                ? 'bg-primary text-dark'
                : 'bg-dark/50 text-light hover:bg-primary/20'
            ]"
          >
            {{ filter.name }}
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id"
            class="card group hover:scale-[1.02] transition-all duration-300"
          >
            <div class="relative aspect-video mb-6 overflow-hidden rounded-lg">
              <img 
                :src="project.image" 
                :alt="project.title"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div class="flex gap-2">
                  <span v-for="tag in project.tags" :key="tag" class="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
            <h3 class="text-xl font-bold mb-2">{{ project.title }}</h3>
            <p class="text-light/80 mb-4">{{ project.description }}</p>
            <a 
              :href="project.url" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-primary hover:text-primary/80 inline-flex items-center gap-2"
            >
              Ver projeto
              <Icon name="heroicons:arrow-top-right-on-square" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section">
      <div class="container text-center">
        <h2 class="heading-2 mb-6">Quer ser o próximo case de sucesso?</h2>
        <p class="text-xl text-light/80 mb-8 max-w-2xl mx-auto">
          Vamos criar um projeto incrível juntos e transformar sua presença digital.
        </p>
        <NuxtLink to="/contato" class="btn-primary inline-block">
          Iniciar projeto
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
const filters = [
  { id: 'all', name: 'Todos' },
  { id: 'site', name: 'Sites Institucionais' },
  { id: 'landing', name: 'Landing Pages' },
  { id: 'app', name: 'Web Apps' },
  { id: 'ecommerce', name: 'E-commerce' }
]

const projects = [
  {
    id: 1,
    title: 'E-commerce Modern Style',
    description: 'Loja virtual completa com integração de pagamentos e gestão de estoque.',
    image: '/portfolio/ecommerce-1.jpg',
    tags: ['E-commerce', 'Vue.js', 'Node.js'],
    type: 'ecommerce',
    url: '#'
  },
  {
    id: 2,
    title: 'App de Gestão Empresarial',
    description: 'Sistema web para gestão de processos e equipes.',
    image: '/portfolio/app-1.jpg',
    tags: ['Web App', 'Dashboard', 'Vue.js'],
    type: 'app',
    url: '#'
  },
  {
    id: 3,
    title: 'Site Corporativo Empresa X',
    description: 'Website institucional com blog e área de carreiras.',
    image: '/portfolio/site-1.jpg',
    tags: ['Site Institucional', 'Blog', 'SEO'],
    type: 'site',
    url: '#'
  },
]

const currentFilter = ref('all')

const filteredProjects = computed(() => {
  if (currentFilter.value === 'all') return projects
  return projects.filter(project => project.type === currentFilter.value)
})

useHead({
  title: 'Portfólio - Audentes Tech',
  meta: [
    {
      name: 'description',
      content: 'Conheça nossos projetos de desenvolvimento web: sites, aplicações e e-commerce. Cases de sucesso em diferentes segmentos.'
    }
  ]
})
</script>