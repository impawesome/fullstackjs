const http = require('http');
const urlp = require('url');
const strftime = require('strftime');

http.createServer((request, response) => {
  let headers = request.headers;
  let method = request.method;
  let url = urlp.parse(request.url, true);

  response.writeHead(200, {'Content-Type': 'application/json'});

  let date = new Date(url.query.iso);
  if (url.pathname.includes('parsetime')) {
    body = {
      hour: Number(strftime('%H', date)),
      minute: Number(strftime('%M', date)),
      second: Number(strftime('%S', date))
    }
  } else if (url.pathname.includes('unix')) {
    body = {
      unixtime: date.getTime()
    };
  }

  response.write(JSON.stringify(body));
  response.end();

}).listen(process.argv[2]);
