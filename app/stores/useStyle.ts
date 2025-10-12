export const isOnline = ref(() => navigator.onLine);

export const useStyle = defineStore("style", {
  state: () => ({
    iconSize: "w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8",
    iconSmall: "w-2 h-2 sm:w-4 sm:h-4",
    instrumentIconSize: "w-12 h-12 sm:w-20 sm:h-20",
    transition: "transition-colors duration-100",
    colors: {
      purple: "bg-purple-800",
      indigo: "bg-indigo-800",
      pink: "bg-pink-800",
      fuchsia: "bg-fuchsia-800",
      violet: "bg-violet-700",
    },
    buttonColors: {
      purple: "bg-purple-800",
      indigo: "bg-indigo-800",
      pink: "bg-pink-800",
      fuchsia: "bg-fuchsia-800",
      violet: "bg-violet-700",
      transparent: "bg-transparent",
      none: "bg-transparent ring-0",
    },
    elegantButtons: {
      primary:
        "text-sm flex items-center px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-md shadow-lg shadow-purple-500/5 hover:bg-white/10 rounded-full",
      secondary:
        "text-sm flex items-center px-4 py-2 bg-gray-900/40 border border-gray-700/50 backdrop-blur-md shadow-lg shadow-gray-900/30 hover:bg-gray-800/60 rounded-full",
      accent:
        "text-sm flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 backdrop-blur-md shadow-lg shadow-purple-500/5 hover:from-purple-500/30 hover:to-pink-500/30 rounded-full",
      active:
        "text-sm flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-400/60 backdrop-blur-md shadow-lg shadow-purple-500/30 ring-1 ring-purple-400/40 rounded-full",
      pill: "text-sm flex items-center px-4 py-2 bg-gradient-to-r from-slate-800/60 to-slate-700/60 border border-slate-600/40 backdrop-blur-md shadow-lg shadow-gray-900/30 hover:from-slate-700/80 hover:to-slate-600/80 rounded-full",
    },
    buttonBorders: {
      purple: `ring-purple-800`,
      indigo: "ring-indigo-700",
      pink: "ring-pink-700",
      fuchsia: "ring-fuchsia-700",
      violet: "ring-violet-600",
    },
    buttonState: {
      active: "cursor-pointer text-gray-100",
      disabled: "cursor-not-allowed text-gray-500",
      passive: "pointer-events-none cursor-default",
      hiddenSm: "sm:hidden w-full",
      hiddenMb: "hidden sm:flex",
    },
    buttonSizes: {
      standard: "w-full sm:w-1/2 md:w-1/3 lg:w-1/4",
      large: "w-full sm:w-1/2 md:w-1/2 lg:w-1/2",
      min: "w-full sm:w-1/3 md:w-1/4 lg:w-[1/6]",
    },
    ring: "ring-0",
    showHint: false,
    hintPosition: {
      x: 0,
      y: 0,
    },
    loading: false,
    loadingText: "",
  }),

  //!GETTERS
  getters: {
    buttonRings(state) {
      const purple = `${state.ring + state.buttonBorders.purple}`;
      const indigo = `${state.ring + state.buttonBorders.indigo}`;
      const pink = `${state.ring + state.buttonBorders.pink}`;
      const fuchsia = `${state.ring + state.buttonBorders.fuchsia}`;
      const violet = `${this.ring + state.buttonBorders.violet}`;
      return {
        purple,
        indigo,
        pink,
        fuchsia,
        violet,
      };
    },
  },

  //!ACTIONS
  actions: {
    startLoading(text?: string) {
      this.loading = true;
      this.loadingText = text || "loading";
    },

    async endLoading(time: number = 200) {
      setTimeout(() => {
        this.loading = false;
      }, time);
    },

    toggleHelpBubble() {
      this.showHint = !this.showHint;
    },

    hideHelpBubble() {
      this.showHint = false;
    },
  },
});

watchEffect(() => isOnline);
