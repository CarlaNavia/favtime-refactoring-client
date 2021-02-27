import { useState, useEffect } from "react";
import ServiceService from "../../lib/service-service";
import { useParams, Link } from "react-router-dom";
import ServiceList from "../services/ServiceList";

function Requests() {
  const params = useParams();
  const [services, setServices] = useState([]);

  const getMyServices = () => {
    ServiceService.getMyServices(params.id).then((result) => {
      setServices(result);
    });
  };

  const handleDelete = (event, id) => {
    event.preventDefault()
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

     <ServiceList services={services} onServiceDeleteClick={handleDelete} isOwner/>
      {services.length > 0 &&
        services.map((eachService, index) => {
          return (
            <div key={index}>
              <h3>Service:{eachService.title}</h3>
              <p>Type:{eachService.type && eachService.type.title}</p>
              <Link to={`/service/${eachService._id}/edit`}>EDIT</Link>
              <button onClick={(event) => handleDelete(event, eachService._id)}>DELETE</button>
            </div>
          );
        })}
    </div>
  );
}

export default Requests;
