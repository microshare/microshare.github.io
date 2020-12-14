---
layout: docs
title: Validation of a successfull installation
description: How do I know if I installed my devices properly?
toc: true
---





{% include image.html url="/assets/img/thumbnail-14.jpg" description="thumbnail 2" %}

---------------------------------------
#### Summary

1. [Overview](./#1-overview)
2. [Microshare Validation](./#2-microshare-validation)


## 1. Overview
---------------------------------------

To confirm a successful installation, first validate the following in order: 
<br>
**1.**	The gateway is functioning properly
<br>
**2.**	The devices are collecting and sending data 
<br>
**3.**	The data is being received on  the Microshare platform
 
<br>
After completing these steps, you are ready to move onto creating the dashboard and access to the data. 

**<!> Note: These steps are dependent<!>**

You need to validate the above steps in the designated order, but checking that the data is being received on the Microshare platform is enough confirmation to validate a complete installation. 


### Prerequisites

Take a moment to to check that you have properly followed the steps requested in the installation tutorial.  

## 2. Microshare Validation
---------------------------------------

To validate the installation of the devices for a Microshare solution, check that the following was created properly:

<br>
**1.** After setting up the gateways and sensors, create these entities on the LoraWan network used. 
<br>
**2.** Activate the data bridge between the LoRaWan network and the Microshare device cluster. 

<br>
Next, scan the devices with the Deploy-M IOS or Android app to register the devices on Microshare. Once you activate the device, it will start sending data. At this point in time, the device on Microshare will switch from this state:


{% include image.html url="/assets/img/installation/installation-no-1.png" description="Banner" %}

To this one: 

{% include image.html url="/assets/img/installation/installation-yes-1.png" description="Banner" %}

It will thus be green and validated. 

 