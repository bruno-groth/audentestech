<template>
  <div>
    <!-- Hero Section -->
    <section class="section">
      <div class="container">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="heading-1 mb-6">Empresa de Software e Desenvolvimento de Sistemas</h1>
          <p class="text-xl text-light/80 mb-8">
            A Audentes Tech é uma empresa de software especializada em desenvolvimento de sistemas web, 
            aplicações personalizadas e soluções tecnológicas para empresas de todos os portes.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/contato" class="btn-primary">
              Falar com Especialista
            </NuxtLink>
            <NuxtLink to="#solucoes" class="btn-secondary">
              Ver Soluções
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Soluções Section -->
    <section id="solucoes" class="section bg-dark/30">
      <div class="container">
        <h2 class="heading-2 text-center mb-12">Soluções de Software que Desenvolvemos</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card">
            <Icon name="heroicons:computer-desktop" class="text-4xl text-primary mb-4" />
            <h3 class="text-xl font-bold mb-3">Sistemas Web Personalizados</h3>
            <p class="text-light/80">
              Desenvolvimento de sistemas web sob medida para automatizar processos empresariais.
            </p>
          </div>
          
          <div class="card">
            <Icon name="heroicons:shopping-bag" class="text-4xl text-primary mb-4" />
            <h3 class="text-xl font-bold mb-3">E-commerce Avançado</h3>
            <p class="text-light/80">
              Plataformas de vendas online com funcionalidades personalizadas e integrações.
            </p>
          </div>
          
          <div class="card">
            <Icon name="heroicons:cloud" class="text-4xl text-primary mb-4" />
            <h3 class="text-xl font-bold mb-3">Aplicações na Nuvem</h3>
            <p class="text-light/80">
              Sistemas escaláveis hospedados na nuvem com alta disponibilidade.
            </p>
          </div>
          
          <div class="card">
            <Icon name="heroicons:chart-bar" class="text-4xl text-primary mb-4" />
            <h3 class="text-xl font-bold mb-3">Dashboards e BI</h3>
            <p class="text-light/80">
              Painéis inteligentes para análise de dados e business intelligence.
            </p>
          </div>
          
          <div class="card">
            <Icon name="heroicons:cog" class="text-4xl text-primary mb-4" />
            <h3 class="text-xl font-bold mb-3">APIs e Integrações</h3>
            <p class="text-light/80">
              Desenvolvimento de APIs e integração entre diferentes sistemas.
            </p>
          </div>
          
          <div class="card">
            <Icon name="heroicons:device-phone-mobile" class="text-4xl text-primary mb-4" />
            <h3 class="text-xl font-bold mb-3">Progressive Web Apps</h3>
            <p class="text-light/80">
              Aplicações web que funcionam como apps nativos em dispositivos móveis.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tecnologias Section -->
    <section class="section">
      <div class="container">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="heading-2 mb-12">Tecnologias que Nossa Empresa de Software Utiliza</h2>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div class="text-center p-4">
              <div class="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span class="text-primary font-bold">JS</span>
              </div>
              <p class="font-semibold">JavaScript</p>
            </div>
            
            <div class="text-center p-4">
              <div class="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span class="text-primary font-bold">TS</span>
              </div>
              <p class="font-semibold">TypeScript</p>
            </div>
            
            <div class="text-center p-4">
              <div class="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span class="text-primary font-bold">Vue</span>
              </div>
              <p class="font-semibold">Vue.js</p>
            </div>
            
            <div class="text-center p-4">
              <div class="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span class="text-primary font-bold">Nuxt</span>
              </div>
              <p class="font-semibold">Nuxt.js</p>
            </div>
          </div>
          
          <p class="text-light/80">
            Nossa empresa de software trabalha com as tecnologias mais modernas do mercado, 
            garantindo soluções robustas, escaláveis e de fácil manutenção.
          </p>
        </div>
      </div>
    </section>

    <!-- Processo Section -->
    <section class="section bg-dark/50">
      <div class="container">
        <div class="max-w-4xl mx-auto">
          <h2 class="heading-2 text-center mb-12">Nosso Processo de Desenvolvimento</h2>
          
          <div class="space-y-8">
            <div class="flex items-start gap-6">
              <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-dark font-bold">1</span>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Análise de Requisitos</h3>
                <p class="text-light/80">
                  Levantamento detalhado das necessidades e especificações do software.
                </p>
              </div>
            </div>
            
            <div class="flex items-start gap-6">
              <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-dark font-bold">2</span>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Arquitetura e Planejamento</h3>
                <p class="text-light/80">
                  Definição da arquitetura do sistema e cronograma de desenvolvimento.
                </p>
              </div>
            </div>
            
            <div class="flex items-start gap-6">
              <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-dark font-bold">3</span>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Desenvolvimento Ágil</h3>
                <p class="text-light/80">
                  Codificação usando metodologias ágeis com entregas incrementais.
                </p>
              </div>
            </div>
            
            <div class="flex items-start gap-6">
              <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-dark font-bold">4</span>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Testes e Qualidade</h3>
                <p class="text-light/80">
                  Testes rigorosos para garantir qualidade e funcionamento perfeito.
                </p>
              </div>
            </div>
            
            <div class="flex items-start gap-6">
              <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span class="text-dark font-bold">5</span>
              </div>
              <div>
                <h3 class="text-xl font-bold mb-2">Deploy e Suporte</h3>
                <p class="text-light/80">
                  Implementação do sistema e suporte técnico contínuo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section bg-primary/10">
      <div class="container text-center">
        <h2 class="heading-2 mb-6">Precisa de uma Empresa de Software Confiável?</h2>
        <p class="text-xl text-light/80 mb-8 max-w-2xl mx-auto">
          Nossa equipe de desenvolvedores está pronta para criar a solução perfeita 
          para automatizar e otimizar os processos da sua empresa.
        </p>
        <NuxtLink to="/contato" class="btn-primary">
          Solicitar Proposta Técnica
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Empresa de Software | Desenvolvimento de Sistemas Personalizados',
  meta: [
    {
      name: 'description',
      content: 'Empresa de software especializada em desenvolvimento de sistemas web, aplicações personalizadas e soluções tecnológicas empresariais.'
    },
    {
      name: 'keywords',
      content: 'empresa de software, desenvolvimento de sistemas, software personalizado, sistemas web, aplicações empresariais, empresa tecnologia'
    }
  ]
})
</script>
