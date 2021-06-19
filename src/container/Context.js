import React, { useState, useEffect, useRef } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  // Session or break
  const [state, setState] = useState("session");

  // Break state
  const [breakLength, setBreakLength] = useState(5);

  // Session state
  const [sessionLength, setSessionLength] = useState(25);

  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);

  // Play/Pause button
  const [playPauseButton, setPlayPauseButton] = useState(false);

  // Audio
  const audioRef = useRef();

  // Play sound, added to fix audio bug of playing sound on one minute mark
  const [play, setPlay] = useState(false);

  let audioSrc =
    "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav";

  if (minutes === 0 && seconds === 0 && play) {
    audioRef.current.load();
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {}).catch((err) => console.log(err));
    }
  }

  // Timer
  function updateTime() {
    // Fix bug of playing audio at one minute mark, search for better solution
    if (minutes === 0) {
      setPlay(true);
    }
    if (minutes === 0 && seconds === 0) {
      //reset
      if (state === "session") {
        // Tests don't pass with the commented out code in place
        // alert("Session over! Continue?");
        setState("break");
        setSeconds(0);
        setMinutes(breakLength);
        setPlay(false);
        // setPlayPauseButton(false);
      } else {
        // Tests don't pass with the commented out code in place
        // alert("Break over! Continue?");
        setState("session");
        setSeconds(0);
        setMinutes(sessionLength);
        setPlay(false);
        // setPlayPauseButton(false);
      }
    } else {
      if (seconds === 0) {
        setMinutes((minutes) => minutes - 1);
        setSeconds(59);
      } else {
        setSeconds((seconds) => seconds - 1);
      }
    }
  }

  useEffect(() => {
    if (playPauseButton) {
      const token = setTimeout(updateTime, 1000);

      return function cleanUp() {
        clearTimeout(token);
      };
    }
  });

  return (
    <Context.Provider
      value={{
        breakLength,
        setBreakLength,
        sessionLength,
        setSessionLength,
        seconds,
        setSeconds,
        playPauseButton,
        setPlayPauseButton,
        minutes,
        setMinutes,
        state,
        setState,
        audioSrc,
        audioRef,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
