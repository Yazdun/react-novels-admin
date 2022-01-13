import s from "./styles.module.scss";
import classnames from "classnames";
import { Container, Button, RenderTextfields } from "../../ui/";
import { MdLogin } from "react-icons/md";
import { useAuthActions, useAuthContext } from "../../context/auth";
import { useHistory, Redirect } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { inputs } from "./inputs";
import { man_and_computer } from "../../assets";
export const Login = () => {
  const setToken = useAuthActions();
  const history = useHistory();
  const isLogged = useAuthContext();
  const methods = useForm();

  const handelLogin = () => {
    setToken("QpwL5tke4Pnpja7X4");
    history.push("/dashboard");
  };
  return (
    <Container customClass={s.customContainer}>
      {isLogged && <Redirect to="/dashboard" />}
      <img
        src={man_and_computer}
        alt="a man sitting at his desk and working with a computer"
        className={s.img}
      />
      <FormProvider {...methods}>
        <form className={s.form} onSubmit={methods.handleSubmit(handelLogin)}>
          <RenderTextfields textfields={inputs} />
          <Button success text="login" icon={<MdLogin />} center />
        </form>
      </FormProvider>
    </Container>
  );
};
