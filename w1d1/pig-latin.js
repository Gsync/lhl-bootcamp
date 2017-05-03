var args = process.argv.slice(2);

function moveString(str) {
  var newString = "";
  newString = str.substring(1) + str[0] + "ay";
  return newString;
      //console.log('moveSTring return', newString);
}

function pigLatin(args) {
  var str = args[0];
  for (var i = 0; i < args.length; i++) {
    str = args[i];
    var newString = moveString(str);
  console.log(newString);
  }
}
pigLatin(args);
