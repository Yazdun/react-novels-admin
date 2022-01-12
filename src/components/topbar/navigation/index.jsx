import { Link } from "react-router-dom";
import s from "./styles.module.scss";
import classnames from "classnames";

export const Navigation = ({ items }) => {
  return (
    <ul className={classnames(s.navigation)}>
      {items.map((item, index) => {
        const { text, url, icon } = item;
        return (
          <li key={index}>
            <Link to={url}>
              {icon}
              {text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
