<template>
  <header>
    <nav
      class="h-16 xl:h-20 flex justify-center lg:grid lg:grid-cols-5 items-center w-screen"
    >
      <MenuItem
        v-for="item in menuItems"
        :key="item.text"
        :url="item.url"
        :text="item.text"
        :alt="item.alt"
        :size="item.size"
        :ariaLabel="item.ariaLabel"
        class="text-xl transition-all duration-200 hover:text-2xl hover:xl:text-3xl grow"
      >
        <component :is="item.icon" :class="style.iconSize" />
      </MenuItem>
    </nav>
  </header>
</template>

<script setup lang="ts">
import MenuItem from "./MenuItem.vue";
import { useStyle } from "@/stores/useStyle";

//impost vue icons
import Home from "./icons/IonIosHomeOutline.vue";
import Library from "./icons/FluentLibrary.vue";
import Performance from "./icons/piano.vue";
import Sessions from "./icons/QuillFolderList.vue";
import Profile from "./icons/CarbonUserAvatar.vue";

const size = 30;
const style = useStyle();

const menuItems = [
  {
    url: "/",
    text: "HOME",
    icon: Home,
    alt: "home",
    ariaLabel: "Link to home tab",
    size,
  },
  {
    url: "/library",
    text: "LIBRARY",
    icon: Library,
    alt: "library",
    ariaLabel: "Link to library tab",
    size,
  },
  {
    url: "/performance",
    text: "PRACTICE",
    icon: Performance,
    alt: "practice",
    ariaLabel: "Link to practice tab",
    size,
  },
  {
    url: "/sessions",
    text: "SESSIONS",
    icon: Sessions,
    alt: "sessions",
    ariaLabel: "Link to sessions tab",
    size,
  },
  {
    url: "/profile",
    text: "PROFILE",
    icon: Profile,
    alt: "user profile page",
    ariaLabel: "Link to user profile tab",
    size,
  },
];
</script>
