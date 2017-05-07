var fs = require("fs");
var args = process.argv.slice(2);

console.log(args);
fs.readFile("args", function(err, data) {
  if (err) {
    return console.error(err);
  }
 console.log("Asynchronus Read: " + data.toString());
});


