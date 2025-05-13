<template>
  <div class="text-center" :class="className">
    <h2 
      v-if="title" 
      :class="[
        'heading-2 mb-6',
        centered && 'mx-auto',
        maxWidth && `max-w-${maxWidth}`
      ]"
    >
      {{ title }}
    </h2>
    <p 
      v-if="subtitle"
      :class="[
        'text-xl text-light/80',
        centered && 'mx-auto',
        maxWidth && `max-w-${maxWidth}`
      ]"
    >
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
  centered?: boolean
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl'
  className?: string
}

withDefaults(defineProps<Props>(), {
  title: '',
  subtitle: '',
  centered: true,
  maxWidth: '3xl',
  className: ''
})
</script>