import { useState } from "react";
import axios from "axios";
import "../axios";
import { useErrorStatus } from "../context/errors";

export const usePost = (url, success_function) => {
  const [serverErrors, setServerErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setErrorStatusCode } = useErrorStatus();

  const execute = async (values) => {
    setLoading(true);
    setServerErrors([]);

    try {
      await axios
        .post(url, {
          ...values,
        })
        .then((res) => success_function(res.data))
        .then(() => setLoading(false));
    } catch (error) {
      console.log(error.response.status);
      // setErrorStatusCode(error.response.status);
      setErrorStatusCode(500);

      const serverErrors = error.response.data.msg.split(",");
      setServerErrors(serverErrors);
      setTimeout(() => {
        setServerErrors(false);
      }, 5000);
      setLoading(false);
    }
  };

  return { execute, serverErrors, loading };
};
