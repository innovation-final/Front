import { createProxyMiddleware } from 'http-proxy-middleware';

module.exports = app => {
    app.use(
        '/ws',
        createProxyMiddleware({ target: 'http://localhost:8787', ws: true }),
    );
};
