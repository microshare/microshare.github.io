---
layout: docs
title: Robot Libraries
description: snippets of usable lib methods from Robots
toc: true
---

---------------------------------------

##### SUMMARY : 

1. [Robots Library](./#1-robots-libraries)
3. [How to manually decode your data](./#3-access-to-device-cluster)

---------------------------------------

## 1. Robots libraries

The Robot library is accessible from Robot scripts via  
{% highlight js %} var lib = require('./libs/helpers'); {% endhighlight %}

It gives access to handy methods to ease your life.

Below are categories and code snippets to guide you how to use these lib methods :

#####  [Reading and Writing records](read-and-write)
#####  [Making RESTful calls](making-restful-calls)
#####  [Sending notifications](sending-notifications)



## 2. How to manually decode your data 

As presented in the pages on data ingest and transformation, for Microshare® compatible sensors the decoders are linked to the device clusters, so this step is not necessary. 

#####  [TrackNet Tabs devices V1.1](tracknet-tabs)
#####  [Globalsat LT-100 LoRaWAN GPS Tracker](globalsat-lt-100)
#####  [Sagemcom Siconia](sagemcom-siconia)
#####  [Adeunis LoRaWAN Demonstrator V1.1](adeunis-demonstrator)
#####  [Generic decoding](decoding-payloads)