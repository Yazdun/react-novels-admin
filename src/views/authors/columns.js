import s from "./styles.module.scss";
import Moment from "react-moment";
import { RiEditBoxLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { placeholder } from "../../assets/";
import { Button } from "../../ui";

export const columns = [
  {
    name: "_id",
    header: "",
    defaultWidth: 70,
    render: ({ value }) => (
      <div className={s.actions}>
        <Button icon={<RiEditBoxLine />} contrast />

        <Button icon={<FaEye />} active />
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
    defaultWidth: 200,
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
