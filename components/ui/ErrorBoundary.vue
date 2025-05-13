<template>
  <div v-if="error" class="min-h-screen flex items-center justify-center bg-dark">
    <div class="container max-w-2xl text-center">
      <div class="card">
        <Icon name="heroicons:exclamation-triangle" class="text-6xl text-primary mb-6" />
        <h1 class="heading-2 mb-4">Oops! Algo deu errado</h1>
        <p class="text-light/80 mb-8">
          {{ error.message || 'Ocorreu um erro inesperado. Por favor, tente novamente.' }}
        </p>
        <button @click="handleError" class="btn-primary">
          Tentar novamente
        </button>
      </div>
    </div>
  </div>
  <slot v-else></slot>
</template>

<script setup lang="ts">
const error = ref<Error | null>(null)

const handleError = () => {
  error.value = null
  window.location.reload()
}

onErrorCaptured((err: Error) => {
  error.value = err
  return false
})
</script>