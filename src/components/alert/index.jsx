import s from "./styles.module.scss";
import classNames from "classnames";
import { useAlertContext } from "../../context/alert";
import { CgClose } from "react-icons/cg";
import { FaBell } from "react-icons/fa";

export const Alert = () => {
  const { alert, hideAlert } = useAlertContext();
  return (
    <div className={classNames(s.alert, alert.show ? s.show : s.hide)}>
      <FaBell className={s.icon} />
      <p>{alert.content}</p>

      <CgClose
        className={s.close}
        onClick={() => {
          hideAlert();
        }}
      />
    </div>
  );
};
