import s from "./styles.module.scss";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import classnames from "classnames";
import { IoArrowBackOutline } from "react-icons/io5";

export const Sidebar = ({ items }) => {
  const [states, setStates] = useState({
    untouched: true,
    open: false,
    close: false,
  });

  const openSidebar = () =>
    setStates({ untouched: false, close: false, open: true });

  const closeSidebar = () =>
    setStates({ untouched: false, close: true, open: false });

  const { untouched, open, close } = states;
  return (
    <>
      <button className={s.btn} onClick={() => openSidebar()}>
        <MdMenu />
      </button>
      <div
        className={classnames(open && s.background)}
        onClick={() => closeSidebar()}
      ></div>
      <ul
        className={classnames(
          s.sidebar,
          untouched && s.untouched,
          open && s.open,
          close && s.close
        )}
      >
        <li className={s.back} onClick={() => closeSidebar()}>
          <IoArrowBackOutline />
          Back
        </li>
        {items.map((item, index) => {
          const { desc, url, icon } = item;
          return (
            <li key={index} onClick={() => closeSidebar()}>
              <Link to={url}>
                {icon}
                {desc}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
