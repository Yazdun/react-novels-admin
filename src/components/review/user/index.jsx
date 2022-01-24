import { placeholder } from "../../../assets";
import ReactTimeAgo from "react-time-ago";
import s from "./styles.module.scss";

export const User = ({ user, date }) => {
  return (
    <div className={s.user}>
      <img
        src={user.image ? user.image : placeholder}
        alt={user}
        className={s.profile}
      />
      <ul>
        <li>{user.username}</li>
        <li className={s.sub}>
          <ReactTimeAgo date={date} locale="en-US" />
        </li>
      </ul>
    </div>
  );
};
