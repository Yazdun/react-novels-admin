import "./scss/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./context/auth";
import { PrivateRoute, routes } from "./routes";

function App() {
  return (
    <AuthProvider>
      <Switch>
        {routes.map((route, item) =>
          route.private ? (
            <PrivateRoute key={item} {...route} />
          ) : (
            <Route key={item} {...route} />
          )
        )}
      </Switch>
    </AuthProvider>
  );
}

export default App;
