import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import ServiceService from "../../lib/service-service";

export default function Type() {
  const params = useParams();
  const [services, setServices] = useState([]);
  const [type, setType] = useState(null);

  const oneType = useCallback(() => {
    ServiceService.getOneType(params.id).then((result) => {
      setType(result);
    });
  }, [params.id]);

  const getServicesByType = useCallback(() => {
    ServiceService.getAllServicesFromAType(params.id).then((result) => {
      setServices(result);
    });
  }, [params.id]);

  useEffect(() => {
    getServicesByType();
    oneType();
  }, []);

  return (
    <div>
      <h1>{type && type.title}</h1>
      {services.length === 0 && <p>No hay resultados</p>}
      <ul>
        {services.map((eachService, index) => {
          return (
            <li>
              <p>{eachService.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
