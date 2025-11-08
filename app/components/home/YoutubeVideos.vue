<script setup lang="ts">
// YouTube video examples
const videos = [
    {
        id: "tUXduDDAS88",
        title: "Rachmaninoff. Piano Concerto No. 4",
    },
    {
        id: "LagzKtUgx0Q",
        title: "Rachmaninoff. Paganini Rhapsody (Graduate recital)",
    },
    {
        id: "HsNVatF8OK0",
        title: "Ravel. Piano Concerto in G",
    },
];
</script>

<template>
    <section class="mt-20">
        <div class="max-w-6xl mx-auto px-4">
            <div class="text-center mb-10">
                <h2 class="text-3xl font-bold text-white/70 mb-3">Live Performance Examples</h2>
                <div class="w-16 h-0.5 bg-gradient-to-r from-pink-500/70 to-purple-500/70 mx-auto" />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div
                    v-for="video in videos"
                    :key="video.id"
                    class="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl"
                >
                    <div class="aspect-video">
                        <iframe
                            :src="`https://www.youtube.com/embed/${video.id}`"
                            :title="video.title"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                            class="w-full h-full"
                        />
                    </div>
                    <div class="px-5 py-4">
                        <h3 class="font-semibold text-white/70 text-base leading-snug">
                            {{ video.title }}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Custom styles for the YouTube embed wrapper */
iframe {
    border-radius: 1rem;
}

iframe:focus {
    outline: 2px solid rgba(147, 51, 234, 0.5);
    outline-offset: 2px;
}
</style>
