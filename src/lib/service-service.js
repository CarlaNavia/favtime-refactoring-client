import axios from "axios";

class VideoService {
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
}

const axiosRequestFunctions = new VideoService();

export default axiosRequestFunctions;
