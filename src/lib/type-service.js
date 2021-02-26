import axios from "axios";

class TypeService {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true,
    });
  }

  async getAllTypes() {
    return this.axios.get("/api/servicetype").then(({ data }) => data);
  }
  async getOneType(id) {
    return this.axios.get(`/api/servicetype/${id}`).then(({ data }) => data);
  }
}

const axiosRequestFunctions = new TypeService();

export default axiosRequestFunctions;
