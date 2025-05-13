export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:start', () => {
    // Add initial state classes
    document.body.classList.add('page-transitioning')
  })

  nuxtApp.hook('page:finish', () => {
    // Remove transition classes after animation completes
    setTimeout(() => {
      document.body.classList.remove('page-transitioning')
    }, 300)
  })
})