<script lang="ts" setup>
interface LibraryItem {
    _id: string;
    shortTitle: string;
    composer: string;
    instrument: string;
    complete: number;
}

interface ComposerGroup {
    name: string;
    scores: LibraryItem[];
}

const query = groq`*[_type == "score" && private != true && complete > 0 && test != true] | order(title asc) {
    _id, shortTitle, composer, instrument, complete
}`;

const { data: library, status } = useSanityQuery<LibraryItem[]>(query);

const composers = computed<ComposerGroup[]>(() => {
    if (!library.value) return [];

    const grouped = new Map<string, LibraryItem[]>();
    for (const item of library.value) {
        const existing = grouped.get(item.composer);
        if (existing) {
            existing.push(item);
        } else {
            grouped.set(item.composer, [item]);
        }
    }

    return Array.from(grouped.entries())
        .map(([name, scores]) => ({ name, scores }))
        .sort((a, b) => a.name.localeCompare(b.name));
});

const totalPieces = computed(() => library.value?.length ?? 0);
</script>

<template>
    <section class="mt-16 mb-8">
        <SectionTitle title="Current GPhil Library" :subtitle="`${totalPieces} pieces available`" />

        <div v-if="status === 'pending'" class="flex justify-center mt-8">
            <div class="text-gray-400 text-sm">Loading library...</div>
        </div>

        <div v-else-if="composers.length" class="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="composer in composers" :key="composer.name">
                <h3 class="text-base font-bold text-white/70 tracking-wide mb-3">
                    {{ composer.name.toUpperCase() }}
                    <span v-if="composer.scores.length > 1" class="text-gray-500 font-normal">
                        ({{ composer.scores.length }})
                    </span>
                </h3>
                <div class="flex flex-col gap-1">
                    <div
                        v-for="score in composer.scores"
                        :key="score._id"
                        class="relative overflow-hidden rounded-full px-3 py-0.5 leading-snug bg-gray-800/30 border border-white/5 flex items-center"
                    >
                        <div
                            class="absolute inset-0 rounded-full bg-linear-to-r from-purple-500/20 to-indigo-500/20"
                            :style="{ width: `${score.complete}%` }"
                        ></div>
                        <span class="relative text-base text-white/60">{{ score.shortTitle }}</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
