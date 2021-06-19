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
  } = useContext(Context);

  return (
    <div className="buttons">
      <div id="break-label" className="label">
        <h4>Break Length</h4>
        <div className="breaks">
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
      <div id="session-label" className="label">
        <h4>Session Length</h4>
        <div className="sessions">
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
