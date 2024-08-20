import { create } from "zustand";

interface ActiveSectionStore {
  activeSection: string;
  setActiveSection: (section: string) => void;
}
export const useActiveSection = create<ActiveSectionStore>((set) => ({
  activeSection: "intro",
  setActiveSection: (section: string) => set({ activeSection: section }),
}));
