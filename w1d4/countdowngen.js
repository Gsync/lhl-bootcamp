var countdownGenerator = function (x) {
  /* your code here */
  var str = [
          "T-minus 3...",
          "T-minus 2...",
          "T-minus 1...",
          "Blast Off!",
          "Rockets already gone, bub!",
          "Rockets already gone, bub!"
  ]
  i = x + 1;
  s = -1;

  return function() {
    i -= 1;
    s += 1;
    return console.log(str[s]);
  }
}

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!