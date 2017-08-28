var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);

  // if (request.method == "GET")
  // {
    if(parsedUrl.path == '/listings')
    {
      response.writeHead(200);
      response.end(listingData);
    }
    // else {
    //   response.writeHead(404);
    //   response.end('Bad gateway error');
    // }

  //}
  else {
    response.writeHead(404);
    response.end('Bad gateway error');
  }
}



fs.readFile('listings.json', (err, data) => {
  if (err) throw err;
  data = JSON.parse(data);
  data = JSON.stringify(data);
  listingData = data;
  //response.write(data);

});

var server = http.createServer(requestHandler);
server.listen(port, function() {
});
