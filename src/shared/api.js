import axios from 'axios';

const BASE_URL = 'https://hakjoonkim.shop/api';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization:
            'BEARER eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoanM3NzI4QGtha2FvLmNvbSIsImlhdCI6MTY2Mzc2MzQ2NywiZXhwIjoxNjYzOTQzNDY3fQ.vDFDgosyivg_7wBThaEfEeW3VXDi0jKJ8JwLZF56nV4',
        'refresh-token':
            'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjM3NjM0NjcsImV4cCI6MTY2NDk3MzA2N30.-n0fvznpFOxyFkSEtDYDTelmh0Y6CnzRsgg0Ytt4EA8',
    },
});

api.interceptors.request.use();

api.interceptors.response.use();

export default api;

// auth는 인증이 필요한 URL (로그인이 되어있어야 함.);

export const userAPI = {};

export const postAPI = {
    getPost: id => api.get(`/post/${id}`),
    deletePost: postId => api.delete(`/auth/post/${postId}`),
    editPost: (postId, request) => api.put(`/auth/post/${postId}`, request),
};

export const commentAPI = {
    postComment: (postId, request) =>
        api.post(`/auth/comment/${postId}`, request),
    putComment: (commentId, request) =>
        api.put(`/auth/comment/${commentId}`, request),
    deleteComment: commentId => api.delete(`/auth/comment/${commentId}`),
};
