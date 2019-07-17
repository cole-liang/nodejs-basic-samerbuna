const http = require("http");

const serverResponse = (req, res) => {
  res.end("Hello World");
};

const server = http.createServer();
server.on("request", serverResponse);

server.listen(4242, () => {
  console.log("Server is running...");
});
