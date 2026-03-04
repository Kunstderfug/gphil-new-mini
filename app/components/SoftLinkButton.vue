<script setup lang="ts">
defineProps<{
    to: string;
    target?: string;
}>();
</script>

<template>
    <NuxtLink
        :to="to"
        :target="target"
        class="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/80 hover:bg-white/10 transition-all duration-300"
    >
        <slot></slot>
    </NuxtLink>
</template>
