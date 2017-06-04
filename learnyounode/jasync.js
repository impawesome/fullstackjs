const http = require('http');

function callback(count){
  if (count > 4) return;
  url = process.argv[count];
  http.get(url, res => {
    res.setEncoding('utf8');
    let data = '';
    res.on('data', chunks => { data += chunks; });
    res.on('end', () => {
      console.log(data);
      callback(++count);
    });
  });
}

callback(2);

