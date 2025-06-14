import axios from "axios";

// Set axios base URL based on environment
const baseURL =
  process.env.NODE_ENV === "production"
    ? "/api" // In production, we serve from the same domain
    : "http://localhost:5000/api"; // In development, connect to separate backend server

const api = axios.create({
  baseURL,
});

// Add a request interceptor to add auth token to all requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["x-auth-token"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
