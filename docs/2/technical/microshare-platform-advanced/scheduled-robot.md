---
layout: docs
title: Set up a scheduled Robot to pull data
description: A child page to Data Ingestion
group: getting-started
toc: true
---

------------------------------



Some platforms offer RESTful APIs to request for the data they store, such as [Orange Live Objects](https://liveobjects.orange-business.com/), [Bouygues Telecom Objenious](https://spot.objenious.com/login), [Sierra AirVantage](https://airvantage.net/#offers), or [Cumulocity](https://www.cumulocity.com/).  
In that case you can setup a [scheduled Robot](../robot-guide/#triggered-vs-scheduled) to perform GET calls to your IoT platform periodically.  
You are at liberty to setup your Robot script the way you want, to decide when and what to store as a microshare from that data.  
Below is a sample Robot script that performs a data pull from Orange LiveObjects, storing all pulled IoT packets to the microsahre data lake:

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


{% include image.html url="\assets\img\microshare-logo.png"  description="ms logo" %}
