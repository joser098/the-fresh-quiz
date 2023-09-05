import Profile from "./Profile/Profile";
import { useProfileStore } from "../store/profile";
import { useEffect, useState } from "react";
import Categories from "./Categories/Categories";

const Home = () => {
  const setUser = useProfileStore((state) => state.setUser);

  useEffect(() => {
    fetch("https://quiz-7.com/profile.json")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);

  return (
    <>
      <Profile />
      <Categories />
    </>
  );
};

export default Home;
