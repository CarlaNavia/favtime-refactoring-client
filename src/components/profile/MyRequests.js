import { useState, useEffect } from "react";
import BookingService from "../../lib/booking-service";
import { useParams } from "react-router-dom";
import "./Profile.css";

function Requests() {
  const params = useParams();
  const [requests, setRequests] = useState([]);

  const getMyRequests = () => {
    BookingService.getMyRequests(params.id).then((result) => {
      setRequests(result);
    });
  };

  const handleClick = (bookingId, status) => {
    BookingService.updateBookingStatus(bookingId, status).then((result) => {
      setRequests(result);
    });
  };

  useEffect(() => {
    getMyRequests();
  }, []);

  return (
    <div>
      <h2 className="profile-title">MY REQUESTS:</h2>

      {requests.length === 0 &&
        "Unfortunately you have not received any request yet."}

      {requests.length > 0 &&
        requests.map((eachRequest, index) => {
          return (
            <div key={index} className="columns is-mobile border">
              Service:{eachRequest.service.title} <br/>
              Date: {eachRequest.date}<br/>
              Time: {eachRequest.time}<br/>
              Client:{eachRequest.client.firstName}<br/>
              {eachRequest.status === "pending" && (
                <div>
                  <button
                    onClick={() => handleClick(eachRequest._id, "accepted")}
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleClick(eachRequest._id, "declined")}
                  >
                    Declined
                  </button>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
}

export default Requests;
