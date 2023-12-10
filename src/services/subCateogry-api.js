import { axiosClient } from "./axios-client";

export const subCateogryApi = {
  getSubCategories(categoryId) {
    return axiosClient.get(`/subcategory/${categoryId}`);
  },
};
