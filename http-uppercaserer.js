const http = require('http');
const port = process.argv[2];
const map = require('through2-map');


const server = http.createServer(function (request, response) {
  if(request.method !== 'POST') {
    response.writeHead(405, {'Content-Type': 'text/plain'});
    response.end('Send a POST request.\n');
  } else {
    request.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(response);
  }
  });
  
server.listen(port, function(){
    console.log(`Listening on http://localhost:${port}`);
  });
