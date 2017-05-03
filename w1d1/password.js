var args = process.argv.slice(2);


function obfuscate(args) {
 var char = "";
  for (var i =0; i < args.length; i++) {

    char = args[i].replace(/a/g, 4).replace(/o/g, 0).replace(/e/g, 3).replace(/l/g, 1);

  }
  return char;
}

console.log(obfuscate(args));



/* in the web browser submit
function obfuscate(args) {
 var char = "";

    char = args.replace(/a/g, 4).replace(/o/g, 0).replace(/e/g, 3).replace(/l/g, 1);

  }
  return char;
}*/