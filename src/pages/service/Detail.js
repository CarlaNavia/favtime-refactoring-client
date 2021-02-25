import { useState, useEffect, useCallback } from "react";
import ServiceService from "../../lib/service-service";
import { useParams , Link} from "react-router-dom";

export default function Detail() {
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
      <h1>DETAILED SERVICE:</h1>
      <p>{service.title}</p>
      <p>{service.description}</p>
      <p>{service.type && service.type.title}</p>
      <p>{service.availableTime}</p>
      <Link to={`/booking/${service._id}`}>BOOK!</Link>
    </div>
  );
}
