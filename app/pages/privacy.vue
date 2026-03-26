<script setup lang="ts">
useSeoMeta({
    title: "Privacy Policy - GPhil",
    description: "How GPhil handles account information and practice-session data.",
});
</script>

<template>
    <div class="mt-10 mb-16 space-y-8 sm:space-y-10">
        <SectionTitle
            eyebrow="Legal"
            title="Privacy Policy"
            subtitle="How GPhil handles your account information and practice-session data."
        />

        <section>
            <HomeContentCard gradient wrapper-class="p-6 sm:p-8 lg:p-10">
                <p class="my-0! text-sm sm:text-base italic text-gray-400">Last Updated: January 18, 2025</p>

                <div class="mt-6 space-y-8">
                    <section>
                        <h2 class="my-0! text-xl sm:text-2xl font-bold text-white/85">1. Introduction</h2>
                        <p class="text-gray-300">
                            Welcome to G-Phil. This Privacy Policy explains our approach to data collection and usage.
                            We prioritize user privacy and collect minimal personal information.
                        </p>
                    </section>

                    <section>
                        <h2 class="my-0! text-xl sm:text-2xl font-bold text-white/85">2. Account Information</h2>
                        <p class="text-gray-300">When you sign in to our app using Google or Apple, we collect:</p>
                        <ul class="my-0! space-y-1 text-gray-300">
                            <li>Email address (from your Google or Apple account)</li>
                        </ul>
                        <p class="text-gray-300">
                            Signing in is optional and allows synchronization of your practice sessions across devices.
                            All features are available without signing in.
                        </p>
                    </section>

                    <section>
                        <h2 class="my-0! text-xl sm:text-2xl font-bold text-white/85">3. Applications</h2>
                        <p class="text-gray-300">Our applications store user preferences locally on your device.</p>
                        <p class="text-gray-300">
                            If you choose to sign in with Google or Apple, we collect your email address to create your
                            account and sync practice sessions.
                        </p>
                    </section>

                    <section>
                        <h2 class="my-0! text-xl sm:text-2xl font-bold text-white/85">4. Data Usage</h2>
                        <p class="text-gray-300">Account information (email) is used to:</p>
                        <ul class="my-0! space-y-1 text-gray-300">
                            <li>Sync your practice sessions online</li>
                        </ul>
                        <p class="text-gray-300">
                            No other user data is saved online. Practice sessions are stored securely and only
                            accessible by you.
                        </p>
                    </section>

                    <section>
                        <h2 class="my-0! text-xl sm:text-2xl font-bold text-white/85">5. Data Sharing</h2>
                        <p class="text-gray-300">We do not share or sell any user information with third parties.</p>
                    </section>

                    <section>
                        <h2 class="my-0! text-xl sm:text-2xl font-bold text-white/85">6. Changes to This Policy</h2>
                        <p class="text-gray-300">
                            We will notify users of any significant changes to this privacy policy through our website
                            and update the Last Updated date accordingly.
                        </p>
                    </section>

                    <section>
                        <h2 class="my-0! text-xl sm:text-2xl font-bold text-white/85">7. Contact Us</h2>
                        <p class="text-gray-300">
                            For any questions about this privacy policy or our data practices, please contact us via
                            <a
                                href="mailto:vyacheslav@g-phil.app"
                                class="text-purple-300 hover:text-purple-200 underline underline-offset-2"
                            >
                                email
                            </a>
                        </p>
                    </section>
                </div>
            </HomeContentCard>
        </section>

        <div class="w-full flex justify-center items-center pt-1">
            <SoftLinkButton to="/">
                <UIcon name="i-quill:chevron-left" class="text-base" />
                <span>Back to Home</span>
            </SoftLinkButton>
        </div>
    </div>
</template>
