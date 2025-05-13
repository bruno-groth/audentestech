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
    <section class="section bg-primary/10">
      <div class="container text-center">
        <h2 class="heading-2 mb-6">Pronto para iniciar seu projeto?</h2>
        <p class="text-xl text-light/80 mb-8 max-w-2xl mx-auto">
          Entre em contato conosco para uma consultoria gratuita e personalizada.
        </p>
        <NuxtLink to="/contato" class="btn-primary inline-block">
          Solicitar orçamento
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