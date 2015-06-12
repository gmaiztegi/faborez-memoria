var http = require('http');
var connect = require('connect');

var app = connect()
  .use(connect.logger('dev'))
  .use(connect.query());

app.use(function(req, res, next) {
  if (req.url == '/hola') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('¡Hola, '+req.nombre+'!\n');
  } else {
    next();
  }
});

app.use(function(req, res, next) {
  if (req.url == '/acerca-de') {
    res.writeHead(200, { 'Content-Type": "text/plain' });
    res.end('Ejemplo de enrutamiento con Connect.js\n');
  } else {
    next();
  }
});

app.use(function(req, res) {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('¡Error 404!\n');
});

http.createServer(app).listen(3000);
