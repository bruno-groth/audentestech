<template>
  <div>
    <!-- Hero Section -->
    <section class="section relative overflow-hidden">
      <!-- Elementos decorativos hero -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Elementos de design -->
        <div class="absolute left-[5%] top-[20%] opacity-10 text-primary">
          <svg class="w-12 h-12 sm:w-16 sm:h-16 animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>

        <!-- Círculos criativos -->
        <div class="absolute right-[10%] top-[30%] w-32 h-32 sm:w-48 sm:h-48 rounded-full border-2 border-dashed border-primary/20 opacity-20 animate-spin-reverse-slow"></div>
        <div class="absolute left-[20%] bottom-[20%] w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-primary/15 opacity-15 animate-pulse-slow"></div>

        <!-- Grid points de design -->
        <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle at 1px 1px, #4ade80 1px, transparent 0); background-size: 30px 30px;"></div>
      </div>

      <div class="container relative z-10">
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
    <section class="section bg-dark/50 relative overflow-hidden">
      <!-- Elementos decorativos filtros -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Linhas de conexão -->
        <svg class="absolute inset-0 w-full h-full opacity-5">
          <line x1="20%" y1="20%" x2="40%" y2="40%" stroke="currentColor" class="text-primary animate-draw" stroke-width="1" />
          <line x1="60%" y1="20%" x2="80%" y2="40%" stroke="currentColor" class="text-primary animate-draw-delay" stroke-width="1" />
        </svg>

        <!-- Elementos de UI -->
        <div class="absolute right-[15%] top-[10%] opacity-10 scale-75 sm:scale-100">
          <div class="w-4 h-4 border-2 border-primary/40 rounded-full mb-2 animate-float"></div>
          <div class="w-8 h-1 bg-primary/30 rounded-full animate-width"></div>
        </div>

        <!-- Elementos de código -->
        <div class="absolute left-[10%] bottom-[15%] opacity-10 font-mono text-primary text-sm sm:text-base">
          <div class="animate-fade-in">&lt;grid&gt;</div>
          <div class="ml-4 animate-fade-in-delay">projects</div>
          <div class="animate-fade-in-delay-2">&lt;/grid&gt;</div>
        </div>
      </div>

      <div class="container relative z-10">
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
    <section class="section relative overflow-hidden">
      <!-- Elementos decorativos CTA -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Círculo criativo principal -->
        <div class="absolute left-[20%] top-[30%] w-40 h-40 sm:w-56 sm:h-56 rounded-full border-2 border-primary/20 opacity-20 animate-pulse"></div>
        
        <!-- Ferramentas de design -->
        <div class="absolute right-[25%] top-[40%] opacity-10">
          <svg class="w-12 h-12 text-primary animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </div>

        <!-- Pontos de conexão -->
        <div class="absolute right-[10%] bottom-[20%] grid grid-cols-3 gap-1 opacity-10">
          <div class="w-1.5 h-1.5 bg-primary rounded-full animate-ping"></div>
          <div class="w-1.5 h-1.5 bg-primary rounded-full animate-ping" style="animation-delay: 0.2s"></div>
          <div class="w-1.5 h-1.5 bg-primary rounded-full animate-ping" style="animation-delay: 0.4s"></div>
        </div>

        <!-- Linhas de design -->
        <svg class="absolute inset-0 w-full h-full opacity-5">
          <line x1="30%" y1="40%" x2="50%" y2="60%" stroke="currentColor" class="text-primary animate-draw" stroke-width="1" />
          <line x1="70%" y1="40%" x2="50%" y2="60%" stroke="currentColor" class="text-primary animate-draw-delay" stroke-width="1" />
        </svg>
      </div>

      <div class="container relative z-10 text-center">
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