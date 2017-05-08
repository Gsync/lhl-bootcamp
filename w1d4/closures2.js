var wrapLog = function (callback, name) {
  /* your code here */
  return callback;
};

var sum = function (a,b) { return a + b; };
var logSum = wrapLog(sum, "sum");

console.log(logSum(5,3)); // sum(5,3) => 8
console.log(logSum(3,2)); // sum(3,2) => 5