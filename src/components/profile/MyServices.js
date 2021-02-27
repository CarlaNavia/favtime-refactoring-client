import { useState, useEffect } from "react";
import ServiceService from "../../lib/service-service";
import { useParams, Link } from "react-router-dom";
import ServiceList from "../services/ServiceList";

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
      <h1>My services:</h1>

      <ServiceList
        services={services}
        onServiceDeleteClick={handleDelete}
        isOwner
      />
    </div>
  );
}

export default Services;
