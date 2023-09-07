import { useEffect, useState } from "react";

const Timer = ({ timerKey, seconds, timerExpired }) => {
  const [time, setTime] = useState(seconds);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTime((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          clearInterval(countdown);
          timerExpired();
          return prevTimer;
        }
      });
    }, 1000);

    setTimeout(() => {
      clearInterval(countdown);
      if (time == 0) {
        timerExpired();
      }
    }, seconds * 1000);

    return () => clearInterval(countdown);
  }, [seconds, timerExpired]);

  return (
    <>
      <p>{time}</p>
    </>
  );
};

export default Timer;
