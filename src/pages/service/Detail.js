import { useState, useEffect, useCallback } from "react";
import ServiceService from "../../lib/service-service";
import { useParams } from "react-router-dom";
import Navbar from "../../components/common/Navbar/Navbar";
import BookingCreateFrom from "../../components/booking/CreateFrom";
import { withAuth } from "../../lib/AuthProvider";
import PropTypes from "prop-types";
import "./Detail.css";

function Detail({ user = {} }) {
  const params = useParams();
  const [service, setService] = useState("");

  const oneService = useCallback(() => {
    ServiceService.detailedService(params.id).then((result) => {
      setService(result);
    });
  }, [params.id]);

  useEffect(() => {
    oneService();
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <article>
          <h2 className="detail-title">SERVICE DETAILS:</h2>
          <div className="detail border">
            <p>
              <span className="bold">Service:</span> {service.title}
            </p>
            <p>
              <span className="bold">Description:</span> {service.description}
            </p>
            <p>
              <span className="bold">Type: </span>
              {service.type && service.type.title}
            </p>
            <p>
              <span className="bold">Available time:</span>{" "}
              {service.availableTime}
            </p>
          </div>
        </article>
        <article>
          {user._id !== service.owner && (
            <div>
              <h2 className="detail-title">Let's book this service!</h2>
              <BookingCreateFrom />
            </div>
          )}
        </article>
      </main>
    </div>
  );
}
Detail.propTypes = {
  user: PropTypes.object,
};

export default withAuth(Detail);
