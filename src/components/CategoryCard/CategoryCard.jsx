import s from "./CategoryCard.module.css";

const CategoryCard = ({ id, icon, title, questions }) => {
  return (
    <>
      <a href={`/questionary/${id}`} className={s.container}>
        <img src={`https://quiz-7.com/${icon}`} alt={title} />
        <h3>{title}</h3>
        <p>{questions} Questions</p>
      </a>
    </>
  );
};

export default CategoryCard;
