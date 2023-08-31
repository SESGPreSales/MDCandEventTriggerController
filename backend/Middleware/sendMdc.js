const Net = require('net');
const dgram = require('dgram');

function sendRj(host, port, hex) {
    setTimeout(function() {
        console.log('Starting ', host, port , hex);
		// let obj = host;
		//console.log(host);
		let obj = new Net.Socket();
		obj.connect({ port: port, host: host } , () => {
			console.log(`TCP connection established with the screen ${host} `);
			setTimeout( ()=> {
				obj.write(hex,  () => {
					obj.destroy();	
				  	console.log('wrote.')			
						});
				},200)			
		 });
    }, 200);
};

function sendUDP(host, port, command) {
	const message = new Buffer(command);
	const socket = dgram.createSocket('udp4');
	socket.send(message, 0, message.length, port, host)
	
}

exports.sendRj = sendRj
exports.sendUDP = sendUDP

