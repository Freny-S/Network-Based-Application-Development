var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  if(req.url === '/about' || req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream('../views/about.html').pipe(res);
  }else if (req.url === '/contact') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream('../views/contact.html').pipe(res);
  }else{
    res.writeHead(404, {'Content-Type': 'text/html'});
    fs.createReadStream('../views/404.html').pipe(res);
  }

});

server.listen(8080, '127.0.0.1');
console.log('yo dawgs, now listening on port 8080');
