import React, { useContext } from "react";
import { Context } from "../Context";

import Buttons from "./Buttons";

function PomodoroTimer() {
  const {
    setPlayPauseButton,
    setSessionLength,
    setSeconds,
    sessionLength,
    seconds,
    minutes,
    setMinutes,
  } = useContext(Context);

  return (
    <div className="pomodoroTimer">
      <Buttons />
      <div className="clock">
        <div id="timer-label">Session</div>
        <div id="time-left">
          {minutes} : {seconds}
        </div>
      </div>
      <div className="controlButtons">
        <div id="start_stop">
          <div onClick={() => setPlayPauseButton(true)}>Play</div>
          <div onClick={() => setPlayPauseButton(false)}>Pause</div>
        </div>
        <div
          id="reset"
          onClick={() => {
            setPlayPauseButton(false);
            setMinutes(25);
            setSeconds(0);
          }}
        >
          Restart
        </div>
      </div>
    </div>
  );
}

export default PomodoroTimer;
