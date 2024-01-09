import { axiosClient } from "./axios-client";

export const categoryApi = {
  getAllCategories: () => axiosClient.get("/category"),
  getCategories(categoryId) {
    return axiosClient.get(`/category/${categoryId}`);
  },
};
