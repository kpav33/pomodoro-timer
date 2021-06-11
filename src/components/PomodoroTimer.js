import React from "react";

import Buttons from "./Buttons";

function PomodoroTimer() {
  return (
    <div className="pomodoroTimer">
      <Buttons />
      <div className="clock">
        <div>Session</div>
        <div>25:00</div>
      </div>
      <div className="controlButtons">
        <div>Play</div>
        <div>Pause</div>
        <div>Restart</div>
      </div>
    </div>
  );
}

export default PomodoroTimer;
