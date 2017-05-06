// Implement your own version of the built-in array map function.
// Yours will take in two arguments. The first will be an array to map and the second will be a callback function. The function will return a new array based on the results of the callback function.

var words = ["ground", "control", "to", "major", "tom"];

function map(word, wlength) {
  var newWord = [];
  for (i=0; i<word.length; i++) {
    newWord.push(word[i].length);
  }
  return newWord;
  console.log(newWord);
}
var wordLengthArr = map(words, function(word) {

  return word.length;
});
console.log(wordLengthArr);


// ## following are the examples from MDN
// var kvArray = [{name: "Bob", age: 10},
//                {name: "Alex", age: 20},
//                {name: "James", age: 30}];

// var reformattedArray = kvArray.map(function(obj) {
//    var newObj = {};
//    newObj[obj.name] = obj.age;
//    return newObj;
// });
// console.log(reformattedArray);

// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

// kvArray is still:
// [{Bob, 10},
//  {Alex, 20},
//  {James, 30}]

