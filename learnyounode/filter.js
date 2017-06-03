const fs = require('fs');
const path = require('path');

function filterFiles (err, list) {
  if (err) return console.error(err);
  var files = list.filter(file => {
    return path.extname(file) == `.${process.argv[3]}`;
  });
  console.log(files.join('\n'));
}

fs.readdir(process.argv[2], filterFiles);
