import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";
import PropTypes from "prop-types";
import Navbar from "../../components/common/Navbar/Navbar";
import "./Register.css";

const Register = ({ isLoggedIn = false, register = () => {} }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    register({ firstName, lastName, email, password });
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
      <h1 className="register-title">REGISTER:</h1>
      <div className="register-page">
        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            name="firstName"
            className="input-form"
            value={firstName}
            placeholder="Name"
            onChange={(e) => handleInputChange(e, setFirstName)}
          />
          <br />
          <input
            type="text"
            name="lastName"
            className="input-form"
            value={lastName}
            placeholder="Lastname"
            onChange={(e) => handleInputChange(e, setLastName)}
          />
          <br />
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
          <input
            type="submit"
            value="Register"
            className="register-form-button"
          />
        </form>

        <Link className="expl-title" to="/login">
          Do you have an account? Login!
        </Link>
      </div>
    </>
  );
};

export default withAuth(Register);

Register.propTypes = {
  isLoggedIn: PropTypes.bool,
  register: PropTypes.func,
};
