// import core module into node.js. Our own file would need to start with ./ (relative) or / (absolute).
// const http = require('http'); -- no longer need this due to express.js

const express = require('express');

const app = express(); // create express application

app.use((req, res, next) => { // function will be executed for every incoming request
  console.log('In the middleware!');
  next(); // allows the request ot continue to the next middleware in line
});

app.use((req, res, next) => { // comes here from the previous function's next
  console.log('In another middleware!');
  res.send('<h1>Hello from Express!</h1>');
});


app.listen(3000); // calls http.createServer and calls listen on the created server
// const server = http.createServer(app);

// // listen starts a process where node.js won't automatically close our script, but it will listen for requests
// server.listen(3000);