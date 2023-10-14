const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer();

const server = http.createServer((req, res) => {
    // Define the target URL where JSON Server is running
    const target = 'http://localhost:3001';

    // Proxy the request to JSON Server
    proxy.web(req, res, { target });
});

server.listen(3000, () => {
    console.log('Proxy server is running on port 3000');
});
