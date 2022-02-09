import s from "./styles.module.scss";
import classnames from "classnames";
import { Container, Button, Heading } from "../../ui";
import { BsCheck } from "react-icons/bs";
import { Widgets } from "../../components";

export const Dashboard = () => {
  return (
    <Container>
      <Widgets />
    </Container>
  );
};
