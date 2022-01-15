import s from "./styles.module.scss";
import { Container, Button, RenderTextfields, RenderErrors } from "../../ui/";
import { MdLogin } from "react-icons/md";
import { useAuthActions, useAuthContext } from "../../context/auth";
import { useHistory, Redirect } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { inputs } from "./inputs";
import { man_and_computer } from "../../assets";
import { usePost } from "../../hooks/usePost";

export const Login = () => {
  const { setToken } = useAuthActions();
  const history = useHistory();
  const isLogged = useAuthContext();
  const methods = useForm();

  const handleToken = (data) => {
    setToken(data.token);
    history.push("/dashboard");
  };

  const { execute, serverErrors, loading } = usePost(
    "/admin/authentication/login",
    handleToken
  );

  return (
    <Container customClass={s.customContainer}>
      {isLogged && <Redirect to="/dashboard" />}
      <img
        src={man_and_computer}
        alt="a man sitting at his desk and working with a computer"
        className={s.img}
      />
      <FormProvider {...methods}>
        <form
          className={s.form}
          onSubmit={methods.handleSubmit((data) => execute(data))}
        >
          <RenderTextfields textfields={inputs} />
          {serverErrors && <RenderErrors errors={serverErrors} />}
          <Button
            success
            text="login"
            icon={<MdLogin />}
            disabled={loading}
            center
          />
        </form>
      </FormProvider>
    </Container>
  );
};
