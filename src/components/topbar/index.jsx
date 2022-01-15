import { Container } from "../../ui";
import s from "./styles.module.scss";
import { links } from "./links";
import { Sidebar } from "./sidebar";
import { Navigation } from "./navigation";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useAuthContext, useAuthActions } from "../../context/auth";

export const Topbar = () => {
  const { logOut } = useAuthActions();

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
