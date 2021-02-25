import axios from "axios";

class ServiceService {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true,
    });
  }

  async getAllTypes() {
    return this.axios.get("/api/servicetype").then(({ data }) => data);
  }
  async createAService(newService) {
    return this.axios.post("/api/service", newService).then(({ data }) => data);
  }
  async detailedService(id) {
    return this.axios.get(`/api/service/${id}`).then(({ data }) => data);
  }
  async getAllServicesFromAType(id) {
    return this.axios
      .get(`/api/servicetype/${id}/services`)
      .then(({ data }) => data);
  }
  async getOneType(id) {
    return this.axios.get(`/api/servicetype/${id}`).then(({ data }) => data);
  }
}

const axiosRequestFunctions = new ServiceService();

export default axiosRequestFunctions;
