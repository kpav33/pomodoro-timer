import React, { useContext } from "react";

import { Context } from "../Context";

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

function Buttons() {
  const {
    breakLength,
    setBreakLength,
    sessionLength,
    setSessionLength,
    seconds,
  } = useContext(Context);

  return (
    <div className="buttons">
      <div id="break-label">
        <h4>Break Length</h4>
        <div className="breaks">
          <ArrowUpwardIcon
            id="break-increment"
            onClick={() => setBreakLength((prevState) => prevState + 1)}
            fontSize="large"
          />
          <span id="break-length">{breakLength}</span>
          <ArrowDownwardIcon
            id="break-decrement"
            onClick={() => setBreakLength((prevState) => prevState - 1)}
            fontSize="large"
          />
        </div>
      </div>
      <div id="session-label">
        <h4>Session Length</h4>
        <div className="sessions">
          <ArrowUpwardIcon
            id="session-increment"
            onClick={() => setSessionLength((prevState) => prevState + 1)}
            fontSize="large"
          />
          <span id="session-length">{sessionLength}</span>
          <ArrowDownwardIcon
            id="session-decrement"
            onClick={() => setSessionLength((prevState) => prevState - 1)}
            fontSize="large"
          />
        </div>
      </div>
    </div>
  );
}

export default Buttons;
