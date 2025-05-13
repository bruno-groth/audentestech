<template>
  <div>
    <!-- Hero Section -->
    <section class="section relative overflow-hidden">
      <!-- Elementos decorativos hero -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Círculos tech -->
        <div class="absolute left-[5%] top-[20%] w-32 h-32 sm:w-48 sm:h-48 rounded-full border-2 border-primary/20 opacity-20 animate-pulse-slow"></div>
        <div class="absolute right-[10%] bottom-[10%] w-24 h-24 sm:w-40 sm:h-40 rounded-full border border-primary/15 opacity-15 animate-spin-slow"></div>
        
        <!-- Código decorativo -->
        <div class="absolute top-[15%] right-[20%] opacity-10 text-primary font-mono animate-fade-in">
          <div class="text-sm sm:text-base">&lt;code&gt;</div>
          <div class="text-sm sm:text-base ml-4">innovation</div>
          <div class="text-sm sm:text-base">&lt;/code&gt;</div>
        </div>
      </div>

      <div class="container relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="heading-1 mb-6">Sobre a Audentes Tech</h1>
          <p class="text-xl text-light/80">
            Somos uma empresa especializada em criar experiências digitais impactantes,
            com foco em performance, design e resultados.
          </p>
        </div>
      </div>
    </section>

    <!-- Vision & Values -->
    <section class="section bg-dark/50 relative overflow-hidden">
      <!-- Elementos decorativos valores -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Linhas de conexão -->
        <svg class="absolute inset-0 w-full h-full opacity-5">
          <line x1="20%" y1="30%" x2="40%" y2="60%" stroke="currentColor" class="text-primary animate-draw" stroke-width="1" />
          <line x1="80%" y1="40%" x2="60%" y2="70%" stroke="currentColor" class="text-primary animate-draw-delay" stroke-width="1" />
        </svg>

        <!-- Pontos de conexão -->
        <div class="absolute right-[25%] top-[40%] grid grid-cols-3 gap-1 opacity-10">
          <div class="w-1 h-1 bg-primary rounded-full animate-ping"></div>
          <div class="w-1 h-1 bg-primary rounded-full animate-ping" style="animation-delay: 0.2s"></div>
          <div class="w-1 h-1 bg-primary rounded-full animate-ping" style="animation-delay: 0.4s"></div>
        </div>
      </div>

      <div class="container relative z-10">
        <div class="grid md:grid-cols-2 gap-12">
          <div>
            <h2 class="heading-2 mb-6">Nossa Visão</h2>
            <p class="text-light/80 mb-6">
              Acreditamos que cada negócio merece uma presença digital excepcional.
              Nossa missão é criar sites e aplicações que não apenas impressionam visualmente,
              mas também geram resultados tangíveis para nossos clientes.
            </p>
            <p class="text-light/80">
              Combinamos tecnologia de ponta, design intuitivo e estratégias comprovadas
              para criar soluções digitais que se destacam em um mercado cada vez mais competitivo.
            </p>
          </div>

          <div>
            <h2 class="heading-2 mb-6">Nossos Valores</h2>
            <div class="space-y-6">
              <div class="flex gap-4">
                <div class="shrink-0">
                  <Icon name="heroicons:light-bulb" class="text-3xl text-primary" />
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2">Inovação</h3>
                  <p class="text-light/80">
                    Utilizamos as mais recentes tecnologias e melhores práticas para criar soluções modernas e eficientes.
                  </p>
                </div>
              </div>

              <div class="flex gap-4">
                <div class="shrink-0">
                  <Icon name="heroicons:rocket-launch" class="text-3xl text-primary" />
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2">Performance</h3>
                  <p class="text-light/80">
                    Desenvolvemos sites rápidos e otimizados, garantindo a melhor experiência para seus usuários.
                  </p>
                </div>
              </div>

              <div class="flex gap-4">
                <div class="shrink-0">
                  <Icon name="heroicons:user-group" class="text-3xl text-primary" />
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2">Compromisso</h3>
                  <p class="text-light/80">
                    Trabalhamos em parceria com nossos clientes, focando em suas necessidades e objetivos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Stack -->
    <section class="section relative overflow-hidden">
      <!-- Elementos decorativos tech -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Hexágonos tech -->
        <div class="absolute left-[10%] top-[20%] opacity-10">
          <svg class="w-16 h-16 text-primary animate-spin-very-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" />
          </svg>
        </div>
        <div class="absolute right-[15%] bottom-[25%] opacity-10">
          <svg class="w-12 h-12 text-primary animate-spin-reverse-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" />
          </svg>
        </div>

        <!-- Grid de pontos -->
        <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle at 1px 1px, #4ade80 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>

      <div class="container relative z-10">
        <div class="max-w-3xl mx-auto">
          <h2 class="heading-2 text-center mb-12">Nossa Tecnologia</h2>
          <div class="card">
            <p class="text-light/80 mb-8 text-center">
              Utilizamos um stack tecnológico moderno e robusto para criar soluções de alta performance:
            </p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div class="text-center">
                <Icon name="logos:vue" class="text-4xl mb-4" />
                <h3 class="font-semibold mb-2">Vue.js</h3>
                <p class="text-light/80 text-sm">Interfaces modernas</p>
              </div>
              
              <div class="text-center">
                <Icon name="logos:nuxt-icon" class="text-4xl mb-4" />
                <h3 class="font-semibold mb-2">Nuxt.js</h3>
                <p class="text-light/80 text-sm">Performance e SEO</p>
              </div>
              
              <div class="text-center">
                <Icon name="logos:tailwindcss-icon" class="text-4xl mb-4" />
                <h3 class="font-semibold mb-2">Tailwind CSS</h3>
                <p class="text-light/80 text-sm">Design responsivo</p>
              </div>
              
              <div class="text-center">
                <Icon name="logos:nodejs-icon" class="text-4xl mb-4" />
                <h3 class="font-semibold mb-2">Node.js</h3>
                <p class="text-light/80 text-sm">Backend robusto</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="section bg-dark/50 relative overflow-hidden">
      <!-- Elementos decorativos processo -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Linhas de progresso -->
        <div class="absolute left-[5%] top-[40%] space-y-2 opacity-10">
          <div class="h-1 w-16 bg-primary/40 animate-width"></div>
          <div class="h-1 w-24 bg-primary/30 animate-width-delay"></div>
          <div class="h-1 w-32 bg-primary/20 animate-width-delay-2"></div>
        </div>

        <!-- Círculos de processo -->
        <div class="absolute right-[10%] top-[30%] w-20 h-20 rounded-full border border-primary/20 opacity-20 animate-spin-slow"></div>
        
        <!-- Números flutuantes -->
        <div class="absolute right-[20%] bottom-[20%] opacity-10 text-primary font-bold">
          <div class="text-2xl animate-float">01</div>
        </div>
      </div>

      <div class="container relative z-10">
        <h2 class="heading-2 text-center mb-12">Nosso Processo</h2>
        <div class="grid md:grid-cols-4 gap-8">
          <div class="card text-center">
            <div class="mb-6">
              <Icon name="heroicons:chat-bubble-left-right" class="text-4xl text-primary" />
            </div>
            <h3 class="text-xl font-bold mb-4">1. Descoberta</h3>
            <p class="text-light/80">
              Entendemos seus objetivos e necessidades através de uma consultoria personalizada.
            </p>
          </div>

          <div class="card text-center">
            <div class="mb-6">
              <Icon name="heroicons:pencil-square" class="text-4xl text-primary" />
            </div>
            <h3 class="text-xl font-bold mb-4">2. Planejamento</h3>
            <p class="text-light/80">
              Definimos a melhor estratégia e arquitetura para seu projeto.
            </p>
          </div>

          <div class="card text-center">
            <div class="mb-6">
              <Icon name="heroicons:code-bracket" class="text-4xl text-primary" />
            </div>
            <h3 class="text-xl font-bold mb-4">3. Desenvolvimento</h3>
            <p class="text-light/80">
              Criamos sua solução com foco em qualidade e performance.
            </p>
          </div>

          <div class="card text-center">
            <div class="mb-6">
              <Icon name="heroicons:rocket-launch" class="text-4xl text-primary" />
            </div>
            <h3 class="text-xl font-bold mb-4">4. Lançamento</h3>
            <p class="text-light/80">
              Implementamos e otimizamos seu projeto para os melhores resultados.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section relative overflow-hidden">
      <!-- Elementos decorativos CTA -->
      <div class="absolute inset-0 overflow-hidden">
        <!-- Círculo principal -->
        <div class="absolute left-[20%] top-[30%] w-40 h-40 sm:w-56 sm:h-56 rounded-full border-2 border-primary/20 opacity-20 animate-pulse"></div>
        
        <!-- Ícone de conexão -->
        <div class="absolute right-[25%] top-[40%] opacity-10">
          <svg class="w-12 h-12 text-primary animate-bounce-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
          </svg>
        </div>

        <!-- Linhas de conexão -->
        <svg class="absolute inset-0 w-full h-full opacity-5">
          <line x1="30%" y1="40%" x2="50%" y2="60%" stroke="currentColor" class="text-primary animate-draw" stroke-width="1" />
          <line x1="70%" y1="40%" x2="50%" y2="60%" stroke="currentColor" class="text-primary animate-draw-delay" stroke-width="1" />
        </svg>
      </div>

      <div class="container relative z-10 text-center">
        <h2 class="heading-2 mb-6">Vamos criar algo incrível juntos?</h2>
        <p class="text-xl text-light/80 mb-8 max-w-2xl mx-auto">
          Entre em contato para uma consultoria gratuita e descubra como podemos ajudar seu negócio a crescer online.
        </p>
        <NuxtLink to="/contato" class="btn-primary inline-block">
          Iniciar projeto
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Sobre - Audentes Tech',
  meta: [
    {
      name: 'description',
      content: 'Conheça a Audentes Tech: empresa especializada em desenvolvimento web, focada em performance, design e resultados para seu negócio.'
    }
  ]
})
</script>