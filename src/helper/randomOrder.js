const randomOrder = (input) => {
  const arr = [
    { name: input?.option1, value: "option1" },
    { name: input?.option2, value: "option2" },
    { name: input?.option3, value: "option3" },
    { name: input?.option4, value: "option4" },
  ];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
};

export default randomOrder;
