import FlipTimer from "../../components/FlipTimer/FlipTimer";
import Normal from "../../components/Normal/Normal";
import PulseTimer from "../../components/PulseTimer/PulseTimer";
import "./countdown.css";

function Countdown({
  currentSeconds,
  currentMinutes,
  currentHours,
  currentDays,
  changeType,
  pulseAnimationDelay,
  flipAnimationDelay,
}) {
  const project = (prop) => {
    switch (prop) {
      case "Normal":
        return (
          <Normal
            currentSeconds={currentSeconds}
            currentMinutes={currentMinutes}
            currentHours={currentHours}
            currentDays={currentDays}
          />
        );
      case "Flip":
        return (
          <FlipTimer
            currentSeconds={currentSeconds}
            currentMinutes={currentMinutes}
            currentHours={currentHours}
            currentDays={currentDays}
            flipAnimationDelay={flipAnimationDelay}
          />
        );
      case "Pulse":
        return (
          <PulseTimer
            currentSeconds={currentSeconds}
            currentMinutes={currentMinutes}
            currentHours={currentHours}
            currentDays={currentDays}
            pulseAnimationDelay={pulseAnimationDelay}
          />
        );
      default:
        return <h1>No project match</h1>;
    }
  };
  return (
    <div className="countdown__container">
      {project(changeType)}
      {/* <FlipTimer
        currentSeconds={currentSeconds}
        currentMinutes={currentMinutes}
        currentHours={currentHours}
        currentDays={currentDays}
      /> */}

      {/* <PulseTimer
        currentSeconds={currentSeconds}
        currentMinutes={currentMinutes}
        currentHours={currentHours}
        currentDays={currentDays}
      /> */}
    </div>
  );
}

export default Countdown;
