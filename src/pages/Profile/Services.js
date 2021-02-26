import { useState, useEffect } from "react";
import ServiceService from "../../lib/service-service";
import { useParams } from "react-router-dom";

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

      {services.length === 0 &&
        "Unfortunately you have not upload any service yet."}

      {services.length > 0 &&
        services.map((eachService, index) => {
          return (
            <div key={index}>
              <h3>Service:{eachService.title}</h3>
              <p>Type:{eachService.type && eachService.type.title}</p>
              <button onClick={(event) => handleDelete(event, eachService._id)}>DELETE</button>
            </div>
          );
        })}
    </div>
  );
}

export default Requests;
