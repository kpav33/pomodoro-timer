import React from "react";

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

function Buttons() {
  return (
    <div className="buttons">
      <div id="break-label">
        <h4>Break Length</h4>
        <div className="breaks">
          <ArrowUpwardIcon onClick={() => console.log("OK")} />
          <span>5</span>
          <ArrowDownwardIcon />
        </div>
      </div>
      <div id="session-label">
        <h4>Session Length</h4>
        <div className="sessions">
          <ArrowUpwardIcon />
          <span>25</span>
          <ArrowDownwardIcon />
        </div>
      </div>
    </div>
  );
}

export default Buttons;
