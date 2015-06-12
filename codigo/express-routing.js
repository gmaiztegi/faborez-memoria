var http = require('http');
var express = require('express');

var app = express()
  .use(connect.logger('dev'))
  .use(connect.query());

app.all('*', function (req, res, next) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  next();
});

app.get('/hola/:nombre' function (req, res) {
  res.end('¡Hola, '+req.params.nombre+'!\n');
});

app.get('/acerca-de' function (req, res) {
  res.end('Ejemplo de enrutamiento con Connect.js\n');
});

app.get('/ehu', function (req, res) {
  res.redirect('http://www.ehu.es/');
});

app.get('*', function(req, res) {
  res.end('¡Error 404!\n');
});

http.createServer(app).listen(3000);
