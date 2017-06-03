var fs = require('fs');

function finishReading(err, data) {
  if (err) return console.error(err);
  console.log(data.toString().split('\n').length - 1);
}

fs.readFile(process.argv[2], finishReading);
