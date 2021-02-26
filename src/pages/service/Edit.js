import { useState, useEffect, useCallback } from "react";
import { useParams, useHistory } from "react-router-dom";
import ServiceService from "../../lib/service-service";
import TypeService from "../../lib/type-service";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        required
        placeholder="Title"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <input
        type="text"
        name="description"
        value={description}
        required
        placeholder="Description"
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />
      <select
        name="type"
        value={typeId}
        onChange={(event) => {
          setTypeId(event.target.value);
        }}
      >
        <option value="" selected disabled>
          SELECT A TYPE...
        </option>
        {types.map((eachType, index) => {
          return (
            <option key={eachType._id} value={eachType._id}>
              {eachType.title}
            </option>
          );
        })}
      </select>
      <select
        type="text"
        name="availableTime"
        value={availableTime}
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
      <input
        type="text"
        name="city"
        value={city}
        required
        placeholder="City"
        onChange={(event) => {
          setCity(event.target.value);
        }}
      />
      <input
        type="text"
        name="address"
        value={address}
        required
        placeholder="Address"
        onChange={(event) => {
          setAddress(event.target.value);
        }}
      />
      <input
        type="number"
        name="credits"
        value={credits}
        required
        placeholder="Credits"
        onChange={(event) => {
          setCredits(event.target.value);
        }}
      />

      <button type="submit">UPDATED SERVICE</button>
    </form>
  );
}
