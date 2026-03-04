<script setup lang="ts">
withDefaults(
    defineProps<{
        gradient?: boolean;
        gradientClass?: string;
        wrapperClass?: string;
    }>(),
    {
        gradient: false,
        gradientClass: "from-pink-500/10 via-transparent to-purple-500/10",
        wrapperClass: "",
    },
);
</script>

<template>
    <div
        class="relative overflow-hidden rounded-xl border border-purple-400/20 bg-white/5 backdrop-blur-md shadow-lg"
        :class="wrapperClass"
    >
        <div v-if="gradient" class="absolute inset-0 bg-linear-to-br" :class="gradientClass"></div>
        <div class="relative">
            <slot></slot>
        </div>
    </div>
</template>
