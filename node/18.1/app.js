const mongoose = require("mongoose");
const express = require("express");
const { getAllProducts, getProduct } = require("./utils/utils");
const app = express();

const Product = require("./schemes/Product");
const router = express.Router();
require("dotenv").config();

// Router

router.get("/products", async (req, res) => {
  const activeStatus = req.query.activeStatus;
  const minPrice = req.query.minPrice;
  const maxPrice = req.query.maxPrice;
  try {
    res
      .status(200)
      .send(await getAllProducts(activeStatus, minPrice, maxPrice));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

router.get("/products/:id", async (req, res) => {
  console.log("req params id", req.params.id);
  try {
    res.status(200).send(await getProduct(req.params.id));
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

router.route("/products").post(async (req, res) => {
  console.log("hi");
  console.log(req.query);
  const product = req.body;
  console.log(req.body);
  try {
    await Product.create(product);
    res.status(201).send(product);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});

// Init Express
const PORT = 3000;
const host = "localhost";
app.use(express.json());
app.use("/", router);

app.listen(PORT, host, () => {
  console.log(`Listening on port: http://${host}:${PORT}`);
});

// Init Mongo connection
mongoose.connect("mongodb://127.0.0.1:27017/products");
