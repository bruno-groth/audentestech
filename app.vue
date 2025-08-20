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

// Adicionar canonical URL dinâmica para todas as páginas
const route = useRoute()
const siteUrl = useSiteUrl()

useSeoMeta({
  canonical: () => `${siteUrl}${route.path}`
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
