<script setup lang="ts">
useSeoMeta({
    title: "G-Phil - Home",
    description:
        "G-Phil is an app that helps you practice or perform live an instrumental concerto with orchestral accompaniment.",
});
</script>

<template>
    <div class="mt-8">
        <HomeLogo />
        <HomeDownload />
        <HomeReviews />
        <div class="my-20">
            <HomeYoutubeVideos />
        </div>
        <div class="my-20">
            <HomeYoutubeChannel />
        </div>
        <!-- <HomeSupport /> -->
        <!-- <HomeFeedback /> -->

        <!-- <section id="top" class="-mb-4">
            <div class="w-full mt-4 flex justify-center items-center gap-4">
                <h3 class="text-center text-pink-500">ENJOY!</h3>
                <h3 class="text-pink-500">
                    <UIcon name="i-ph:smiley" class="stroke-pink-500 fill-pink-500" />
                </h3>
            </div>
        </section> -->
    </div>
</template>
