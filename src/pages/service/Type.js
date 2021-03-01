import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import ServiceService from "../../lib/service-service";
import TypeService from "../../lib/type-service";
import Navbar from "../../components/common/Navbar/Navbar";
import ServiceList from "../../components/services/ServiceList";
import "./Types.css";
import Icon from "../../components/services/Icon";

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
      <main className="container">
        <article className=" serviceTypeName  iconTitle">
          <Icon code={type && type.iconCode} />
          <h3 className="types-title">{type && type.title}</h3>
        </article>
        <article>
          <ServiceList services={services} />
        </article>
      </main>
    </div>
  );
}
