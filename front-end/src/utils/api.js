import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:5000",
});

export const addAuthorizationHeader = (headers = {}) => {
  const token = localStorage.getItem("authToken");
  if (!token) return headers;
  return {
    ...headers,
    Authorization: `Bearer ${token}`,
  };
};

Api.interceptors.request.use((config) => {
  if (config.authenticated) {
    config.headers = addAuthorizationHeader();
  }
  return config;
});

export default Api;
