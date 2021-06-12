import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  // Break state
  const [breakLength, setBreakLength] = useState(5);

  // Session state
  const [sessionLength, setSessionLength] = useState(25);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);

  // Play/Pause button
  const [playPauseButton, setPlayPauseButton] = useState(false);
  if (minutes !== sessionLength) {
    setMinutes(sessionLength);
  }

  // Timer
  function updateTime() {
    if (minutes == 0 && seconds == 0) {
      //reset
      setSeconds(0);
      setMinutes(25);
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
        setPlayPauseButton,
        minutes,
        setMinutes,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
