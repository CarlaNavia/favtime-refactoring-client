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
  async getMyRequests(ownerId) {
    return this.axios.get(`/api/requests/${ownerId}`).then(({ data }) => data);
  }
  async getMyBookings(clientId) {
    return this.axios.get(`/api/bookings/${clientId}`).then(({ data }) => data);
  }
}

const axiosRequestFunctions = new BookingService();

export default axiosRequestFunctions;
