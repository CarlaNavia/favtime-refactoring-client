import axios from "axios";

class BookingService {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true,
    });
  }

  async createABooking(id, newBooking) {
    return this.axios
      .post(`/api/booking/${id}`, newBooking)
      .then(({ data }) => data);
  }
}

const axiosRequestFunctions = new BookingService();

export default axiosRequestFunctions;
