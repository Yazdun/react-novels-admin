import s from "./styles.module.scss";
import { placeholder } from "../../../assets";

export const Novel = ({ novel }) => {
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
