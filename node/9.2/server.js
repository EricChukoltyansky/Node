let http = require("http");
let fs = require("fs");
let path = require("path");

const host = "localhost";
const port = 8000;

const requestListener = (req, res) => {
  res.writeHead(200);
  res.end("My first server");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is up and running on http://${host}:${port}`);
});
