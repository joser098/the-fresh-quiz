export const getQuestionary = async (id) => {
  let result = [];

  await fetch(`https://quiz-7.com/questions/${id}.json`)
    .then((res) => res.json())
    .then((data) => {
      result = data;
    })
    .catch((e) => console.log(e));

  return result;
};
