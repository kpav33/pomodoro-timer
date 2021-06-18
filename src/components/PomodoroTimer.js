import React, { useContext } from "react";
import { Context } from "../container/Context";

import Buttons from "./Buttons";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";

function PomodoroTimer() {
  const {
    setPlayPauseButton,
    setSessionLength,
    setBreakLength,
    setSeconds,
    seconds,
    minutes,
    setMinutes,
    playPauseButton,
    state,
    setState,
    audioSrc,
    audioRef,
  } = useContext(Context);

  return (
    <div className="pomodoroTimer">
      <Buttons />
      <div className="clock">
        <div id="timer-label">{state === "session" ? "Session" : "Break"}</div>
        <div id="time-left">
          {/* If minutes or seconds are less than 10 add a leading 0 to it*/}
          {`${minutes < 10 ? "0" + minutes : minutes}:${
            seconds < 10 ? "0" + seconds : seconds
          }`}
        </div>
      </div>
      <div className="controlButtons">
        <div id="test">
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
