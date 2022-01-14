import { useState } from "react";
import axios from "axios";
import "../axios";

export const usePost = (url, success_function) => {
  const [serverErrors, setServerErrors] = useState([]);
  const [loading, setLoading] = useState(false);

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
