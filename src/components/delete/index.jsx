import s from "./styles.module.scss";
import { Modal, Button, Typography } from "../../ui";
import { AiTwotoneDelete } from "react-icons/ai";
import { RiDeleteBack2Fill } from "react-icons/ri";
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
  const { deleteRequest, deleteLoading } = useDelete(url, afterDelete);
  return (
    <Modal danger icon={<RiDeleteBack2Fill />} center loading={loading}>
      <div className={s.wrap}>
        <Typography bold>{question}</Typography>
        <Button
          danger
          center
          text="yes, procceed"
          icon={<AiTwotoneDelete />}
          onClick={deleteRequest}
          disabled={deleteLoading}
        />
      </div>
    </Modal>
  );
};
