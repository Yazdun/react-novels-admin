import classNames from "classnames";
import s from "./styles.module.scss";
import PropTypes from "prop-types";

export const Typography = ({
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
  warn,
  center,
  uppercase,
  capitalize,
  justify,
}) => {
  return (
    <p
      className={classNames(
        s.typography,
        customClass && customClass,
        big && s.big,
        small && s.small,
        bold && s.bold,
        thin && s.thin,
        secondary && s.secondary,
        danger && s.danger,
        success && s.success,
        active && s.active,
        warn && s.warn,
        center && s.center,
        uppercase && s.uppercase,
        capitalize && s.capitalize,
        justify && s.justify
      )}
    >
      {children}
    </p>
  );
};

Typography.propTypes = {
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
  warn: PropTypes.bool,
  center: PropTypes.bool,
};
