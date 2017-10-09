var https = require('https');

function getAndPrintHTML(getInput) {

   var requestOptions = getInput ;



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

var options = {
      host: 'sytantris.github.io',
      path: '/http-examples/step1.html'
}
 getAndPrintHTML (options);


