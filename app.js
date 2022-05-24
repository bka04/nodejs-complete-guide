const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // create express application

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/favicon.ico', (req, res, next) => { // ignore favicon
  res.status(204).end();
});

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000); // calls http.createServer and calls listen on the created server