import { axiosClient } from "./axios-client";

export const articleApi = {
  getArticles(searchParams = '') {
    const queryString = searchParams ? `?search=${encodeURIComponent(searchParams)}` : '';
    return axiosClient.get(`/article${queryString}`);
  },
  deleteArticle(articleId) {
    return axiosClient.delete(`/article/${articleId})`);
  },
  getArticleById(id) {
    return axiosClient.get(`/article/${id}`);
  },
  getArticleBySubCategory(subCategoryId) {
    return axiosClient.get(`/article/subCategory/${subCategoryId}`);
  },
  getArticleBySubCategoryNot(subCategoryId, articleId) {
    return axiosClient.post(`/article/subCategoryNot/${subCategoryId}`, {
      articleId: articleId,
    });
  },
  updateArticle(articleId, article) {
    return axiosClient.put(`/article/${articleId}`, { article: article });
  },
  getSubCategories(){
    return axiosClient.get(`/subcategory`);
  },
  getAuthors(){
    return axiosClient.get(`/author`)
  },
  createArticle(formData) {
    return axiosClient.post(`/article/create`, formData)
  },
  createAuthor(authorName) {
    return axiosClient.post(`/author/create`, { authorName });
  },
  handleAddSubCate(formData) {
    return axiosClient.post(`/subcategory/create`, { formData });
  },
  getCategories() {
    return axiosClient.get(`/category`);
  },
  deleteArticle(articleId) {
    return axiosClient.delete(`/article/${articleId}`);
  },
};
