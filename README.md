# HTML/JS -> TCP / UDP 

this simple tool can be used send MDC(tcp) or Event Trigger(udp) commands to a single or group of devices from a webpage (eg. using a Touchscreen).

> **WARNING**
Provided as is - Please audit the code before using it.
No Support

## Prerequisite:

    - Docker (compose) installed on a device in the same network
    - MagicINFO Server (reachable from the screen)
    - Schedule with 2(+) channels to switch for MDC content controll
    - Content with Event Trigger Setup. 
    - Samsung devices connected to the MagicINFO Server

### About the sent commands
Commands are set to send: 
- for MDC: 
    - Sends HEX to change the Schedule Channel to 1 - 10 
- for UDP(Event trigger);
    - Sends ASCI command "uno" "due" .. up to "tredici" to port 5000 

## How to Start
clone this repo to your local workspace
    git clone https://github.com/TBEMSESG/MDCandEventTriggerController.git


## To modify
### docker-compose.yml
First define the IP address of the screens to control. Note that in the example we have two different frontends, exposed to port 8081 and 8082, each of them controlls a different set of screens (HOST1 or HOST2).
> environment:
> 
> HOST1: "<IP Screen 1>"  #defines displays to control. Comma separated list
> 
> HOST2: "<IP Screen 2>"  #defines displays to control. Comma separated list 

In case you just need one Touchscreen to controll one or a group of screen, please use HOST1 and remove the frontend2 part of the docker-compose file
> frontend2:
> 
> build: frontend/.
> 
> ports:
> 
>  - "8082:80"
> 

### Index.html
Add or remove items (buttons) (comment out if not needed)

### Style.css
Change images (to be placed in /img folder) (comment out if not needed)
Feel free to change the size of the buttons

### listeners.js
The following variables have to be defined: 
    // define if UDP or MDC (tcp) is used
    const mode = 'UDP' || 'UDP'; // "MDC" or "UDP" UDP is used to send Event triggers, MDC sends TCP commands

## To Start
    docker-compose up -d

then point your touchscreen to the IP address of your docker host on port 8081 (or 8082)
