---
layout: docs
title: Data Ingestion by Robots
description:
toc: true
---

---------------------------------------

##### SUMMARY : 

   [To aggregate your data from different sources](./#to-aggregate-your-data-from-different-sources)
1. [Upload data manually](./#2-upload-data-manually)
2. [Set up a websocket Robot](./#3-set-up-a-websocket-robot)
3. [Set up a scheduled Robot to pull data](./#4-set-up-a-scheduled-robot-to-pull-data)

---------------------------------------

##  To aggregate your data from different sources
---------------------------------------

Microshare® is here to help you aggregate and use your data from several sources, especially IoT platforms.  
Below are several ways to move your data as microshares™ in the data lake.  

## 1. Upload data manually
---------------------------------------

Manual upload is the most basic way of loading data from your own database, or from an open data project.
To do so, send your data as the body of a [POST /share call](/assets/html/api-ms.html#request-shares-create-one-share).  
It will then be available to use from the data lake with [GET /share calls](/assets/html/api-ms.html#request-shares-get-one-share)

## 2. Set up a websocket Robot
---------------------------------------

Some IoT platforms act as [websocket servers](https://en.wikipedia.org/wiki/WebSocket) and allow websocket clients to listen and pull data live.  
[Orange Live Objects](https://liveobjects.orange-business.com/), [The Things Network](https://console.thethingsnetwork.org/), or a Sagemcom private gateway support it.  
In Microshare.io®, you can setup a websocket client Robot that takes care of writing your data as a microshare as soon as it is available.  
There is no UI to configure your own yet, but here is the WS client configuration we've gone with:
{% highlight java %}
{
  // A friendly name for the Robot.
  id = "My_WS_robot"
  // This microshare token assigns ownership of the created records.
  token = "My_MS_token"
  // The recType the incoming data will be stored under.
  recType = "io.sage.device.packed"
  // A tag to apply to the stored record.
  dType = "My_device"
  // The URI to the websocket server
  // If the WS service takes authorization as a query parameter, add it to the end of the URL.
  uri = "ws://my.websocket.uri?Authorization=Basic+My_WS_token"
  // if the service takes authorization as a header use below.
  authHeader = "Basic My_WS_header"
}
{% endhighlight %}

## 3. Set up a scheduled Robot to pull data
---------------------------------------

Alternatively, some platforms offer RESTful APIs to request for the data they store, such as [Orange Live Objects](https://liveobjects.orange-business.com/), [Bouygues Telecom Objenious](https://spot.objenious.com/login), [Sierra AirVantage](https://airvantage.net/#offers), or [Cumulocity](https://www.cumulocity.com/).  
In that case you can setup a [scheduled Robot](../robot-guide/#triggered-vs-scheduled) to perform GET calls to your IoT platform periodically.  
You are at liberty to setup your Robot script the way you want, to decide when and what to store as a microshare from that data.  
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
  

