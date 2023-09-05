import { useProfileStore } from "../store/profile";

const Profile = () => {
  const user = useProfileStore((state) => state.user);
  return (
    <>
      <h2>Hi, {user?.name}</h2>
      <p>Let's make this day productive</p>
    </>
  );
};

export default Profile;
