const mongoose = require("mongoose");
const Product = require("./schemes/Product");
const { products } = require("./data/data");
const express = require("express");
const app = express();
app.use("/", router);
const router = new express.Router();
const path = require("path");
require("dotenv").config();

const user = process.env.MONGO_URI;
// console.log(user);

mongoose.connect("mongodb://127.0.0.1:27017/products");

const addProduct = async (product) => {
  try {
    const newProduct = await Product.create(product);
    await newProduct.save();
  } catch (err) {
    console.log(err.message);
  }
};

router.get("/products", async (req, res) => {
  try {
    console.log("hello");
    res.status(200).send(await Product.find({}));
  } catch (e) {
    throw new Error(e);
  }
});

// products.forEach((product) => {
//   addProduct(product);
// });

const PORT = 3000;
const host = "localhost";

app.listen(PORT, host, () => {
  console.log(`Listening on port: http://${host}:${PORT}`);
});
