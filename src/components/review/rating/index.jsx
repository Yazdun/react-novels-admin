import s from "./styles.module.scss";
import { Typography } from "../../../ui";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { BsFillBookmarkCheckFill } from "react-icons/bs";

export const Rating = ({ rate }) => {
  return (
    <div className={s.rating}>
      <Typography
        small
        bold
        success={rate === 3}
        contrast={rate === 2}
        danger={rate === 1}
        capitalize
      >
        {rate === 1 && <AiFillDislike />}
        {rate === 2 && <BsFillBookmarkCheckFill />}
        {rate === 3 && <AiFillLike />}
        {rate === 1 && "not recommended"}
        {rate === 2 && "worth reading"}
        {rate === 3 && "recommended"}
      </Typography>
    </div>
  );
};
