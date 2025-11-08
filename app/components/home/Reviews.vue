<script setup lang="ts">
const reviews = [
    {
        title: "A Game Changer!",
        content:
            "Absolutely one of the best creations for musicians! Gphil uses advanced sampling technology that captures the nuances of each instrument, allowing musicians to practice and perform with a virtual orchestra without the need for actual musicians. It's a game-changer! A page-turner pedal, a good speaker, and a laptop are all you need to play your favorite concertos.",
        name: "Rexa",
    },
    {
        title: "Brilliant!",
        content:
            "Our discovery of Gphil marked a turning point in our daughter's musical journey! As a passionate young pianist, she has always dreamed of playing with a full orchestra, which is typically not an option for an amateur pianist.",
        name: "Piri",
    },
    {
        title: "A Miraculous Achievement",
        content:
            "For me, there is nothing in the world quite like playing a romantic concerto with an orchestra. Unfortunately, I'm not Sokolov - for me those chances only come a couple times a decade. Until now! This app is honestly my dream app. I wanted something like this so much that I started scoring concertos line by painstaking line Logic Pro to be able to play along with them, but G-Phil is on a completely different level. The variety, quality, and flexibility of the orchestra is astounding - the samples used are state of the art and they are scored by a MUSICIAN not just a programmer. This app plays MUSIC and inspires you to create music of your own to match it.",
        name: "Jonathan",
    },
    {
        title: "A One-of-a-Kind Orchestral Accompaniment App",
        content:
            "This one-of-a-kind orchestral accompaniment app allows the soloist to control the timing and tempo of orchestral tracks, which are handcrafted both dynamically and stylistically using actual instrumental library, to achieve a more coherent and unified musical conception. A must-have app for all musicians, whether for professional performance or advanced amateurs learning concerto works.",
        name: "ClassicalFan",
    },
];
</script>

<template>
    <section class="my-20">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-white/70 mb-4">What Musicians Are Saying</h2>
            <div class="w-16 h-0.5 bg-gradient-to-r from-pink-500/70 to-purple-500/70 mx-auto mb-4" />
            <p class="text-gray-400 max-w-2xl mx-auto">
                Hear from fellow musicians who have transformed their practice and performance with G-Phil
            </p>
        </div>

        <div class="max-w-6xl mx-auto px-4">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <HomeReview
                    v-for="(review, index) in reviews"
                    :key="index"
                    :review="{ title: review.title, content: review.content, name: review.name }"
                    class="h-full"
                />
            </div>
        </div>
    </section>
</template>

<style scoped>
/* Ensure consistent height for review cards */
.grid > div {
    display: flex;
}
</style>
