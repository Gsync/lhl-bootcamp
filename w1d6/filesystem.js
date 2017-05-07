// var fs = require("fs");

// var filePath = "/tmp/test_sync.txt";
// var fileData = "Testing synchronous file write.\n";

// fs.writeFile(filePath, fileData, function(err) {
//   if (err) {
//     throw err;
//   }

// //fs.writeFileSync(filePath, fileData);
// console.log("successfully wrote to", filePath);

// });

//# Example 1 from NodeJs Tutorial

// var fs = require("fs");

// // Asynchronous read
// fs.readFile('input.txt', function (err, data) {
//    if (err) {
//       return console.error(err);
//    }
//    console.log("Asynchronous read: " + data.toString());
// });

// // Synchronous read
// var data = fs.readFileSync('input.txt');
// console.log("Synchronous read: " + data.toString());

// console.log("Program Ended");

/////# Example 2 from Nodejs Tutorial

var fs = require("fs");

// Asynchronous - Opening File
console.log("Going to open file!");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
  console.log("File opened successfully!");
});