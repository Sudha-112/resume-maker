import axios from "axios";

export const baseURL = import.meta.env.VITE_API_URL;

const axiosClient = axios.create({
  baseURL,
});

// Attach the JWT token (if present) to every outgoing request
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// If the backend says the token is invalid/expired, clear it and send the
// user back to login instead of showing a confusing error.
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
