import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ErrorHandler } from "./context/errors";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorHandler>
        <App />
      </ErrorHandler>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
