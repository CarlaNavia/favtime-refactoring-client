import { useState, useEffect } from "react";
import ServiceService from "../../lib/service-service";
import { useHistory } from "react-router-dom";
import TypeService from "../../lib/type-service";
import "./Create.css";
import Navbar from "../../components/common/Navbar/Navbar";

export default function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [typeId, setTypeId] = useState("");
  const [types, setTypes] = useState([]);
  const [availableTime, setAvailableTime] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [credits, setCredits] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    ServiceService.createAService({
      title,
      description,
      typeId,
      availableTime,
      city,
      address,
      credits,
    }).then(() => {
      history.push("/");
    });
  };

  useEffect(() => {
    TypeService.getAllTypes().then((result) => {
      setTypes(result);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="create-service-page">
        <h2 className="create-service-title">ADD A NEW SERVICE:</h2>
        <form onSubmit={handleSubmit} className="create-service-form">
          <input
            type="text"
            name="title"
            value={title}
            className="input-form"
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
            value={description}
            className="input-form"
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
            onChange={(event) => {
              setTypeId(event.target.value);
            }}
          >
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
            className="input-form"
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
          <br />
          <input
            type="text"
            name="city"
            className="input-form"
            value={city}
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
            className="input-form"
            value={address}
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
            className="input-form"
            value={credits}
            required
            placeholder="Credits"
            onChange={(event) => {
              setCredits(event.target.value);
            }}
          />
          <br />
          <button type="submit" className="create-service-form-button">
            Save
          </button>
        </form>
      </div>
    </>
  );
}
