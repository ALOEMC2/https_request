var https = require('https');

function getHTML (options, callback) {
  var buffer="";
  https.get(options, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
      console.log('Chunk Received. Length:', data.length);
      console.log('[-- CHUNK OF LENGTH ' + data.length + ' --]');
      buffer += data;

    });

    response.on('end', function() {
      console.log('Response stream complete.');
      callback(buffer)
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML)