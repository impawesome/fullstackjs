const getSum = (process.argv).reduce(function(sum, val, index) {
  if (index > 1) {
    sum += +val;
  }
  return sum;
}, 0);

//const result = (process.argv).filter(item => {return isNaN(item);} );
//result.push(getSum);
console.log(getSum);

