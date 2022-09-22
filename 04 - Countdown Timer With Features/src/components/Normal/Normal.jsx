import React from "react";

function Normal({ currentSeconds, currentMinutes, currentHours, currentDays }) {
  return (
    <>
      <div className="countdown__container-card">
        <div>
          <h3>{currentDays}</h3>
        </div>
        <h1>Days</h1>
      </div>
      <div className="countdown__container-card">
        <div>
          <h3>{currentHours}</h3>
        </div>
        <h1>Hours</h1>
      </div>

      <div className="countdown__container-card">
        <div>
          <h3>{currentMinutes}</h3>
        </div>
        <h1>Minutes</h1>
      </div>

      <div className="countdown__container-card">
        <div>
          <h3>{currentSeconds}</h3>
        </div>
        <h1>Seconds</h1>
      </div>
    </>
  );
}

export default Normal;
