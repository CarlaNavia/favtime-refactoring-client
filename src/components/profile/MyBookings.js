import { useState, useEffect } from "react";
import BookingService from "../../lib/booking-service";
import { useParams, Link } from "react-router-dom";
import "./Profile.css";

function Bookings() {
  const params = useParams();
  const [bookings, setBookings] = useState([]);

  const getMyBookings = () => {
    BookingService.getMyBookings(params.id).then((result) => {
      setBookings(result);
    });
  };

  useEffect(() => {
    getMyBookings();
  }, []);

  return (
    <div>
      <h2 className="profile-title">MY BOOKINGS:</h2>

      {bookings.length === 0 &&
        "Unfortunately you have not booked any service yet."}

      {bookings.length > 0 &&
        bookings.map((eachBooking, index) => {
          return (
            <div key={index} className="columns is-mobile border bookings">
              <p>
                <span className="bold">Service: </span>
                {eachBooking.service.title}
              </p>
              <p>
                <span className="bold">Owner: </span>
                {eachBooking.owner.firstName}
              </p>
              <p>
                <span className="bold">Status: </span>
                {eachBooking.status}
              </p>
              {eachBooking.status === "accepted" && (
                <Link
                  className="buttons_profile "
                  to={`/review/${eachBooking._id}`}
                >
                  Add a review
                </Link>
              )}
            </div>
          );
        })}
    </div>
  );
}

export default Bookings;
