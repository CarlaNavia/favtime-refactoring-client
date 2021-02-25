import { Route, Switch } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import ServiceCreate from "./pages/service/Create";
import ServiceType from "./pages/service/Type";
import ServiceDetail from "./pages/service/Detail";
import BookingCreate from "./pages/booking/Create";
import ProfileMyBookings from "./pages/profile/Bookings";
import ProfileMyRequests from "./pages/profile/Requests";

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
        <PrivateRoute exact path="/booking/:id" component={BookingCreate} />
        <PrivateRoute
          exact
          path="/bookings/:id"
          component={ProfileMyBookings}
        />
        <PrivateRoute
          exact
          path="/requests/:id"
          component={ProfileMyRequests}
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
