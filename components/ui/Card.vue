<template>
  <div 
    :class="[
      'overflow-hidden',
      hover && 'group hover:scale-[1.02] transition-all duration-300',
      variant === 'default' && 'card',
      variant === 'elevated' && 'card shadow-lg shadow-primary/5',
      variant === 'bordered' && 'card border-2 border-primary/20',
      className
    ]"
  >
    <slot name="image" />
    <div :class="[padding && 'p-6']">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'default' | 'elevated' | 'bordered'
  hover?: boolean
  padding?: boolean
  className?: string
}

withDefaults(defineProps<Props>(), {
  variant: 'default',
  hover: false,
  padding: true,
  className: ''
})
</script>