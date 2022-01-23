import s from "./styles.module.scss";
import { GrClose } from "react-icons/gr";
import { placeholder } from "../../assets";
import ReactTimeAgo from "react-time-ago";
import { Button, Typography } from "../../ui";
import { AiOutlineCheckCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { useState } from "react";
import { DeleteModal } from "..";

const initial = {
  createdBy: {},
  novelRef: {},
  content: "",
  rate: 0,
  isApproved: false,
  isDispproved: false,
  isPending: false,
  createdAt: "2022-01-22T17:38:22.900Z",
};

export const Review = ({ review }) => {
  const [data, setData] = useState(review ? review : initial);
  const {
    createdBy,
    novelRef,
    content,
    rate,
    isApproved,
    isDispproved,
    isPending,
    createdAt,
  } = data;
  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <User user={createdBy} date={createdAt} />
        <DeleteModal
          item="review"
          question="Delete This Review ?"
          // loading={getLoading}
          url={""}
        />
      </div>
      <div className={s.ref}>
        <Novel novel={novelRef} />
      </div>
      <div className={s.content}>
        <Typography small>{content}</Typography>
        <div className={s.btns}>
          <div>
            <Button
              success
              icon={<AiOutlineCheckCircle />}
              disabled={isApproved}
            />
            <Button
              danger
              icon={<AiOutlineMinusCircle />}
              disabled={isDispproved}
              customClass={s.btn}
            />
          </div>

          <Typography
            small
            bold
            warn={isPending}
            danger={isDispproved}
            success={isApproved}
            customClass={s.status}
          >
            {isPending && "pending ..."}
            {isApproved && "approved"}
            {isDispproved && "disapproved"}
          </Typography>
        </div>
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
