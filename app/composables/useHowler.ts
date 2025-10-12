import { ref } from "vue";

export type PlayerState =
  | "playing"
  | "paused"
  | "stopped"
  | "loading"
  | "seeking"
  | "error"
  | "unloaded"
  | "initializing";

export const err = ref("");
export const playerState = ref<PlayerState>("initializing");

export const audio = ref("");
export const offset = ref(0);

export const trackPosition = ref(0);
export const trackProgress = ref(0);
export const trackDuration = ref(0);
export const userGainValue = ref(0.75);
export const stopIsForced = ref(false);
