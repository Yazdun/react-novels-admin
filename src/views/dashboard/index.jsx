import s from "./styles.module.scss";
import classnames from "classnames";
import { Container, Button } from "../../ui";
import { useHistory, Redirect } from "react-router-dom";
import { HiOutlineReply } from "react-icons/hi";

export const Dashboard = () => {
  const logOut = () => {
    localStorage.clear("TOKEN");
    window.location.href = "Login";
  };
  return (
    <Container>
      <h1>Dashboard</h1>
      <Button danger text="logout" icon={<HiOutlineReply />} onClick={logOut} />
    </Container>
  );
};
