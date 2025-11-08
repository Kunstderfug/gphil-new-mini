<template>
    <div class="w-full flex flex-col items-center justify-center text-center gap-3">
        <p v-if="eyebrow" class="text-xs uppercase tracking-[0.2em] text-pink-400/70">
            {{ eyebrow }}
        </p>

        <h2
            class="text-3xl md:text-4xl font-bold text-white/70 leading-tight"
            :class="{ 'max-w-3xl mx-auto': clampTitle }"
        >
            {{ title }}
        </h2>

        <div class="w-16 h-0.5 bg-linear-to-r from-pink-500/70 to-purple-500/70 rounded-full"></div>

        <p v-if="subtitle" class="text-sm md:text-base text-gray-400 max-w-2xl mx-auto" :class="{ 'mt-1': true }">
            {{ subtitle }}
        </p>
    </div>
</template>

<script setup lang="ts">
interface Props {
    title: string;
    subtitle?: string;
    eyebrow?: string;
    clampTitle?: boolean;
}

defineProps<Props>();
</script>

<style scoped>
/* Subtle fade-in/slide-up animation hook class (optional use via parent) */
:host,
:where(.section-title-animate) {
    opacity: 0;
    transform: translateY(8px);
    transition:
        opacity 0.4s ease-out,
        transform 0.4s ease-out;
}

:where(.section-title-animate.section-title-visible) {
    opacity: 1;
    transform: translateY(0);
}
</style>
