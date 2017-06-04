const http = require('http');
const map = require('through2-map');

const server = http.createServer((request, response) => {
  let method = request.method;
  if (method != 'POST') return;
  let rawData = '';
    request.on('data', chunk => {
    rawData += chunk;
  }).on('end', () => {
    response.end(rawData.toUpperCase());
  });
});

server.listen(process.argv[2]);
