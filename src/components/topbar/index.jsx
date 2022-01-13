import { Container } from "../../ui";
import s from "./styles.module.scss";
import { links } from "./links";
import { Sidebar } from "./sidebar";
import classnames from "classnames";
import { Navigation } from "./navigation";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useAuthContext } from "../../context/auth";

export const Topbar = () => {
  const logOut = () => {
    localStorage.clear("TOKEN");
    window.location.href = "/";
  };

  const isLoggedIn = useAuthContext();

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className={s.nav}>
      <Container customClass={s.customContainer}>
        <Navigation items={links} />
        <Sidebar items={links} />

        <button className={s.btn} onClick={() => logOut()}>
          <RiLogoutCircleRLine />
        </button>
      </Container>
    </div>
  );
};
