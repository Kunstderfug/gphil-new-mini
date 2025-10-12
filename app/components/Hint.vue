<template>
  <div
    class="absolute cursor-pointer ml-1"
    @click="style.toggleHelpBubble"
    :class="hintPosition"
  >
    <UIcon name="i-mdi:help-circle-outline" class="w-4 h-4" />
  </div>
</template>

<script setup lang="ts">
import { useStyle } from "@/stores/useStyle";
const style = useStyle();

defineProps<{
  hintPosition?: string;
}>();
</script>
