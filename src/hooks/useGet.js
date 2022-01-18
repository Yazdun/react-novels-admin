import { useState } from "react";
import axios from "axios";
import "../axios";
import { useErrorStatus } from "../context/errors";

export const useGet = (url, success_function) => {
  const [getLoading, setGetLoading] = useState(false);
  const { errorHandler, serverErrors } = useErrorStatus();

  const getRequest = async () => {
    setGetLoading(true);
    errorHandler(undefined, undefined);

    try {
      await axios
        .get(url)
        .then((res) => success_function(res.data))
        .then(() => setGetLoading(false));
    } catch (error) {
      if (!error.response) {
        errorHandler("NETWORK", null);
        setGetLoading(false);
      } else {
        errorHandler(error.response.status, error.response.data.msg.split(","));
        console.log(error);
        setGetLoading(false);
      }
    }
  };

  return { getRequest, serverErrors, getLoading };
};
