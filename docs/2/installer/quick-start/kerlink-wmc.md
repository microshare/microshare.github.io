---
layout: docs
title: Kerlink WMC
description: Pushing Data to Microshare from Kerlink WMC 
toc: true
---

---------------------------------------
## Summary

1. [Create a new Customer](./#1-create-a-new-customer)
2. [Create a new Push Configuration for Microshare](./#2-create-a-new-push-configuration-for-microshare)
3. [Create a new cluster for Microshare Contact Tracing](./#3-create-a-new-cluster-for-microshare-contact-tracing)


## Prerequisite. Log into your WMC instance 
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

```
Customer: Microshare 

Name: Microshare Contact Tracing Push Config1 

Type: HTTP 

Message detail level: Payload 
````


##### NEXT 

<br>

URL: Contact  Fulfillment@microshare.io  for the URL endpoint details and enter it there,
>>> e.g. https://api.microshare.io/share/io.microshare.contact.packed /token/1234567890 

{% include image.html url="/assets/img/wanesy/WanesyAdmin_CreatePush2.png" description="Banner" %}


##### NEXT 

{% include image.html url="/assets/img/wanesy/WanesyAdmin_SSL.png" description="Banner" %}


##### Hit NEXT on this screen without any changes (SSL)  


{% include image.html url="/assets/img/wanesy/WanesyAdmin_CustomHeaders.png" description="Banner" %}

##### Hit VALIDATE on the final screen (Custom Headers) without any changes 







## 3. Create a new cluster for Microshare Contact Tracing
---------------------------------------

Create a new cluster for Microshare Contact Tracing: Administration > Clusters> + 

{% include image.html url="/assets/img/wanesy/WanesyAdmin_CreateCluster.png" description="Banner" %}


```
Customer: Microshare  

Name: Microshare Contact Tracing 

Push ENABLE 

Push Configuration: select “Microshare Contact Tracing Push 1” 
```

{% include image.html url="/assets/img/wanesy/WanesyAdmin_CreateCluster2.png" description="Banner" %}

##### VALIDATE 



Declare the Wave Devices  

Administration > End Devices > + 



{% include image.html url="/assets/img/wanesy/WanesyAdmin_CreateEndDevice.png" description="Banner" %}



Choose the Cluster you just created 

```
Profile: Static 

Class: A 

Region: choose the regional parameters for your region 

LoRaWAN MAC version: 1.0.2 

Regional parameters revision: B 
```


{% include image.html url="/assets/img/wanesy/WanesyAdmin_CreateEndDevice2.png" description="Banner" %} 



DevEUI, AppEUI and AppKeys are available either from Kerlink or Microshare 



##### Hit NEXT 



{% include image.html url="/assets/img/wanesy/WanesyAdmin_CreateEndDevice3.png" description="Banner" %}

##### Hit NEXT without any changes on the following screen (LoRaWAN RF Parameters) unless specifically instructed otherwise 



{% include image.html url="/assets/img/wanesy/WanesyAdmin_CreateEndDevice4.png" description="Banner" %}

Choose Inherited on the Geolocation screen and hit VALIDATE 



Repeat the process for all the Waves or use the csv upload to do a mass device declaration 



Now plug the Wave(s) in an area covered by a Kerlink gateway connected to the same Kerlink WMC instance (the gateway needs to either be assigned to the “Microshare” customer, OR be set to “PUBLIC”). 



Check that the Wave is joining correctly and sending uplinks 



---------------------------------------
##### Contact Microshare Fulfillment team (Fulfillment@microshare.io) to confirm  





























