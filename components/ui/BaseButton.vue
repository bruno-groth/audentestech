<template>
  <component
    :is="as"
    :class="[
      'inline-flex items-center justify-center transition-colors duration-300',
      variant === 'primary' && 'bg-primary hover:bg-primary/90 text-dark',
      variant === 'secondary' && 'bg-dark border-2 border-primary text-primary hover:bg-primary hover:text-dark',
      variant === 'outline' && 'border-2 border-primary/20 hover:border-primary/40 text-light',
      size === 'sm' && 'px-4 py-2 text-sm',
      size === 'md' && 'px-6 py-3',
      size === 'lg' && 'px-8 py-4 text-lg',
      rounded && 'rounded-lg',
      fullWidth && 'w-full',
      disabled && 'opacity-50 cursor-not-allowed',
      className
    ]"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  as?: string | object
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  rounded?: boolean
  fullWidth?: boolean
  disabled?: boolean
  className?: string
}

withDefaults(defineProps<Props>(), {
  as: 'button',
  variant: 'primary',
  size: 'md',
  rounded: true,
  fullWidth: false,
  disabled: false,
  className: ''
})
</script>