import s from "./styles.module.scss";
import { Typography } from "../../../ui";

export const Rating = ({ rate }) => {
  return (
    <div>
      <Typography small>
        {rate === 1 && "not recommended"}
        {rate === 2 && "worth reading"}
        {rate === 3 && "great novel"}
      </Typography>
    </div>
  );
};
