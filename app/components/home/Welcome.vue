/* eslint-disable vue/html-self-closing */
<script lang="ts" setup>
const style = useStyle();

const announcementText = "GPhil is now officially available on Apple and Microsoft App Store!";
</script>

<template>
    <div>
        <!-- DOWNLOAD DESKTOP APPS -->
        <section>
            <!-- <HomeTitle title="Download G-Phil Apps" /> -->
            <div
                class="w-full flex justify-center border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md rounded-xl shadow-2xl p-8 my-6"
            >
                <div class="w-full">
                    <div
                        class="bg-gradient-to-r from-pink-500/80 to-purple-600/80 font-bold text-lg p-4 rounded-lg shadow-lg text-white/70 text-center custom-pulse"
                    >
                        {{ announcementText }}
                    </div>

                    <div class="w-full flex flex-col justify-start items-center h-auto">
                        <div
                            class="w-full flex flex-col items-center justify-center sm:grid sm:grid-cols-3 sm:justify-items-center gap-6 mt-8"
                        >
                            <NuxtLink to="https://apps.apple.com/us/app/gphil/id6740543718" target="_blank">
                                <div
                                    class="flex flex-col items-center justify-center gap-4 p-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl shadow-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
                                >
                                    <span class="font-semibold text-white/70 text-lg">For macOS</span>
                                    <img src="/assets/macos.png" alt="macos" class="w-16" />
                                </div>
                            </NuxtLink>

                            <NuxtLink to="https://apps.apple.com/us/app/gphil/id6740543718" target="_blank">
                                <div
                                    class="flex flex-col items-center justify-center gap-4 p-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl shadow-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
                                >
                                    <span class="font-semibold text-white/70 text-lg">For iPad</span>
                                    <img src="/assets/apple.svg" alt="iPad" class="w-16" />
                                </div>
                            </NuxtLink>

                            <NuxtLink
                                to="https://apps.microsoft.com/store/detail/9PKKZ2P2DLDG?cid=DevShareMCLPCB"
                                target="_blank"
                            >
                                <div
                                    class="flex flex-col items-center justify-center gap-4 p-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl shadow-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
                                >
                                    <span class="font-semibold text-white/70 text-lg">For Windows</span>
                                    <img src="/assets/windows.svg" alt="windows" class="w-16" />
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- TO THE DOCS AND LIBRARY BUTTON -->
        <div class="flex flex-col items-center justify-center gap-4 mt-8">
            <div class="font-bold text-xl text-white/70 text-center">Or continue to the web version</div>
            <p class="text-sm text-gray-400 text-center">(in development, only for large screens so far)</p>

            <NuxtLink to="https://app.g-phil.app" class="w-full flex justify-center items-center mt-4">
                <Button
                    :class="style.buttonSizes.standard"
                    :bg="style.buttonColors.transparent"
                    sm
                    rounded
                    icon
                    dark
                    right
                    text="Let's go"
                    class="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 backdrop-blur-md shadow-lg hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                >
                    <UIcon name="i-quill:chevron-right" :class="style.iconSize" />
                </Button>
            </NuxtLink>
        </div>
    </div>
</template>

<style scoped>
.custom-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
    0%,
    100% {
        opacity: 1;
    }
    50% {
        opacity: 0.7;
    }
}
</style>
