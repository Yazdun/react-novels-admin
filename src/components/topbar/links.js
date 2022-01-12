import { MdSpaceDashboard } from "react-icons/md";
import { RiQuillPenFill } from "react-icons/ri";
import { GiWhiteBook } from "react-icons/gi";
import { FaUserAstronaut } from "react-icons/fa";

export const links = [
  {
    text: "dashboard",
    desc: "dashboard",
    url: "/dashboard",
    icon: <MdSpaceDashboard />,
  },
  {
    text: "users",
    desc: "manage users",
    url: "/users",
    icon: <FaUserAstronaut />,
  },
  {
    text: "novels",
    desc: "manage novels",
    url: "/novels",
    icon: <GiWhiteBook />,
  },
  {
    text: "authors",
    desc: "manage authors",
    url: "/authors",
    icon: <RiQuillPenFill />,
  },
];
