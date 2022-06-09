const fs = require('fs');
const path = require('path');

const p = path.join(rootDir, "data", "cart.json");

module.exports = class Cart {

  static addProduct(id) {
    // Fetch the previous cart
    fs.readFile(p, (err, fileContent) => {
      let cart = {products: [], totalPrice: 0};
      if (!err) {
        cart = JSON.parse(fileContent);
      }
      // Analyze the cart => find existing product
      const existingProduct = cart.products.find(prod => prod.id === id);
      let updatedProduct;
      if (existingProduct) {
        updatedProduct = {...existingProduct};
        updatedProduct.qty = updatedProduct + 1;
      } else {
        updatedProduct = { id: id, qty: 1 };
      }
      
    })

    
    // Add new product/increase the quantity
  }


}