import axios from 'axios';

const BASE_URL = 'https://hakjoonkim.shop/api';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(function (config) {
    const accessToken = localStorage.getItem('access-token');
    const refreshToken = localStorage.getItem('refresh-token');
    config.headers.authorization = `${accessToken}`;
    config.headers['refresh-token'] = `${refreshToken}`;
    return config;
});

api.interceptors.response.use();

export default api;

// auth는 인증이 필요한 URL (로그인이 되어있어야 함.);

export const userAPI = {};

export const postAPI = {
    postPost: request => api.post('/auth/post', request),
    getPost: id => api.get(`/post/${id}`),
    getPosts: () => api.get(`/post`),
    getOrderedLikePosts: () => api.get(`/post/likes`),
    getOrderedOldPosts: () => api.get(`/post/old`),
    deletePost: postId => api.delete(`/auth/post/${postId}`),
    putPost: (postId, request) => api.put(`/auth/post/${postId}`, request),
    likePost: (postId, request) =>
        api.post(`/auth/post/like/${postId}`, request),
    dislikePost: (postId, request) =>
        api.post(`/auth/post/dislike/${postId}`, request),
};

export const commentAPI = {
    postComment: (postId, request) =>
        api.post(`/auth/comment/${postId}`, request),
    putComment: (commentId, request) =>
        api.put(`/auth/comment/${commentId}`, request),
    deleteComment: commentId => api.delete(`/auth/comment/${commentId}`),
};
