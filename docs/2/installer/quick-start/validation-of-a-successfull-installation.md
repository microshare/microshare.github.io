---
layout: docs
title: Validation of a successfull installation
description: How to do a great installation and be sure it works ?
toc: true
---

[Microshare.io](https://microshare.io)

---------------------------------------



## 1. Overview
---------------------------------------

To confirm the success of an installation, it is sufficient to validate the operation of the gateway, then the sensors, and finally the reception of the data on Microshare. 

Once these three steps have been validated, the creation of the dashboard and the use of the data will be done very easily and quickly. 

**<!> These steps are dependent <!>**

It is therefore necessary to validate these steps during the instruction one after the other. But checking that the data is indeed on Microshare is enough to validate the complete installation. 


### Prerequisites

It is of course necessary to have followed all the steps requested in the installation tutorial. 

## 2. Microshare Validation
---------------------------------------

To validate the functioning of the installation of the sensors on Microshare it is necessary to have created everything properly:
Installation of the gateway and the sensors, creation of these entities on the LoraWan network used, activation of the data bridge between the Lorawan network and the Microshare cluster device. 

Once this is done when you scan the sensor with Deploy-M it will be registered on Microshare. So when you activate the sensor it will send data. At this moment the sensor will switch from this state to Microshare:

{% include image.html url="/assets/img/installation/installation-no.png" description="Banner" %}

To this one: 

{% include image.html url="/assets/img/installation/installation-yes.png" description="Banner" %}

It will thus be green and validated. 