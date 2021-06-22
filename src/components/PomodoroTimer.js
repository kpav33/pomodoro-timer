import React, { useContext } from "react";
import { Context } from "../container/Context";

import BreakSessionControl from "./BreakSessionControl";
import Clock from "./Clock";

function PomodoroTimer() {
  const { audioSrc, audioRef } = useContext(Context);

  return (
    <div className="pomodoroTimer">
      <BreakSessionControl />
      <Clock />
      <audio
        id="beep"
        preload="auto"
        src={audioSrc}
        className="clip"
        ref={audioRef}
      />
    </div>
  );
}

export default PomodoroTimer;
