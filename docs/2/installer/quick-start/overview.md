---
layout: docs
title: Overview
description: Installation Overview
toc: true
---

---------------------------------------

##### SUMMARY : 

1. [What needs to be installed?](./#1-part-A)
2. [Requirements](./#2-part-2)
3. [Steps](./#3-part-3)

---------------------------------------




## 1. What needs to be installed?
---------------------------------------

The purpose of an installation is to allow the customer to use the data from the installed sensors as quickly as possible. 

But for this, it is necessary to quickly understand what to install and why. 

To start our sensors use LoRaWan technology. To better understand this technology you can read more information here: 

###### > [LoRaWan Technology](../../../technical/lorawan/lorawan-technology)

This technology works like this: 
The sensor sends data via "Lora" to the gateway or to a public network. This way, the gateway or the public network LoRaWan are connected to the Internet via WIFI, Ethernet or 3G/4G/5G. 

Then the data will be processed and used once in the cloud.

Here is a summary diagram: 


{% include image.html url="/assets/img/lorawan-network.png" description="LoRaWan Network" %}

Image from [reasearchgate.net](https://www.researchgate.net/publication/323620460_IoT-based_wireless_seismic_quality_control/figures?lo=1)


During the process of installation, it is crucial that you confirm that both the sensors and the gateway(s) are properly installed and transmitting information.



## 2. Requirements
---------------------------------------

To ensure proper installation it is best to check a few points:

Before installation you should...

- have prepared the necessary quantity of sensors and gateways.
- Know the location of the sensors and gateways in advance.
- Have downloaded the [Deploy-M application](../../deploy-m/download-the-app).
- Learned how to use [Deploy-M](../../deploy-m/app-guide).
- Have prepared the [prerequisites](../../deploy-m/app-guide/#1-requirements) for using Deploy-M.
- Have all the necessary fixations for sensors and gateways (3M Stickers, Tabs Brackets, Velcro stickers ...).
- Have all the necessary tools for installation.

## 3. Steps
---------------------------------------

To do this we will follow the following steps: 

###### > First install the [Gateways](../../lorawan/gateway-installation).

###### > Install the [Devices](../../lorawan/device-declaration).

###### > Use [Deploy-M](../../deploy-m/app-guide) for a more efficient installation.

###### > Finally, [Validate](../../quick-start/validation-of-a-succesfull-installation) that the installation was successful.

If you have more question, you can have a look at our [FAQ about installations](../fag-about-installations) page.