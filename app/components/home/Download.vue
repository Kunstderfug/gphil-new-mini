<script lang="ts" setup>
const platforms = [
    { name: "macOS", icon: "/assets/macos.webp", url: "https://apps.apple.com/us/app/gphil/id6740543718" },
    { name: "iPad", icon: "/assets/ios.webp", url: "https://apps.apple.com/us/app/gphil/id6740543718" },
    // {
    //     name: "Windows",
    //     icon: "/assets/windows.svg",
    //     url: "https://apps.microsoft.com/store/detail/9PKKZ2P2DLDG?cid=DevShareMCLPCB",
    // },
];
</script>

<template>
    <div>
        <section>
            <HomeContentCard gradient wrapper-class="p-6 sm:p-8 my-6">
                <div class="flex flex-col items-center text-center gap-4">
                    <span class="text-sm font-semibold uppercase tracking-[0.2em] text-pink-400/70">Available Now</span>

                    <h3 class="text-3xl sm:text-4xl font-bold text-white/80">
                        A virtual orchestra built for real musical freedom
                    </h3>

                    <div class="w-12 h-0.5 bg-linear-to-r from-pink-500/70 to-purple-500/70 rounded-full"></div>

                    <p class="text-base font-medium text-gray-400 max-w-md">
                        Practice and perform concertos with orchestral accompaniment that supports your interpretation,
                        not the other way around.
                    </p>

                    <span class="text-sm font-semibold uppercase tracking-[0.2em] text-white/60 mt-2">Download</span>

                    <div class="grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-md">
                        <NuxtLink
                            v-for="platform in platforms"
                            :key="platform.name"
                            :to="platform.url"
                            target="_blank"
                            class="flex flex-col items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                        >
                            <div class="w-12 h-12 flex items-center justify-center overflow-hidden rounded">
                                <NuxtImg
                                    :src="platform.icon"
                                    :alt="platform.name"
                                    class="w-full h-full object-contain"
                                    loading="lazy"
                                />
                            </div>
                            <span class="text-sm font-semibold text-white/70">{{ platform.name }}</span>
                        </NuxtLink>
                    </div>
                </div>
            </HomeContentCard>
        </section>

        <!-- WEB VERSION -->
        <div class="hidden lg:flex flex-col items-center justify-center gap-3 mt-8">
            <p class="text-xl font-medium text-white/70 text-center mb-0!">You can try GPhil in the web version</p>
            <p class="text-base font-medium text-gray-500 text-center mt-0!">
                (in development, only for large screens so far)
            </p>

            <div class="w-full flex justify-center items-center mt-2">
                <SoftLinkButton to="https://app.g-phil.app" target="_blank">
                    <span>Let's go</span>
                    <UIcon name="i-quill:chevron-right" class="text-base" />
                </SoftLinkButton>
            </div>
        </div>
    </div>
</template>
