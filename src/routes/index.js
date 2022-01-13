import { Authors, Dashboard, Novels, Login, Users } from "../views";
import { Redirect, Route } from "react-router-dom";
import { useAuthContext } from "../context/auth";

export const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
    private: true,
  },
  {
    path: "/users",
    component: Users,
    private: true,
  },
  {
    path: "/novels",
    component: Novels,
    private: true,
  },
  {
    path: "/authors",
    component: Authors,
    private: true,
  },
  {
    exact: true,
    path: "/",
    component: Login,
  },
];

export const PrivateRoute = (props) => {
  const isLoggedIn = useAuthContext();
  return isLoggedIn ? <Route {...props} /> : <Redirect to="/" />;
};
