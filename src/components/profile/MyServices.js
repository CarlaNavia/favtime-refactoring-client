import { useState, useEffect } from "react";
import ServiceService from "../../lib/service-service";
import { useParams, Link } from "react-router-dom";
import ServiceList from "../services/ServiceList";
import "./Profile.css"

function Services() {
  const params = useParams();
  const [services, setServices] = useState([]);

  const getMyServices = () => {
    ServiceService.getMyServices(params.id).then((result) => {
      setServices(result);
    });
  };

  const handleDelete = (event, id) => {
    event.preventDefault();
    ServiceService.removeOneService(id).then((result) => {
      setServices(result);
    });
  };

  useEffect(() => {
    getMyServices();
  }, []);

  return (
    <div>
      <h2 className="profile-title">MY SERVICES:</h2>

      <ServiceList
        services={services}
        onServiceDeleteClick={handleDelete}
        isOwner
      />
    </div>
  );
}

export default Services;
