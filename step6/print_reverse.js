var getHTML = require('../step5/step5');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse (html) {

  var rev = html.split().reverse();
  console.log(rev + '\n')
}

getHTML(requestOptions, printReverse);