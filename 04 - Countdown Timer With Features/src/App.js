import * as React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Countdown from "./containers/Countdown/Countdown";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDateTimePicker } from "@mui/x-date-pickers/DesktopDateTimePicker";
import Stack from "@mui/material/Stack";

function App() {
  const [value, setValue] = React.useState(dayjs());
  const [currentSeconds, setCurrentSeconds] = useState(0);
  const [currentMinutes, setCurrentMinutes] = useState(0);
  const [currentHours, setCurrentHours] = useState(0);
  const [currentDays, setCurrentDays] = useState(0);
  const [refreshFrequency, setRefreshFrequency] = useState(3000);
  const [changeType, setChangeType] = useState("Flip");
  const [flipAnimation, setFlipAnimation] = useState({
    time: "2.5s",
    delay: 1500,
  });
  const [pulseAnimation, setPulseAnimation] = useState({
    time: "2.5s",
    delay: 1500,
  });
  const [countDownDate, setCountDownDate] = useState(
    new Date().getTime() + 86460000
  );
  const [activeType, setActiveType] = useState("Flip");
  const [activeFrequency, setActiveFrequency] = useState(3);
  const style = {
    "--refresh-flip-animation-time": flipAnimation.time,
    "--refresh-pulse-animation-time": pulseAnimation.time,
  };

  useEffect(() => {
    const savedDate = JSON.parse(localStorage.getItem("react-countdown-date"));
    if (savedDate) {
      setCountDownDate(savedDate);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("react-countdown-date", JSON.stringify(countDownDate));
  }, [countDownDate]);

  useEffect(() => {
    const timeremaining = countDownDate - new Date().getTime();
    if (timeremaining <= 0) {
      setCurrentSeconds(0);
      return;
    }
    const interval = setInterval(() => {
      setCurrentSeconds(Math.floor((timeremaining % (1000 * 60)) / 1000));
      setCurrentMinutes(
        Math.floor((timeremaining % (1000 * 60 * 60)) / (1000 * 60))
      );
      setCurrentHours(
        Math.floor((timeremaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setCurrentDays(Math.floor(timeremaining / (1000 * 60 * 60 * 24)));
    }, refreshFrequency);

    return () => clearInterval(interval);
  }, [currentSeconds, countDownDate, changeType, refreshFrequency]);

  const changeFrequency = (seconds) => {
    let flipDelay;
    let pulseDelay;
    let flipLength;
    let pulseLength;
    if (seconds === 1) {
      flipDelay = 500;
      pulseDelay = 375;
      flipLength = "0.9s";
      pulseLength = "0.75s";
    } else if (seconds === 2) {
      flipDelay = 800;
      pulseDelay = 650;
      flipLength = "1.5s";
      pulseLength = "1.3s";
    } else {
      flipDelay = 1300;
      pulseDelay = 1100;
      flipLength = "2.1s";
      pulseLength = "2s";
    }
    setFlipAnimation({
      time: flipLength,
      delay: flipDelay,
    });
    setPulseAnimation({
      time: pulseLength,
      delay: pulseDelay,
    });
    setRefreshFrequency(seconds * 1000);
    setActiveFrequency(seconds);
  };

  const changeAnimationType = (type) => {
    setChangeType(type);
    setActiveType(type);
  };
  return (
    <div className="app__container" style={style}>
      <div className="options__container">
        <h2>Type </h2>
        <div className="options__container-type">
          <h1
            className={activeType === "Normal" ? "option active" : "option"}
            onClick={() => changeAnimationType("Normal")}
          >
            Normal
          </h1>
          <h1
            className={activeType === "Flip" ? "option active" : "option"}
            onClick={() => changeAnimationType("Flip")}
          >
            Flip
          </h1>
          <h1
            className={activeType === "Pulse" ? "option active" : "option"}
            onClick={() => changeAnimationType("Pulse")}
          >
            Pulse{" "}
          </h1>
        </div>
        <h2>Refresh Frequency </h2>
        <div className="options__container-type">
          <h1
            className={activeFrequency === 1 ? "option active" : "option"}
            onClick={() => changeFrequency(1)}
          >
            1s
          </h1>
          <h1
            className={activeFrequency === 2 ? "option active" : "option"}
            onClick={() => changeFrequency(2)}
          >
            2s
          </h1>
          <h1
            className={activeFrequency === 3 ? "option active" : "option"}
            onClick={() => changeFrequency(3)}
          >
            3s{" "}
          </h1>
          <h1
            className={activeFrequency === 5 ? "option active" : "option"}
            onClick={() => changeFrequency(5)}
          >
            5s{" "}
          </h1>
        </div>
        <div className="date-picker">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack
              spacing={3}
              sx={{
                "& .MuiPickersPopper-root": {
                  border: "4px solid white",
                  backgroundColor: "black",
                  color: "white",
                },
              }}
            >
              <DesktopDateTimePicker
                label="Choose your Date"
                value={value}
                onChange={(newValue) => {
                  setCountDownDate(new Date(newValue).getTime());
                  // setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
                minDateTime={dayjs(new Date())}
                sx={{ color: "white" }}
              />
            </Stack>
          </LocalizationProvider>
        </div>
      </div>
      <Countdown
        currentSeconds={currentSeconds}
        currentMinutes={currentMinutes}
        currentHours={currentHours}
        currentDays={currentDays}
        changeType={changeType}
        flipAnimationDelay={flipAnimation.delay}
        pulseAnimationDelay={pulseAnimation.delay}
      />
    </div>
  );
}

export default App;
