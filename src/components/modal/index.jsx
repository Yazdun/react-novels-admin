import classNames from "classnames";
import { useState } from "react";
import { Button } from "../../ui";
import s from "./styles.module.scss";
import { GrClose } from "react-icons/gr";

export const Modal = ({
  children,
  contrast,
  danger,
  active,
  success,
  text,
  icon,
}) => {
  const [states, setStates] = useState({
    notTouched: true,
    show: false,
    hide: false,
  });

  const hideModal = () => setStates({ ...states, hide: true, show: false });
  const showModal = () =>
    setStates({ notTouched: false, hide: false, show: true });

  const { notTouched, show, hide } = states;
  return (
    <>
      <Button
        contrast={contrast}
        danger={danger}
        active={active}
        success={success}
        text={text}
        icon={icon}
        onClick={showModal}
      />

      <div
        className={classNames(show ? s.background : s.noneDisplay)}
        onClick={() => hideModal()}
      ></div>
      <div
        className={classNames(
          s.modal,
          notTouched && s.noneDisplay,
          show && s.show,
          hide && s.hide
        )}
      >
        <GrClose className={s.close} onClick={() => hideModal()} />
        <div className={s.children}>{children}</div>
      </div>
    </>
  );
};
