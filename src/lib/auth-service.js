import axios from "axios";

class Auth {
  constructor() {
    this.auth = axios.create({
      baseURL: process.env.REACT_APP_API_URI,
      withCredentials: true,
    });
  }

  async register({ firstName, lastName, email, password }) {
    return this.auth
      .post("/api/register", { firstName, lastName, email, password })
      .then(({ data }) => data);
  }

  async login({ email, password }) {
    return this.auth
      .post("/api/login", { email, password })
      .then(({ data }) => data);
  }

  async logout() {
    return this.auth.post("/api/logout", {}).then(({ data }) => data);
  }

  async me() {
    return this.auth.get("/api/me").then(({ data }) => data);
  }
}

const axiosRequestFunctions = new Auth();

export default axiosRequestFunctions;
