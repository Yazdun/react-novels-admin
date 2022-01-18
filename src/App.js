import "./scss/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute, routes } from "./views";
import { Alert, Topbar } from "./components";
import { ErrorHandler } from "./context/errors";

function App() {
  return (
    <>
      <Topbar />
      <ErrorHandler>
        <Alert />
        <Switch>
          {routes.map((route, item) =>
            route.private ? (
              <PrivateRoute key={item} {...route} />
            ) : (
              <Route key={item} {...route} />
            )
          )}
        </Switch>
      </ErrorHandler>
    </>
  );
}

export default App;
