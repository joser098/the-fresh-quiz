import { create } from "zustand";
import { getQuestionary } from "../helper/getQuestionary";

export const useQuestionaryStore = create((set, get) => {
  return {
    currentQuestionary: [],
    currentQuestion: {},
    setCurrentQuestionary: async (questionaryId) => {
      const newQuestionary = await getQuestionary(questionaryId);
      set({ currentQuestionary: newQuestionary });
    },
    optionSelected: "",
    setOptionSelected: (option) => {
      set({
        optionSelected: option,
      });
    },
    time: 10,
    setTime: () => {
      set({ time: 10 });
    },
    timerExpired: false,
    setTimerExpired: (value) => {
      set({ timerExpired: value });
    },
  };
});
