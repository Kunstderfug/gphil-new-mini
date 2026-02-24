<script lang="ts" setup>
const style = useStyle();

const platforms = [
    { name: "macOS", icon: "/assets/macos.webp", url: "https://apps.apple.com/us/app/gphil/id6740543718" },
    { name: "iPad", icon: "/assets/ios.webp", url: "https://apps.apple.com/us/app/gphil/id6740543718" },
    {
        name: "Windows",
        icon: "/assets/windows.svg",
        url: "https://apps.microsoft.com/store/detail/9PKKZ2P2DLDG?cid=DevShareMCLPCB",
    },
];
</script>

<template>
    <div>
        <section>
            <div
                class="relative overflow-hidden rounded-xl border border-purple-400/20 bg-white/5 backdrop-blur-md shadow-lg p-6 sm:p-8 my-6"
            >
                <div class="absolute inset-0 bg-linear-to-br from-pink-500/10 via-transparent to-purple-500/10"></div>

                <div class="relative flex flex-col items-center text-center gap-4">
                    <span class="text-sm font-semibold uppercase tracking-[0.2em] text-pink-400/70">Available Now</span>

                    <h3 class="text-2xl sm:text-3xl font-bold text-white/80">Download GPhil</h3>

                    <div class="w-12 h-0.5 bg-linear-to-r from-pink-500/70 to-purple-500/70 rounded-full"></div>

                    <p class="text-base font-medium text-gray-400 max-w-md">
                        Practice or perform live instrumental concertos with orchestral accompaniment
                    </p>

                    <div class="grid grid-cols-3 gap-4 sm:gap-6 mt-2 w-full max-w-md">
                        <NuxtLink
                            v-for="platform in platforms"
                            :key="platform.name"
                            :to="platform.url"
                            target="_blank"
                            class="flex flex-col items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                        >
                            <div class="w-12 h-12 flex items-center justify-center overflow-hidden rounded">
                                <NuxtImg :src="platform.icon" :alt="platform.name" class="w-full h-full object-contain" loading="lazy" />
                            </div>
                            <span class="text-sm font-semibold text-white/70">{{ platform.name }}</span>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>

        <!-- WEB VERSION -->
        <div class="hidden lg:flex flex-col items-center justify-center gap-3 mt-8">
            <p class="text-xl font-medium text-white/70 text-center !mb-0">You can try GPhil in the web version</p>
            <p class="text-base font-medium text-gray-500 text-center !mt-0">(in development, only for large screens so far)</p>

            <NuxtLink to="https://app.g-phil.app" class="w-full flex justify-center items-center mt-2">
                <Button
                    :class="style.buttonSizes.standard"
                    :bg="style.buttonColors.transparent"
                    sm
                    rounded
                    icon
                    dark
                    right
                    text="Let's go"
                    class="bg-linear-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 backdrop-blur-md shadow-lg hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                >
                    <UIcon name="i-quill:chevron-right" :class="style.iconSize" />
                </Button>
            </NuxtLink>
        </div>
    </div>
</template>
