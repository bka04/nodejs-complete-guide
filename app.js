const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express(); // create express application

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes); // only paths starting with admin will go into adminRoutes
app.use(shopRoutes);
app.use(errorController.get404);

app.listen(3000); // calls http.createServer and calls listen on the created server