import React from "react";

function Normal({ currentSeconds, currentMinutes, currentHours, currentDays }) {
  return (
    <>
      <div className="countdown__container-card">
        <div>
          <h4>{currentDays}</h4>
        </div>
        <h1>Days</h1>
      </div>
      <div className="countdown__container-card">
        <div>
          <h4>{currentHours}</h4>
        </div>
        <h1>Hours</h1>
      </div>

      <div className="countdown__container-card">
        <div>
          <h4>{currentMinutes}</h4>
        </div>
        <h1>Minutes</h1>
      </div>

      <div className="countdown__container-card">
        <div>
          <h4>{currentSeconds}</h4>
        </div>
        <h1>Seconds</h1>
      </div>
    </>
  );
}

export default Normal;
