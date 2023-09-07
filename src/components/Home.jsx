import Profile from "./Profile/Profile";
import { useProfileStore } from "../store/profile";
import { useEffect, useState } from "react";
import Categories from "./Categories/Categories";
const PROFILE_URI = "https://quiz-7.com/profile.json";

const Home = () => {
  const setUser = useProfileStore((state) => state.setUser);

  useEffect(() => {
    fetch(PROFILE_URI)
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
