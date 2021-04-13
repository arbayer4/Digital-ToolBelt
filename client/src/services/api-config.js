import axios from "axios";

const baseUrl = "https://digital-toolbelt-api.herokuapp.com/";
// process.env.NODE_ENV === "production"
//   ? "https://digital-toolbelt-api.herokuapp.com/"
//   : "http://localhost:3000";

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
