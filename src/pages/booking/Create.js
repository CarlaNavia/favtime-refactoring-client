import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import BookingService from "../../lib/booking-service";

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
    }).then((result) => {
      history.push("/");
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          name="date"
          value={date}
          required
          placeholder="Date"
          onChange={(event) => {
            setDate(event.target.value);
          }}
        />
        <input
          type="text"
          name="time"
          value={time}
          required
          placeholder="Time"
          onChange={(event) => {
            setTime(event.target.value);
          }}
        />

        <input
          type="text"
          name="comments"
          value={comments}
          required
          placeholder="Comments"
          onChange={(event) => {
            setComments(event.target.value);
          }}
        />

        <button type="submit">CONFIRM</button>
      </form>
    </div>
  );
}
