import s from "./styles/styles.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Spinner } from "..";

export const Button = ({
  active,
  success,
  danger,
  contrast,
  icon,
  text,
  disabled,
  center,
  onClick,
  customClass,
}) => {
  const noFunc = () => {
    return;
  };
  return (
    <button
      onClick={onClick ? () => onClick() : () => noFunc()}
      disabled={disabled}
      className={classNames(
        text ? s.btnText : s.btnIcon,
        active && s.active,
        success && s.success,
        danger && s.danger,
        contrast && s.contrast,
        center && s.center,
        customClass && customClass
      )}
    >
      {text ? (
        <>
          <div className={s.hoverBackground}></div>
          {disabled ? <Spinner small transparent /> : icon}

          <p>{text}</p>
        </>
      ) : (
        <div>{icon}</div>
      )}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.object,
  disabled: PropTypes.bool,
  danger: PropTypes.bool,
  success: PropTypes.bool,
  center: PropTypes.bool,
  fullwidth: PropTypes.bool,
  customClass: PropTypes.string,
};
