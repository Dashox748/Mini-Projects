import React, { useState, useEffect } from "react";
import "./flipTimer.css";

function FlipTimer({
  currentSeconds,
  currentMinutes,
  currentHours,
  currentDays,
  flipAnimationDelay,
}) {
  const [changeSecond, setChangeSecond] = useState(false);
  const [flipSecond, setFlipSecond] = useState(0);
  const [staticSecond, setStaticSecond] = useState(currentSeconds);

  const [changeMinute, setChangeMinute] = useState(false);
  const [flipMinute, setFlipMinute] = useState(0);
  const [staticMinute, setStaticMinute] = useState(currentMinutes);

  const [changeHour, setChangeHour] = useState(false);
  const [flipHour, setFlipHour] = useState(0);
  const [staticHour, setStaticHour] = useState(currentHours);

  const [changeDay, setChangeDay] = useState(false);
  const [flipDay, setFlipDay] = useState(0);
  const [staticDay, setStaticDay] = useState(currentDays);

  if (staticMinute !== currentMinutes) {
    setStaticMinute(currentMinutes);
    setChangeMinute(!changeMinute);
  }
  if (staticSecond !== currentSeconds) {
    setStaticSecond(currentSeconds);
    setChangeSecond(!changeSecond);
  }
  if (staticHour !== currentHours) {
    setStaticHour(currentHours);
    setChangeHour(!changeHour);
  }
  if (staticDay !== currentDays) {
    setStaticDay(currentDays);
    setChangeDay(!changeDay);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setFlipMinute(currentMinutes);
    }, flipAnimationDelay);
    return () => clearTimeout(timer);
  }, [staticMinute]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFlipSecond(currentSeconds);
    }, flipAnimationDelay);
    return () => clearTimeout(timer);
  }, [staticSecond]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFlipHour(currentHours);
    }, flipAnimationDelay);
    return () => clearTimeout(timer);
  }, [staticHour]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFlipDay(currentDays);
    }, flipAnimationDelay);
    return () => clearTimeout(timer);
  }, [staticDay]);

  return (
    <>
      <div className="countdown__container-card-flip">
        <div className={changeDay ? "flip-top" : "flip-top2 "}>{flipDay}</div>
        <div>{staticDay}</div>
        <h1>Days</h1>
      </div>
      <div className="countdown__container-card-flip">
        <div className={changeHour ? "flip-top" : "flip-top2 "}>{flipHour}</div>
        <div>{staticHour}</div>
        <h1>Hours</h1>
      </div>

      <div className="countdown__container-card-flip">
        <div className={changeMinute ? "flip-top" : "flip-top2 "}>
          {flipMinute}
        </div>
        <div>{staticMinute}</div>
        <h1>Minutes</h1>
      </div>

      <div className="countdown__container-card-flip">
        <div className={changeSecond ? "flip-top" : "flip-top2 "}>
          {flipSecond}
        </div>
        <div>{staticSecond}</div>
        <h1>Seconds</h1>
      </div>
    </>
  );
}

export default FlipTimer;
