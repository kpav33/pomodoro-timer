import React, { useContext } from "react";
import { Context } from "../container/Context";

import { FaArrowDown } from "react-icons/fa";

function DecrementButton({ buttonId, setLength, stateValue }) {
  const { playPauseButton, setMinutes } = useContext(Context);

  return (
    <button
      className="arrow"
      id={buttonId}
      onClick={() => {
        // Disable buttons while timer is playing
        if (playPauseButton === false) {
          setLength((prevState) => {
            if (prevState > 1) {
              return prevState - 1;
            } else {
              return 1;
            }
          });
        }
        // Keep in sync the clock display minutes value with the value set with the arrow buttons, depending on whether the current state is session or break
        if (stateValue && playPauseButton === false) {
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
  );
}

export default DecrementButton;
