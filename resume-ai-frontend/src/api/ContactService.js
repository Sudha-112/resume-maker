import axiosClient from "./axiosClient";

export const submitContactMessage = async ({ name, email, message }) => {
  const response = await axiosClient.post("/api/v1/contact", {
    name,
    email,
    message,
  });
  return response.data;
};
