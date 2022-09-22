import React, { useState, useEffect } from "react";
import "./pulseTimer.css";

function PulseTimer({
  currentSeconds,
  currentMinutes,
  currentHours,
  currentDays,
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
    }, 500);
    return () => clearTimeout(timer);
  }, [staticMinute]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFlipSecond(currentSeconds);
    }, 500);
    return () => clearTimeout(timer);
  }, [staticSecond]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFlipHour(currentHours);
    }, 500);
    return () => clearTimeout(timer);
  }, [staticHour]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFlipDay(currentDays);
    }, 500);
    return () => clearTimeout(timer);
  }, [staticDay]);

  return (
    <>
      <div className="countdown__container-card">
        <div>
          <h3 className={changeDay ? "text-pulse" : "text-pulse2 "}>
            {flipDay}
          </h3>
        </div>
        <h1>Days</h1>
      </div>
      <div className="countdown__container-card">
        <div>
          <h3 className={changeHour ? "text-pulse" : "text-pulse2 "}>
            {flipHour}
          </h3>
        </div>
        <h1>Hours</h1>
      </div>

      <div className="countdown__container-card">
        <div>
          <h3 className={changeMinute ? "text-pulse" : "text-pulse2 "}>
            {flipMinute}
          </h3>
        </div>
        <h1>Minutes</h1>
      </div>

      <div className="countdown__container-card">
        <div>
          <h3 className={changeSecond ? "text-pulse" : "text-pulse2 "}>
            {flipSecond}
          </h3>
        </div>
        <h1>Seconds</h1>
      </div>
    </>
  );
}

export default PulseTimer;
