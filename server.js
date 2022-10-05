const http = require('http');
const server = http.createServer(function(req, res) {
  res.writeHead(200, { 'content-Type': 'text/plain' });

  res. end("Know a little about Olúbùsọ́lá Odunuga")
});

//create a port
server.listen(3000, '127.0.0.1');

console.log("you are welcome to Olúbùsọ́lá world");