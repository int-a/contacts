var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/style', function(req, res) {
  res.sendFile(path.join(__dirname + '/styles.css'));
})

app.listen(8080);