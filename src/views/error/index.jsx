import s from "./styles.module.scss";
import classnames from "classnames";
import { Container, Heading, Typography } from "../../ui";
import { error_illustration } from "../../assets";

export const NotFound = () => {
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
        This page is either deleted or doesn't exist
      </Typography>
    </Container>
  );
};
