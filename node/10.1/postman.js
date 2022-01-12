const express = require("express");
const app = express();
const hbs = require("hbs");

const host = "localhost";
const port = 8000;

let data = [1, 2, 3, 4, 5, 6];

let demo = {
  name: "Rohan",
  age: 26,
};

let projects = {
  name: "Rahul",
  skills: ["Data Mining", "BlockChain Dev", "node.js"],
};

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("dynamic", { demo: demo });
});

// app.get("/projects", (req, res) => {
//   res.render("projects", { project: projects });
// });

app.get("/numbers", (req, res) => {
  res.sendStatus(200).json(data);
});

app.post("/numbers/:newItem", (req, res) => {
  const { newItem } = req.params;
  let found = data.find((item) => item === +newItem);
  console.log(found);
  if (found) {
    res.sendStatus(400).send("Number already exists");
  } else {
    req.body = +newItem;
    data.push(req.body);
    res.sendStatus(201).json(data);
  }
});

app.delete("/numbers/:num", (req, res) => {
  const { num } = req.params;
  let found = data.find((item) => item === +num);
  console.log(found);
  if (found) {
    let targetIndex = data.indexOf(found);
    data.splice(targetIndex, 1);
    console.log(data);
    res.json(data);
  } else {
    res.sendStatus(400).send("No such number");
  }
});

app.put("/numbers/:num", (req, res) => {
  const { num } = req.params;
  const { newNum } = req.query;
  const itemIndex = data.findIndex((item) => item === +num);
  if (itemIndex === -1) {
    res.sendStatus(400).send("No such number");
  } else {
    data[itemIndex] = +newNum;
    res.json(data);
  }
});

app.get("*", (req, res) =>
  res
    .sendStatus(404)
    .json({ message: "Route does not exist", app: "Express-Routes" })
);

app.listen(port, host, () => {
  console.log(`LIstening on port: http://${host}:${port}`);
});
