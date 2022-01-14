import { Authors, Dashboard, Novels, Login, Users, Page404 } from "../views";
import { Redirect, Route } from "react-router-dom";
import { useAuthContext } from "../context/auth";

export const routes = [
  {
    exact: true,
    path: "/dashboard",
    component: Dashboard,
    private: true,
  },
  {
    exact: true,
    path: "/users",
    component: Users,
    private: true,
  },
  {
    exact: true,
    path: "/novels",
    component: Novels,
    private: true,
  },
  {
    exact: true,
    path: "/authors",
    component: Authors,
    private: true,
  },
  {
    exact: true,
    path: "/",
    component: Login,
  },
  {
    path: "*",
    component: Page404,
  },
];

export const PrivateRoute = (props) => {
  const isLoggedIn = useAuthContext();
  return isLoggedIn ? <Route {...props} /> : <Redirect to="/" />;
};
