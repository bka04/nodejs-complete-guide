const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = []; //can receive new elements even if constant

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => { // handles request
  //res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => { // only for POST requests; there also is .get
  products.push({title: req.body.title});
  res.redirect('/');
});

exports.routes = router;
exports.products = products;