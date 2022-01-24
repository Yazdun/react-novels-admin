import s from "./styles.module.scss";

import { Button, Typography, Spinner } from "../../ui";
import { AiOutlineCheckCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { useState } from "react";
import { DeleteModal } from "..";
import {
  APPROVE_REVIEW,
  DISAPPROVE_REVIEW,
  DELETE_REVIEW,
} from "../../services";
import { usePatch } from "../../hooks";
import { User } from "./user";
import { Novel } from "./novel";
import { Rating } from "./rating";

const initial = {
  createdBy: {},
  novelRef: {},
  content: "",
  rate: 0,
  isApproved: false,
  isDisapproved: false,
  isPending: false,
  createdAt: "2022-01-22T17:38:22.900Z",
};

export const Review = ({ review }) => {
  const [data, setData] = useState(review ? review : initial);
  const {
    _id,
    createdBy,
    novelRef,
    content,
    rate,
    isApproved,
    isDisapproved,
    isPending,
    createdAt,
  } = data;

  const success = (data) => setData(data.updatedReview);

  const { patchRequest, patchLoading } = usePatch();

  return (
    <div className={s.wrapper}>
      <div className={s.header}>
        <User user={createdBy} date={createdAt} />
        <DeleteModal
          item="review"
          question="Delete This Review ?"
          redirect="/dashboard"
          url={DELETE_REVIEW(_id)}
        />
      </div>
      <div className={s.ref}>
        <Novel novel={novelRef} />
      </div>
      <div className={s.content}>
        <Rating rate={rate} />
        <Typography small>{content}</Typography>
        <div className={s.btns}>
          <div>
            <Button
              success
              icon={<AiOutlineCheckCircle />}
              disabled={isApproved}
              onClick={() => patchRequest(APPROVE_REVIEW(_id), null, success)}
            />
            <Button
              danger
              icon={<AiOutlineMinusCircle />}
              disabled={isDisapproved}
              customClass={s.btn}
              onClick={() =>
                patchRequest(DISAPPROVE_REVIEW(_id), null, success)
              }
            />
          </div>
          {patchLoading ? (
            <Spinner dark small />
          ) : (
            <Typography small bold customClass={s.status}>
              {isPending && "pending ..."}
              {isApproved && "approved"}
              {isDisapproved && "disapproved"}
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
};
