---
layout: docs
title: Validation of a successfull installation
description: How do I know if I installed my devices properly?
toc: true
---

---------------------------------------



## 1. Overview
---------------------------------------

To confirm a successful installation, it is sufficient to validate the operation of the gateway, then the sensors, and finally the reception of the data on Microshare®. 

Once these three steps have been validated, the creation of the dashboard and the access to your data will be done easily and quickly. 

**<!> These steps are dependent <!>**

It is therefore necessary to validate these steps during the instruction one after the other. But checking that the data is indeed on Microshare® is enough to validate the complete installation. 


### Prerequisites

Take a moment to to check that you have properly folllowed the steps requested in the installation tutorial.  

## 2. Microshare® Validation
---------------------------------------

To validate the installation of the sensors on Microshare®, check to make sure everything was created properly:
Installation of the gateway and the sensors, creation of these entities on the LoRaWAN network used, activation of the data bridge between the Lorawan network and the Microshare® cluster device. 

Once this is done, when you scan the sensor with Deploy-M, it will be registered on Microshare®. So when you activate the sensor it will send data. At this moment the sensor will switch from this state in Microshare®:

{% include image.html url="/assets/img/installation/installation-no-1.png" description="Banner" %}

To this one: 

{% include image.html url="/assets/img/installation/installation-yes-1.png" description="Banner" %}

It will thus be green and validated. 