<template>
    <div class="w-full mb-4 justify-self-end flex justify-center items-center text-base">
        <p class="mb-0 px-8 text-gray-400 cursor-default">
            {{ `GPhil / ${new Date().getFullYear()}` }}
            <NuxtLink to="/privacy" class="mb-0 px-8 text-gray-400 hover:text-gray-600"> Privacy Policy </NuxtLink>
        </p>
    </div>
</template>
