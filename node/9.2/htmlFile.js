const http = require("http");
const fs = require("fs").promises;

const host = "localhost";
const port = 8000;

const requestListener = function (req, res) {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Hello, World!</h1>");
      break;
    case "/users":
      fs.readFile(__dirname + "/users.json").then((contents) => {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(contents);
      });
      break;
    case "/html":
      fs.readFile(__dirname + "/index.html").then((contents) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(contents);
      });
      break;
    default:
      res.writeHead(404);
      res.end(JSON.stringify({ error: "Resource not found" }));
  }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
