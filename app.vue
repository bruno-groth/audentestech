<template>
  <NuxtLayout>

    <UiErrorBoundary>
      <NuxtPage />
    </UiErrorBoundary>
  </NuxtLayout>
</template>

<script setup>

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
html {
  scroll-behavior: smooth;
}

::selection {
  background-color: var(--color-primary);
  color: var(--color-dark);
}
</style>
