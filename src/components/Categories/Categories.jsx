import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import s from "./Categories.module.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://quiz-7.com/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <>
      <h3 className={`flex ${s.title}`}>Let's play</h3>
      <section className={`flex ${s.container}`}>
        {categories.map((category) => {
          return (
            <CategoryCard
              key={category.id}
              id={category.id}
              icon={category.icon}
              title={category.title}
              questions={category.questions}
            />
          );
        })}
      </section>
    </>
  );
};

export default Categories;
