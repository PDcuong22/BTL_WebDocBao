import { axiosClient } from "./axios-client";

export const authorApi = {
  gets: () => axiosClient.get("/author"),
};
