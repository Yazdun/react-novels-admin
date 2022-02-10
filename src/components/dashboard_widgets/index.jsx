import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Loading } from "..";
import { useGet } from "../../hooks";
import { GET_DASHBOARD_STATS } from "../../services";
import s from "./styles.module.scss";

export const Widgets = () => {
  const [stats, setStats] = useState({
    users: 0,
    novels: 0,
    authors: 0,
    reviews: 0,
  });
  const { users, novels, authors, reviews } = stats;
  const { getRequest, getLoading } = useGet();

  const handleStats = (data) => setStats(data);

  useEffect(() => {
    getRequest(GET_DASHBOARD_STATS, handleStats);
  }, []);

  if (getLoading) {
    return <Loading height={138} />;
  }
  return (
    <div className={s.widgets}>
      <div className={classNames(s.widget, s.user)}>
        <span>{users}</span> users
      </div>
      <div className={classNames(s.widget, s.novels)}>
        <span>{novels}</span> novels
      </div>
      <div className={classNames(s.widget, s.authors)}>
        <span>{authors}</span> authors
      </div>
      <div className={classNames(s.widget, s.reviews)}>
        <span>{reviews}</span> reviews
      </div>
    </div>
  );
};
