import s from "./styles.module.scss";
import classnames from "classnames";
import { Container, Heading, Typography } from "../../ui";
import { ghost_one, cloud_one } from "../../assets";

export const Page404 = () => {
  return (
    <Container customClass={s.errorContainer}>
      <div className={s.animate}>
        <img
          className={s.img}
          src={ghost_one}
          alt="sad ghost illustration which represents error page"
        />

        <Heading bold marginMid>
          Oops !
        </Heading>
        <Typography secondary center>
          this content either doesn't exist or deleted
        </Typography>
      </div>
    </Container>
  );
};

export const ErrorPage = ({ title, message }) => {
  return (
    <Container customClass={s.errorContainer}>
      <div className={s.animate}>
        <img
          className={s.img}
          src={cloud_one}
          alt="lightening cloud illustration which represents error page"
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
