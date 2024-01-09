import { axiosClient } from "./axios-client";

const messageApi = {
  add: (payload) => axiosClient.post("/message/add", payload),
  get: (payload) => axiosClient.post("/message/get", payload),
  delete: (payload) => axiosClient.post("/message/delete", payload),
  getUserChat: (userId) => axiosClient.get(`/message/getUserChat/${userId}`),
  getMessagesUnread: (userId) =>
    axiosClient.get(`/message/getMessagesUnread/${userId}`),
  updateSeen: (messageId) =>
    axiosClient.put(`/message/updateSeen/${messageId}`),
};

export default messageApi;
