<script setup lang="ts">
const requestChecklist = [
    "Composer and piece name",
    "Instrument and version/arrangement preference",
    "Target date (if you have one)",
    "Any edition, cuts, or specific notes",
];

const workflow = [
    "You send your request by email.",
    "We align on scope, details, and expected timeline.",
    "Your commissioned score is prioritized ahead of the active queue.",
];

useSeoMeta({
    title: "Commission a Score - GPhil",
    description:
        "Contact GPhil directly to commission a score and prioritize it ahead of the current production queue.",
});
</script>

<template>
    <div class="mt-10 mb-16 space-y-8 sm:space-y-10">
        <SectionTitle
            eyebrow="Direct Commissioning"
            title="Commission a Score"
            subtitle="If you want a rare or unique score added to the GPhil library, or want your favorite score ready as soon as possible, contact me directly by email. Commissioned work is handled with top priority ahead of my current queue."
        />

        <section>
            <HomeContentCard gradient wrapper-class="p-6 sm:p-8 lg:p-10">
                <div class="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-pink-500/15 blur-3xl"></div>
                <div class="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-purple-500/15 blur-3xl"></div>

                <div class="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div class="max-w-2xl space-y-4">
                        <p class="my-0! text-base sm:text-lg font-medium leading-relaxed text-gray-300">
                            If you want a rare or unique score added to the GPhil library, or want your favorite score
                            ready as soon as possible, contact me directly by
                            <a
                                class="text-purple-300 hover:text-purple-200 underline underline-offset-2"
                                href="mailto:vyacheslav@g-phil.app"
                            >
                                email
                            </a>
                            . Commissioned work is handled with top priority ahead of my current queue.
                        </p>
                    </div>

                    <div class="flex flex-wrap items-center gap-3 lg:justify-end">
                        <a
                            href="mailto:vyacheslav@g-phil.app"
                            class="rounded-lg border border-purple-400/40 bg-linear-to-r from-purple-500/20 to-pink-500/20 px-5 py-2.5 text-sm font-semibold text-white/90 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                        >
                            Email to Commission
                        </a>
                    </div>
                </div>
            </HomeContentCard>
        </section>

        <section class="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <HomeContentCard wrapper-class="p-6 sm:p-7">
                <div class="space-y-4">
                    <h2 class="my-0! text-xl sm:text-2xl font-bold text-white/85">What to Include</h2>
                    <p class="my-0! text-sm sm:text-base font-medium text-gray-400">
                        To keep communication efficient and accelerate delivery, include:
                    </p>
                    <ul class="my-0! space-y-1 text-sm sm:text-base text-gray-300">
                        <li v-for="item in requestChecklist" :key="item">{{ item }}</li>
                    </ul>
                </div>
            </HomeContentCard>

            <HomeContentCard wrapper-class="p-6 sm:p-7">
                <div class="space-y-4">
                    <h2 class="my-0! text-xl sm:text-2xl font-bold text-white/85">Priority Workflow</h2>
                    <ol class="my-0! list-inside list-decimal space-y-2 text-sm sm:text-base text-gray-300">
                        <li v-for="item in workflow" :key="item">{{ item }}</li>
                    </ol>
                    <div class="rounded-lg border border-white/10 bg-white/5 p-4">
                        <p class="my-0! text-sm font-medium text-white/80">
                            Contact:
                            <a
                                class="text-purple-300 hover:text-purple-200 underline underline-offset-2"
                                href="mailto:vyacheslav@g-phil.app"
                            >
                                email
                            </a>
                        </p>
                    </div>
                </div>
            </HomeContentCard>
        </section>

        <div class="flex justify-center pt-1">
            <SoftLinkButton to="/">
                <UIcon name="i-quill:chevron-left" class="text-base" />
                <span>Back to Home</span>
            </SoftLinkButton>
        </div>
    </div>
</template>
