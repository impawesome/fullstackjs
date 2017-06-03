var fs = require('fs');

var bf = fs.readFileSync('learnyounode3.txt');
var str = bf.toString();
console.log(str.split('\n').length);

