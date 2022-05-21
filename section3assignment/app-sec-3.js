const http = require('http'); // import http from core module
const routes = require('./routes-sec-3'); // import our routes file

const server = http.createServer(routes.handler);
server.listen(3000);