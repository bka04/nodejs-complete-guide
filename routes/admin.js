//handles creation of products, which admin of the shop can do

const express = require('express');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => { // handles request
  res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => { // only for POST requests; there also is .get
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;