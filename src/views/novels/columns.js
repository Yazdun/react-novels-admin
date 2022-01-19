import s from "./styles.module.scss";
import { MdLibraryBooks } from "react-icons/md";
import { placeholder } from "../../assets/";
import { Link } from "react-router-dom";

export const columns = [
  {
    name: "_id",
    header: "",
    defaultWidth: 50,
    render: ({ value }) => (
      <div className={s.actions}>
        <Link to={`/novels/actions/${value}`}>
          <MdLibraryBooks />
        </Link>
      </div>
    ),
  },
  {
    name: "image",
    header: "",
    defaultWidth: 70,
    render: ({ value }) => (
      <div className={s.picture}>
        <img src={value ? value : placeholder} alt="novel" />
      </div>
    ),
  },

  { name: "title", header: "title", defaultWidth: 250 },
  {
    name: "author",
    header: "author",
    defaultWidth: 200,
  },
  {
    name: "publish",
    header: "publish",
    defaultWidth: 200,
  },
  {
    name: "pages",
    header: "pages",
    defaultFlex: 1,
  },
];
