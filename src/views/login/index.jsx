import s from "./styles.module.scss";
import classnames from "classnames";
import { Container, Button } from "../../ui/";
import { MdLogin } from "react-icons/md";
import { useAuthActions, useAuthContext } from "../../context/auth";
import { useHistory, Redirect } from "react-router-dom";

export const Login = () => {
  const setToken = useAuthActions();
  const history = useHistory();
  const isLogged = useAuthContext();
  const handelLogin = () => {
    setToken("QpwL5tke4Pnpja7X4");
    history.push("/dashboard");
  };
  return (
    <Container>
      {isLogged && <Redirect to="/dashboard" />}
      <Button contrast text="login" icon={<MdLogin />} onClick={handelLogin} />
    </Container>
  );
};
