var getHTML = require('../step5/step5');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  var low = html.toUpperCase();
  console.log(low + '\n')

}

getHTML(requestOptions, printUpperCase);