<script setup lang="ts"></script>

<template>
    <div class="flex flex-wrap items-center justify-between gap-3 ml-2">
        <h1 class="my-0!">Welcome to GPhil<span class="invisible">G-Phil</span></h1>
        <div class="flex items-center gap-4 shrink-0">
            <NuxtLink
                to="/commission-a-score"
                class="text-base font-semibold text-purple-300 hover:text-purple-200 transition-colors duration-200"
            >
                Commission a Score
            </NuxtLink>
            <NuxtLink
                to="https://docs.g-phil.app"
                target="_blank"
                class="text-base font-semibold text-purple-300 hover:text-purple-200 transition-colors duration-200"
            >
                Visit GPhil Docs
            </NuxtLink>
        </div>
    </div>
</template>
