import { Route, Switch } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import ServiceCreate from "./pages/Service/Create";
import ServiceType from "./pages/Service/Type";
import ServiceDetail from "./pages/Service/Detail";
import BookingCreate from "./pages/Booking/Create";
import ProfileMyBookings from "./pages/Profile/Bookings";
import ProfileMyRequests from "./pages/Profile/Requests";
import ProfileMyServices from "./pages/Profile/Services";
import ProfileMyReviews from "./pages/Profile/Reviews";
import ReviewCreate from "./pages/Review/Create";
import ServiceEdit from "./pages/Service/Edit";

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
          path="/services/:id"
          component={ProfileMyServices}
        />

        <PrivateRoute exact path="/reviews/:id" component={ProfileMyReviews} />
        <PrivateRoute exact path="/review/:id" component={ReviewCreate} />
        <PrivateRoute exact path="/service/:id/edit" component={ServiceEdit} />
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
