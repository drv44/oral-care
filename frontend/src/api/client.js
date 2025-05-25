import axios from "axios";
const client = axios.create({
  baseURL: "https://oral-care.onrender.com",
});

export default client;
