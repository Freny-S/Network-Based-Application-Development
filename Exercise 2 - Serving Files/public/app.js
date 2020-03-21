var fs = require('fs');


fs.readFile('./views/viewTextInBrowser.txt', 'utf8', function(err, data){
  console.log(data);
});

var http = require('http');

var server = http.createServer(function(req, res){
  fs.readFile('./views/viewTextInBrowser.txt', 'utf8', function(err, data){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(data);
  });

});

server.listen(8080, '127.0.0.1');
console.log('Now listening to port 8080');
