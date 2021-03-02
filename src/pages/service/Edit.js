import { useState, useEffect, useCallback } from "react";
import { useParams, useHistory } from "react-router-dom";
import ServiceService from "../../lib/service-service";
import TypeService from "../../lib/type-service";
import Navbar from "../../components/common/Navbar/Navbar";
import "./Create.css";

export default function Edit() {
  const params = useParams();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [typeId, setTypeId] = useState("");
  const [types, setTypes] = useState([]);
  const [availableTime, setAvailableTime] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [credits, setCredits] = useState("");
  const history = useHistory();

  const getAService = useCallback(() => {
    ServiceService.detailedService(params.id).then((result) => {
      setTitle(result.title);
      setDescription(result.description);
      setTypeId(result.type._id);
      setAvailableTime(result.availableTime);
      setCity(result.city);
      setAddress(result.address);
      setCredits(result.credits);
    });
  }, [params.id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    ServiceService.editOneService(params.id, {
      title,
      description,
      typeId,
      availableTime,
      city,
      address,
      credits,
    }).then((result) => {
      history.push(`/services/${result.owner}`);
    });
  };

  useEffect(() => {
    getAService();
  }, [getAService]);

  useEffect(() => {
    TypeService.getAllTypes().then((result) => {
      setTypes(result);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <article className="create-service-page">
          <h2 className="create-service-title">Edit service</h2>
          <form onSubmit={handleSubmit} className="create-service-form">
            <input
              type="text"
              name="title"
              className="input-form"
              value={title}
              required
              placeholder="Title"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <br />
            <input
              type="text"
              name="description"
              className="input-form"
              value={description}
              required
              placeholder="Description"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
            <br />
            <select
              name="type"
              className="input-form"
              value={typeId}
              onChange={(event) => {
                setTypeId(event.target.value);
              }}
            >
              <br />
              <option value="" selected disabled>
                Select a type...
              </option>
              {types.map((eachType, index) => {
                return (
                  <option key={eachType._id} value={eachType._id}>
                    {eachType.title}
                  </option>
                );
              })}
            </select>
            <br />
            <select
              type="text"
              name="availableTime"
              value={availableTime}
              className="input-form"
              required
              placeholder="Available time"
              onChange={(event) => {
                setAvailableTime(event.target.value);
              }}
            >
              <option value="" selected disabled>
                Available Time
              </option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="night">Night</option>
            </select>
            <br />
            <input
              type="text"
              name="city"
              value={city}
              className="input-form"
              required
              placeholder="City"
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
            <br />
            <input
              type="text"
              name="address"
              value={address}
              className="input-form"
              required
              placeholder="Address"
              onChange={(event) => {
                setAddress(event.target.value);
              }}
            />
            <br />
            <input
              type="number"
              name="credits"
              value={credits}
              className="input-form"
              required
              placeholder="Credits"
              onChange={(event) => {
                setCredits(event.target.value);
              }}
            />
            <br />
            <button className="create-service-form-button" type="submit">
              Updated service
            </button>
          </form>
        </article>
      </main>
    </div>
  );
}
