import axios from 'axios';

const BASE_URL = 'http://52.78.70.12/api';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use();

api.interceptors.response.use();

export default api;

// auth는 인증이 필요한 URL (로그인이 되어있어야 함.);

export const userAPI = {};

export const postAPI = {
    getPost: id => api.get(`/post/${id}`),
};

export const commentAPI = {};
