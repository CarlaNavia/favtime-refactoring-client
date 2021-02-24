import { Route, Switch } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";
import PrivateRoute from './components/PrivateRoute'
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/" component={()=><h1>PRIVADO</h1>} />
      </Switch>
    </AuthProvider>
  );
}

export default App;
