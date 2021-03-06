import { useState } from "react";
import axios from "axios";
import "../axios";
import { useErrorStatus } from "../context/errors";

export const usePost = (url, success_function) => {
  const [postLoading, setPostLoading] = useState(false);
  const { errorHandler, serverErrors } = useErrorStatus();

  const postRequest = async (values) => {
    setPostLoading(true);
    errorHandler(undefined, undefined);

    try {
      await axios
        .post(url, {
          ...values,
        })
        .then((res) => success_function(res.data))
        .then(() => setPostLoading(false));
    } catch (error) {
      if (!error.response) {
        errorHandler("NETWORK", null);
        setPostLoading(false);
      } else {
        errorHandler(error.response.status, error.response.data.msg.split(","));
        console.log(error);
        setPostLoading(false);
      }
    }
  };

  return { postRequest, serverErrors, postLoading };
};
