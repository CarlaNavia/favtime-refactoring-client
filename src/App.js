import { Route, Switch } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import ServiceCreate from "./pages/service/Create"

function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Home} />
        <PrivateRoute
          exact
          path="/service/create"
          component={ServiceCreate}
        />
        <PrivateRoute
          exact
          path="/private"
          component={() => <h1>PRIVADO</h1>}
        />
      </Switch>
    </AuthProvider>
  );
}

export default App;
