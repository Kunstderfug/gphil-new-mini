<script setup lang="ts">
defineProps<{
  title: string;
  subtitle?: string;
}>();
</script>

<template>
  <h4 class="font-bold">{{ title }}</h4>
  <p v-if="subtitle">{{ subtitle }}</p>
</template>
