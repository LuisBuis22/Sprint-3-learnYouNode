const net = require('net');
const port = process.argv[2];

function time() {
  const actualDate = new Date();
  const year = actualDate.getFullYear();
  const month = (actualDate.getMonth() + 1).toString().padStart(2, '0');
  const day = actualDate.getDate().toString().padStart(2, '0');
  const hour = actualDate.getHours().toString().padStart(2, '0');
  const minutes = actualDate.getMinutes().toString().padStart(2, '0');

  const data = `${year}-${month}-${day} ${hour}:${minutes}\n`;

  return data;
}

  const server = net.createServer(function(socket) {
    socket.end(time());
  });

server.listen(port);

console.log(time());