const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // create express application

app.use(bodyParser.urlencoded({extended: false}));

app.use('/favicon.ico', (req, res, next) => { // ignore favicon
  res.status(204).end();
});

app.use('/', (req, res, next) => {
  next();
});

app.use('/add-product', (req, res, next) => { // handles request
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.use('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => { // handles request
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000); // calls http.createServer and calls listen on the created server
