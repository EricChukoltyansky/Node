const express = require("express");
const app = express();

const host = "localhost";
const port = 8000;

let data = [1, 2, 3, 4, 5, 6];

app.get("/numbers", (req, res) => {
  res.status(200).json(data);
});

app.post("/numbers/:newItem", (req, res) => {
  const { newItem } = req.params;
  req.body = +newItem;
  data.push(req.body);
  res.status(201).json(data);
});

app.delete("/numbers/:num", (req, res) => {
  const { num } = req.params;
  let found = data.find((item) => item === +num);
  console.log(found);
  if (found) {
    let targetIndex = data.indexOf(found);
    data.splice(targetIndex, 1);
  }
  console.log(data);
  res.json(data);
});

app.put("/numbers/:num", (req, res) => {
  const { num } = req.params;
  const { newNum } = req.query;
  const itemIndex = data.findIndex((item) => item === +num);
  data[itemIndex] = +newNum;
  res.json(data);
});
app.get("*", (req, res) =>
  res
    .status(404)
    .json({ message: "Route does not exist", app: "Express-Routes" })
);

app.listen(port, host, () => {
  console.log(`LIstening on port: http://${host}:${port}`);
});
