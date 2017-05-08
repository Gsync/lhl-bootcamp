////###GET HTML HTTP REQUEST EXERCISE

var https = require('https');
var data = '';

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  }

function getHTML(options, callback) {


  https.get(options, function (response) {
    response.setEncoding('utf8');

    response.on('data', function(chunk) {
        data += chunk;
      console.log('Chunk Received. Length:', data.length);
    });

          // response.on('data', function(data) {
          //   console.log(data);

          // });
    response.on('end', function() {
      console.log('Response stream complete.');
    return callback(data);
    });

  });

}

function PrintHTML(data) {
  console.log(data);
}

getHTML(requestOptions, PrintHTML);