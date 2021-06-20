import React, { useContext } from "react";
import { Context } from "../container/Context";

import { FaArrowUp } from "react-icons/fa";

function IncrementButton({ buttonId, setLength, stateValue }) {
  const { playPauseButton, setMinutes } = useContext(Context);

  return (
    <button
      className="arrow"
      id={buttonId}
      onClick={() => {
        {
          /* Disable buttons while timer is playing */
        }
        if (playPauseButton === false) {
          setLength((prevState) => {
            if (prevState < 60) {
              return prevState + 1;
            } else {
              return prevState;
            }
          });
        }
        {
          /* Keep in sync the clock display minutes value with the value set with the arrow buttons, depending on whether the current state is session or break */
        }
        if (stateValue && playPauseButton === false) {
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
  );
}

export default IncrementButton;
