const Net = require('net');

function sendRj(host, port, hex) {
    setTimeout(function() {
        //console.log('Starting ', num, hosts[num], port );
		let obj = 'client' + num;
		//console.log(obj);
		obj = new Net.Socket();
		obj.connect({ port: port, host: host } , () => {
			console.log(`TCP connection established with the screen ${host} `);
			setTimeout( ()=> {
				obj.write(hex,  () => {
					obj.destroy();	
				//console.log('wrote.')			
						});
				},200)			
		 });
		//console.log('Stopping ', num );
    }, 200);
};

//just for Test, to remove afterwards
// const paneloffToSend = [0xAA, 0xF9, 0xFE, 0x01, 0x00, 0xF8]
// var paneloffhex = new Uint8Array(paneloffToSend);
// let cmd = Buffer.from(paneloffToSend)


//sendCode(paneloffhex)

exports.sendRj = sendRj

