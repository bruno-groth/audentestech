import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  if (typeof window !== 'undefined') {
    nuxtApp.hook('app:mounted', () => {
      AOS.init({
        duration: 100,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
        disable: 'mobile'
      })
    })
  }
})