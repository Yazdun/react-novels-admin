import s from "./styles.module.scss";
import classnames from "classnames";

import { Modal } from "../../components";
import { BsTrash2Fill } from "react-icons/bs";
import { Button } from "../../ui";

export const DeleteModal = () => {
  return (
    <Modal danger icon={<BsTrash2Fill />} text="delete">
      <div className={s.wrap}>
        <Button danger center text="yes, procceed" icon={<BsTrash2Fill />} />
      </div>
    </Modal>
  );
};
