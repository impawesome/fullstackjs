const fs = require('fs');
const path = require('path');

module.exports = function (filepath, ext, callback) {
  fs.readdir(filepath, function(err, list) {
    if (err) return callback(err);
    list = list.filter(function (file){
      if (path.extname(file) == `.${ext}`) return true;
    });
    return callback(null, list);
  });
}

