/*var server = require('http').createServer();
var port = 5000;
//var bdComm = require('./app/databaseManager.js');
//var socketManager = require('./app/socketManager.js');

bdComm.connection();
socketManager.setServer(server);

server.listen(port);*/



var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = 3000;

var socketManager = require('./app/socketManager.js');

app.use(express.static(__dirname + '/www'));

app.get('/', function (req, res) {
  	res.sendFile(__dirname + '/www/index.html');
});

socketManager.connect(http);

http.listen(port, function(){
	console.log('Server listening to port 3000');
});


//note écrire serveur en français pour rendre plus dur à
//suivre ou anglais pour l'open source ?