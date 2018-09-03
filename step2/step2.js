//Step 2 - Printing with Buffered Strings
var https = require('https');
function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  https.get(requestOptions, function (response) {
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

getAndPrintHTML ();

/*
This function should use a buffering technique to append 
each chunk of data to a variable as it is received, and 
then console.log the data once all of the data has been 
received.
Buffering in this context means the technique you've used
 before (usually in loops or conditionals) of creating an
  empty variable and adding data to it.
*/

