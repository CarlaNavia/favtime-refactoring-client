import { useState, useEffect } from "react";
import BookingService from "../../lib/booking-service";
import { useParams } from "react-router-dom";

function Requests() {
  const params = useParams();
  const [requests, setRequests] = useState([]);

  const getMyRequests = () => {
    BookingService.getMyRequests(params.id).then((result) => {
      setRequests(result);
    });
  };

  useEffect(() => {
    getMyRequests();
  }, []);

  return (
    <div>
      <h1>My requests:</h1>

      {requests.length === 0 &&
        "Unfortunately you have not received any request yet."}

      {requests.length > 0 &&
        requests.map((eachRequest, index) => {
          return (
            <div key={index}>
              <h3>Service:{eachRequest.service.title}</h3>
              <p>Client:{eachRequest.client.firstName}</p>
            </div>
          );
        })}
    </div>
  );
}

export default Requests;
