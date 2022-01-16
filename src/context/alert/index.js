import React, { useState, createContext, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

export const AlertProviderContext = createContext();

export const AlertProvider = ({ children }) => {
  const history = useHistory();

  const [alert, setAlert] = useState({
    show: false,
    content: "",
  });

  const hideAlert = () => {
    setAlert((prev) => ({ ...prev, show: false }));
  };

  const showAlert = (content) => {
    setAlert({ show: true, content: content });
    setTimeout(() => {
      hideAlert();
    }, 8000);
  };

  useEffect(() => {
    // Listen for changes to the current location.
    const unlisten = history.listen(() => {
      hideAlert();
    });
    // cleanup the listener on unmount
    return unlisten;
  }, []);

  return (
    <AlertProviderContext.Provider value={{ alert, hideAlert, showAlert }}>
      {children}
    </AlertProviderContext.Provider>
  );
};

export const useAlertContext = () => {
  const value = useContext(AlertProviderContext);
  if (value === undefined) throw new Error();
  return value;
};
