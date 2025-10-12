<template>
    <div>
        <NuxtLayout name="default">
            <NuxtLoadingIndicator />
            <UApp>
                <NuxtPage />
            </UApp>
        </NuxtLayout>
    </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
}
</style>
