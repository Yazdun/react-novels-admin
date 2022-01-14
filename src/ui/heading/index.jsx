import classNames from "classnames";
import s from "./styles.module.scss";
import PropTypes from "prop-types";

export const Heading = ({
  children,
  customClass,
  big,
  small,
  bold,
  thin,
  secondary,
  danger,
  success,
  active,
  center,
  marginMin,
  marginLow,
  marginMid,
  marginHigh,
}) => {
  return (
    <h1
      className={classNames(
        s.heading,
        customClass && customClass,
        big && s.big,
        small && s.small,
        bold && s.bold,
        thin && s.thin,
        secondary && s.secondary,
        danger && s.danger,
        success && s.success,
        active && s.active,
        center && s.center,
        marginMin && s.marginMin,
        marginLow && s.marginLow,
        marginMid && s.marginMid,
        marginHigh && s.marginHigh
      )}
    >
      {children}
    </h1>
  );
};

Heading.propTypes = {
  children: PropTypes.any.isRequired,
  customClass: PropTypes.string,
  big: PropTypes.bool,
  small: PropTypes.bool,
  bold: PropTypes.bool,
  thin: PropTypes.bool,
  secondary: PropTypes.bool,
  danger: PropTypes.bool,
  success: PropTypes.bool,
  active: PropTypes.bool,
  center: PropTypes.bool,
  marginMin: PropTypes.bool,
  marginLow: PropTypes.bool,
  marginMid: PropTypes.bool,
  marginHigh: PropTypes.bool,
};
