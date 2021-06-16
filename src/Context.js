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

  let audioSrc =
    "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav";

  // <audio src={audioSrc} className="clip" ref={audioRef} />;

  //console.log(minutes, seconds);
  if (minutes == 0 && seconds == 0) {
    audioRef.current.load();
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {}).catch((err) => console.log(err));
      console.log("PLAY SOUND");
    }
  }

  // Timer
  function updateTime() {
    //console.log("INSIDE updateTime() " + minutes, seconds);
    // Uncaught (in promise) DOMException: The fetching process for the media resource was aborted by the user agent at the user's request.
    if (minutes == 1 && seconds == 0 && false) {
      audioRef.current.load();
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {}).catch((err) => console.log(err));
        console.log("PLAY SOUND");
      }
    }
    if (minutes == 0 && seconds == 0) {
      /*audioRef.current.load();
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {}).catch((err) => console.log(err));
        console.log("PLAY SOUND");
      }*/
      //reset
      if (state === "session") {
        //alert("Session over! Continue?");
        setState("break");
        setSeconds(0);
        setMinutes(breakLength);
        //setPlayPauseButton(false);
      } else {
        //alert("Break over! Continue?");
        setState("session");
        setSeconds(0);
        setMinutes(sessionLength);
        //setPlayPauseButton(false);
      }
    } else {
      if (seconds == 0) {
        setMinutes((minutes) => minutes - 1);
        setSeconds(59);
      } else {
        setSeconds((seconds) => seconds - 1);
      }
    }
  }

  useEffect(() => {
    // use set timeout and be confident because updateTime will cause rerender
    // rerender mean re call this effect => then it will be similar to how setinterval works
    // but with easy to understand logic
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
