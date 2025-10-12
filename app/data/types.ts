import type { PaymentMode } from "../stores/useStripe";
import type { PortableTextBlock } from "@portableText/types";

export type Playlist = {
  score: Score | undefined;
  movements: Movement[];
};

export type PresetValue = "slow" | "normal" | "fast";

export type UserSession = {
  score: Score;
  selectedSections: Section[];
  playlist: Playlist;
  preset: PresetValue;
};

export type UserSessionLibraryItem = {
  name: string;
  date: string;
  session: UserSession;
};

export interface Score {
  _id: string;
  _updatedAt: string;
  _rev: string;
  audio_format: AudioFormat;
  composer: string;
  title: string;
  slug: string;
  pathName: string;
  shortTitle: string;
  key: `${Key} ${Mode}`;
  instrument: Instrument;
  paymentLink?: string;
  price?: number;
  price_id?: string;
  movements: Movement[];
  ready: boolean;
  complete: number;
  completion_year?: number;
  full_score_url?: string;
  piano_score_url?: string;
  full_score_embed?: string;
  piano_score_embed?: string;
  about: [
    {
      title: string;
      content: PortableTextBlock[];
    },
  ];
  hq_audio?: boolean;
  layers?: OrchestraLayer[];
}

export type OrchestraLayer = "w" | "b" | "p" | "s";
//Woodwinds, Brass, Percussion, strings or Full Score

export type Instrument = "piano" | "violin" | "cello";

export interface SectionImage {
  asset: {
    _ref: string;
    _type: string;
  };
}

export interface Movement {
  _key: string;
  authRequired: boolean;
  index: number;
  title: string;
  sections: Section[];
  score: {
    _ref: string;
  };
  metronomeAvailable: boolean;
  renderTail?: number;
  tempoMultiplier?: number;
}

// in 16th
type BeatLength =
  | 1
  | 2
  | 3
  | 4
  | 6
  | 8
  | 12
  | 16
  | 24
  | 32
  | 48
  | 64
  | 96
  | 128;

export interface Section {
  _key: string;
  movementIndex: number;
  sectionIndex: number;
  name: string;
  beatsPerBar?: number;
  beatLength?: BeatLength;
  defaultTempo: number;
  userTempo?: number;
  tempoRange: number[];
  tempoRangeFull: number[];
  fileList: string[];
  step: number;
  perf?: boolean;
  authRequired?: boolean;
  sectionImage?: SectionImage;
  autoContinue?: boolean;
  autoContinueTime?: number;
  defaultSectionLength?: number;
  autoContinueMarker?: number;
  autoContinueOffset?: number;
  fadeout?: boolean;
  layers?: OrchestraLayer[];
  tips?: PortableTextBlock[];
  metronomeAvailable?: boolean;
  tempoMultiplier?: number;
}

export interface LibraryMap {
  composer: string;
  title: string;
  shortTitle: string;
  slug: string;
  pathName: string;
  key: `${Key} ${Mode}`;
  ready: boolean;
  complete: number;
  instrument: Instrument;
}

export interface UserPlaylist {
  score: Score;
  movement: number;
  sections: Section[];
}

export interface Product {
  id: string;
  description: string;
  price: number;
  priceId: string;
  type: PaymentMode;
  scoreId?: string;
}

export type AudioFormat = "flac" | "opus" | "mp3";

export type Key =
  | "C"
  | "C#"
  | "D"
  | "D#"
  | "Db"
  | "E"
  | "Eb"
  | "F"
  | "F#"
  | "G"
  | "Gb"
  | "G#"
  | "A"
  | "A#"
  | "B"
  | "Bb";
export type Mode = "Major" | "Minor";

export type AudioLayer = {
  layer: OrchestraLayer;
  fileUrl: string;
};

export type LayerPlayer = {
  layer: OrchestraLayer;
  player: HowlWithSafetyTimer;
};

export type SectionLayerFile = {
  sectionKey: string;
  layer: OrchestraLayer;
  fileUrl: string;
};

export type SessionLayerPlayer = {
  sectionKey: string;
  player: HowlWithSafetyTimer;
};

export type SessionBeat = {
  sectionKey: string;
  clicks: Beat[] | null;
};

export type Beat = {
  time: number;
  beat: number;
};

export type ClickUrl = {
  sectionKey: string;
  url: string;
};

export type ClickData = {
  sectionKey: string;
  clicks: Beat[] | [];
};

export type PersistentClicks = {
  scoreId: string;
  scoreRev: string;
  clickData: ClickData[];
};

export type UserSectionPreferences = {
  sectionKey: string;
  defaultTempo: number;
  userTempo?: number;
  autoContinue?: boolean;
  autoContinueTime?: number;
  autoContinueMarker?: number;
  autoContinueOffset?: number;
  fadeout?: boolean;
  clickData?: Beat[];
};

export type UserScorePreferences = {
  scoreId: string;
  rev: string;
  sections: UserSectionPreferences[];
};
