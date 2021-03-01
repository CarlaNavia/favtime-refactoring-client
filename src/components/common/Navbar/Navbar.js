import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faSignInAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { withAuth } from "../../../lib/AuthProvider";
import "./Navbar.css";

function Navbar({ user = {}, logout = () => {} }) {
  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/">
          <h1 className="h1-nav">FavTime</h1>
        </Link>
      </div>
      <div>
        <div className="navbar-end">
          <div className="navbar-item">
            {!user && (
              <Link to="/login">
                <FontAwesomeIcon
                  icon={faSignInAlt}
                  className="nav__icon"
                  color="#ffffff"
                />
              </Link>
            )}
            {user && (
              <div>
                <Link to={`/profile/${user._id}`}>
                  <FontAwesomeIcon
                    icon={faUser}
                    className="nav__icon"
                    color="#ffffff"
                  />
                </Link>
                <button
                  onClick={() => {
                    logout();
                  }}
                  className="icon-btn"
                >
                  <FontAwesomeIcon
                    icon={faSignOutAlt}
                    className="nav__icon"
                    color="#ffffff"
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};

export default withAuth(Navbar);
