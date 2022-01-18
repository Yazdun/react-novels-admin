import s from "./styles.module.scss";
import { Modal, Button, Typography } from "../../ui";
import { BsTrash2Fill } from "react-icons/bs";
import { useDelete } from "../../hooks";
import { useHistory } from "react-router-dom";
import { useAlertContext } from "../../context/alert";

export const DeleteModal = ({ item, question, url, loading }) => {
  const history = useHistory();
  const { showAlert } = useAlertContext();

  const afterDelete = () => {
    history.push(`/${item}s`);
    showAlert(`${item} has been deleted`);
  };
  const { execute, deleteLoading } = useDelete(url, afterDelete);
  return (
    <Modal
      danger
      icon={<BsTrash2Fill />}
      text={`delete ${item}`}
      center
      loading={loading}
    >
      <div className={s.wrap}>
        <Typography bold>{question}</Typography>
        <Button
          danger
          center
          text="yes, procceed"
          icon={<BsTrash2Fill />}
          onClick={execute}
          disabled={deleteLoading}
        />
      </div>
    </Modal>
  );
};
