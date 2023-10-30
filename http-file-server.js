const http = require('http');
const fs = require('fs');
// const pipe = require('pipe');
const port = process.argv[2];
const source = process.argv[3];

const server = http.createServer(function (request, response) {
  fs.createReadStream(source).pipe(response);
});

server.listen(port, function() {
  console.log('Server listening on http:/localhost:%s', port)
});