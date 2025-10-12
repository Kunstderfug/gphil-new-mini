<template>
  <Hint :class="hintPosition" />
  <HelpBubble v-if="style.showHint" :style="bubblePosition">
    <slot></slot>
  </HelpBubble>
</template>
 
<script setup lang="ts">
import { useStyle } from '@/stores/useStyle'

const style = useStyle()

defineProps<{
  bubblePosition?: string,
  hintPosition?: string
}>()
</script>