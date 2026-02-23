<script lang="ts" setup>
const features = [
    { label: "Free Tier", description: "Full library access with orchestral accompaniment" },
    { label: "Pro Tier", description: "In-app Score PDF Viewer + Recording & Exporting" },
];
</script>

<template>
    <div class="mt-10 mb-4">
        <div
            class="relative overflow-hidden rounded-xl border border-purple-400/20 bg-white/5 backdrop-blur-md shadow-lg p-6 sm:p-8"
        >
            <div class="absolute inset-0 bg-linear-to-br from-purple-500/10 via-transparent to-pink-500/10"></div>

            <div class="relative flex flex-col items-center text-center gap-4">
                <span class="text-xs uppercase tracking-[0.2em] text-pink-400/70">Coming Soon</span>

                <h3 class="text-2xl sm:text-3xl font-bold text-white/80">GPhil v.2</h3>

                <div class="w-12 h-0.5 bg-linear-to-r from-pink-500/70 to-purple-500/70 rounded-full"></div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 w-full max-w-lg">
                    <div
                        v-for="feature in features"
                        :key="feature.label"
                        class="flex flex-col gap-1 p-4 rounded-lg bg-white/5 border border-white/10"
                    >
                        <span class="text-sm font-semibold text-purple-300">{{ feature.label }}</span>
                        <span class="text-xs text-gray-400">{{ feature.description }}</span>
                    </div>
                </div>

                <p class="text-sm text-gray-400 mt-2">Expected release: ~1 month</p>
            </div>
        </div>
    </div>
</template>
