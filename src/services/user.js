import { axiosClient } from "./axios-client";

const userApi = {
  getUsers: () => axiosClient.get("/user"),
  updateUser: (user) => axiosClient.put(`/user/${user._id}`, user),
  deleteUser: (id) => axiosClient.delete(`/user/${id}`),
};

export default userApi;
