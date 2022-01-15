import React from "react";
import { useHistory } from "react-router-dom";
import { createContext, useState, useEffect, useMemo, useContext } from "react";
import { useAuthContext, useAuthActions } from "../auth";

const ErrorStatusContext = createContext();

export const ErrorHandler = ({ children }) => {
  const history = useHistory();
  const { logOut } = useAuthActions();
  const isLoggedIn = useAuthContext();
  const [errorStatusCode, setErrorStatusCode] = useState();
  const [serverErrors, setServerErrors] = useState();

  const errorHandler = (statusCode, errors) => {
    setErrorStatusCode(statusCode);
    setServerErrors(errors);

    setTimeout(() => {
      setServerErrors(undefined);
    }, 7000);
  };

  useEffect(() => {
    // Listen for changes to the current location.
    const unlisten = history.listen(() => {
      errorHandler(undefined, undefined);
    });
    // cleanup the listener on unmount
    return unlisten;
  }, []);

  const renderContent = () => {
    switch (errorStatusCode) {
      case 401:
        if (isLoggedIn) return logOut();
        return children;

      default:
        return children;
    }
  };

  return (
    <ErrorStatusContext.Provider
      value={{ errorHandler, serverErrors, errorStatusCode }}
    >
      {renderContent()}
    </ErrorStatusContext.Provider>
  );
};

export const useErrorStatus = () => useContext(ErrorStatusContext);
