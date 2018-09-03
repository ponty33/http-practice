var getHTML = require('../step5/step5');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {
  var low = html.toLowerCase();
  console.log(low + '\n')
}

getHTML(requestOptions, printLowerCase);