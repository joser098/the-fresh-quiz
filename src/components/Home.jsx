import Profile from "./Profile";
import { useProfileStore } from "../store/profile";
import { useEffect } from "react";

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
      <h2>Home</h2>
    </>
  );
};

export default Home;
