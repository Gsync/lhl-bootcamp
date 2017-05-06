// var myFn = function() {
//   console.log("I am function.");
// }

// myFn.someAttribute = 42;
// console.log(myFn.someAttribute);

// // function runner(anyf) {
// //   anyf();
// // }

// // runner(myFn);

// myFn();


//####push object into another object

// var chocolateBars = [
//                     {name: "Galaxy", manufacturer: "Mars"},
//                     ];
// var marsChocolate = [];
// for(var x=0; x < chocolateBars.length; x++){
//     if(chocolateBars[x].manufacturer == "Mars")
//         marsChocolate.push(chocolateBars[x]);
// }

// console.log(marsChocolate);

//### The second argument/parameter is expected to be a function
///### Find an string within an array in an argument

function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      var ind = i;
      found(ind);   // execute callback
    }
  }
}

function actionWhenFound(ind) {
  console.log("Found him! at index: " + ind);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
