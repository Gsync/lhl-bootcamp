var https = require("https");
console.log("i did it!");

var options = {
  host: 'www.example.org',
  path: '/'
};

//called by https when the request is made

var callback = function() {
  console.log("In response handler callback!");
}

console.log("I am about to make the request!");

https.request(options, callback).end();

console.log("I have made the request!");