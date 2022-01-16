import s from "./styles.module.scss";
import classnames from "classnames";
import { Container, Heading, Typography } from "../../ui";
import { error_illustration, lightning_cloud } from "../../assets";

export const Page404 = () => {
  return (
    <Container customClass={s.customContainer}>
      <img
        className={s.img}
        src={error_illustration}
        alt="sad ghost illustration which represents error page"
      />

      <Heading bold marginMid>
        Oops !
      </Heading>
      <Typography secondary center>
        this content either doesn't exist or deleted
      </Typography>
    </Container>
  );
};

export const ErrorPage = ({ title, message }) => {
  return (
    <Container customClass={s.errorContainer}>
      <div className={s.animate}>
        <img
          className={s.img}
          src={lightning_cloud}
          alt="sad ghost illustration which represents error page"
        />

        <Heading bold marginMid>
          {title}
        </Heading>
        <Typography secondary center>
          {message}
        </Typography>
      </div>
    </Container>
  );
};