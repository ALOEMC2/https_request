var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {

  response.setEncoding('utf8');
  response.on('data', function (data) {
    console.log('Chunk Received. Length:', data.length);
    console.log('[-- CHUNK OF LENGTH ' + data.length + ' --]');
    console.log(data.toString());
  });

  response.on('end', function() {
    console.log('Response stream complete.');
  });
});

}


 getAndPrintHTML ();
