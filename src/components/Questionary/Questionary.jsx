import { useParams } from "react-router-dom";
import { useQuestionaryStore } from "../../store/questionary";
import { useEffect, useState } from "react";
import s from "./Questionary.module.css";
import Question from "../Question/Question";

const Questionary = () => {
  const [finished, setFinished] = useState(false);
  const [progressBar, setProgressBar] = useState(1);
  const { id } = useParams();
  const currentQuestionary = useQuestionaryStore(
    (state) => state.currentQuestionary
  );
  const setCurrentQuestionary = useQuestionaryStore(
    (state) => state.setCurrentQuestionary
  );
  const setOptionSelected = useQuestionaryStore(
    (state) => state.setOptionSelected
  );
  const setTimerExpired = useQuestionaryStore((state) => state.setTimerExpired);

  const handleNextButton = () => {
    setProgressBar(progressBar + 1);
    setTimerExpired(false);
    setOptionSelected(" ");
  };

  const handleFinishedBtn = () => {
    setFinished(true);
  };

  useEffect(() => {
    const fetchQuestionary = async (quesId) => {
      await setCurrentQuestionary(quesId);
    };

    fetchQuestionary(id);
  }, []);

  return (
    <section className={`flex ${s.container}`}>
      <div className={`flex ${s.header}`}>
        <a href="/">X</a>
        <div className={s.bar}>
          <progress
            max={currentQuestionary.length}
            value={progressBar}
            className={s.progress}
          />
          <span>
            {progressBar}/{currentQuestionary.length}
          </span>
        </div>
      </div>
      <Question
        currentQuestion={currentQuestionary[progressBar - 1]}
        totalQuestions={currentQuestionary.length}
        finished={finished}
      />

      {progressBar === currentQuestionary.length ? (
        <button className={s.nextBtn} onClick={handleFinishedBtn}>
          Finalizar
        </button>
      ) : (
        <button className={s.nextBtn} onClick={handleNextButton}>
          Next
        </button>
      )}
    </section>
  );
};

export default Questionary;
