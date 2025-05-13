import { defineNuxtPlugin } from '#app'
import LoadingSpinner from '~/components/ui/LoadingSpinner.vue'
import ErrorBoundary from '~/components/ui/ErrorBoundary.vue'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('LoadingSpinner', LoadingSpinner)
  nuxtApp.vueApp.component('ErrorBoundary', ErrorBoundary)
})