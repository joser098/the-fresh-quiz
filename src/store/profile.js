import { create } from "zustand";

export const useProfileStore = create((set) => {
  return {
    user: {},
    setUser: (data) => {
      set({ user: data });
    },
  };
});
