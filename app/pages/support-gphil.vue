<script setup lang="ts">
useSeoMeta({
    title: "Support GPhil - GPhil",
    description: "Support GPhil development and future repertoire growth via Stripe, PayPal, or Buy Me a Coffee.",
});
</script>

<template>
    <div class="mt-10 mb-16 space-y-8 sm:space-y-10">
        <SectionTitle
            eyebrow="Support Development"
            title="Support GPhil"
            subtitle="Support GPhil development and future repertoire growth via Stripe, PayPal, or Buy Me a Coffee."
        />

        <HomeSupportButtons />

        <div class="flex justify-center pt-1">
            <SoftLinkButton to="/">
                <UIcon name="i-quill:chevron-left" class="text-base" />
                <span>Back to Home</span>
            </SoftLinkButton>
        </div>
    </div>
</template>
