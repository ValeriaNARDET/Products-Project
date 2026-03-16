import axios from "axios";

const URL = 'https://dummyjson.com';

export const axiosInstance = axios.create({
  baseURL: URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});


axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});


axiosInstance.interceptors.response.use((response) => {
  return response;
},

  (error) => {
    if (error.response) {
      console.error("API Error:", error.response.data);

      switch (error.response.status) {
        case 400:
          console.error("Bad request");
          break;

        case 401:
          console.error("Unauthorized");
          break;

        case 404:
          console.error("Resource not found");
          break;

        case 500:
          console.error("Server error");
          break;

        default:
          console.error("Unexpected error");
      }
    } else if (error.request) {
      console.error("Network error");
    } else {
      console.error("Axios error:", error.message);
    }

    return Promise.reject(error);
  }
);