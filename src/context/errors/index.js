import React from "react";
import { useHistory } from "react-router-dom";
import { createContext, useState, useEffect, useMemo, useContext } from "react";

const ErrorStatusContext = createContext();

export const ErrorHandler = ({ children }) => {
  const history = useHistory();
  const [errorStatusCode, setErrorStatusCode] = useState();
  const [serverErrors, setServerErrors] = useState();

  const errorHandler = (statusCode, errors) => {
    setErrorStatusCode(statusCode);

    setServerErrors(errors);

    setTimeout(() => {
      setServerErrors(undefined);
    }, 7000);
  };

  // const changeServerErrors = (errors) => {
  //   setServerErrors(errors);

  //   setTimeout(() => {
  //     setServerErrors(undefined);
  //   }, 7000);
  // };

  useEffect(() => {
    // Listen for changes to the current location.
    const unlisten = history.listen(() => {
      errorHandler(undefined, undefined);
    });
    // cleanup the listener on unmount
    return unlisten;
  }, []);

  // This is what the component will render. If it has an
  // errorStatusCode that matches an API error, it will only render
  // an error page. If there is no error status, then it will render
  // the children as normal
  const renderContent = () => {
    switch (errorStatusCode) {
      case 401:
        return <h1>error</h1>;

      default:
        return children;
    }
  };

  return (
    <ErrorStatusContext.Provider value={{ errorHandler, serverErrors }}>
      {renderContent()}
    </ErrorStatusContext.Provider>
  );
};

export const useErrorStatus = () => useContext(ErrorStatusContext);
