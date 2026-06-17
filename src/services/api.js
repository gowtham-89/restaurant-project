import axios from "axios";

const api = axios.create({
  baseURL: "https://restuarant-backend-am25.onrender.com"
});

export default api;