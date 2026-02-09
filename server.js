// server.js
require("dotenv").config();
const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Nano Banana MCP Server is running!\n");
});

server.listen(PORT, () => {
  console.log(`Nano Banana MCP server running on port ${PORT}`);
});


