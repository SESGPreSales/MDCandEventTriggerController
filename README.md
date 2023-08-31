# HTML/JS -> TCP / UDP 

this simple tool can be used send MDC(tcp) or Event Trigger(udp) commands to a single or group of devices from a webpage (eg. using a Touchscreen).

> **WARNING**
Provided as is - Please audit the code before using it.
No Support

## Prerequisite:

    - MagicINFO Server (reachable from the screen)
    - Schedule with 2(+) channels to switch for MDC content controll
    - Content with Event Trigger Setup. 
    - Samsung devices connected to the MagicINFO Server

### About the sent commands
Commands are set to send 
- for MDC: 
    - Sends HEX to change the Schedule Channel to 1 - 10 
- for UDP(Event trigger);
    - Sends ASCI command "uno" "due" .. up to "tredici" to port 5000 

## How to Start
clone this repo to your local workspace



