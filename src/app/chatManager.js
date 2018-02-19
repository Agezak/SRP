

module.exports.createCanal = function(socket){
	socket.on('message', function(msg){
		console.log("message: ", msg);
	});
};