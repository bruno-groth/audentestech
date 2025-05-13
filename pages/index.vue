<template>
  <div>
    <!-- Hero Section -->
    <section class="min-h-[90vh] relative flex items-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-support-dark/30"></div>
      <div class="container relative z-10">
        <div class="max-w-3xl">
          <h1 class="heading-1 mb-6">
            Transforme sua presença digital com sites
            <span class="text-primary">rápidos</span> e
            <span class="text-primary">impactantes</span>
          </h1>
          <p class="text-xl mb-8 text-light/80">
            Especialistas em criar sites profissionais otimizados para performance e conversão. 
            Do planejamento ao resultado, estamos aqui para impulsionar seu negócio online.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink to="/contato" class="btn-primary text-center">
              Solicite um orçamento
            </NuxtLink>
            <a href="#segmentos" class="btn-primary bg-dark border-2 border-primary text-primary hover:bg-primary hover:text-dark text-center">
              Conheça nossos serviços
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Segmentos Section -->
    <section id="segmentos" class="section bg-dark/50">
      <div class="container">
        <h2 class="heading-2 text-center mb-16">Escolha o caminho ideal para seu negócio</h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Empresas e Profissionais -->
          <div class="card hover:scale-[1.02] transition-transform">
            <div class="mb-6">
              <i class="i-heroicons-building-office text-4xl text-primary"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4">Empresas e Profissionais</h3>
            <p class="text-light/80 mb-6">
              Soluções sob medida para pequenos e médios negócios, clínicas, lojas e profissionais autônomos.
              Sites institucionais e landing pages que convertem visitantes em clientes.
            </p>
            <NuxtLink to="/servicos#empresas" class="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2">
              Saiba mais
              <i class="i-heroicons-arrow-right"></i>
            </NuxtLink>
          </div>

          <!-- Projetos Complexos -->
          <div class="card hover:scale-[1.02] transition-transform">
            <div class="mb-6">
              <i class="i-heroicons-cube text-4xl text-primary"></i>
            </div>
            <h3 class="text-2xl font-bold mb-4">Projetos Complexos</h3>
            <p class="text-light/80 mb-6">
              Desenvolvimento de aplicações web e e-commerce para startups e empresas com demandas específicas.
              Soluções escaláveis e personalizadas para seu negócio.
            </p>
            <NuxtLink to="/servicos#projetos" class="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2">
              Saiba mais
              <i class="i-heroicons-arrow-right"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Diferenciais Section -->
    <section class="section">
      <div class="container">
        <h2 class="heading-2 text-center mb-16">Por que escolher a Audentes Tech?</h2>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="mb-6">
              <i class="i-heroicons-rocket-launch text-4xl text-primary"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Performance Excepcional</h3>
            <p class="text-light/80">
              Sites otimizados para carregamento ultrarrápido e experiência fluida em qualquer dispositivo.
            </p>
          </div>

          <div class="text-center">
            <div class="mb-6">
              <i class="i-heroicons-presentation-chart-line text-4xl text-primary"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">SEO Otimizado</h3>
            <p class="text-light/80">
              Estratégias avançadas de SEO para melhor visibilidade nos motores de busca.
            </p>
          </div>

          <div class="text-center">
            <div class="mb-6">
              <i class="i-heroicons-cursor-arrow-rays text-4xl text-primary"></i>
            </div>
            <h3 class="text-xl font-bold mb-4">Design Convertedor</h3>
            <p class="text-light/80">
              Interfaces intuitivas e atraentes focadas em transformar visitantes em clientes.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section bg-primary/10">
      <div class="container text-center">
        <h2 class="heading-2 mb-6">Pronto para transformar sua presença digital?</h2>
        <p class="text-xl text-light/80 mb-8 max-w-2xl mx-auto">
          Vamos criar juntos um site que represente sua marca e traga resultados reais para seu negócio.
        </p>
        <NuxtLink to="/contato" class="btn-primary inline-block">
          Vamos conversar
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Audentes Tech - Desenvolvimento Web Profissional',
  meta: [
    {
      name: 'description',
      content: 'Criação de sites profissionais, landing pages e aplicações web. Especialistas em desenvolvimento web com foco em performance e resultados.'
    }
  ]
})
</script>