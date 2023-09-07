import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuestionaryStore } from "../../store/questionary";
import randomOrder from "../../helper/randomOrder";
import s from "./Question.module.css";
import Timer from "../Timer/Timer";

const Question = ({ currentQuestion, totalQuestions, finished }) => {
  //HOOKS
  const navigate = useNavigate();
  const optionSelected = useQuestionaryStore((state) => state.optionSelected);
  const setOptionSelected = useQuestionaryStore((state) => state.setOptionSelected);
  const timerExpired = useQuestionaryStore((state) => state.timerExpired);
  const setTimerExpired = useQuestionaryStore((state) => state.setTimerExpired);

  //LOCAL STATES
  const [points, setPoints] = useState(0);
  const [correctClass, setCorrectClass] = useState(true);
  const [options, setOptions] = useState([]);
  const [timerKey, setTimerKey] = useState(0);

  //LIFE CYCLE
  useEffect(() => {
    setCorrectClass(false);
    setOptions(randomOrder(currentQuestion));
    setTimerKey(timerKey + 1);
  }, [currentQuestion]);

  //HANDLERS
  const handleOptionSelected = (e) => {
    setCorrectClass(true);

    if (!timerExpired) {
      setOptionSelected(e.target.value);
      setTimerExpired(true);
    }

    if (e.target.value === "option1") {
      setPoints(points + 100);
    }
  };

  const handleTimerExpired = () => {
    setTimerExpired(true);
  };

  const handleFinishGame = () => {
    alert(`Tu puntuacion final es: ${points} / ${totalQuestions * 100}`);
    navigate("/");
  };

  return (
    <>
      <div className={`flex ${s.bg_title}`}>
        <Timer key={timerKey} seconds={15} timerExpired={handleTimerExpired} />
        <h3 className={s.title}>{currentQuestion?.question}</h3>
      </div>

      {options?.map((option) => {
        return (
          <div
            key={option.value}
            className={`flex ${
              correctClass && option.value === "option1"
                ? "options correctOption"
                : optionSelected === option.value
                ? "options incorrectOption"
                : "options defaultOptions"
            }`}
          >

            <label
              className={`${
                correctClass && option.value === "option1"
                  ? "label correct_label"
                  : optionSelected === option.value
                  ? "label incorrect_label"
                  : "label default_label"
              }`}
              htmlFor={option.value}
            >
              {option.name}
            </label>

            <input
              className={`${
                correctClass && option.value === "option1"
                  ? "input input_correct"
                  : optionSelected === option.value
                  ? "input input_incorrect"
                  : "input default_Input"
              }`}
              type="checkbox"
              name={option.value}
              id={option.value}
              onChange={handleOptionSelected}
              value={option.value}
              disabled={timerExpired}
            />

          </div>
        );
      })}

      {/*SE EJECUTA EN LA ULTIMA PREGUNTA AL HACER CLICK EN 'FINALIZAR' PARA MOSTRAR EL RESULTADO */}
      {finished ? handleFinishGame() : null}
    </>
  );
};

export default Question;
