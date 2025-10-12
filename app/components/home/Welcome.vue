/** eslint-disable vue/html-self-closing */
<script lang="ts" setup>
const style = useStyle();

const announcementText = "GPhil is now officially available on Apple and Microsoft App Store!";
</script>

<template>
    <!-- DOWNLOAD DESKTOP APPS -->
    <section class="hidden sm:block">
        <!-- <HomeTitle title="Download G-Phil Apps" /> -->
        <div class="w-full flex justify-center border-2 border-pink-600 rounded-lg shadow-md p-8 my-6">
            <div class="w-full">
                <div class="bg-pink-600 font-bold text-lg p-4 rounded shadow text-center custom-pulse">
                    {{ announcementText }}
                </div>

                <div class="w-full flex flex-col justify-start items-center h-auto">
                    <div
                        class="w-full flex flex-col justify-center sm:grid sm:grid-cols-3 sm:justify-items-center gap-4 mt-8"
                    >
                        <div class="flex flex-col items-center justify-center gap-4">
                            <NuxtLink to="https://apps.apple.com/us/app/gphil/id6740543718" target="_blank">
                                <button class="flex flex-col grow items-center justify-center gap-6">
                                    <span class="font-bold text-xl"> For macOS </span>
                                    <img
                                        src="/assets/macos.png"
                                        alt="macos"
                                        class="w-16 duration-200 hover:scale-105"
                                    />
                                </button>
                            </NuxtLink>
                        </div>

                        <NuxtLink to="https://apps.apple.com/us/app/gphil/id6740543718" target="_blank">
                            <button class="flex flex-col grow items-center justify-center gap-6">
                                <span class="font-bold text-xl">For iPad</span>
                                <img src="/assets/apple.svg" alt="iPad" class="w-16 duration-200 hover:scale-105" />
                            </button>
                        </NuxtLink>

                        <NuxtLink
                            to="https://apps.microsoft.com/store/detail/9PKKZ2P2DLDG?cid=DevShareMCLPCB"
                            target="_blank"
                        >
                            <button class="flex flex-col grow items-center justify-center gap-6">
                                <span class="font-bold text-xl">For Windows</span>
                                <img
                                    src="/assets/windows.svg"
                                    alt="windows"
                                    class="w-16 mt-4 duration-200 hover:scale-105"
                                />
                            </button>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- TO THE DOCS AND LIBRARY BUTTON -->
    <div class="flex-container">
        <HomeTitle title="Or continue to the web version (in development)" />

        <NuxtLink to="https://app.g-phil.app" class="w-full flex justify-center items-center">
            <Button
                :class="style.buttonSizes.standard"
                :bg="style.buttonColors.purple"
                sm
                rounded
                icon
                dark
                right
                text="Let's go"
            >
                <UIcon name="i-quill:chevron-right" :class="style.iconSize" />
            </Button>
        </NuxtLink>
    </div>
</template>

<style scoped>
.flex-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%; /* Ensure container stretches to full width of its parent */
}
</style>
