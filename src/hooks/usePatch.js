import { useState } from "react";
import axios from "axios";
import "../axios";
import { useErrorStatus } from "../context/errors";

export const usePatch = (url, success_function) => {
  const [patchLoading, setPatchLoading] = useState(false);
  const { errorHandler, serverErrors } = useErrorStatus();

  const patchRequest = async (values) => {
    setPatchLoading(true);
    errorHandler(undefined, undefined);

    try {
      await axios
        .patch(url, {
          ...values,
        })
        .then((res) => success_function(res.data))
        .then(() => setPatchLoading(false));
    } catch (error) {
      if (!error.response) {
        errorHandler("NETWORK", null);
        setPatchLoading(false);
      } else {
        errorHandler(error.response.status, error.response.data.msg.split(","));
        console.log(error);
        setPatchLoading(false);
      }
    }
  };

  return { patchRequest, serverErrors, patchLoading };
};
