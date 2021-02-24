import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";
import PropTypes from "prop-types";

const Login = ({ isLoggedIn = false, login = () => {} }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    login({email, password});
  };

  const handleInputChange = (event, setter) => {
    const { value } = event.target;
    setter(value);
  };

  useEffect(() => {
    if (isLoggedIn) history.push("/");
  }, [isLoggedIn, history]);

  return (
    <>
      <h1>LOGIN:</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="E-mail"
          onChange={(e) => handleInputChange(e, setEmail)}
        />

        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => handleInputChange(e, setPassword)}
        />

        <input type="submit" value="Login" />
      </form>

      <Link to="/register">You don't have an account? Register!</Link>
    </>
  );
};

export default withAuth(Login);

Login.propTypes = {
    isLoggedIn: PropTypes.bool,
    login: PropTypes.func.isRequired
  }
