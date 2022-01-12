import s from "./styles.module.scss";
import classnames from "classnames";
import { Container } from "../../ui";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Container>
      <h1>Homepage</h1>
      <Link to="/login">login</Link>
    </Container>
  );
};
