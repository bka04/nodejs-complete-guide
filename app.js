const express = require('express');

const app = express(); // create express application

app.use('/favicon.ico', (req, res, next) => { // ignore favicon
  res.status(204).end();
});

app.use('/', (req, res, next) => {
  console.log('This always runs!');
  next();
})

app.use('/add-product', (req, res, next) => { // handles request
  console.log('In add prouct middleware!');
  res.send('<h1>Add product</h1>');
});

app.use('/', (req, res, next) => { // handles request
  console.log('In another middleware!');
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000); // calls http.createServer and calls listen on the created server
