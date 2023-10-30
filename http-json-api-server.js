const http = require('http');
const url = require('url');
const port = process.argv[2];

function timer(time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime(time) {
  return { unixtime: time.getTime() }
}

const server = http.createServer(function (request, response) {
  let parseUrl = url.parse(request.url, true);
  let time = new Date(parseUrl.query.iso);
  let result;

  if(/^\/api\/parsetime/.test(request.url)) {
     result = timer(time);
  } else if (/^\/api\/unixtime/.test(request.url)) {
    result = unixtime(time);
  }
 
  if(result) {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(result));
  } else {
    response.writeHead(404);
    response.end();
  }
})

server.listen(port, function() {
  console.log(`Listening on http://localhost:${port}`)
});