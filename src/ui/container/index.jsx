import classNames from "classnames";
import s from "./styles.module.scss";
import PropTypes from "prop-types";

export const Container = ({ children, customClass }) => {
  return (
    <div className={classNames(s.container, customClass && customClass)}>
      {children}
    </div>
  );
};
