import { useState } from "react";
import axios from "axios";
import "../axios";
import { useErrorStatus } from "../context/errors";

export const useGet = (url, success_function) => {
  const [loading, setLoading] = useState(false);
  const { errorHandler, serverErrors } = useErrorStatus();

  const execute = async () => {
    setLoading(true);
    errorHandler(undefined, undefined);

    try {
      await axios
        .get(url)
        .then((res) => success_function(res.data))
        .then(() => setLoading(false));
    } catch (error) {
      if (!error.response) {
        errorHandler("NETWORK", null);
        setLoading(false);
      } else {
        errorHandler(error.response.status, error.response.data.msg.split(","));
        console.log(error);
        setLoading(false);
      }
    }
  };

  return { execute, serverErrors, loading };
};
