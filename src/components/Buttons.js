import React, { useContext } from "react";

import { Context } from "../container/Context";

import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

function Buttons() {
  const {
    breakLength,
    setBreakLength,
    sessionLength,
    setSessionLength,
    setMinutes,
    state,
    playPauseButton,
  } = useContext(Context);

  return (
    <div className="buttons">
      <div id="break-label" className="label">
        <h4>Break Length</h4>
        <div className="breaks">
          <button
            className="arrow"
            id="break-decrement"
            onClick={() => {
              if (playPauseButton === false) {
                setBreakLength((prevState) => {
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
          >
            <FaArrowDown />
          </button>
          <span id="break-length">{breakLength}</span>
          <button
            className="arrow"
            id="break-increment"
            onClick={() => {
              if (playPauseButton === false) {
                setBreakLength((prevState) => {
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
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
      <div id="session-label" className="label">
        <h4>Session Length</h4>
        <div className="sessions">
          <button
            className="arrow"
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
          >
            <FaArrowDown />
          </button>
          <span id="session-length">{sessionLength}</span>
          <button
            className="arrow"
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
              if (state === "session" && playPauseButton === false) {
                setMinutes((prevState) => {
                  if (prevState < 60) {
                    return prevState + 1;
                  } else {
                    return prevState;
                  }
                });
              }
            }}
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Buttons;
