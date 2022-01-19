const { products } = require("./data");
const Product = require("./schemes/Product");

const addProduct = async (product) => {
  try {
    const newProduct = await Product.create(product);
    await newProduct.save();
  } catch (err) {
    console.log(err.message);
  }
};

// products.forEach((product) => {
//   addProduct(product);
// });
