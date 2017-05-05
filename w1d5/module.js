// module.exports = {
//   PHI: 1.618,
//   explain: function() {
//     console.log("(X+Y) is to X as X is to Y: (X+Y)≈" + this.PHI);
//   }
// };

module.exports = (function() {

  var privateMethod = function (message) { console.log(message);};

      var publicMethod = function (text) {
        privateMethod(text);
      }


  return {publicMethod: publicMethod};

})();

// // Example of passing data into a private method
// // the private method will then `console.log()` 'Hello!'
// //Module.publicMethod('Hello!');
