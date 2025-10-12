<template>
  <NuxtLink data-menu :to="url" class="flex justify-center items-center gap-4 text-white" :aria-label="ariaLabel">
    <slot />
    {{ isMobile ? '' : text }}
  </NuxtLink>
</template>
 
<script setup lang="ts">
import { isMobile } from '@/composables/useMobile'

defineProps({
  url: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  ariaLabel: {
    type: String,
    required: false
  }
})
</script>