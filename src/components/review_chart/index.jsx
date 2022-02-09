import React, { useEffect, useMemo, useState } from "react";
import { Chart } from "../";
import { useGet } from "../../hooks";
import { GET_USER_STATS } from "../../services";
import { GET_REVIEWS_STATS } from "../../services";
import s from "./styles.module.scss";

export const ReviewChart = () => {
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
  const [reviewStats, setReviewStats] = useState([]);
  const { getRequest, getLoading } = useGet();

  const handleStats = (data) => {
    const statsList = data.reviews.sort(function (a, b) {
      return a._id - b._id;
    });
    statsList.map((item) =>
      setReviewStats((prev) => [
        ...prev,
        { name: MONTHS[item._id - 1], "Submitted Reviews": item.total },
      ])
    );
    // console.log(data);
  };

  useEffect(() => {
    getRequest(GET_REVIEWS_STATS, handleStats);
  }, [MONTHS]);

  return (
    <div className={s.chart}>
      <Chart
        data={reviewStats}
        title="Review Analytics"
        grid
        dataKey="Submitted Reviews"
      />
    </div>
  );
};
