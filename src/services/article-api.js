import { axiosClient } from "./axios-client";

export const articleApi = {
  getArticles() {
    return axiosClient.get(`/article`);
  },
  createArticles(data) {
    return axiosClient.post(`/article/create`, data);
  },
  deleteArticle(id) {
    return axiosClient.delete(`/article/${id}`);
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

  getCommentsByArticleId: (id) => axiosClient.get(`/article/comments/${id}`),
  createCommentByArticleId: (id, data) =>
    axiosClient.post(`/article/comments/${id}`, data),
  likeArticle: (id, userId) =>
    axiosClient.post(`/article/like/${id}`, { userId }),
  adminLikeComment: (id, commentId) =>
    axiosClient.post(`/article/comments/admin/like/${commentId}`, { id }),
  editComment: (commentId, comment) =>
    axiosClient.put(`/article/comments/${commentId}`, comment),
  deleteComment: (commentId) =>
    axiosClient.delete(`/article/comments/${commentId}`),
};
