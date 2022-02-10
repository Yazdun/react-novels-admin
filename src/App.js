import "./scss/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute, routes } from "./views";
import { Alert, BackToTop, Topbar } from "./components";
import { ErrorHandler } from "./context/errors";

function App() {
  return (
    <>
      <Topbar />
      <ErrorHandler>
        <BackToTop />
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
