import { useParams } from "react-router-dom";
import { useQuestionaryStore } from "../../store/questionary";
import { useEffect, useState } from "react";
import s from "./Questionary.module.css";
import Question from "../Question/Question";

const Questionary = () => {
  const [progressBar, setProgressBar] = useState(0);
  const { id } = useParams();
  const currentQuestionary = useQuestionaryStore(
    (state) => state.currentQuestionary
  );
  const setCurrentQuestionary = useQuestionaryStore(
    (state) => state.setCurrentQuestionary
  );
  const optionSelected = useQuestionaryStore((state) => state.optionSelected);
  const setOptionSelected = useQuestionaryStore(
    (state) => state.setOptionSelected
  );
  const setTimerExpired = useQuestionaryStore((state) => state.setTimerExpired);

  const handleNextButton = () => {
    setProgressBar(progressBar + 1);

    if (optionSelected === "option1") {
      alert("respuesta correcta");
    } else {
      alert("respuesta incorrecta");
    }

    setTimerExpired(false);
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
      <Question currentQuestion={currentQuestionary[progressBar]} />
      <button className={s.nextBtn} onClick={handleNextButton}>
        {" "}
        Next{" "}
      </button>
    </section>
  );
};

export default Questionary;
