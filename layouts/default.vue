<!-- layouts/default.vue -->
<template>
  <div class="min-h-screen flex flex-col">
    <header class="fixed w-full top-0 z-50 bg-dark/80 backdrop-blur-lg border-b border-primary/10">
      <nav class="container flex items-center justify-between h-20">
        <NuxtLink to="/" class="text-2xl font-bold text-primary">
          Audentes Tech
        </NuxtLink>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8">
          <NuxtLink to="/" class="text-light hover:text-primary transition-colors">Home</NuxtLink>
          <NuxtLink to="/sobre" class="text-light hover:text-primary transition-colors">Sobre</NuxtLink>
          <NuxtLink to="/servicos" class="text-light hover:text-primary transition-colors">Serviços</NuxtLink>
          <NuxtLink to="/portfolio" class="text-light hover:text-primary transition-colors">Portfólio</NuxtLink>
          <NuxtLink to="/blog" class="text-light hover:text-primary transition-colors">Blog</NuxtLink>
          <NuxtLink to="/contato" class="btn-primary">Vamos conversar</NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden" @click="isMobileMenuOpen = !isMobileMenuOpen">
          <span class="sr-only">Menu</span>
          <div class="w-6 h-6 flex items-center justify-center">
            <Icon name="heroicons:bars-3" class="text-2xl" v-if="!isMobileMenuOpen" />
            <Icon name="heroicons:x-mark" class="text-2xl" v-else />
          </div>
        </button>
      </nav>

      <!-- Mobile Navigation -->
      <div v-if="isMobileMenuOpen" class="md:hidden bg-dark border-t border-primary/10">
        <div class="container py-4 flex flex-col gap-4">
          <NuxtLink to="/" class="text-light hover:text-primary transition-colors">Home</NuxtLink>
          <NuxtLink to="/sobre" class="text-light hover:text-primary transition-colors">Sobre</NuxtLink>
          <NuxtLink to="/servicos" class="text-light hover:text-primary transition-colors">Serviços</NuxtLink>
          <NuxtLink to="/portfolio" class="text-light hover:text-primary transition-colors">Portfólio</NuxtLink>
          <NuxtLink to="/blog" class="text-light hover:text-primary transition-colors">Blog</NuxtLink>
          <NuxtLink to="/contato" class="btn-primary inline-block text-center">Vamos conversar</NuxtLink>
        </div>
      </div>
    </header>

    <main class="flex-grow pt-20">
      <slot />
    </main>

    <footer class="bg-dark/50 border-t border-primary/10 py-12">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-xl font-bold text-primary mb-4">Audentes Tech</h3>
            <p class="text-light/80">Criando presença digital com tecnologia e inovação.</p>
          </div>
          
          <div>
            <h4 class="font-semibold mb-4">Links Rápidos</h4>
            <div class="flex flex-col gap-2">
              <NuxtLink to="/sobre" class="text-light/80 hover:text-primary">Sobre</NuxtLink>
              <NuxtLink to="/servicos" class="text-light/80 hover:text-primary">Serviços</NuxtLink>
              <NuxtLink to="/portfolio" class="text-light/80 hover:text-primary">Portfólio</NuxtLink>
              <NuxtLink to="/blog" class="text-light/80 hover:text-primary">Blog</NuxtLink>
            </div>
          </div>
          
          <div>
            <h4 class="font-semibold mb-4">Serviços</h4>
            <div class="flex flex-col gap-2">
              <NuxtLink to="/servicos#sites" class="text-light/80 hover:text-primary">Sites Institucionais</NuxtLink>
              <NuxtLink to="/servicos#landing" class="text-light/80 hover:text-primary">Landing Pages</NuxtLink>
              <NuxtLink to="/servicos#apps" class="text-light/80 hover:text-primary">Web Apps</NuxtLink>
              <NuxtLink to="/servicos#ecommerce" class="text-light/80 hover:text-primary">E-commerce</NuxtLink>
            </div>
          </div>
          
          <div>
            <h4 class="font-semibold mb-4">Contato</h4>
            <div class="flex flex-col gap-2">
              <a href="mailto:adm.audentestech@gmail.com" class="text-light/80 hover:text-primary">
                adm.audentestech@gmail.com
              </a>
              <a href="https://wa.me/5541999964650" target="_blank" rel="noopener noreferrer" class="text-light/80 hover:text-primary">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        <div class="mt-12 pt-8 border-t border-primary/10 text-center text-light/60">
          <p>&copy; {{ new Date().getFullYear() }} Audentes Tech. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>

    <!-- WhatsApp Floating Button -->
    <a href="https://wa.me/5541999964650" 
       target="_blank" 
       rel="noopener noreferrer"
       class="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-dark p-4 rounded-full shadow-lg transition-transform hover:scale-105 z-50">
      <Icon name="mdi:whatsapp" class="text-2xl" />
      <span class="sr-only">WhatsApp</span>
    </a>
  </div>
</template>

<script setup>
const isMobileMenuOpen = ref(false)

// Close mobile menu when route changes
watch(() => useRoute().path, () => {
  isMobileMenuOpen.value = false
})
</script>