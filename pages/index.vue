<template>
  <div>
    <!-- Hero Section -->
    <section class="min-h-[90vh] relative flex items-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-support-dark/30"></div>
      
      <!-- Elementos decorativos temáticos -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Elementos que lembram código com animação de fade -->
        <div class="absolute top-10 -left-5 sm:top-20 sm:-left-10 opacity-10 text-primary text-4xl sm:text-6xl md:text-8xl font-mono animate-fade-in-slow">&lt;/&gt;</div>
        <div class="absolute bottom-20 right-5 sm:bottom-40 sm:right-10 opacity-10 text-primary text-3xl sm:text-5xl md:text-6xl font-mono animate-fade-in-delay">{}</div>
        <div class="absolute top-1/4 right-5 sm:top-1/3 sm:right-20 opacity-10 text-primary text-2xl sm:text-3xl md:text-4xl font-mono animate-fade-in">[&nbsp;]</div>
        <div class="absolute bottom-10 left-20 sm:bottom-20 sm:left-40 opacity-10 text-primary text-3xl sm:text-4xl md:text-5xl font-mono animate-bounce-slow">&lt;/&gt;</div>
        
        <!-- Círculos tech com animação -->
        <div class="absolute right-[10%] sm:right-[20%] top-[20%] sm:top-[30%] w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full border-2 border-primary/20 opacity-20 animate-pulse"></div>
        <div class="absolute right-[8%] sm:right-[18%] top-[18%] sm:top-[28%] w-36 h-36 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full border border-primary/10 opacity-10 animate-spin-slow"></div>
        <div class="absolute left-[5%] sm:left-[15%] top-[15%] sm:top-[20%] w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full border border-primary/15 opacity-15 animate-pulse-slow"></div>
        
        <!-- Grid de pontos -->
        <div class="absolute inset-0 opacity-5 animate-float hidden sm:block" style="background-image: radial-gradient(circle at 1px 1px, #4ade80 1px, transparent 0); background-size: 30px 30px;"></div>
        <div class="absolute inset-0 opacity-5 animate-float sm:hidden" style="background-image: radial-gradient(circle at 1px 1px, #4ade80 1px, transparent 0); background-size: 20px 20px;"></div>
        
        <!-- Linhas de código estilizadas -->
        <div class="absolute top-[30%] sm:top-[40%] left-[3%] sm:left-[5%] opacity-10 scale-75 sm:scale-100">
          <div class="h-1 w-16 sm:w-32 bg-primary/30 mb-3 animate-width"></div>
          <div class="h-1 w-24 sm:w-48 bg-primary/20 mb-3 animate-width-delay"></div>
          <div class="h-1 w-12 sm:w-24 bg-primary/40 animate-width-delay-2"></div>
        </div>

        <!-- Hexágonos tech -->
        <div class="absolute top-[15%] right-[35%] opacity-10 animate-spin-slow scale-75 sm:scale-100">
          <svg width="40" height="40" sm:width="60" sm:height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="text-primary">
            <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" />
          </svg>
        </div>

        <!-- Matriz de pontos animada -->
        <div class="absolute right-[5%] sm:right-[10%] bottom-[10%] sm:bottom-[20%] grid grid-cols-3 gap-1 sm:gap-2 opacity-20 scale-75 sm:scale-100">
          <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-ping"></div>
          <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-ping" style="animation-delay: 0.2s"></div>
          <div class="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-ping" style="animation-delay: 0.4s"></div>
        </div>

        <!-- Linhas conectoras -->
        <svg class="absolute inset-0 w-full h-full opacity-5 hidden sm:block">
          <line x1="20%" y1="20%" x2="40%" y2="40%" stroke="currentColor" class="text-primary animate-draw" stroke-width="1" />
          <line x1="80%" y1="20%" x2="60%" y2="40%" stroke="currentColor" class="text-primary animate-draw-delay" stroke-width="1" />
          <line x1="50%" y1="80%" x2="50%" y2="60%" stroke="currentColor" class="text-primary animate-draw-delay-2" stroke-width="1" />
        </svg>
      </div>

      <div class="container relative z-10">
        <div class="max-w-3xl">
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span class="block text-lg sm:text-xl md:text-2xl font-normal text-primary mb-2">Audentes Tech</span>
            Transforme sua presença digital com um site
            <span class="text-primary">rápido</span> e
            <span class="text-primary">impactante</span>
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
              <Icon name="heroicons:building-office" class="text-4xl text-primary" />
            </div>
            <h3 class="text-2xl font-bold mb-4">Empresas e Profissionais</h3>
            <p class="text-light/80 mb-6">
              Soluções sob medida para pequenos e médios negócios, clínicas, lojas e profissionais autônomos.
              Sites institucionais e landing pages que convertem visitantes em clientes.
            </p>
            <NuxtLink to="/servicos#empresas" class="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2">
              Saiba mais
              <Icon name="heroicons:arrow-right" />
            </NuxtLink>
          </div>

          <!-- Projetos Complexos -->
          <div class="card hover:scale-[1.02] transition-transform">
            <div class="mb-6">
              <Icon name="heroicons:cube" class="text-4xl text-primary" />
            </div>
            <h3 class="text-2xl font-bold mb-4">Projetos Complexos</h3>
            <p class="text-light/80 mb-6">
              Desenvolvimento de aplicações web e e-commerce para startups e empresas com demandas específicas.
              Soluções escaláveis e personalizadas para seu negócio.
            </p>
            <NuxtLink to="/servicos#projetos" class="text-primary hover:text-primary/80 font-semibold inline-flex items-center gap-2">
              Saiba mais
              <Icon name="heroicons:arrow-right" />
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
              <Icon name="heroicons:rocket-launch" class="text-4xl text-primary" />
            </div>
            <h3 class="text-xl font-bold mb-4">Performance Excepcional</h3>
            <p class="text-light/80">
              Sites otimizados para carregamento ultrarrápido e experiência fluida em qualquer dispositivo.
            </p>
          </div>

          <div class="text-center">
            <div class="mb-6">
              <Icon name="heroicons:presentation-chart-line" class="text-4xl text-primary" />
            </div>
            <h3 class="text-xl font-bold mb-4">SEO Otimizado</h3>
            <p class="text-light/80">
              Estratégias avançadas de SEO para melhor visibilidade nos motores de busca.
            </p>
          </div>

          <div class="text-center">
            <div class="mb-6">
              <Icon name="heroicons:cursor-arrow-rays" class="text-4xl text-primary" />
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
    <section class="section bg-primary/10 relative overflow-hidden">
      <!-- Elementos decorativos de negócios -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Símbolos de dinheiro animados -->
        <div class="absolute top-10 left-[10%] opacity-10 text-primary text-4xl font-bold animate-float">$</div>
        <div class="absolute bottom-20 right-[15%] opacity-10 text-primary text-5xl font-bold animate-float-delay">$</div>
        <div class="absolute top-1/3 right-[25%] opacity-10 text-primary text-3xl font-bold animate-float-delay-2">$</div>

        <!-- Gráfico de crescimento -->
        <svg class="absolute left-[5%] bottom-[20%] w-32 h-32 opacity-10 text-primary animate-draw" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 20h18M3 20v-8l6-6 4 4 8-8" />
        </svg>

        <!-- Lupa de análise -->
        <svg class="absolute right-[10%] top-[20%] w-24 h-24 opacity-10 text-primary animate-spin-very-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>

        <!-- Círculos de métricas -->
        <div class="absolute left-[20%] top-[30%] opacity-10">
          <div class="w-16 h-16 rounded-full border-2 border-primary animate-pulse-slow"></div>
          <div class="w-3 h-3 bg-primary rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <!-- Barras de progresso -->
        <div class="absolute right-[30%] bottom-[30%] space-y-2 opacity-10">
          <div class="h-1 w-16 bg-primary/30 animate-width"></div>
          <div class="h-1 w-24 bg-primary/40 animate-width-delay"></div>
          <div class="h-1 w-20 bg-primary/50 animate-width-delay-2"></div>
        </div>

        <!-- Porcentagem de ROI -->
        <div class="absolute left-[40%] top-[15%] opacity-10 text-primary text-2xl font-bold animate-fade-in">
          +ROI
        </div>

        <!-- Hexágono de resultado -->
        <svg class="absolute right-[40%] bottom-[15%] w-20 h-20 opacity-10 text-primary animate-spin-reverse-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" />
          <path d="M12 7v10M7 9.5L17 14.5M7 14.5L17 9.5" />
        </svg>
      </div>

      <div class="container text-center relative z-10">
        <h2 class="heading-2 mb-6">Pronto para transformar sua presença digital?</h2>
        <p class="text-xl text-light/80 mb-8 max-w-2xl mx-auto">
          Vamos criar juntos um site que represente sua marca e traga resultados reais para seu negócio.
        </p>
        <NuxtLink to="/contato" class="btn-primary inline-block group relative overflow-hidden">
          <span class="relative z-10">Vamos conversar</span>
          <div class="absolute inset-0 bg-primary/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <div class="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 delay-75"></div>
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