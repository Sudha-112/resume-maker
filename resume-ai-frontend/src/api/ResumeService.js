import axiosClient from "./axiosClient";

export const generateResume = async (description) => {
  const response = await axiosClient.post("/api/v1/resume/generate", {
    userDescription: description,
  });

  return response.data;
};