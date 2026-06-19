import axios from "axios";

const api = axios.create({
  baseURL: "https://restuarant-backend-1-ms1w.onrender.com"
});

export default api;