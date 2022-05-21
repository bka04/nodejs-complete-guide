// import core module into node.js. Our own file would need to start with ./ (relative) or / (absolute).
const http = require('http');
const routes = require('./routes');

const server = http.createServer(routes.handler); // use function exported (and imported here) in routes.js

// listen starts a process where node.js won't automatically close our script, but it will listen for requests
server.listen(3000);