<template>
  <button
    :class="[
      style.elegantButtons.pill,
      'inline-flex items-center px-4 py-2 text-sm font-medium leading-none text-white rounded-lg transition-all duration-300 group',
    ]"
  >
    <span class="tracking-wide">{{
      name.toUpperCase().replace("_", " ")
    }}</span>
  </button>
</template>

<script setup lang="ts">
const style = useStyle();

defineProps({
  name: {
    type: String,
    required: true,
  },
});
</script>
