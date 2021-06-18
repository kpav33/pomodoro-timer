import "../styles.scss";
import React from "react";

import Title from "../components/Title";
import PomodoroTimer from "../components/PomodoroTimer";

function App() {
  return (
    <div className="app">
      <div className="panel">
        <Title />
        <PomodoroTimer />
      </div>
    </div>
  );
}

export default App;
