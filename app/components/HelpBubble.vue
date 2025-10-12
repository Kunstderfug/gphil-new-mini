<template>
  <!-- <dialog :open="style.showHint"> -->
  <div
    class="fixed top-24 left-1/4 backdrop-blur-lg z-1000 rounded-2xl"
    :class="bubblePosition"
    style="
      background-color: rgba(30, 30, 40, 0.8);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    "
  >
    <div id="help-bubble" class="w-full max-h-80 p-10 my-0 text-gray-200">
      <slot></slot>
    </div>
    <UIcon
      name="i-quill:escape"
      class="absolute top-3 right-3 cursor-pointer hover:text-gray-400"
      @click="style.hideHelpBubble"
    />
  </div>
  <!-- </dialog> -->
</template>

<script setup lang="ts">
import { useStyle } from "@/stores/useStyle";
const style = useStyle();

defineProps<{
  bubblePosition?: string;
}>();
</script>

<style>
#help-bubble {
  resize: both;
  overflow: auto;
  background: transparent;
}
</style>
