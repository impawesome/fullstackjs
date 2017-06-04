const net = require('net');
const strftime = require('strftime');
const port = process.argv[2];

const server = net.createServer(socket => {
  let data = strftime('%Y-%m-%d %H:%M');
  socket.write(data);
  socket.end('\n');
});

server.listen(port);
