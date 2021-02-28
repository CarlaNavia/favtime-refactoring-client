import { useState, useEffect } from "react";
import ReviewService from "../../lib/review-service";
import { useParams } from "react-router-dom";
import "./Profile.css"

export default function Reviews() {
  const params = useParams();
  const [reviews, setReviews] = useState([]);

  const getMyReviews = () => {
    ReviewService.getMyReviews(params.id).then((result) => {
      setReviews(result);
    });
  };

  useEffect(() => {
    getMyReviews();
  }, []);

  return (
    <div>
      <h2 className="profile-title">MY REVIEWS:</h2>

      {reviews.length === 0 &&
        "Unfortunately you have not received any reviewed yet."}

      {reviews.length > 0 &&
        reviews.map((eachReview, index) => {
          return (
            <div key={index}>
              <h3>Author:{eachReview.author.firstName}</h3>
              <p>Review:{eachReview.review}</p>
              <p>Rating:{eachReview.rating}</p>
            </div>
          );
        })}
    </div>
  );
}
