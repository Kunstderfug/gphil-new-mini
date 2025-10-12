<template>
  <div
    class="px-4 py-2 fixed right-0 bottom-12 sm:bottom-0 flex items-end gap-1 sm:bg-pink-800 sm:bg-opacity-20 rounded-lg pointer-events-none"
  >
    <span class="hidden sm:inline-flex">{{ text }}</span>
    <UIcon name="i-svg-spinners:3-dots-bounce" class="w-4 h-4 mb-1" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text?: string;
}>();
</script>
