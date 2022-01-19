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
  console.log(req.query.maxPrice);
  console.log(req.query.minPrice);
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

router.patch("/products/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["isActive", "details"];
  const isValid = updates.every((update) => allowedUpdates.includes(update));

  if (!isValid) {
    return res.status(404).send({ error: "Invalid updtes" });
  }

  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!product) {
      res.status(404).send();
    }
    res.send(product);
  } catch (e) {
    res.status(400).send({ error });
  }
});

router.delete("/products/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      res.status(404).send();
    }
    res.send(product);
  } catch (error) {
    res.status(500).send();
  }
});

router.delete("/products", async (req, res) => {
  try {
    const products = await Product.deleteMany({});
    if (!products) {
      res.status(404).send();
    }
    res.send(products);
  } catch (error) {
    res.status(500).send();
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
