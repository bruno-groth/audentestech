<template>
  <div>
    <!-- Hero Section -->
    <section class="section">
      <div class="container">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="heading-1 mb-6">Nossos Serviços</h1>
          <p class="text-xl text-light/80">
            Soluções completas em desenvolvimento web, desde sites institucionais até aplicações complexas.
            Cada projeto é único e personalizado para suas necessidades.
          </p>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="section bg-dark/50">
      <div class="container">
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Sites Institucionais -->
          <div id="sites" class="card">
            <div class="mb-6">
              <Icon name="heroicons:building-office" class="text-4xl text-primary" />
            </div>
            <h2 class="text-2xl font-bold mb-4">Sites Institucionais</h2>
            <p class="text-light/80 mb-6">
              Sites profissionais e modernos para estabelecer sua presença online.
              Design responsivo, otimizado para SEO e fácil de atualizar.
            </p>
            <ul class="space-y-3 mb-6 text-light/80">
              <li class="flex items-start gap-2">
                <Icon name="heroicons:check" class="text-primary mt-1" />
                Design personalizado e responsivo
              </li>
              <li class="flex items-start gap-2">
                <Icon name="heroicons:check" class="text-primary mt-1" />
                Otimização para mecanismos de busca (SEO)
              </li>
              <li class="flex items-start gap-2">
                <Icon name="heroicons:check" class="text-primary mt-1" />
                Integração com redes sociais
              </li>
              <li class="flex items-start gap-2">
                <Icon name="heroicons:check" class="text-primary mt-1" />
                Painel administrativo intuitivo
              </li>
            </ul>
            <NuxtLink to="/contato" class="btn-primary inline-block">Solicitar orçamento</NuxtLink>
          </div>

          <!-- Landing Pages -->
          <div id="landing" class="card">
            <div class="mb-6">
              <Icon name="heroicons:presentation-chart-line" class="text-4xl text-primary" />
            </div>
            <h2 class="text-2xl font-bold mb-4">Landing Pages</h2>
            <p class="text-light/80 mb-6">
              Páginas otimizadas para conversão, ideais para campanhas e lançamentos.
              Foco em resultados e geração de leads.
            </p>
            <ul class="space-y-3 mb-6 text-light/80">
              <li class="flex items-start gap-2">
                <Icon name="heroicons:check" class="text-primary mt-1" />
                Design focado em conversão
              </li>
              <li class="flex items-start gap-2">
                <Icon name="heroicons:check" class="text-primary mt-1" />
                Formulários e CTAs otimizados
              </li>
              <li class="flex items-start gap-2">
                <Icon name="heroicons:check" class="text-primary mt-1" />
                Integração com ferramentas de marketing
              </li>
              <li class="flex items-start gap-2">
                <Icon name="heroicons:check" class="text-primary mt-1" />
                Análise de performance e conversão
              </li>
            </ul>
            <NuxtLink to="/contato" class="btn-primary inline-block">Solicitar orçamento</NuxtLink>
          </div>

          <!-- Web Apps -->
          <div id="apps" class="card">
            <div class="mb-6">
              <Icon name="heroicons:code-bracket-square" class="text-4xl text-primary" />
            </div>
            <h2 class="text-2xl font-bold mb-4">Web Apps</h2>
            <p class="text-light/80 mb-6">
              Aplicações web sob medida para automatizar processos e melhorar a eficiência do seu negócio.
            </p>
            <ul class="space-y-3 mb-6 text-light/80">
              <li class="flex items-start gap-2">
                <Icon name="heroicons:check" class="text-primary mt-1" />
                Desenvolvimento personalizado
              </li>
              <li class="flex items-start gap-2">
                <Icon name="heroicons:check" class="text-primary mt-1" />
                APIs e integrações
              </li>
              <li class="flex items-start gap-2">
                <Icon name="heroicons:check" class="text-primary mt-1" />
                Painéis administrativos
              </li>
              <li class="flex items-start gap-2">
                <Icon name="heroicons:check" class="text-primary mt-1" />
                Escalabilidade e performance
              </li>
            </ul>
            <NuxtLink to="/contato" class="btn-primary inline-block">Solicitar orçamento</NuxtLink>
          </div>

          <!-- E-commerce -->
          <div id="ecommerce" class="card">
            <div class="mb-6">
              <Icon name="heroicons:shopping-cart" class="text-4xl text-primary" />
            </div>
            <h2 class="text-2xl font-bold mb-4">E-commerce</h2>
            <p class="text-light/80 mb-6">
              Lojas virtuais completas e personalizadas para vender seus produtos online.
              Integração com meios de pagamento e gestão de estoque.
            </p>
            <ul class="space-y-3 mb-6 text-light/80">
              <li class="flex items-start gap-2">
                <Icon name="heroicons:check" class="text-primary mt-1" />
                Catálogo de produtos
              </li>
              <li class="flex items-start gap-2">
                <Icon name="heroicons:check" class="text-primary mt-1" />
                Gestão de pedidos e estoque
              </li>
              <li class="flex items-start gap-2">
                <Icon name="heroicons:check" class="text-primary mt-1" />
                Gateway de pagamento
              </li>
              <li class="flex items-start gap-2">
                <Icon name="heroicons:check" class="text-primary mt-1" />
                Relatórios e análises
              </li>
            </ul>
            <NuxtLink to="/contato" class="btn-primary inline-block">Solicitar orçamento</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- SEO Section -->
    <section id="seo" class="section">
      <div class="container">
        <div class="max-w-3xl mx-auto">
          <h2 class="heading-2 text-center mb-8">Otimização para SEO</h2>
          <div class="card">
            <p class="text-light/80 mb-6">
              Todos os nossos projetos são desenvolvidos com foco em SEO, garantindo melhor visibilidade nos motores de busca:
            </p>
            <ul class="space-y-4 text-light/80">
              <li class="flex items-start gap-3">
                <Icon name="heroicons:check-circle" class="text-2xl text-primary shrink-0" />
                <div>
                  <strong class="block mb-1">Estrutura técnica otimizada</strong>
                  Meta tags, URLs amigáveis, sitemap.xml e schema.org
                </div>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="heroicons:check-circle" class="text-2xl text-primary shrink-0" />
                <div>
                  <strong class="block mb-1">Performance e velocidade</strong>
                  Carregamento rápido, otimização de imagens e código limpo
                </div>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="heroicons:check-circle" class="text-2xl text-primary shrink-0" />
                <div>
                  <strong class="block mb-1">Responsividade mobile</strong>
                  Sites adaptados para todos os dispositivos
                </div>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="heroicons:check-circle" class="text-2xl text-primary shrink-0" />
                <div>
                  <strong class="block mb-1">Conteúdo estruturado</strong>
                  Hierarquia de títulos e semântica HTML adequada
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section bg-primary/10 relative overflow-hidden">
      <!-- Elementos decorativos temáticos -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Círculos dinâmicos -->
        <div class="absolute left-[5%] sm:left-[15%] top-[15%] w-24 h-24 sm:w-36 sm:h-36 rounded-full border border-primary/15 opacity-15 animate-pulse-slow"></div>
        <div class="absolute right-[10%] sm:right-[20%] bottom-[20%] w-32 h-32 sm:w-48 sm:h-48 rounded-full border-2 border-primary/20 opacity-20 animate-spin-slow"></div>
        
        <!-- Ícones de resultados -->
        <div class="absolute top-[20%] right-[15%] sm:right-[25%] opacity-10 text-primary">
          <svg class="w-8 h-8 sm:w-12 sm:h-12 animate-bounce-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
          </svg>
        </div>

        <!-- Gráfico de barras -->
        <div class="absolute left-[10%] bottom-[25%] space-y-2 opacity-10 scale-75 sm:scale-100">
          <div class="h-1 w-12 sm:w-16 bg-primary/40 animate-width"></div>
          <div class="h-1 w-16 sm:w-24 bg-primary/50 animate-width-delay"></div>
          <div class="h-1 w-20 sm:w-32 bg-primary/60 animate-width-delay-2"></div>
        </div>

        <!-- Ícone de alvo/meta -->
        <div class="absolute right-[25%] top-[30%] opacity-10">
          <svg class="w-10 h-10 sm:w-16 sm:h-16 text-primary animate-spin-very-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>

        <!-- Números e métricas -->
        <div class="absolute left-[20%] top-[40%] opacity-10 text-primary font-bold">
          <div class="text-xl sm:text-3xl animate-fade-in">100%</div>
        </div>
        <div class="absolute right-[15%] bottom-[30%] opacity-10 text-primary font-bold">
          <div class="text-lg sm:text-2xl animate-fade-in-delay">ROI</div>
        </div>

        <!-- Linhas conectoras -->
        <svg class="absolute inset-0 w-full h-full opacity-5">
          <line x1="20%" y1="30%" x2="40%" y2="60%" stroke="currentColor" class="text-primary animate-draw" stroke-width="1" />
          <line x1="80%" y1="40%" x2="60%" y2="70%" stroke="currentColor" class="text-primary animate-draw-delay" stroke-width="1" />
        </svg>
      </div>

      <div class="container text-center relative z-10">
        <h2 class="heading-2 mb-6">Pronto para iniciar seu projeto?</h2>
        <p class="text-xl text-light/80 mb-8 max-w-2xl mx-auto">
          Entre em contato conosco para uma consultoria gratuita e personalizada.
        </p>
        <NuxtLink to="/contato" class="btn-primary inline-block group relative overflow-hidden">
          <span class="relative z-10">Solicitar orçamento</span>
          <div class="absolute inset-0 bg-primary/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <div class="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 delay-75"></div>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Serviços - Audentes Tech',
  meta: [
    {
      name: 'description',
      content: 'Desenvolvimento de sites, landing pages, aplicações web e e-commerce. Soluções personalizadas e otimizadas para o seu negócio.'
    }
  ]
})
</script>