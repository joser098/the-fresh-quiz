import { useEffect, useState } from "react";
import { useQuestionaryStore } from "../../store/questionary";
import randomOrder from "../../helper/randomOrder";
import s from "./Question.module.css";
import Timer from "../Timer/Timer";

const Question = ({ currentQuestion }) => {
  const optionSelected = useQuestionaryStore((state) => state.optionSelected);

  const setOptionSelected = useQuestionaryStore(
    (state) => state.setOptionSelected
  );
  const timerExpired = useQuestionaryStore((state) => state.timerExpired);
  const setTimerExpired = useQuestionaryStore((state) => state.setTimerExpired);
  const [options, setOptions] = useState([]);
  const [timerKey, setTimerKey] = useState(0);

  useEffect(() => {
    console.log(timerExpired, optionSelected);
    setOptions(randomOrder(currentQuestion));
    setTimerKey(timerKey + 1);
  }, [currentQuestion]);

  const handleOptionSelected = (e) => {
    if (!timerExpired) {
      setOptionSelected(e.target.value);
      setTimerExpired(true);
      alert("holaaaa");
    }
  };

  const handleTimerExpired = () => {
    setTimerExpired(true);
  };

  return (
    <>
      <div className={s.bg_title}>
        <Timer key={timerKey} seconds={10} timerExpired={handleTimerExpired} />
        <h3 className={s.title}>{currentQuestion?.question}</h3>
      </div>

      {options?.map((option) => {
        return (
          <div key={option.value} className={`flex ${s.options}`}>
            <label htmlFor={option.value}>{option.name}</label>
            <input
              type="radio"
              name={`option-${currentQuestion?.id}`}
              id={option.value}
              onChange={handleOptionSelected}
              value={option.value}
              disabled={timerExpired}
            />
          </div>
        );
      })}
    </>
  );
};

export default Question;
