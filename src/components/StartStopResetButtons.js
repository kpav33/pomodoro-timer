import React, { useContext } from "react";
import { Context } from "../container/Context";

import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";

function StartStopResetButtons() {
  const {
    playPauseButton,
    setPlayPauseButton,
    audioRef,
    setMinutes,
    setSeconds,
    setSessionLength,
    setBreakLength,
    setState,
  } = useContext(Context);

  return (
    <div className="controlButtons">
      {/* Switch between play or pause button */}
      <div id="playPauseButtons">
        {!playPauseButton ? (
          <div id="start_stop" onClick={() => setPlayPauseButton(true)}>
            <FaPlay />
          </div>
        ) : (
          <div id="start_stop" onClick={() => setPlayPauseButton(false)}>
            <FaPause />
          </div>
        )}
      </div>
      {/* Reset button */}
      <div
        id="reset"
        onClick={() => {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
          setPlayPauseButton(false);
          setMinutes(25);
          setSeconds(0);
          setSessionLength(25);
          setBreakLength(5);
          setState("session");
        }}
      >
        <FiRefreshCw />
      </div>
    </div>
  );
}

export default StartStopResetButtons;
