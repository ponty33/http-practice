var https = require('https');

function getAndPrintHTML (options) {

  /* Add your code here */
  https.get(options, function (response) {
    var buffer;
    response.on('data', function (data) {
      buffer = data;
      console.log(buffer + '\n');
    });
    
    response.on('end', function () {
      console.log('Complete');
    });
  })


}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


getAndPrintHTML (requestOptions)