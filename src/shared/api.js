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
    if (!accessToken || !refreshToken) {
        window.location.href('/login');
    }

    config.headers.authorization = `${accessToken}`;
    //config.headers['refresh-token'] = `${refreshToken}`;
    return config;
});

api.interceptors.response.use(
    function (response) {
        return response;
    },
    async function (error) {
        const baseURL = 'https://hakjoonkim.shop/api';
        const { config, response } = error;
        const originalRequest = config;

        if (response && response.data.error.code === 'ACCESS_TOKEN_EXPIRED') {
            const refreshToken = localStorage.getItem('refresh-token');
            const header = {};

            header['refresh-token'] = refreshToken;

            await axios
                .post(`${baseURL}/auth/reissue`, null, {
                    headers: header,
                })
                .then(res => {
                    if (res.data.data === 'Reissue Success') {
                        const accessToken = res.headers.authorization;
                        const refreshToken = res.headers['refresh-token'];

                        originalRequest.headers.authorization = accessToken;
                        originalRequest.headers['refresh-token'] = refreshToken;

                        localStorage.setItem('access-token', accessToken);
                        localStorage.setItem('refresh-token', refreshToken);

                        return axios(originalRequest);
                    } else if (res.data.data === 'Refresh Token Expired') {
                        localStorage.removeItem('access-token');
                        localStorage.removeItem('refresh-token');
                        window.location.href = '/login';
                    }
                })
                .catch(err => console.log('에러', err));
        }

        return Promise.reject(error);
    },
);

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
