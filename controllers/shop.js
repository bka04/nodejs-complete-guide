const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
    });
  });

  //res.sendFile(path.join(rootDir, 'views', 'shop.html')); // use path.join so it works on OS that use different slashes (eg linux vs windows)
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId; // routed with a colon
  console.log(prodId);
  res.redirect('/');
}

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Your Cart"
  });
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders"
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "checkout",
    pageTitle: "/checkout"
  });
};
