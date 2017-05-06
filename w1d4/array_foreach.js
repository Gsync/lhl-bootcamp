function findWaldo(arr, found) {
  arr.forEach(function(name, index, arr) {
    if (name === "Waldo") {
      found(name, index);   // execute callback
    }
  });
}

function actionWhenFound(name, index) {
      console.log("found " + name + " at index: " + index);
  // console.log("Found him! at index");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
