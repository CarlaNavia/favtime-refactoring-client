import axios from "axios";

class ReviewService {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true,
    });
  }

  async createAReview(id, newReview) {
    return this.axios
      .post(`/api/review/${id}`, newReview)
      .then(({ data }) => data);
  }
  async getMyReviews(id) {
    return this.axios.get(`/api/reviews/${id}`).then(({ data }) => data);
  }
}

const axiosRequestFunctions = new ReviewService();

export default axiosRequestFunctions;
