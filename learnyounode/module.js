const mymodule = require('./module_filter');

function callback(err, list){
  if (err) return console.error(err);
  console.log(list.join('\n'));
}

mymodule(process.argv[2], process.argv[3], callback);
