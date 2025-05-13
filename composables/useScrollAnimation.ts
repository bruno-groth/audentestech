import { onMounted, onUnmounted } from 'vue'

export const useScrollAnimation = () => {
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('[data-aos]')
    const windowHeight = window.innerHeight

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top

      if (elementTop < windowHeight * 0.85) {
        element.classList.add('aos-animate')
      }
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', animateOnScroll)
    animateOnScroll() // Initial check
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', animateOnScroll)
  })

  return {
    animateOnScroll
  }
}

export const scrollAnimationDirective = {
  mounted: (el: HTMLElement, binding: any) => {
    el.setAttribute('data-aos', binding.value || 'fade-up')
    el.classList.add('aos-init')
  }
}