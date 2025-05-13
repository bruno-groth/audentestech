<template>
  <div class="section">
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
            <i class="i-mdi-whatsapp text-4xl text-primary mb-4"></i>
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
            <i class="i-heroicons-envelope text-4xl text-primary mb-4"></i>
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