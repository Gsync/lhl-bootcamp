///###HTTPS buffer EXERCISE

var https = require('https');
var data = '';


  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  }

function getAndPrintHTML(Options) {

  https.get(Options, function (response) {
    response.setEncoding('utf8');

    response.on('data', function(chunk) {
      for (i=0; i<data.length; i++) {
        data.push(chunk[i]);
      }
      console.log('Chunk Received. Length:', data.length);
    });


    response.on('data', function(data) {
      console.log(data);

    });
    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });

}

getAndPrintHTML(requestOptions);