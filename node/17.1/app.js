const mongoose = require("mongoose");
const Product = require("./schemes/Product");
const { products } = require("./data/data");


const path = require("path");
require("dotenv").config();

const user = process.env.MONGO_URI;
console.log(user);

mongoose.connect("mongodb://127.0.0.1:27017/products");

const addProduct = async (product) => {
  try {
    const newProduct = await Product.create(product);
    await newProduct.save();
  } catch (err) {
    console.log(err.message);
  }
};

products.forEach((product) => {
  addProduct(product);
});
