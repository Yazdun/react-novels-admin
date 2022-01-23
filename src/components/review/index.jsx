import s from "./styles.module.scss";
import { mock } from "./mock";
import { placeholder } from "../../assets";
import ReactTimeAgo from "react-time-ago";
import { Button, Typography } from "../../ui";
import { BsCheckLg } from "react-icons/bs";

export const Review = () => {
  const { createdBy, novelRef, content, rate, isVerified, createdAt } = mock;
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <User user={createdBy} date={createdAt} />
        <Button success icon={<BsCheckLg />} />
      </div>
      <div className={s.ref}>
        <Novel novel={novelRef} />
      </div>
      <div className={s.content}>
        <Typography small>{content}</Typography>
      </div>
    </div>
  );
};

const User = ({ user, date }) => {
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

const Novel = ({ novel }) => {
  const { title, author, image } = novel;
  return (
    <div className={s.novel}>
      <img
        src={image ? image : placeholder}
        alt={title}
        className={s.novelCover}
      />
      <ul>
        <li>{title}</li>
        <li className={s.sub}>{author}</li>
      </ul>
    </div>
  );
};
