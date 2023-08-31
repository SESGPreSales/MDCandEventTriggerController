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
	const message = new Buffer('due');
	const socket = dgram.createSocket('udp4');
	socket.send(message, 0, message.length, port, host).then(console.log("UDP Sent"))
	
}

//just for Test, to remove afterwards
// const paneloffToSend = [0xAA, 0xF9, 0xFE, 0x01, 0x00, 0xF8]
// var paneloffhex = new Uint8Array(paneloffToSend);
// let cmd = Buffer.from(paneloffToSend)


//sendCode(paneloffhex)

exports.sendRj = sendRj
exports.sendUDP = sendUDP

