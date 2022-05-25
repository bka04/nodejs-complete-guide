//handles creation of products, which admin of the shop can do

const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => { // handles request
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => { // only for POST requests; there also is .get
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;