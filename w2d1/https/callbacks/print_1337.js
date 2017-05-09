var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};
function print1337 (html) {
  var leetspeak = {
  a     : '4',
  e     : '3',
  l     : '1',
  o     : '0',
  s     : '5',
  t     : '7',
  'ck'  : 'x',
  'er'  : '0r',
  'you' :'j00'
  };

  Object.keys(leetspeak).forEach(function(key) {
    var regexp = new RegExp(key, 'gi');
    html = html.replace(regexp, leetspeak[key]);


  });
console.log(html);
}
getHTML(requestOptions, print1337);
