---
layout: docs
title: Kerlink iStation
description: How to set it up?
toc: true
---

## Setting up the Kerlink iStation
---------------------------------------

The Kerlink iStation is a carrier-grade LoRaWAN® outdoor gateway which receives radio transmissions from the Microshare® IoT devices in and around your building or campus. It uses an integrated cellular/mobile connection to send data securely to the Microshare® Smart Network. It is fully weatherproof and designed to be installed outdoors but can in some cases be installed internally.
Please make sure your selected physical install location will allow for a good cellular signal and is central to the IoT devices you will use in your facility. Contact Microshare® if you have any doubts on the best place to install the gateway. Bad placement will result in poor performance of the overall system.

### What is included

{% include image.html width=400 url="/assets/img/outdoor-station/iStation-included.png" description="LoRaWan Technology" %}

Microshare® delivers Kerlink iStations pre-configured, including an indoor PoE injector, external antenna and a 4G SIM card within the station.

The PoE supplied to you may differ from the picture and if you have a PoE network, you can also power the gateway directly from your own network without the need to use the PoE injector provided.

Outdoor PoE injectors are available upon request at additional cost.

### In the box

{% include image.html width=400 url="/assets/img/outdoor-station/Box-contents.png" description="LoRaWan Technology" %}

The gateway box contains the following:

Cable gland to protect the Ethernet cable coming from the PoE injector
a mount to be installed on a pole (preferred) or wall
the grounding cable to earth the gateway
the gateway itself


### What is not included and required

{% include image.html width=400 url="/assets/img/outdoor-station/iStation-required3.png" description="LoRaWan Technology" %}

You will need standard Cat5/Cat6 twisted pair Ethernet cabling to power the gateway.

The cable can be up to 100m long between the supplied PoE injector and the gateway. Please make sure you have appropriate length of cable, RJ45 connectors and a crimp tool prior to installation day.

For optimal radio performance, the gateway should be installed on a pole for which you will also need to have appropriate fixings, such as screws, bolts, clamps or solid zip ties.

## Prepare the PoE Cable to power the gateway
---------------------------------------

{% include image.html width=400 url="/assets/img/outdoor-station/Ethernet-cable-prep.png" description="LoRaWan Technology" %}


Pick the end of the cable which will be connected to the gateway outside and prepare the connector with the following steps:

1. slide the provided cable gland on the cable with the screws towards the end where the RJ45 connector will be.

2. strip the cable to expose the twisted pairs and align the wires in the correct order. We recommend using the T-568A standard as shown below:
{% include image.html width=400 url="/assets/img/outdoor-station/T-568A-standard-wiring.png" description="LoRaWan Technology" %}
3. Use the crimp tool to secure the wires into the RJ45 connector

## Feed the cable through to internal power supply
---------------------------------------

{% include image.html width=400 url="/assets/img/outdoor-station/Feeding-cable.png" description="LoRaWan Technology" %}

Find the appropriate location to feed the Ethernet cable through the wall towards the internal power supply, keeping the end with the cable gland and terminated RJ45 connector with enough loose cable to allow for the gateway to be installed.


## Connect the cable to the PoE injector
---------------------------------------

{% include image.html width=400 url="/assets/img/outdoor-station/Power-connector.png" description="LoRaWan Technology" %}

Internally run the Ethernet Cat5/Cat6 cable to an appropriate internal power socket and terminate the cable with a standard RJ45 connector and protector, using the same wire order as above (T-568A standard).

Connect the Ethernet cable to the PoE injector, making sure to use the correct jack labelled “OUT” or “Data/Power OUT” and not “DATA IN”.


## Verify the power connection
---------------------------------------

{% include image.html width=400 url="/assets/img/outdoor-station/Power-on.png" description="LoRaWan Technology" %}


Power on the internal PoE injector and plug the outside Ethernet RJ45 connector into the gateway on the left handside.

Unscrew the dust protector on the right hand side and verify that the Power LED is turned on and greeen.

Once complete, screw the dust cover on the right hand side back on and secure the Ethernet cable with the gland protector on the left hand side.

You should unplug the PoE injector for safety while you’re installing the gateway in place.


## Fix the Gateway Mount in place
---------------------------------------

{% include image.html width=400 url="/assets/img/outdoor-station/Mount-install.png" description="LoRaWan Technology" %}


The mounting bracket must be fixed securely to either a pole (recommended so the gateway will be higher and have less interferences) or to a wall using appropriate strapping, bolts or screws (not provided).

Make sure the four mounting “triangles” are pointing downwards and the securing screw for the gateway is at the bottom.

## Install the gateway on the mount
---------------------------------------

{% include image.html width=400 url="/assets/img/outdoor-station/Install-on-mount.png" description="LoRaWan Technology" %}


The gateway will slot directly on the mount fixed in the previous step. The following steps are critical to ensure a safe and alsting connection:

connect the ground cable both to the back of the gateway as well as on the mount
connect the RJ45 Ethernet into the gateway and secure using the cable gland, ensuring it is water-tight.
Secure the gateway on the mount by using the locking screw at the bottom of the mount
screw the external antenna either directly or via a coaxial N-type cable at the top of the gateway after removing the silver button at the top.

## Secure the installation
---------------------------------------

{% include image.html width=400 url="/assets/img/outdoor-station/iStation_installed.png" description="LoRaWan Technology" %}

Installed Kerlink iStation on a pole
Make sure to secure the pole using the appropriate fixing, .e.g. lashing kit, brackets, etc.

Once all secure, turn on the power of the PoE injector. You can now start deploying Microshare® sensors in your building or campus.

You’re all done! Please send an email to support@microshare.io to indicate the Gateway is up and running so we can confirm at our end.