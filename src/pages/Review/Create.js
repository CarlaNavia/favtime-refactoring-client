import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import ReviewService from "../../lib/review-service";

export default function Create() {
  const params = useParams();
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    ReviewService.createAReview(params.id, {
      review,
      rating,
      booking: params.id,
    }).then((result) => {
      history.push("/");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="review"
        value={review}
        required
        placeholder="Review"
        onChange={(event) => {
          setReview(event.target.value);
        }}
      />
      <input
        type="number"
        name="rating"
        value={rating}
        required
        placeholder="Rating"
        onChange={(event) => {
          setRating(event.target.value);
        }}
      />

      <button type="submit">Add a review</button>
    </form>
  );
}
