const express = require("express");
const app = express();

const host = "localhost";
const port = 8000;

app.get("/numbers", (req, res) => {
  res.send("Success using GET");
});
app.post("/numbers", (req, res) => {
  res.send("Success using POST");
});
app.put("/numbers", (req, res) => {
  res.send("Success using PUT");
});
app.delete("/numbers", (req, res) => {
  res.send("Success using DELETE");
});

app.listen(port, host, () => {
  console.log(`LIstening on port: http://${host}:${port}`);
});
