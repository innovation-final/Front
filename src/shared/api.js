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
    // config.headers['refresh-token'] = `${refreshToken}`;
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
                        const newAccessToken = res.headers.authorization;
                        const newRefreshToken = res.headers['refresh-token'];

                        originalRequest.headers.authorization = newAccessToken;
                        originalRequest.headers['refresh-token'] =
                            newRefreshToken;

                        localStorage.setItem('access-token', newAccessToken);
                        localStorage.setItem('refresh-token', newRefreshToken);

                        return axios(originalRequest);
                    }
                    return Promise.reject(error);
                })
                .catch(err => {
                    console.log('에러!!', err);
                    if (
                        err.response.data.error.code === 'REFRESH_TOKEN_EXPIRED'
                    ) {
                        console.log(err.response.data.error.code);
                        localStorage.removeItem('access-token');
                        localStorage.removeItem('refresh-token');
                        window.location.href = '../login';
                    }
                });
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
    getPosts: page => api.get(`/post?page=${page}`),
    getOrderedLikePosts: page => api.get(`/post?page=${page}&sort=likes,DESC`),
    getOrderedOldPosts: page =>
        api.get(`/post?page=${page}&sort=createdAt,ASC`),
    getLatestPostsTopFive: () => api.get(`/post/main`),
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
export const mypageAPI = {
    getMypage: () => api.get(`/auth/mypage`),
    patchMypage: request =>
        api.put(`/auth/mypage`, request, {
            headers: {
                'Content-Type': `multipart/form-data`,
            },
        }),
    deleteMypage: () => api.delete(`/auth/mypage`),
};

export const stockAPI = {
    getStockDetail: stockCode => api.get(`/stock/${stockCode}`),
    getStocks: criteria => api.get(`/stock/rank/${criteria}`),
    getStockTable: stockCode => api.get(`/stock/table/${stockCode}`),
    getStockArticle: stockCode => api.get(`/stock/news/${stockCode}`),
    getStockSearch: () => api.get(`/stock/list `),
    postLikeStock: stockCode => api.post(`/auth/stock/like/${stockCode}`),
    deleteLikeStock: stockCode => api.delete(`/auth/stock/like/${stockCode}`),
};
