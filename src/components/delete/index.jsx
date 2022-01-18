import s from "./styles.module.scss";
import { Modal, Button } from "../../ui";
import { BsTrash2Fill } from "react-icons/bs";

export const DeleteModal = () => {
  return (
    <Modal danger icon={<BsTrash2Fill />} text="delete">
      <div className={s.wrap}>
        <Button danger center text="yes, procceed" icon={<BsTrash2Fill />} />
      </div>
    </Modal>
  );
};
