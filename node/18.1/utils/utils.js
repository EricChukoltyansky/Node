const Product = require("../schemes/Product");

async function getAllProducts() {
  try {
    return Product.find({});
  } catch (e) {
    throw new Error(e.message);
  }
}

exports.module = { getAllProducts };
