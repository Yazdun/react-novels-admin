import { useState } from "react";
import axios from "axios";
import "../axios";
import { useErrorStatus } from "../context/errors";

export const usePost = (url, success_function) => {
  // const [serverErrors, setServerErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const { errorHandler, serverErrors } = useErrorStatus();

  const execute = async (values) => {
    setLoading(true);
    errorHandler(undefined, undefined);

    try {
      await axios
        .post(url, {
          ...values,
        })
        .then((res) => success_function(res.data))
        .then(() => setLoading(false));
    } catch (error) {
      errorHandler(error.response.status, error.response.data.msg.split(","));

      setLoading(false);
    }
  };

  return { execute, serverErrors, loading };
};
