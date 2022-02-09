import React, { useEffect, useMemo, useState } from "react";
import { Chart } from "..";
import { useGet } from "../../hooks";
import { GET_USER_STATS } from "../../services";
import s from "./styles.module.scss";

export const UserChart = () => {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  const [userStats, setUserStats] = useState([]);
  const { getRequest, getLoading } = useGet();

  const handleStats = (data) => {
    const statsList = data.users.sort(function (a, b) {
      return a._id - b._id;
    });
    statsList.map((item) =>
      setUserStats((prev) => [
        ...prev,
        { name: MONTHS[item._id - 1], "New Users": item.total },
      ])
    );
    // console.log(data);
  };

  useEffect(() => {
    getRequest(GET_USER_STATS, handleStats);
  }, [MONTHS]);

  return (
    <div className={s.chart}>
      <Chart data={userStats} title="User Analytics" grid dataKey="New Users" />
      {/* user */}
    </div>
  );
};
