////###GET HTML HTTP MODULE EXERCISE

var https = require('https');
var data = '';

module.exports = function getHTML(options, callback) {


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


