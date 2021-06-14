import React, { useContext } from "react";
import { Context } from "../Context";

import Buttons from "./Buttons";

function PomodoroTimer() {
  const {
    setPlayPauseButton,
    setSessionLength,
    setBreakLength,
    setSeconds,
    sessionLength,
    seconds,
    minutes,
    setMinutes,
    playPauseButton,
    state,
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
          {/* console.log(minutes, seconds) */}
          {`${minutes < 10 ? "0" + minutes : minutes}:${
            seconds < 10 ? "0" + seconds : seconds
          }`}
        </div>
      </div>
      <div className="controlButtons">
        <div id="test">
          {!playPauseButton ? (
            <div id="start_stop" onClick={() => setPlayPauseButton(true)}>
              Play
            </div>
          ) : (
            <div id="start_stop" onClick={() => setPlayPauseButton(false)}>
              Pause
            </div>
          )}
        </div>
        <div
          id="reset"
          onClick={() => {
            audioRef.current.pause();
            setPlayPauseButton(false);
            setMinutes(25);
            setSeconds(0);
            setSessionLength(25);
            setBreakLength(5);
          }}
        >
          Restart
        </div>
      </div>
      <audio id="beep" src={audioSrc} className="clip" ref={audioRef} />
    </div>
  );
}

export default PomodoroTimer;
