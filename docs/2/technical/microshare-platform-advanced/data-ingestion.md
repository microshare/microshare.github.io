---
layout: docs
title: Data Ingestion
description: How your data gets into the Microshare® Data Lake
toc: true
---

---------------------------------------
##### SUMMARY : 

1. [What is Data Ingestion?](./#1-what-is-data-ingestion)
2. [LoRaWAN Network Ingestion via Device Cluster](./#2-new-process)
3. [Upload data via REST API POST](./#3-ingesting-data-manually)
4. [Robot Polling to pull data](./#4-how-do-i-set-up-my-device-cluster-to-ingest-my-data-automatically-into-the-data-lake)
5. [Websocket Integration](./#5-how-does-the-data-ingestion-process-work)

## 1. What is Data Ingestion? 

---------------------------------------

Data ingestion is the process by which Microshare® consumes data from various sources for distribution through the Smart Network and/or for storage in the Microshare® data lake. Data that is ingested will become available in real-time for visibility in dashboard apps, complex event processing for notifications and triggers, and for injection into your streaming architecture.


## 2. LoRaWAN Network Ingestion via Device Cluster

---------------------------------------

[The Device Cluster Guide](/docs/2/technical/microshare-platform/device-cluster-guide/) serves as a great tutorial for walking you through the process of setting up the device cluster. In this guide, there will be a more in depth description regarding the numerous parameters for the device cluster. 


{% include image.html url="/assets/img/data-ingestion-1.png" description="DI1" %}

The part of the device cluster involved in data ingestion is collecting the data from the devices and depositing them into the lake. When creating the device cluster, the **source** recType, marked in green, denotes the name under which the encrypted information is coming from, and the **target** recType, marked in blue, is where it will be stored. In the unpacker code, the program will read the data stream from the source recType and store under the target recType. The target recType will be useful later when you want to pull the data from the data lake. The unpacked directory of the target recType is very important as it signifies that the data has been decoded. 

{% include image.html url="/assets/img/data-ingestion-2.png" description="DI2" %}

Marked in teal is the network provider category. This field is required as each network has their own format to deliver information to the Microshare® network. Filling out the wrong network provider will prohibit your devices' data from properly being represented on your dashboard. 

## 3. Upload data via REST API POST
---------------------------------------

Manual upload is the most basic way of sending data into the platform.
To do so, send your data as the body of a [POST /share call](/assets/html/api-ms.html#request-shares-create-one-share).  
It will then be available to use from the data lake with [GET /share calls](/assets/html/api-ms.html#request-shares-get-one-share)

## 4. Robot Polling to pull data
---------------------------------------

Alternatively, some platforms offer RESTful APIs to request for the data they store, such as [Sierra AirVantage](https://airvantage.net/#offers), or [Cumulocity](https://www.cumulocity.com/).  
In that case you can setup a [scheduled Robot](../robot-guide/#triggered-vs-scheduled) to perform GET calls to your IoT platform periodically.  
You are at liberty to setup your Robot script the way you want, to decide when and what to store as a object from that data.  
Below is a sample Robot script that performs a data pull from Orange LiveObjects, storing all pulled IoT packets to the Microshare® data lake:

{% highlight js %}
  var lib = require('./libs/helpers');

  function main(text, auth) {
      
      //setting up the recType to save the result under
      var recType = 'orange.liveobjects.siconia';

      // Setting up the data pull GET call to Orange LiveObjects
      var liveObjectDevEui = 'myDeviceDevEUI';
      var liveObjectsUrl = 'https://liveobjects.orange-business.com/api/v0/data/streams/urn:lora:' + liveObjectDevEui + '!uplink';
      
      var liveObjectsHeaders = {};
      liveObjectsHeaders["X-API-Key"] = "myLiveObjectsApikey";
      liveObjectsHeaders.Accept = 'application/json';

      // Performing the pull data GET call to LiveObjects
      var liveObjectsResponse = lib.get(liveObjectsUrl, liveObjectsHeaders);

      // Saving every packet to the microshare data lake
      liveObjectsResponse.forEach(function(packet){
          lib.write(recType, packet, auth, ['liveObjects']);
      });
      
  }
{% endhighlight %}
  
## 5. Websocket Integration
---------------------------------------

Some IoT platforms act as [websocket servers](https://en.wikipedia.org/wiki/WebSocket) and allow websocket clients to listen and pull data live. Due to the complexities of the integration, websocket connection cannot be self-managed.
Your Microshare® services liason, can setup a websocket client that takes care of websocket connection management to make your data available in real-time.  
We will need the following information to configure the websocket:
{% highlight java %}
{
  // The URI to the websocket server
  // If the WS service takes authorization as a query parameter, add it to the end of the URL.
  uri = "ws://my.websocket.uri?Authorization=Basic+My_WS_token"
  // if the service takes authorization as a header use below.
  authHeader = "Basic My_WS_header"
}
{% endhighlight %}

## What's Next?
---------------------------------------

After the data is injested into the lake, the data is then unpacked. This process is explained in detail in the [Data Formatting page](/docs/2/technical/microshare-platform-advanced/data-formatting/).

