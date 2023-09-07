import { useEffect, useState } from "react";
import s from "./Timer.module.css";

const Timer = ({ timerKey, seconds, timerExpired }) => {
  //LOCAL STATES
  const [time, setTime] = useState(seconds);

  //LIFE CYCLE
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
      if (time === 0) {
        timerExpired();
      }
    }, seconds * 1000);

    return () => clearInterval(countdown);
  }, [seconds, timerExpired]);

  return (
    <>
      <p className={s.time}>{time}</p>
    </>
  );
};

export default Timer;
