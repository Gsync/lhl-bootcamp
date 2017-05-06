// If you recall Pythagorean Theorem (x^2 + y^2 = z^2), then this should be a breeze.

// Complete the following code for the assertion to pass. The result should be an array of numbers corresponding to the x-y pairs provided in the input array (ie: calculate z given x and y).

var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
// var result = input.forEach(function(element, index, input) {
//   var x = element.x;
//   var y = element.y;
//     var z = 0;
//   var pythagor = function(x,y) {
//     z = Math.sqrt(x*x + y*y);
//     return z;
//   //pythagor(x,y);
//   console.log(pythagor);
//   }
// });
// console.log(pythagor);


//console.log(pythagor(input[0].x,input[0].y));

// console.log(result[0] === 5);
// console.log(result[1] === 13);
// console.log(result[2] === 17);

// function pythagor(x, y){
//    console.log(x);
//    console.log(y);
//    var z = Math.sqrt((x*x) + (y*y));
//    //console.log("Z",z);
//    return z;
// }

// console.log(input[0].x, input[0].y);
// console.log(pythagor((input[0].x),(input[0].y)));

function pythagor() {
   var result = [];
   input.forEach(function(element, index, input) {
       var x = element.x;
       var y = element.y;
       var z = Math.sqrt((x*x) + (y*y));
       result.push(z);
   });
   return result;
}


console.log(pythagor());

