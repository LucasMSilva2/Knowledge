import axios from "axios";

const api = axios.create({
  baseURL: "https://4f84-177-84-59-0.ngrok.io",
});

export default api;