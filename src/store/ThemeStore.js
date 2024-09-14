import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThemeStore = create(
  persist((set) => ({
    dark: false,
    toggleDarkTheme: () => {
      return set((state) => 
        ({ dark: !state.dark })
      );
    },
  }), { name: 'darkmode' })
);
