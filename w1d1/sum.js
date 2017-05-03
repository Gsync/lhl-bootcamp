//var args = process.argv.slice(2);

//console.log(parseInt(args[0]) + (parseInt(args[1])));

  var sum = 0;
  for (var i = 2; i < process.argv.length; i++) {
    var currentArg = process.argv[i];
    var currentArgAsNumber = +currentArg;
    if (isNaN(currentArgAsNumber) {

    sum += currentArgAsNumber;
    }
  }
console.log(sum);