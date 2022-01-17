import s from "./styles.module.scss";
import Moment from "react-moment";
import { FaUserEdit } from "react-icons/fa";
import { placeholder } from "../../assets/";
import { Link } from "react-router-dom";

export const columns = [
  {
    name: "_id",
    header: "",
    defaultWidth: 50,
    render: ({ value }) => (
      <div className={s.actions}>
        <Link to={`/authors/actions/${value}`}>
          <FaUserEdit />
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
        <img src={value ? value : placeholder} alt="author" />
      </div>
    ),
  },

  { name: "name", header: "Name", defaultWidth: 200 },
  {
    name: "nationality",
    header: "Nationality",
    defaultWidth: 250,
  },
  {
    name: "birth",
    header: "Birth",
    defaultWidth: 200,
    render: ({ value }) => (
      <Moment date={value} format="D MMM YYYY" withTitle />
    ),
  },
  {
    name: "death",
    header: "Death",
    defaultFlex: 1,
    render: ({ value }) =>
      value ? <Moment date={value} format="D MMM YYYY" withTitle /> : "-",
  },
];
