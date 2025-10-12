<template>
    <div class="max-w-4xl mx-auto px-4 py-12">
        <div class="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-12">
            <div class="privacy-policy">
                <h1
                    class="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent"
                >
                    Privacy Policy
                </h1>
                <p class="text-white/70 italic mb-12 text-lg">Last Updated: 2025-01-18</p>

                <section class="mb-12">
                    <h2 class="text-2xl font-semibold mb-6 text-white/90 border-b border-white/10 pb-2">
                        1. Introduction
                    </h2>
                    <p class="text-white/70 leading-relaxed">
                        Welcome to G-Phil. This Privacy Policy explains our approach to data collection and usage. We
                        prioritize user privacy and collect minimal personal information.
                    </p>
                </section>

                <section class="mb-12">
                    <h2 class="text-2xl font-semibold mb-6 text-white/90 border-b border-white/10 pb-2">
                        2. Account Information
                    </h2>
                    <p class="text-white/70 mb-6 leading-relaxed">
                        When you sign in to our app using Google or Apple, we collect:
                    </p>
                    <ul class="list-disc pl-8 text-white/70 space-y-2">
                        <li>Email address (from your Google or Apple account)</li>
                    </ul>
                    <p class="text-white/70 mt-6 leading-relaxed">
                        Signing in is optional and allows synchronization of your practice sessions across devices. All
                        features are available without signing in.
                    </p>
                </section>

                <section class="mb-12">
                    <h2 class="text-2xl font-semibold mb-6 text-white/90 border-b border-white/10 pb-2">
                        3. Applications
                    </h2>
                    <p class="text-white/70 mb-6 leading-relaxed">
                        Our applications store user preferences locally on your device.
                    </p>
                    <p class="text-white/70 leading-relaxed">
                        If you choose to sign in with Google or Apple, we collect your email address to create your
                        account and sync practice sessions.
                    </p>
                </section>

                <section class="mb-12">
                    <h2 class="text-2xl font-semibold mb-6 text-white/90 border-b border-white/10 pb-2">
                        4. Data Usage
                    </h2>
                    <p class="text-white/70 mb-6 leading-relaxed">Account information (email) is used to:</p>
                    <ul class="list-disc pl-8 text-white/70 space-y-2">
                        <li>Sync your practice sessions online</li>
                    </ul>
                    <p class="text-white/70 mt-6 leading-relaxed">
                        No other user data is saved online. Practice sessions are stored securely and only accessible by
                        you.
                    </p>
                </section>

                <section class="mb-12">
                    <h2 class="text-2xl font-semibold mb-6 text-white/90 border-b border-white/10 pb-2">
                        5. Data Sharing
                    </h2>
                    <p class="text-white/70 leading-relaxed">
                        We do not share or sell any user information with third parties.
                    </p>
                </section>

                <section class="mb-12">
                    <h2 class="text-2xl font-semibold mb-6 text-white/90 border-b border-white/10 pb-2">
                        6. Changes to This Policy
                    </h2>
                    <p class="text-white/70 leading-relaxed">
                        We will notify users of any significant changes to this privacy policy through our website and
                        update the "Last Updated" date accordingly.
                    </p>
                </section>

                <section class="mb-12">
                    <h2 class="text-2xl font-semibold mb-6 text-white/90 border-b border-white/10 pb-2">
                        7. Contact Us
                    </h2>
                    <p class="text-white/70 leading-relaxed">
                        For any questions about this privacy policy or our data practices, please contact us via
                        <a
                            href="mailto:vyacheslav@g-phil.app"
                            class="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                        >
                            email
                        </a>
                    </p>
                </section>

                <NuxtLink to="/" class="w-full flex justify-center items-center mt-4">
                    <Button
                        :class="style.buttonSizes.standard"
                        :bg="style.buttonColors.transparent"
                        sm
                        rounded
                        icon
                        dark
                        left
                        text="Back to Home"
                        class="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 backdrop-blur-md shadow-lg hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                    >
                        <UIcon name="i-quill:chevron-left" :class="style.iconSize" />
                    </Button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const style = useStyle();
</script>
