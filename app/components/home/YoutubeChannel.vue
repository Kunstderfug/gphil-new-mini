<script setup lang="ts">
// YouTube video examples for official GPhil Channel
const channelVideos = [
    {
        id: "GN_tyBto8No",
        title: "Beethoven. Piano Concerto No 1, 1st Movement",
    },
    {
        id: "lReniRnZO9E",
        title: "Ravel. Piano Concerto for the Left Hand",
    },
    {
        id: "L0qeKTsTBLs",
        title: "Prokofiev. Piano Concerto No 3, 3rd Movement",
    },
];
</script>

<template>
    <section class="mt-20">
        <div class="max-w-6xl mx-auto px-4">
            <div class="text-center mb-8">
                <h2 class="text-3xl font-bold text-white/70 mb-4">Official GPhil YouTube Channel</h2>
                <p class="text-gray-400 mb-6 max-w-2xl mx-auto">
                    Discover more on our official channel, like and subscribe!
                </p>

                <NuxtLink
                    to="https://www.youtube.com/@GPhilProject"
                    target="_blank"
                    class="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full shadow-lg transition-colors duration-200"
                >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                        />
                    </svg>
                    Visit GPhil Channel
                </NuxtLink>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                <div
                    v-for="video in channelVideos"
                    :key="video.id"
                    class="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
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
                    <div class="p-4">
                        <h3 class="font-semibold text-white/70 text-sm md:text-base mb-1">
                            {{ video.title }}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
iframe {
    border-radius: 0.5rem;
}

iframe:focus {
    outline: 2px solid rgba(147, 51, 234, 0.5);
    outline-offset: 2px;
}
</style>
