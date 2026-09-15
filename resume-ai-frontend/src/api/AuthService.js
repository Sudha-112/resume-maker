import axiosClient from "./axiosClient";

export const registerUser = async ({ fullName, email, password }) => {
  const response = await axiosClient.post("/api/v1/auth/register", {
    fullName,
    email,
    password,
  });
  return response.data;
};

export const loginUser = async ({ email, password }) => {
  const response = await axiosClient.post("/api/v1/auth/login", {
    email,
    password,
  });
  return response.data;
};

export const fetchCurrentUser = async () => {
  const response = await axiosClient.get("/api/v1/auth/me");
  return response.data;
};
