import { axiosClient } from "./axios-client";

export const articleApi = {
  getArticles() {
    return axiosClient.get(`/article`);
  },
  getArticleById(id) {
    return axiosClient.get(`/article/${id}`);
  },
  getArticleBySubCategory(subCategoryId) {
    return axiosClient.get(`/article/subCategory/${subCategoryId}`);
  },
};