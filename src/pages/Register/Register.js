import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { withAuth } from "../../lib/AuthProvider";
import PropTypes from "prop-types";

const Register = ({ isLoggedIn = false, register = () => {} }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    register({firstName, lastName, email, password});
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
      <h1>REGISTER:</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={firstName}
          placeholder="Name"
          onChange={(e) => handleInputChange(e, setFirstName)}
        />

        <input
          type="text"
          name="lastName"
          value={lastName}
          placeholder="Lastname"
          onChange={(e) => handleInputChange(e, setLastName)}
        />

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

        <input type="submit" value="Register" />
      </form>

      <Link to="/login">Do you have an account? Login!</Link>
    </>
  );
};

export default withAuth(Register);

Register.propTypes = {
  isLoggedIn: PropTypes.bool,
  register: PropTypes.func,
};
