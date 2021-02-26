import { useState, useEffect } from "react";
import BookingService from "../../lib/booking-service";
import { useParams, Link } from "react-router-dom";
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
      <h1>My bookings:</h1>

      {bookings.length === 0 &&
        "Unfortunately you have not booked any service yet."}

      {bookings.length > 0 &&
        bookings.map((eachBooking, index) => {
          return (
            <div key={index}>
              <h3>Service:{eachBooking.service.title}</h3>
              <p>Owner:{eachBooking.owner.firstName}</p>
              <p>Status:{eachBooking.status}</p>
              {eachBooking.status === "accepted" && (
                <Link to={`/review/${eachBooking._id}`}>Add a review</Link>
              )}
            </div>
          );
        })}
    </div>
  );
}

export default Bookings;
