

var chatManager = require('./chatManager.js');
var io = require('socket.io');


module.exports.connect = function(http){
	io = io(http);
	io.on('connection', function(socket){
		console.log("socket connected");

		chatManager.createCanal(socket);

		disconnect(socket);	
	});
};



var disconnect = function(socket){
	socket.on('disconnect', function(){
	    console.log('user disconnected');
	});
}