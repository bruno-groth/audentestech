<template>
  <div class="section relative overflow-hidden">
    <!-- Elementos decorativos temáticos -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Círculos de conexão -->
      <div class="absolute left-[5%] top-[15%] w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-primary/15 opacity-15 animate-pulse-slow"></div>
      <div class="absolute right-[10%] bottom-[10%] w-32 h-32 sm:w-40 sm:h-40 rounded-full border-2 border-primary/20 opacity-20 animate-spin-slow"></div>
      
      <!-- Ícones de comunicação -->
      <div class="absolute top-[10%] right-[20%] opacity-10 text-primary">
        <svg class="w-8 h-8 sm:w-10 sm:h-10 animate-bounce-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
      </div>

      <!-- Linhas de conexão -->
      <div class="absolute left-[15%] top-[40%] space-y-1 opacity-10 scale-75 sm:scale-100">
        <div class="h-1 w-12 sm:w-16 bg-primary/30 animate-width"></div>
        <div class="h-1 w-16 sm:w-24 bg-primary/20 animate-width-delay"></div>
      </div>

      <!-- Ícone de parceria -->
      <div class="absolute right-[15%] top-[40%] opacity-10">
        <svg class="w-10 h-10 sm:w-12 sm:h-12 text-primary animate-spin-very-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
      </div>

      <!-- Ícone de check/sucesso -->
      <div class="absolute left-[25%] bottom-[20%] opacity-10">
        <svg class="w-8 h-8 sm:w-10 sm:h-10 text-primary animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>

      <!-- Pontos de conexão -->
      <div class="absolute right-[30%] bottom-[30%] grid grid-cols-3 gap-1 opacity-10">
        <div class="w-1 h-1 bg-primary rounded-full animate-ping"></div>
        <div class="w-1 h-1 bg-primary rounded-full animate-ping" style="animation-delay: 0.2s"></div>
        <div class="w-1 h-1 bg-primary rounded-full animate-ping" style="animation-delay: 0.4s"></div>
      </div>
    </div>

    <div class="container">
      <div class="max-w-3xl mx-auto">
        <h1 class="heading-1 text-center mb-6">Vamos construir juntos?</h1>
        <p class="text-xl text-center text-light/80 mb-12">
          Conte-nos sobre seu projeto e entraremos em contato para uma conversa personalizada.
        </p>

        <div class="card">
          <form 
            :action="formAction" 
            method="POST"
            class="space-y-6"
            @submit="handleSubmit"
          >
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-medium mb-2">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  class="w-full px-4 py-2 bg-dark rounded-lg border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>

              <div>
                <label for="email" class="block text-sm font-medium mb-2">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  class="w-full px-4 py-2 bg-dark rounded-lg border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label for="project_type" class="block text-sm font-medium mb-2">Tipo de Projeto</label>
              <select 
                id="project_type" 
                name="project_type" 
                required
                class="w-full px-4 py-2 bg-dark rounded-lg border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              >
                <option value="">Selecione uma opção</option>
                <option value="site_institucional">Site Institucional</option>
                <option value="landing_page">Landing Page</option>
                <option value="webapp">Web App</option>
                <option value="ecommerce">E-commerce</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium mb-2">Mensagem</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                required
                class="w-full px-4 py-2 bg-dark rounded-lg border border-primary/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              ></textarea>
            </div>

            <div class="text-center">
              <button 
                type="submit" 
                class="btn-primary min-w-[200px]"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? 'Enviando...' : 'Enviar mensagem' }}
              </button>
            </div>
          </form>
        </div>

        <div class="mt-12 grid md:grid-cols-2 gap-8">
          <div class="card text-center">
            <Icon name="mdi:whatsapp" class="text-4xl text-primary mb-4" />
            <h3 class="text-xl font-bold mb-2">WhatsApp</h3>
            <p class="text-light/80 mb-4">Resposta rápida para suas dúvidas</p>
            <a 
              href="https://wa.me/5541999964650" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-primary hover:text-primary/80"
            >
              (41) 99996-4650
            </a>
          </div>

          <div class="card text-center">
            <Icon name="heroicons:envelope" class="text-4xl text-primary mb-4" />
            <h3 class="text-xl font-bold mb-2">E-mail</h3>
            <p class="text-light/80 mb-4">Para propostas e parcerias</p>
            <a 
              href="mailto:adm.audentestech@gmail.com"
              class="text-primary hover:text-primary/80"
            >
              adm.audentestech@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const formAction = 'https://formspree.io/f/your-form-id'
const isSubmitting = ref(false)

useHead({
  title: 'Contato - Audentes Tech',
  meta: [
    {
      name: 'description',
      content: 'Entre em contato com a Audentes Tech para desenvolver seu projeto web. Solicite um orçamento ou tire suas dúvidas.'
    }
  ]
})

const handleSubmit = async (e) => {
  e.preventDefault()
  isSubmitting.value = true

  try {
    const formData = new FormData(e.target)
    const response = await fetch(formAction, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })

    if (response.ok) {
      e.target.reset()
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
    } else {
      throw new Error('Erro ao enviar mensagem')
    }
  } catch (error) {
    alert('Erro ao enviar mensagem. Por favor, tente novamente.')
  } finally {
    isSubmitting.value = false
  }
}
</script>