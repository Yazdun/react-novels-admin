import classNames from "classnames";
import { useState } from "react";
import { Button, Container } from "..";
import s from "./styles.module.scss";
import { BiArrowBack } from "react-icons/bi";

export const Showcase = ({
  children,
  contrast,
  danger,
  active,
  success,
  text,
  icon,
  center,
}) => {
  const [states, setStates] = useState({
    notTouched: true,
    show: false,
    hide: false,
  });

  const hideShowcase = () => setStates({ ...states, hide: true, show: false });
  const showShowcase = () =>
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
        center={center}
        onClick={showShowcase}
      />

      <div
        className={classNames(
          s.showcase,
          notTouched && s.noneDisplay,
          show && s.show,
          hide && s.hide
        )}
      >
        <Container customClass={s.children}>
          <button onClick={() => hideShowcase()} className={s.close}>
            <BiArrowBack />
            <p>Back</p>
          </button>
          {children}
        </Container>
      </div>
    </>
  );
};
