import { useState, useEffect, useCallback } from "react";
import ServiceService from "../../lib/service-service";
import { useParams } from "react-router-dom";
import Navbar from "../../components/common/Navbar/Navbar";
import BookingCreateFrom from "../../components/booking/CreateFrom";
import { withAuth } from "../../lib/AuthProvider";
import PropTypes from "prop-types";

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
          <h2>Service details:</h2>
          <p>{service.title}</p>
          <p>{service.description}</p>
          <p>{service.type && service.type.title}</p>
          <p>{service.availableTime}</p>
        </article>
        <article>
          {user._id !== service.owner && (
            <div>
              <h2>Let's book this service!</h2>
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
