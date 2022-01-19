const Product = require("../schemes/Product");

async function getAllProducts(active, minPrice, maxPrice) {
  if (minPrice && maxPrice) {
    console.log("min", minPrice);
    console.log("max", maxPrice);
    const product = await Product.find({
      "details.price": { $gte: minPrice, $lt: maxPrice },
    });
    console.log(product);
    return product;
  }

  if (active) {
    const products = await Product.find({ isActive: active });
    return products;
  } else {
    const products = await Product.find({});
    return products;
  }
}

async function getProduct(id) {
  console.log(id);
  return Product.findById(id);
}

module.exports = { getAllProducts, getProduct };
