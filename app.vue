<template>
  <NuxtLayout>
    <div 
      v-if="isLoading" 
      class="fixed inset-0 bg-dark/80 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <LoadingSpinner size="lg" className="text-primary" />
    </div>
    <ErrorBoundary>
      <NuxtPage />
    </ErrorBoundary>
  </NuxtLayout>
</template>

<script setup>
const isLoading = ref(false)

// Loading state handler
useRouter().beforeEach(() => {
  isLoading.value = true
})
useRouter().afterEach(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 200)
})

useHead({
  htmlAttrs: {
    lang: 'pt-BR',
  },
  bodyAttrs: {
    class: 'font-sans antialiased bg-dark text-light',
  },
})
</script>

<style>
.page-transitioning {
  opacity: 0;
  transition: opacity 0.3s ease;
}

html {
  scroll-behavior: smooth;
}

::selection {
  background-color: var(--color-primary);
  color: var(--color-dark);
}
</style>
