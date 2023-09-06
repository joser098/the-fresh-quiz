import { useParams } from "react-router-dom";
import { useQuestionaryStore } from "../../store/questionary";
import { useEffect } from "react";

const Questionary = () => {
  const { id } = useParams();
  const currentQuestionary = useQuestionaryStore(
    (state) => state.currentQuestionary
  );
  const setCurrentQuestionary = useQuestionaryStore(
    (state) => state.setCurrentQuestionary
  );

  useEffect(() => {
    console.log(id);
    const fetchQuestionary = async (quesId) => {
      await setCurrentQuestionary(quesId);
    };

    fetchQuestionary(id);
  }, []);

  return (
    <>
      <h4>{id}</h4>
      <p>{currentQuestionary[0]?.question}</p>
    </>
  );
};

export default Questionary;
