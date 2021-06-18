import React from "react";
import ReactDOM from "react-dom";

import { ContextProvider } from "./container/Context";
import App from "./container/App";

ReactDOM.render(
  <ContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextProvider>,
  document.getElementById("root")
);
