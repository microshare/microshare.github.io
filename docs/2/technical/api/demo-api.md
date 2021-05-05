---
layout: docs
title: Demo API
description: An introduction to the Microshare™  API 
toc: true
---




{% include image.html url="/assets/img/thumbnail-14.jpg" height="900" width="900" description="thumbnail 2" %}


<br>

---------------------------------------

##### SUMMARY : 


We have created APIs specifically for demonstration to show you how Microshare works.  

To try them out, you will need a Microshare account on the dev platform. Please follow [this tutorial](../../../general/quick-start/create-an-account) if you do not already have one. 

Afterword,  you will need to create your API key and set up Postman as guided in the [Quick Start](../quick-start).
<br>
**1.** [Get an API key](./#1-get-an-api-key)
<br>
**2.** [Setup Postman](./#2-setup-postman) 

Once completed, you will need to follow the [authentication tutorials](../authentication). 

It is imprortant that you understand how these requests work as we will add an extra parameter. 

When you make a request, a request token is required at the end of the call:

`&identity=External_ID`

Once you have created and specified your request token, by pressing the `Send` button, you should see something similar to the following if all your specifications are correct:

{% include image.html url="/assets/img/authentification_demonew.png" description="authentification demo" %}

This will allow you to join the Demo's identity at runtime .

Once completed, you can now make share API and make complex data reading queries! 


### A. Simple request

The next objective is to make simple queries to read the demo data by following [this tutorial](../share-api). On this demo API, you can use the following recTypes (or endpoints) to request information! You will add these recTypes to the field circled in yellow below.

<br>
#### WARNING : This data is not real data and is provided solely for demo purposes.

##### We give you the opportunity to see how the data will flow through the API, so you can see the essence of the data structure. If you want to focus on the meaning of the data, and the temporal or geographical correlations, we advise you to install some of our sensors to get a real data flow.

Temperature : `io.microshare.demo.environment.unpacked`

Fridge : `io.microshare.demo.fridge.unpacked`

Water Temperature : `io.microshare.demo.water.pipe.unpacked`

AirQuality : `io.microshare.demo.airquality.unpacked`

Decibels Monitoring : `io.microshare.demo.sound.unpacked`

Brightness Monitoring : `io.microshare.demo.light.unpacked`

Open-Close Monitoring : `io.microshare.demo.motion.unpacked` 

Leak Detection : `io.microshare.demo.feedback.unpacked`

Leak : `io.microshare.demo.leak.unpacked`

Asset Zoning : `io.microshare.demo.assetzoning.unpacked.event`

Contact Tracing : `io.microshare.demo.contact.unpacked.event`

Desk, Room, Bathroom, Hospital Beds (occupancy/activity)  : `io.microshare.demo.motion.unpacked`

Feedback : `io.microshare.demo.feedback.unpacked.event.meta`

UCT : `io.microshare.demo.contact.unpacked.event`

{% include image.html url="/assets/img/simple_request_demo.png" description="simple request demo" %}

<br>
 
