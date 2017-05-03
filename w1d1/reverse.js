var args = process.argv.slice(2);

function reverseString(str) {
  var newString = "";
  for (var u = str.length -1; u >= 0; u--) {
    newString += str[u];
  }
  return newString;
}

function reverseArray(args) {
  var str = args[0];
  for (var i = 0; i < args.length; i++) {
      str = args[i];

      console.log(reverseString(str));
  }
}
reverseArray(args);