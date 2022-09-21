import axios from 'axios';

const BASE_URL = 'https://hakjoonkim.shop/api';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Authorization:
            'BEARER eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzb29uZ2VyMzMwMEBnbWFpbC5jb20iLCJpYXQiOjE2NjM3NjEwMjksImV4cCI6MTY2Mzk0MTAyOX0.D9dt_f514SrA3rZd6gkKigSL8oWYzp4PO3EykxDGmfQ',
        'refresh-token':
            'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NjM3NjEwMjksImV4cCI6MTY2NDk3MDYyOX0.J9L0j9A1bolN0J9b2gkzs8CnFK8FEALA-yT-Jv7tUHs',
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
