import classNames from "classnames";
import s from "./styles.module.scss";
import PropTypes from "prop-types";

export const Container = ({ children,noPadding, customClass }) => {
  return (
    <div className={classNames(s.container,noPadding && s.noPadding, customClass && customClass)}>
      {children}
    </div>
  );
};
