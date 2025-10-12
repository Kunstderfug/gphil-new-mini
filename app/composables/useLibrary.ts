import imageUrlBuilder from "@sanity/image-url";
import type { AudioFormat, Score, Movement, Section } from "../data/types";
import type { PortableTextBlock } from "@portableText/types";
import {
  supabaseUrl,
  libraryURI,
  scoreURI,
  scoresInPlanURI,
  subscriptionsURI,
} from "./useURI";

export type Change = {
  date: string;
  description: string;
  changes: string[];
  breaking: boolean;
};

export type AppVersion = {
  build: string;
  changes: string[];
  date: string;
};

export type Article = {
  order: number;
  name: string;
  article_content: PortableTextBlock[];
  desktop: boolean;
};

export const imageBuilder = imageUrlBuilder({
  projectId: "b8uar5wl",
  dataset: "production",
});

import { ref } from "vue";

export const format: AudioFormat = "mp3";

export const scoresInPlan = ref<Score[]>([]);

export const fetchAppVersion = async (): Promise<AppVersion | undefined> => {
  try {
    const { data } = await useSanityQuery(`
        *[_type == "app_version"] | order(build desc)[0]`);
    return data.value as AppVersion;
  } catch (error) {
    console.log(error);
  }
};

export const fetchLibrary = async () => {
  const style = useStyle();
  style.startLoading("loading score");
  try {
    const query = libraryURI();
    const { data } = await useFetch("/api/library/fetch-library", {
      method: "POST",
      body: JSON.stringify({
        query,
      }),
    });
    return data.value as unknown as Score[];
  } catch (error: any) {
    return error.message;
  } finally {
    style.endLoading(100);
  }
};

export async function fetchSubscriptions() {
  const stripeSubscriptions = await useLazySanityQuery(subscriptionsURI());
  return stripeSubscriptions;
}

export async function fetchData(query: string) {
  let result: Change[] | Article[] = [];

  try {
    const { data } = await useSanityQuery(query);
    result = data.value as unknown as Change[] | Article[];
  } catch (error) {
    console.log(error);
  } finally {
    return result;
  }
}

export async function fetchScoresInPlan(): Promise<
  globalThis.Ref<Score[] | null> | undefined
> {
  const style = useStyle();
  try {
    const { data } = await useSanityQuery<Score[] | null>(scoresInPlanURI());
    if (data.value) scoresInPlan.value = data.value;
    return data;
  } catch (error: any) {
    console.log(error);
  } finally {
    style.endLoading(1000);
  }
}

export const fetchScore = async (slug: string | string[]) => {
  let score: Score | undefined;
  try {
    const { data }: { data: globalThis.Ref<Score[] | null> } =
      await useSanityQuery(scoreURI(slug.toString()));

    if (data.value) {
      score = data.value[0];
      if (score) {
        score.movements.forEach((movement: Movement) => {
          movement.sections.forEach((section: Section) => {
            section.tempoRange = setTempoRange(
              section.tempoRangeFull,
              section.step,
            );
            section.fileList = setFileList(
              score?.slug!,
              score?.pathName!,
              section.movementIndex,
              section.tempoRange,
              section.name,
              format,
              section.tempoMultiplier ?? 1,
            );
          });
        });
      }
    }

    return score;
  } catch (error: any) {
    // console.log(error)
  }
};

function useMultiplier(tempos: number[], multiplier: number) {
  return tempos.map((tempo) => tempo * multiplier);
}

export function setTempoRange(data: number[], step: number) {
  const array: number[] = [];
  for (let i = data[0]; i <= data[1]; i += step) {
    array.push(i);
  }
  return array;
}

export function setFileList(
  slug: string,
  pathName: string,
  movementIndex: number,
  tempoRange: number[],
  sectionName: string,
  format: AudioFormat,
  multiplier: number,
) {
  const fullPath = `${supabaseUrl}${slug}/${movementIndex}/${sectionName}`;
  const fullName = `${pathName}_${movementIndex}_${sectionName}`;
  return tempoRange.map(
    (tempo) => `${fullPath}/${fullName}_${tempo * multiplier}.${format}`,
  );
}

//HELPER FUNCTIONS
export function getTempoIndex(data: number[], tempo: number) {
  return data.findIndex((t) => t === tempo);
}

export const srcsetObject = {
  hdp: 1536,
  xl: 1280,
  lg: 1024,
  md: 768,
  s: 640,
};

export function mobileTitle(title: string, lettersToSkip = 0) {
  if (title.includes("No ")) {
    return title.substring(title.indexOf("No ") + lettersToSkip);
  }
  if (title.includes("in ")) {
    return title.substring(title.indexOf("in "));
  }
  if (title.includes("op. ")) {
    return title.substring(title.indexOf("op. "));
  }
  //checl if title has a space, if it has, return the first word, if it doesn't, return the whole title
  if (title.includes(" ")) {
    return title.substring(0, title.indexOf(" "));
  } else {
    return title;
  }
}

export function sendFeedback(URL: string) {
  window.open(URL);
}

export function urlForImage(source: Object) {
  return imageBuilder.image(source);
}

export function getImageUrl(image: Object, width: number): string {
  if (image) {
    return urlForImage(image).auto("format").width(width).url();
  } else {
    return "No image found";
  }
}
