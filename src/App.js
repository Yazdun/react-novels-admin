import "./scss/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import { PrivateRoute, routes } from "./routes";
import { Topbar } from "./components";
import { ErrorHandler } from "./context/errors";

function App() {
  return (
    <AuthProvider>
      <ErrorHandler>
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
      </ErrorHandler>
    </AuthProvider>
  );
}

export default App;
