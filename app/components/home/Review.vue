<script setup lang="ts">
interface Review {
    title: string;
    content: string;
    name: string;
}

defineProps<{
    review: Review;
}>();
</script>

<template>
    <article
        class="group h-full bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl px-6 py-5 shadow-lg transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl"
    >
        <div class="space-y-3">
            <h3 class="font-semibold text-white/70 text-lg">
                {{ review.title }}
            </h3>
            <p class="text-gray-300 text-sm leading-relaxed">
                <span class="text-pink-400/80 text-2xl leading-none align-top select-none">“</span>
                {{ review.content }}
            </p>
            <div class="flex justify-end">
                <div class="space-y-1 text-right">
                    <div class="w-10 h-0.5 bg-gradient-to-r from-pink-500/70 to-purple-500/70 ml-auto" />
                    <div class="text-sm text-white/70 font-medium">
                        {{ review.name }}
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>

<style scoped>
article {
    transition: all 0.3s ease;
}
</style>
