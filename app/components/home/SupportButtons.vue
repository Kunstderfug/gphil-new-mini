<script setup lang="ts">
const supportLinks = [
    {
        id: "stripe",
        label: "Stripe",
        url: "https://donate.stripe.com/eVa7tYccjd0a8488ww",
        className: "border-indigo-400/40 bg-indigo-500/15 hover:bg-indigo-500/25",
    },
    {
        id: "paypal",
        label: "PayPal",
        url: "https://www.paypal.com/ncp/payment/3KH4DFTTQMXYJ",
        className: "border-sky-400/40 bg-sky-500/15 hover:bg-sky-500/25",
    },
    {
        id: "buy-me-a-coffee",
        label: "Buy Me a Coffee",
        url: "https://buymeacoffee.com/vgryaznov",
        className: "border-amber-400/40 bg-amber-500/15 hover:bg-amber-500/25",
    },
];
</script>

<template>
    <section>
        <HomeContentCard gradient wrapper-class="p-6 sm:p-8">
            <div class="flex flex-col items-center text-center gap-5">
                <p class="my-0! text-base text-gray-400 max-w-2xl">
                    If GPhil helps your practice, your support helps maintain development and expand future repertoire.
                </p>

                <div class="flex flex-wrap justify-center gap-3 mt-1">
                    <NuxtLink
                        v-for="link in supportLinks"
                        :key="link.id"
                        :to="link.url"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm sm:text-base font-semibold text-white/90 transition-colors duration-200"
                        :class="link.className"
                    >
                        {{ link.label }}
                    </NuxtLink>
                </div>
            </div>
        </HomeContentCard>
    </section>
</template>
