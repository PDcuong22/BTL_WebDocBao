import { axiosClient } from "./axios-client";

export const authApi = {
  login: (data) => {
    return axiosClient.post("/auth/signin", data);
  },
  register: (data) => {
    return axiosClient.post("/auth/signup", data);
  },
  // logout: () => {
  //   return axiosClient.post("/auth/logout");
  // },
};
