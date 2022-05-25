const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // create express application

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/favicon.ico', (req, res, next) => { // ignore favicon
  res.status(204).end();
});

app.use('/admin', adminRoutes); // only paths starting with admin will go into adminRoutes
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000); // calls http.createServer and calls listen on the created server