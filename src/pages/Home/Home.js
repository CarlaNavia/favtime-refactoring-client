import { useState, useEffect } from "react";
import { withAuth } from "../../lib/AuthProvider";
import { Link } from "react-router-dom";
import ServiceService from "../../lib/service-service";

function Home({ user = {}, logout = () => {} }) {
  const [types, setTypes] = useState([]);

  const getAllTypes = () => {
    ServiceService.getAllTypes().then((result) => {
      setTypes(result);
    });
  };
  useEffect(() => {
    getAllTypes();
  }, []);

  return (
    <div>
      <h1>home</h1>
      <ul>
        <li>
          <Link to="/login">LOGIN</Link>
        </li>
      </ul>
      {user && (
        <div>
          <button
            onClick={() => {
              logout();
            }}
            className="logout-btn"
          >
            LOGOUT
          </button>
          <ul>
        <li>
          <Link to={`/bookings/${user._id}`}>MY BOOKINGS</Link>
        </li>
        <li>
          <Link to={`/requests/${user._id}`}>MY REQUESTS</Link>
        </li>
        {/* <li>
          <Link to={`/reviews/${user._id}`}>MY REVIEWS</Link>
        </li> */}
        {/* <li>
          <Link to={`/services/${user._id}`}>MY SERVICES</Link>
        </li> */}
      </ul>
        </div>
      )}
      
      <ul>
        {types.map((eachType, index) => {
          return (
            <li key={index}>
              <Link to={`/servicetype/${eachType._id}`}>{eachType.title}</Link>
            </li>
          );
        })}
      </ul>
      <ul>
        <li>
          <Link to="/service/create">ADD SERVICE</Link>
        </li>
      </ul>
    </div>
  );
}
export default withAuth(Home);
