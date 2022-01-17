import s from "./styles.module.scss";
import classnames from "classnames";

import { Modal } from "../../components";
import { IoTrashBinOutline } from "react-icons/io5";
import { Button } from "../../ui";

export const DeleteModal = () => {
  return (
    <Modal danger icon={<IoTrashBinOutline />}>
      <div className={s.wrap}>
        <Button
          danger
          center
          text="yes, procceed"
          icon={<IoTrashBinOutline />}
        />
      </div>
    </Modal>
  );
};
