import { Route, Switch } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import ServiceCreate from "./pages/Service/Create";
import ServiceType from "./pages/Service/Type";
import ServiceDetail from "./pages/Service/Detail";
import ReviewCreate from "./pages/Review/Create";
import ServiceEdit from "./pages/Service/Edit";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Home} />
        <Route exact path="/servicetype/:id" component={ServiceType} />
        <PrivateRoute exact path="/service/create" component={ServiceCreate} />
        <PrivateRoute exact path="/service/:id" component={ServiceDetail} />
        <PrivateRoute exact path="/profile/:id" component={Profile} />
        <PrivateRoute exact path="/review/:id" component={ReviewCreate} />
        <PrivateRoute exact path="/service/:id/edit" component={ServiceEdit} />
      
      </Switch>
    </AuthProvider>
  );
}

export default App;
