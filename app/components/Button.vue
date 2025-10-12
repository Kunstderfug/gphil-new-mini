<template>
  <button
    v-bind="$attrs"
    class="relative flex justify-center items-center gap-2"
    :class="[
      isDark,
      bg,
      isSmall,
      isMedium,
      rounded ? 'rounded-full' : 'rounded-md',
      { 'font-bold': bold },
      { 'flex-row-reverse': right && icon },
      { 'text-2xl': textLg },
    ]"
    :title="title"
    :disabled="disabled"
  >
    <slot v-if="icon"></slot>
    <span
      v-if="text"
      :class="[textStart ? 'justify-start mr-auto' : 'justify-center']"
      >{{ text }}</span
    >
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  dark?: boolean;
  bg: string | string[];
  text?: string | number;
  sm?: boolean;
  md?: boolean;
  textLg?: boolean;
  bold?: boolean;
  rounded?: boolean;
  icon?: boolean;
  right?: boolean;
  disabled?: boolean;
  href?: string;
  hint?: boolean;
  id?: string;
  textStart?: boolean;
  title?: string;
}>();

const isDark = ref(props.dark ? "text-gray-100" : "text-gray-900");
const isSmall = ref(props.sm ? "px-4 py-2 text-sm" : "");
const isMedium = ref(props.md ? "px-8 py-4 text-lg" : "");
</script>
