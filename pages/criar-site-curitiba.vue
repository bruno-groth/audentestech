<template>
  <div>
    <!-- Hero Section -->
    <section class="section">
      <div class="container">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="heading-1 mb-6">Criar Site em Curitiba Empresa Especializada</h1>
          <p class="text-xl text-light/80 mb-8">
            Procurando uma empresa para criar site em Curitiba? A Audentes Tech é especializada 
            em desenvolvimento web para empresas na capital paranaense e região metropolitana.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/contato" class="btn-primary">
              Solicitar Orçamento
            </NuxtLink>
            <NuxtLink to="#servicos" class="btn-secondary">
              Ver Nossos Serviços
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Por que Curitiba Section -->
    <section class="section bg-dark/30">
      <div class="container">
        <div class="max-w-4xl mx-auto">
          <h2 class="heading-2 text-center mb-12">Por que Escolher uma Empresa Local para Criar seu Site?</h2>
          
          <div class="grid md:grid-cols-2 gap-8">
            <div class="card">
              <h3 class="text-xl font-bold mb-4 text-primary">Atendimento Personalizado</h3>
              <p class="text-light/80">
                Como empresa de Curitiba, oferecemos atendimento presencial e conhecemos 
                as necessidades específicas do mercado local.
              </p>
            </div>
            
            <div class="card">
              <h3 class="text-xl font-bold mb-4 text-primary">Conhecimento do Mercado Local</h3>
              <p class="text-light/80">
                Entendemos o comportamento do consumidor curitibano e criamos sites 
                que convertem visitantes em clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Serviços Section -->
    <section id="servicos" class="section">
      <div class="container">
        <h2 class="heading-2 text-center mb-12">Tipos de Sites que Criamos em Curitiba</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card text-center">
            <Icon name="heroicons:building-office" class="text-4xl text-primary mb-4" />
            <h3 class="text-xl font-bold mb-3">Sites Institucionais</h3>
            <p class="text-light/80">
              Criar site para empresa com design profissional, responsivo e otimizado para SEO.
            </p>
          </div>
          
          <div class="card text-center">
            <Icon name="heroicons:shopping-cart" class="text-4xl text-primary mb-4" />
            <h3 class="text-xl font-bold mb-3">E-commerce</h3>
            <p class="text-light/80">
              Lojas virtuais completas com sistema de pagamento e gestão de produtos.
            </p>
          </div>
          
          <div class="card text-center">
            <Icon name="heroicons:megaphone" class="text-4xl text-primary mb-4" />
            <h3 class="text-xl font-bold mb-3">Landing Pages</h3>
            <p class="text-light/80">
              Páginas de conversão otimizadas para campanhas de marketing digital.
            </p>
          </div>
          
          <div class="card text-center">
            <Icon name="heroicons:heart" class="text-4xl text-primary mb-4" />
            <h3 class="text-xl font-bold mb-3">Sites para Clínicas</h3>
            <p class="text-light/80">
              Sites especializados para profissionais da saúde em Curitiba.
            </p>
          </div>
          
          <div class="card text-center">
            <Icon name="heroicons:briefcase" class="text-4xl text-primary mb-4" />
            <h3 class="text-xl font-bold mb-3">Sites para Advogados</h3>
            <p class="text-light/80">
              Presença digital profissional para escritórios de advocacia.
            </p>
          </div>
          
          <div class="card text-center">
            <Icon name="heroicons:wrench-screwdriver" class="text-4xl text-primary mb-4" />
            <h3 class="text-xl font-bold mb-3">Sites para Prestadores</h3>
            <p class="text-light/80">
              Sites para prestadores de serviços diversos em Curitiba.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Processo Section -->
    <section class="section bg-dark/50">
      <div class="container">
        <div class="max-w-4xl mx-auto">
          <h2 class="heading-2 text-center mb-12">Como Criamos seu Site em Curitiba</h2>
          
          <div class="grid md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-dark font-bold">1</span>
              </div>
              <h3 class="font-bold mb-2">Reunião Inicial</h3>
              <p class="text-light/80 text-sm">Entendemos suas necessidades e objetivos</p>
            </div>
            
            <div class="text-center">
              <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-dark font-bold">2</span>
              </div>
              <h3 class="font-bold mb-2">Planejamento</h3>
              <p class="text-light/80 text-sm">Criamos a estrutura e estratégia do site</p>
            </div>
            
            <div class="text-center">
              <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-dark font-bold">3</span>
              </div>
              <h3 class="font-bold mb-2">Desenvolvimento</h3>
              <p class="text-light/80 text-sm">Nossos programadores criam seu site</p>
            </div>
            
            <div class="text-center">
              <div class="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-dark font-bold">4</span>
              </div>
              <h3 class="font-bold mb-2">Entrega</h3>
              <p class="text-light/80 text-sm">Site no ar com treinamento completo</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section bg-primary/10">
      <div class="container text-center">
        <h2 class="heading-2 mb-6">Pronto para Criar seu Site em Curitiba?</h2>
        <p class="text-xl text-light/80 mb-8 max-w-2xl mx-auto">
          Entre em contato conosco e descubra como podemos ajudar sua empresa 
          a ter uma presença digital de sucesso na capital paranaense.
        </p>
        <NuxtLink to="/contato" class="btn-primary">
          Solicitar Orçamento Gratuito
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Criar Site em Curitiba | Empresa Especializada em Desenvolvimento Web',
  meta: [
    {
      name: 'description',
      content: 'Empresa especializada em criar sites em Curitiba. Desenvolvimento web profissional para empresas na capital paranaense. Orçamento gratuito!'
    },
    {
      name: 'keywords',
      content: 'criar site Curitiba, empresa criação site Curitiba, desenvolvimento web Curitiba, programador sites Curitiba, site profissional Curitiba'
    }
  ]
})

// Schema.org para SEO local
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Criação de Sites em Curitiba",
        "provider": {
          "@type": "Organization",
          "name": "Audentes Tech",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Curitiba",
            "addressRegion": "PR",
            "addressCountry": "BR"
          }
        },
        "areaServed": {
          "@type": "City",
          "name": "Curitiba"
        },
        "description": "Empresa especializada em criar sites profissionais em Curitiba e região metropolitana."
      })
    }
  ]
})
</script>
