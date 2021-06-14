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
    setMinutes,
    state,
    setPlayPauseButton,
    playPauseButton,
  } = useContext(Context);

  return (
    <div className="buttons">
      <div id="break-label">
        <h4>Break Length</h4>
        <div className="breaks">
          <ArrowUpwardIcon
            id="break-increment"
            onClick={() => {
              if (playPauseButton === false) {
                setBreakLength((prevState) => {
                  console.log(prevState);
                  if (prevState < 60) {
                    return prevState + 1;
                  } else {
                    return prevState;
                  }
                });
              }
              if (state === "break" && playPauseButton === false) {
                setMinutes((prevState) => {
                  if (prevState < 60) {
                    return prevState + 1;
                  } else {
                    return prevState;
                  }
                });
              }
            }}
            fontSize="large"
          />
          <span id="break-length">{breakLength}</span>
          <ArrowDownwardIcon
            id="break-decrement"
            onClick={() => {
              if (playPauseButton === false) {
                setBreakLength((prevState) => {
                  console.log(prevState);
                  if (prevState > 1) {
                    return prevState - 1;
                  } else {
                    return 1;
                  }
                });
              }
              if (state === "break" && playPauseButton === false) {
                setMinutes((prevState) => {
                  if (prevState > 1) {
                    return prevState - 1;
                  } else {
                    return 1;
                  }
                });
              }
            }}
            fontSize="large"
          />
        </div>
      </div>
      <div id="session-label">
        <h4>Session Length</h4>
        <div className="sessions">
          <ArrowUpwardIcon
            id="session-increment"
            onClick={() => {
              if (playPauseButton === false) {
                setSessionLength((prevState) => {
                  if (prevState < 60) {
                    return prevState + 1;
                  } else {
                    return prevState;
                  }
                });
              }
              if (state == "session" && playPauseButton === false) {
                setMinutes((prevState) => {
                  if (prevState < 60) {
                    return prevState + 1;
                  } else {
                    return prevState;
                  }
                });
              }
            }}
            fontSize="large"
          />
          <span id="session-length">{sessionLength}</span>
          <ArrowDownwardIcon
            id="session-decrement"
            onClick={() => {
              if (playPauseButton === false) {
                setSessionLength((prevState) => {
                  if (prevState > 1) {
                    return prevState - 1;
                  } else {
                    return 1;
                  }
                });
              }
              if (state === "session" && playPauseButton === false) {
                setMinutes((prevState) => {
                  if (prevState > 1) {
                    return prevState - 1;
                  } else {
                    return 1;
                  }
                });
              }
            }}
            fontSize="large"
          />
        </div>
      </div>
    </div>
  );
}

export default Buttons;
