//const { SerialPort } = require('serialport')
//const axios = require('axios');
const { sendRj } = require('./Middleware/sendMdc');
const { sendUDP } = require('./Middleware/sendMdc');
require('./Middleware/sendMdc');
const express = require('express');
const app = express();


//Define the MDC Commands to send
const panelonToSend = [0xAA, 0xF9, 0xFE, 0x01, 0x00, 0xF8]
var panelonhex = new Uint8Array(panelonToSend);
const paneloffToSend = [0xAA, 0xF9, 0xFE, 0x01, 0x01, 0xF9]
var paneloffhex = new Uint8Array(paneloffToSend);
const channel1 = [0xAA, 0x1C, 0xFE, 0x03, 0x81, 0x00, 0x01, 0x9F]
var channel1hex = new Uint8Array(channel1);
const channel2 = [0xAA, 0x1C, 0xFE, 0x03, 0x81, 0x00, 0x02, 0xA0]
var channel2hex = new Uint8Array(channel2);
const channel3 = [0xAA, 0x1C, 0xFE, 0x03, 0x81, 0x00, 0x03, 0xA1]
var channel3hex = new Uint8Array(channel3);
const channel4 = [0xAA, 0x1C, 0xFE, 0x03, 0x81, 0x00, 0x04, 0xA2]
var channel4hex = new Uint8Array(channel4);

// Screensettings 
const hosts1 = process.env.HOST1 || '192.168.11.80'; //Define the Ip addresses of the screens to control
const hosts2 = process.env.HOST2 || '192.168.11.81'; //Define the Ip addresses of the screens to control
const commands = [panelonhex, channel1hex, channel2hex, channel3hex, channel4hex]

//ports
const port = 1515;
const portUDP = 5000;


function sendToScreenMDC(hosts, content) {   
            sendRj(hosts, port, content)  ;
            console.log('sendRJ sent')     
    };

function sendToScreenUDP(hosts, content) {   
        sendUDP(hosts1, portUDP, content)  ;
        console.log('sendRJ sent')     
};

// Api for screens
app.get('/:id/:content', function (req, res) {

    let content = req.params.content;
    let id = req.params.id;

    typeof content === 'number' ? sendToScreenMDC( hosts1, commands[req.params.content]) : sendToScreenUDP(hosts1, req.params.content);

    
        // if (req.params.id ==1 ) {
        //     sendToScreenMDC( hosts1, commands[req.params.content]);
        // }
        // else if  (req.params.id ==2 ) { sendUDP(hosts1, 5000, req.params.content)}
        
    res.status(200).send(console.log(`received id: ${req.params.id} content ${req.params.content}  `) )

    })

// Comment : Run < export NODE_OPTIONS="--max-old-space-size=2048" > before starting node app





// timer() runs the powercheck at given interval (can be changed in settings) 
// function timer (){ 
//     //readLux(); //Uncomment to have the brightness triggering On or Off
//     //readShelly(); //Uncomment to have the Power consumption measu
//     //readShellySwitch(); //Uncomment to have the Power consumption measured
//     //readVibration();    
//     //readMovement(); //Uncomment to have the movement triggering On or Off
//     timing = setTimeout(timer, interval)
// }
// timer();


app.listen(3000)
console.log("listening on port 3000")