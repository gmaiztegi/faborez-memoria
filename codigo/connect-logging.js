var http = require('http');
var connect = require('connect');

var app = connect()
  .use(connect.logger('dev'))
  .use(connect.query())
  .use(function(req, res){
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('¡Hola, '+req.nombre+'!\n');
  });

http.createServer(app).listen(3000);
