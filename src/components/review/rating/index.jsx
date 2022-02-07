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
        {rate === 1 && "awful"}
        {rate === 2 && "meh"}
        {rate === 3 && "good"}
        {rate === 4 && "great"}
        {rate === 5 && "masterpiece"}
      </Typography>
    </div>
  );
};
