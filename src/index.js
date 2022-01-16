import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import { ErrorHandler } from "./context/errors";
import { AlertProvider } from "./context/alert";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AlertProvider>
        <AuthProvider>
          <ErrorHandler>
            <App />
          </ErrorHandler>
        </AuthProvider>
      </AlertProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
