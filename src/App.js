import "./scss/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute, routes } from "./views";
import { Alert, Topbar } from "./components";

function App() {
  return (
    <>
      <Alert />
      <Topbar />
      <Switch>
        {routes.map((route, item) =>
          route.private ? (
            <PrivateRoute key={item} {...route} />
          ) : (
            <Route key={item} {...route} />
          )
        )}
      </Switch>
    </>
  );
}

export default App;
