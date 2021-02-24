import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "./auth-service";
const { Consumer, Provider } = React.createContext();

const withAuth = (WrappedComponent) => {
  return (props) => (
    <Consumer>
      {({ login, register, user, logout, isLoggedIn }) => {
        return (
          <WrappedComponent
            login={login}
            register={register}
            user={user}
            logout={logout}
            isLoggedIn={isLoggedIn}
            {...props}
          />
        );
      }}
    </Consumer>
  );
};

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    auth
      .me()
      .then(({ currentUser }) => {
        setIsLoggedIn(true);
        setUser(currentUser);
      })
      .catch((error) => {
        const { response } = error;
        if (response) setError(response.data.statusMessage);
        else {
          console.log(error);
        }
      });
  }, []);

  const register = (user) => {
    const { firstName, lastName, email, password } = user;
    setIsLoading(true);
    auth
      .register({ firstName, lastName, email, password })
      .then(({ newUserWithoutPass }) => {
        setIsLoading(false);
        setIsLoggedIn(true);
        setUser(newUserWithoutPass);
      })
      .catch(({ response }) => {
        setIsLoading(false);
        response && setError(response.data.statusMessage);
      });
  };

  const login = (user) => {
    const { email, password } = user;
    setIsLoading(true);
    auth
      .login({ email, password })
      .then(({ userWithoutPass }) => {
        setIsLoading(false);
        setIsLoggedIn(true);
        setUser(userWithoutPass);
      })
      .catch(({ response }) => {
        setIsLoading(false);
        response && setError(response.data.message);
      });
  };

  const logout = () => {
    setIsLoading(true);
    auth
      .logout()
      .then(() => {
        setIsLoading(false);
        setIsLoggedIn(false);
        setUser(null);
      })
      .catch(({ response }) => {
        setIsLoading(false);
        response && setError(response.data.message);
      });
  };

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <Provider value={{ isLoggedIn, user, login, logout, register, error }}>
      {children}
    </Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export { Consumer, withAuth };

export default AuthProvider;
