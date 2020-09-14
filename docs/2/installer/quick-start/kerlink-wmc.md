---
layout: docs
title: Kerlink Wansey Management Centre (WMC)
description: Pushing Data to the Microshare Smart Network using the Kerlink Wanesy Management Center 
toc: true
---

---------------------------------------
In this page we explain how to configure your Kerlink instance to work with Microshare for the contact tracing use case. But this works for all Microshare use cases. 

## Summary

1. [Create a new Customer](./#1-create-a-new-customer)
2. [Create a new Push Configuration for Microshare](./#2-create-a-new-push-configuration-for-microshare)
3. [Create a new cluster (for Microshare Contact Tracing)](./#3-create-a-new-cluster-for-microshare-contact-tracing)
4. [Declare the (Wave) Devices](./#4-declare-the-wave-devices)

Instructions:

## Prerequisite. Log into your WMC instance 
Once you have your wearable devices and location markers installed within your facility, you are ready to begin pushing data to the Microshare Smart Network™.

In order to do this, you will first need to log in to your Kerlink Wanesy Management Center [WMC] interface with the login details given to you by Microshare.

---------------------------------------
<br>


## 1. Create a new Customer
---------------------------------------

Create a new Customer “Microshare”: Administration > Customers> + 

{% include image.html url="/assets/img/wanesy/WanesyAdmin_CreateCustomer.png" description="Banner" %}



## 2. Create a new Push Configuration for Microshare
---------------------------------------

Create a new Push Configuration for Microshare: Administration > Clusters>  Push Configurations 

{% include image.html url="/assets/img/wanesy/WanesyAdmin_CreatePush.png" description="Banner" %}

````
Customer: Microshare 

Name: Microshare Contact Tracing Push Config1 

Type: HTTP 

Message detail level: Payload 

- Click NEXT
````
<br>


**Insert the Connection URL:** Contact Fulfillment@microshare.io for the URL endpoint details and enter it on this screen
>>> [e.g. https://api.microshare.io/share/io.microshare.contact.packed /token/1234567890]

{% include image.html url="/assets/img/wanesy/WanesyAdmin_CreatePush2.png" description="Banner" %}

- Click NEXT 

{% include image.html url="/assets/img/wanesy/WanesyAdmin_SSL.png" description="Banner" %}


**Simply click NEXT on the following screen, no changes needed: (SSL)  


{% include image.html url="/assets/img/wanesy/WanesyAdmin_CustomHeaders.png" description="Banner" %}
**Click VALIDATE on the following screen, not changes needed: Custom Headers 





## 3. Create a new cluster for Microshare Contact Tracing
---------------------------------------

Create a new cluster for Microshare Contact Tracing: Administration > Clusters > +

```
Customer: Microshare  

Name: Microshare Contact Tracing 

Push: ENABLE 

Push Configuration: select “Microshare Contact Tracing Push 1” 

- Click VALIDATE
```
{% include image.html url="/assets/img/wanesy/WanesyAdmin_CreateCluster.png" description="Banner" %}

{% include image.html url="/assets/img/wanesy/WanesyAdmin_CreateCluster2.png" description="Banner" %}


## 4. Declare the Wave Devices  

Declare the Wave Devices: Administration > End Devices > + 

Select the Cluster you just created 

```
Profile: Static 

Class: A 

Region: choose the regional parameters for your region 

LoRaWAN MAC version: 1.0.2 

Regional parameters revision: B

- Click NEXT
```
{% include image.html url="/assets/img/wanesy/WanesyAdmin_CreateEndDevice.png" description="Banner" %}

**Insert the relevant Device ID

Device EUI, Application EUI and Application keys are available from Kerlink or Microshare

- Click NEXT

{% include image.html url="/assets/img/wanesy/WanesyAdmin_CreateEndDevice2.png" description="Banner" %} 

**Click NEXT on the following screen, no changes needed (unless specifically instructed otherwise): LoRaWAN RF Parameters

{% include image.html url="/assets/img/wanesy/WanesyAdmin_CreateEndDevice3.png" description="Banner" %}


**Select “Inherited” on the following screen: Geolocation

```
- Click VALIDATE
Repeat this process for all the Wave devices or use the csv upload to carry out a mass device declaration
``` 
{% include image.html url="/assets/img/wanesy/WanesyAdmin_CreateEndDevice4.png" description="Banner" %}


**5. Now plug the Wave(s) in an area covered by a Kerlink gateway connected to the same Kerlink WMC instance (the gateway needs to either be assigned to the “Microshare” customer, OR be set to “PUBLIC”). 


Check that the Wave is joining correctly and sending uplinks 



---------------------------------------
##### Contact Microshare Fulfillment team (Fulfillment@microshare.io) to confirm  





























