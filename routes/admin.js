//handles creation of products, which admin of the shop can do

const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => { // handles request
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

router.post('/product', (req, res, next) => { // only for POST requests; there also is .get
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;