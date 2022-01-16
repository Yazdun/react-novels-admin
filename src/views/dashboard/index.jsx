import s from "./styles.module.scss";
import classnames from "classnames";
import { Container, Button, Heading } from "../../ui";
import { useAlertContext } from "../../context/alert";
import { BsCheck } from "react-icons/bs";

export const Dashboard = () => {
  const { showAlert } = useAlertContext();

  return (
    <Container>
      <Heading center>Dashboard will be built here</Heading>
      <Button
        contrast
        icon={<BsCheck />}
        text="check alert"
        onClick={() => showAlert("alert from dashboard")}
      />
    </Container>
  );
};
