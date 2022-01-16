import s from "./styles.module.scss";
import classNames from "classnames";
import { FaCheck } from "react-icons/fa";
import { RiAlarmWarningFill } from "react-icons/ri";
import { CgClose } from "react-icons/cg";
import PropTypes from "prop-types";
import { useState } from "react";

export const Alert = ({ success, danger, show, message, float, inline }) => {
  const [showAlert, setShowAlert] = useState(show);

  return (
    <div
      className={classNames(
        s.alert,
        success && s.success,
        danger && s.danger,
        float && s.float,
        inline && s.inline,
        showAlert ? s.show : s.hide
      )}
    >
      <div className={s.content}>
        {danger ? (
          <RiAlarmWarningFill className={s.dangerIcon} />
        ) : (
          <FaCheck className={s.successIcon} />
        )}
        <p>{message}</p>
      </div>
      <CgClose
        className={s.close}
        onClick={() => {
          setShowAlert(false);
        }}
      />
    </div>
  );
};

Alert.propTypes = {
  success: PropTypes.bool,
  danger: PropTypes.bool,
  show: PropTypes.bool,
  message: PropTypes.string,
  fixed: PropTypes.bool,
  block: PropTypes.bool,
};
