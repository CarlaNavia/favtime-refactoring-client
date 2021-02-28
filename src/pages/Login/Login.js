import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";
import PropTypes from "prop-types";
import Navbar from "../../components/common/Navbar/Navbar";
import "./Login.css";

const Login = ({ isLoggedIn = false, login = () => {} }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    login({ email, password });
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
      <Navbar />
      <div className="login-page">
        <h1 className="login-title">LOGIN:</h1>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            name="email"
            className="input-form"
            value={email}
            placeholder="E-mail"
            onChange={(e) => handleInputChange(e, setEmail)}
          />
          <br />
          <input
            type="password"
            name="password"
            className="input-form"
            value={password}
            placeholder="Password"
            onChange={(e) => handleInputChange(e, setPassword)}
          />
          <br />
          <input type="submit" value="Login" className="login-form-button" />
        </form>

        <Link className="expl-title" to="/register">
          You don't have an account? Register!
        </Link>
      </div>
    </>
  );
};

export default withAuth(Login);

Login.propTypes = {
  isLoggedIn: PropTypes.bool,
  login: PropTypes.func.isRequired,
};
