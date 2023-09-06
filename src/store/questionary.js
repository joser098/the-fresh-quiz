import { create } from "zustand";
import { getQuestionary } from "../helper/getQuestionary";

export const useQuestionaryStore = create((set) => {
  return {
    currentQuestionary: [],
    currentQuestion: {},
    setCurrentQuestionary: async (questionaryId) => {
      const newQuestionary = await getQuestionary(questionaryId);
      set({ currentQuestionary: newQuestionary });
    },
  };
});
