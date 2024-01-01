import { axiosClient } from "./axios-client";

export const subCateogryApi = {
  getAllSubCategories: () => axiosClient.get("/subcategory"),
  getSubCategories(categoryId) {
    return axiosClient.get(`/subcategory/${categoryId}`);
  },
};
