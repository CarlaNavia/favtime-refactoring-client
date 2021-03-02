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
              <span className="bold">Service: </span>
              {eachRequest.service.title} <br />
              <span className="bold"> Date: </span>
              {eachRequest.date}
              <br />
              <span className="bold">Time: </span>
              {eachRequest.time}
              <br />
              <span className="bold">Client: </span>
              {eachRequest.client.firstName}
              <br />
              {eachRequest.status === "pending" && (
                <div>
                  <button
                    className="buttons_profile "
                    onClick={() => handleClick(eachRequest._id, "accepted")}
                  >
                    Accept
                  </button>
                  <button
                    className="buttons_profile "
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
