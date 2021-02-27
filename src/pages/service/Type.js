import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import ServiceService from "../../lib/service-service";
import TypeService from "../../lib/type-service";
import Navbar from "../../components/common/Navbar/Navbar";
import ServiceList from "../../components/services/ServiceList";

export default function Type() {
  const params = useParams();
  const [services, setServices] = useState([]);
  const [type, setType] = useState(null);

  const oneType = useCallback(() => {
    TypeService.getOneType(params.id).then((result) => {
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
      <Navbar />
      <main>
        <article>
          <h1>{type && type.title}</h1>
          <ServiceList services={services} />
        </article>
      </main>
    </div>
  );
}
