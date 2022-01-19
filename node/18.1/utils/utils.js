const Product = require("../schemes/Product");

async function getAllProducts(activeStatus, minPrice, maxPrice) {
  if (activeStatus) {
    const products = await Product.find({ isActive: activeStatus });
    res.send(products);
  }
  if (minPrice && maxPrice) {
    const product = await Product.find({
      "details.price": { $gte: minPrice, $lt: maxPrice },
    });
    res.send(product);
  }

  return Product.find({});
}

async function getProduct(id) {
  console.log(id);
  return Product.findById(id);
}

module.exports = { getAllProducts, getProduct };
