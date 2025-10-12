import { ref } from 'vue'
import { Howl } from "howler"
import { useStorage } from '@vueuse/core'
import dayjs from 'dayjs'
import type {
  AudioFormat, Score, Movement, Section
} from './types'
import { audio } from '../composables/useHowler'


// TYPES
type RepeatMode = 'none' | 'one' | 'continuous'

//!VARIABLES

//DATABASE
export const supabaseUrl = 'https://gprktgiajxiwjzjsqdly.supabase.co/storage/v1/object/public/'

//LIBRARY
export const format: AudioFormat = 'mp3'
export const currentScore = ref<Score>()
export const currentMovement = ref<Movement>()
export const currentSection = ref<Section>()
export const currentSectionsSet = ref<Set<Section>>(new Set())

//USER PLAYLIST AND SESSION
export let userPlaylist: Section[] = ([])
export const userPlaylistSet = ref<Set<Section>>(new Set())
export const userSessionSaved = ref(false)


//SECTION DATA
export const currentTempo = ref(0)
export const progressiveRepeat = ref(false)
export const repeatMode = ref<RepeatMode>('none')
export const currentSectionIndex = ref(0)
export const currentTempoIndex = ref(0)
export const selectedSections = ref<Set<Section>>(new Set())
export const selectedSectionsScoreReference = ref<{ score: Score, movementIndex: number }>({ score: {} as Score, movementIndex: 0 })
export const selectedSectionsArray = ref<Section[]>([])
export const finishedSectionsSelection = ref(false)
export const confirmClearSectionSelection = ref(false)

//SESSION MANAGEMENT
export const PERFORMAMCE_MODE = ref(false)
export const sessionStarted = ref(false)
export const listOfFilesToLoad = ref<string[]>([])
export const sessionIsLoaded = ref(false)


//PLAYER
export const PLAYERS_ARRAY = ref<Howl[]>([])
export const SOUND_UNDEX = ref(0)
export const SOUND_ID = ref(0)
export const useController = ref(false)
export const selectedControllerId = ref('')
export const controllerIsConnected = ref(false)
export const isMidiLearningMode = ref(false)
export const autoStart = ref(true)
export const crossfadeDuration = ref(500)
export const crossfadeFired = ref(false)
export const playersHaveLoaded = ref(false)


export function setFileList(slug: string, pathName: string, movementIndex: number, tempoRange: number[], sectionName: string, format: AudioFormat) {
  const fullPath = `${supabaseUrl}${slug}/${movementIndex}/${sectionName}`
  const fullName = `${pathName}_${movementIndex}_${sectionName}`
  return tempoRange.map(tempo => `${fullPath}/${fullName}_${tempo}.${format}`)
}

export function setAudioFileName(concerto: Score, movement: Movement, section: Section, tempo: number) {

  function setFiles(tempo: number) {
    audio.value = `${supabaseUrl}${concerto.slug}/${section.movementIndex}/${section.name}/${concerto.pathName}_${section.movementIndex}_${section.name}_${tempo}.${format}`
  }

  function setClosest() {
    const closest = section.tempoRange.reduce((prev: number, curr: number) => Math.abs(curr - tempo) < Math.abs(prev - tempo) ? curr : prev)
    setFiles(closest)
  }

  setClosest()
  return { audio }
}

export function setAudio(tempo: number) {
  currentTempo.value = tempo
  if (currentScore.value && currentSection.value && currentMovement.value && currentTempo.value) {
    setAudioFileName(currentScore.value, currentMovement.value, currentSection.value, currentTempo.value)
    currentTempoIndex.value = getTempoIndex(currentSection.value.tempoRange, currentTempo.value)
  }
  return audio.value
}

export function setTempoRange(data: number[], step: number) {
  const array: number[] = []
  for (let i = data[0]; i <= data[1]; i += step) {
    array.push(i)
  }
  return array
}


//HELPER FUNCTIONS

export function getTempoIndex(data: number[], tempo: number) {
  return data.findIndex(t => t === tempo)
}
