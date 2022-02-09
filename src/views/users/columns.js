import s from "./styles.module.scss";
import Moment from "react-moment";
import { FaUser, FaUserEdit } from "react-icons/fa";
import { placeholder } from "../../assets";
import { Link } from "react-router-dom";

export const columns = [
  {
    name: "_id",
    header: "",
    defaultWidth: 50,
    render: () => (
      <div className={s.actions}>
        <FaUser />
      </div>
    ),
  },
  {
    name: "image",
    header: "",
    defaultWidth: 70,
    render: ({ value }) => (
      <div className={s.picture}>
        <img src={value ? value : placeholder} alt="user" />
      </div>
    ),
  },

  { name: "username", header: "Username", defaultWidth: 200 },
  {
    name: "email",
    header: "Email",
    defaultFlex: 1,
  },
  {
    name: "createdAt",
    header: "Joined",
    defaultWidth: 200,
    render: ({ value }) => (
      <Moment date={value} format="D MMM YYYY" withTitle />
    ),
  },
];
