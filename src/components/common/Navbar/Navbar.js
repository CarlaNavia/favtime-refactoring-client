import React from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../../../lib/AuthProvider";

function Navbar({ user = {}, logout = () => {} }) {
  return (
    <nav>
      <h1>Favtime</h1>
      {!user && <Link to="/login">LOGIN</Link>}

      {user && (
        <div>
          <Link to={`/profile/${user._id}`}>PROFILE</Link>
          <button
            onClick={() => {
              logout();
            }}
            className="logout-btn"
          >
            LOGOUT
          </button>
        </div>
      )}
    </nav>
  );
}
export default withAuth(Navbar);
