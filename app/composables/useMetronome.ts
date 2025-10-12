import { ref, computed, watch } from "vue";
import type {
  Beat,
  SessionBeat,
  ClickUrl,
  PersistentClicks,
} from "../data/types";

let animate: number | null = null;
const clickFilesLoaded = ref(0);
const beatLength = ref(0);
const clickCount = ref(-1);
const metronomeIsPlaying = ref(false);
const clicks = ref<Beat[] | null>(null); //all clicks for the section
const defaultClicks = ref<Beat[] | null>(null); // clicks for the default tempo
const sessionClicks = ref([] as SessionBeat[]); //all clicks for the session
// const clickUrls = ref([] as ClickUrl[]) //all click urls for the session
const error = ref("");
const currentSectionIndex = ref(0); // will be updated when shifting to the next section
//current click object
const currentClick = ref();
const currentBeat = computed(() => currentClick.value?.beat || 0); //beat in the bar
const currentSessionClick = ref(); //current click object
const defaultSessionClicks = ref<SessionBeat[]>([]);

function adjustClickTime(diff: number) {
  // const firstBeat = clicks.value && clicks.value[0]
  if (clicks.value)
    clicks.value = clicks.value?.map((beat: Beat) => ({
      ...beat,
      time: Math.round(beat.time / diff),
    }));
  return clicks.value;
}

function startMetronome(time: number) {
  // console.log('metronome started')
  if (!clicks.value) return;
  const beatDuration = getBeatDuration(time, clicks.value);
  if (beatDuration) beatLength.value = beatDuration;
}

function getBeatDuration(
  currentPlayTime: number,
  clicks: Beat[],
): number | null {
  if (clickCount.value < clicks.length - 1) {
    const index = clicks.findIndex((click) => click.time >= currentPlayTime);
    if (index > 0) {
      clickCount.value = index - 1;
    }
  } else {
    stopMetronome();
  }

  if (!metronomeIsPlaying.value) {
    metronomeIsPlaying.value = true;
  }

  if (clickCount.value >= clicks.length - 1) {
    return null;
  } else {
    return clicks[clickCount.value + 1]?.time - clicks[clickCount.value]?.time;
  }
}

function stopMetronome() {
  // console.log('stopMetronome')
  metronomeIsPlaying.value = false;
  clickCount.value = -1;
  beatLength.value = 0;
}

function clickAnimation(time: number) {
  // console.log('clickAnimation')
  startMetronome(Math.round(time * 1000));
}

function stopClickAnimation() {
  // console.log('stopClickAnimation')
  if (animate) cancelAnimationFrame(animate);
  stopMetronome();
}

function addClick() {
  //add additional click object if  first click's 'time property is not 0
  if (clicks.value && clicks.value[0]?.time !== 0)
    clicks.value.unshift({ time: 0, beat: 0 });
}

function getCurrentClick() {
  if (sessionClicks.value && sessionClicks.value[currentSectionIndex.value]) {
    clicks.value =
      sessionClicks.value[currentSectionIndex.value].clicks || null;
  }
  addClick();
  currentClick.value =
    clicks.value && metronomeIsPlaying ? clicks.value[clickCount.value] : null;
}

watch(clicks, addClick);

watch(
  [currentSectionIndex, clickCount],
  () => {
    getCurrentClick();
    addClick();
  },
  { immediate: true },
);

export {
  startMetronome,
  stopMetronome,
  getBeatDuration,
  currentBeat,
  beatLength,
  currentClick,
  currentSessionClick,
  clickCount,
  metronomeIsPlaying,
  clicks,
  sessionClicks,
  error,
  currentSectionIndex,
  clickAnimation,
  stopClickAnimation,
  adjustClickTime,
  defaultClicks,
  defaultSessionClicks,
};
