import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import BookingService from "../../lib/booking-service";
import "./CreateForm.css"

export default function Create() {
  const params = useParams();
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [comments, setComments] = useState("");

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    BookingService.createABooking(params.id, {
      date,
      time,
      comments,
      service: params.id,
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="create-form-page">
    <form onSubmit={handleSubmit} className="create-form">
      <input
        type="date"
        name="date"
        className="input-form"
        value={date}
        required
        placeholder="Date"
        onChange={(event) => {
          setDate(event.target.value);
        }}
      />
      <br />
      <input
        type="text"
        name="time"
        className="input-form"
        value={time}
        required
        placeholder="Time"
        onChange={(event) => {
          setTime(event.target.value);
        }}
      />
      <br />
      <input
        type="text"
        name="comments"
        className="input-form"
        value={comments}
        required
        placeholder="Comments"
        onChange={(event) => {
          setComments(event.target.value);
        }}
      />
      <br />
      <input type="submit" value="CONFIRM" className="create-form-button" />
    </form>
    </div>
  );
}
