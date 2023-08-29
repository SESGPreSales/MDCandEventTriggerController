# mdcsender

*Please note that this application is not intended for use in production environments and is only suitable for proof of concept purposes. This application is provided without warranty and support.*

The purpose of this application is to send MDC commands to a Samsung b2b Device. The application receives data from an external API to trigger the panel on or panel off function for one or more screens. MDC over RJ45 and/or Serial is used to achieve this.

In this example, an external power meter is used to monitor the current power consumption of a device, such as a lamp. If the power consumption falls below a configurable threshold, the screen panel is turned off. It is possible to use other sensors, such as PIR or ambient light sensors, instead of power consumption sensors.

This node.js application can be used in any environment where there is currently no middleware available to control the screen, such as a meeting room where the screen only needs to be turned on when someone is present.

This example uses specific hardware, but please note that any node.js compatible device and any API-providing sensor can be used instead.


Raspberry Pi 4

https://www.digitec.ch/de/s1/product/raspberry-pi-4-2g-model-b-armv8-entwicklungsboard-kit-11267870
![image](https://user-images.githubusercontent.com/50730110/198819268-f0a1cb19-1b82-447a-a4fe-9f02b5afb71c.png)

Shelly 2.5

https://www.digitec.ch/de/s1/product/shelly-wlan-schaltaktor-25-automatisierung-13171777
![image](https://user-images.githubusercontent.com/50730110/205022478-fbdd2a47-757b-495a-a174-0c507d28cf9c.png)

Shelly EM

https://www.digitec.ch/de/s1/product/shelly-em-wifi-energy-meter-energiemessgeraet-12721529
![image](https://user-images.githubusercontent.com/50730110/205104189-41b2bc88-fad7-4795-9296-f20800732953.png)


Shelly em3

https://www.digitec.ch/de/s1/product/shelly-3em-energiemessgeraet-13175233
![image](https://user-images.githubusercontent.com/50730110/198819286-d6e91a64-86b2-49b0-a8d5-9fdf895029f4.png)

Shelly movement sensor

https://www.digitec.ch/de/s1/product/shelly-motion-2-automatisierung-21702706
![image](https://user-images.githubusercontent.com/50730110/198819346-6683417b-d81a-4518-ae87-159ae9ef3ca7.png)
