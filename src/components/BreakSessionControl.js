import React, { useContext } from "react";
import { Context } from "../container/Context";

import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";

function BreakSessionControl() {
  const {
    breakLength,
    setBreakLength,
    sessionLength,
    setSessionLength,
    state,
    playPauseButton,
  } = useContext(Context);

  return (
    <div className="buttons">
      {/* Break length controls */}
      <div id="break-label" className="label">
        <h2>Break Length</h2>
        <div
          className="breaks"
          style={{ opacity: playPauseButton ? "0.8" : "1" }}
        >
          <DecrementButton
            buttonId="break-decrement"
            setLength={setBreakLength}
            stateValue={state === "break"}
          />
          <span id="break-length">{breakLength}</span>
          <IncrementButton
            buttonId="break-increment"
            setLength={setBreakLength}
            stateValue={state === "break"}
          />
        </div>
      </div>
      {/* Session length controls */}
      <div id="session-label" className="label">
        <h2>Session Length</h2>
        <div
          className="sessions"
          style={{ opacity: playPauseButton ? "0.8" : "1" }}
        >
          <DecrementButton
            buttonId="session-decrement"
            setLength={setSessionLength}
            stateValue={state === "session"}
          />
          <span id="session-length">{sessionLength}</span>
          <IncrementButton
            buttonId="session-increment"
            setLength={setSessionLength}
            stateValue={state === "session"}
          />
        </div>
      </div>
    </div>
  );
}

export default BreakSessionControl;
