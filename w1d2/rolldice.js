
var args = process.argv.slice(2);

var num = 0;

function rollDice(args) {
  var dicNum = 0;
  for (var i = 0; i < args; i++) {
    diceNum = Math.floor((Math.random()* 6) + 1);
    console.log(diceNum);
  }
}
rollDice(args);