<template>
  <Teleport to="#offline">
    <div
      class="w-full absolute m-0 bottom-0 left-0 pr-1 flex justify-end items-center gap-2 text-gray-400"
    >
      You are offline. The app functionality is limited
      <UIcon name="i-mdi:network-strength-off-outline" class="w-5 h-5" />
    </div>
  </Teleport>
</template>
