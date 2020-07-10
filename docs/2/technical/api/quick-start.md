---
layout: docs
title: API Quick Start
toc: true
---

---------------------------------------

##### SUMMARY : 

1. [Introduction](./#1-introduction)
2. [Get an API key](./#2-get-an-api-key)
3. [Setup Postman](./#3-setup-postman)
4. [Demo API](./#4-demo-api)
    - A. [Authentification](./#a-authentification)
    - B. [Simple Request](./#b-simple-request)
    - C. [Complex Request](./#c-complex-request)

---------------------------------------
## 1. Introduction

You will us the Microshare® API to set up your interactions with the Microshare® platform through requests. The API is where the data from your devices is interpreted and configured per your request and where we communicate with the Microshare® platform. This guide will walk you through setting up the Postman software to interact with the API and start operating with the Microshare® platform.


## 2. Get an API key
---------------------------------------

Request an API key for authentication with the services.
You can then use Microshare® Share API to read data from, as well as write data to the platform. 

* Log into your [Microshare® account](https://app.microshare.io)
* Go to `Manage -> Keys.`  
{% include image.html url="/assets/img/create-apikey-1.png" description="Manage -> Keys page" %}
* Click `CREATE NEW APP` and give a friendly name to your APIkey (why not "My first IoT App"?).  
{% include image.html url="/assets/img/create-apikey-2.png" description="Add an App" %}
* Once the key is created, copy it somewhere handy, you will need it to execute Microshare® API calls.
{% include image.html url="/assets/img/create-apikey-3.png" description="APIkey generated" %}

## 3. Setup Postman
---------------------------------------

This step is optional if you already have another way of invoking the API. In which case, visit [Microshare® API doc](../api-collection) for a list of API call and move to the next section.

Otherwise, you can setup the API manager with Postman on your computer for a quick start access to Microshare® API collection.

* Visit our [API documentation page](../api-collection/)

* Click on the `Run in Postman` button to install Postman on you computer and automatically load in our Postman API collection and environment.  
**If that fails**, go to [the Postman website](https://www.getpostman.com/) to install Postman manually, then download and import the collection and environment from our [API documentation page](../api-collection/).

* Open Postman on your computer. It will prompt you with a `Create New` modal, just close it.
{% include image.html url="/assets/img/configure-postman.png" description="Close Create New modal" %}

* To see the Microshare® Postman **collection**, click on `Collections` on the left hand pane.
* To configure your Microshare® **environment**, select the cog icon situated at the top right of the screen.  
Then `Manage Environments`, then click on `microshare`.{% include image.html url="/assets/img/configure-postman-2new.png" description="Collection adn Environment config" %}

* In the environment configuration, paste your the API key in the apikey field, and enter your username and password in the corresponding fields. 
{% include image.html url="/assets/img/generate-pipe-token-1new.png" description="Empty Postman environment" %}{% include image.html url="/assets/img/generate-pipe-token-2new.png" description="Filled Postman environment" %}

That's it! You now have access to the Microshare® API collection, and are setup to [authenticate](../authentication), [write data and read](../simple-requests) data with the platform. 

###### > [Authentication](../authentication)
###### > [Simple Request](../simple-requests)

## 4. Demo API
---------------------------------------

To let you try out our API system, we have created demo APIs. 

To try them out, you will need a Microshare® account on the dev platform. Please follow [this tutorial](../../../general-user/quick-start/create-an-account) if you don't have one. 

Then you will need to create your API key and Postman setup as described above.
1. [Get an API key](./#1-get-an-api-key)
2. [Setup Postman](./#2-setup-postman) 

Once this is done you will need to follow the [authentication tutorials](../authentication). 

It is imprortant that you understand how these requests work as we will add an extra parameter. 

Indeed when you will make the request request token you will add at the end of it 
`&identity=External_ID`

In order to have 
{% include image.html url="/assets/img/authentification_demonew.png" description="authentification demo" %}

This will allow you at runtime to join Demo's identity.

Once this has been achieved, it is now possible to use simple and then complex data reading queries.

### A. Simple request

We will now see how to read the demo data. For this it is necessary that you follow the tutorial on how to use [the simple queries](../simple-requests), which are available in the API collection you have downloaded.

Once the reading principle is well understood, we will now list a number of endpoints that you will be able to use once authenticated under the demo identity. 

{% include image.html url="/assets/img/simple_request_demo.png" description="simple request demo" %}


###### WARNING : This data is not real data and is provided solely for demo purposes.
<br>

Temperature : `io.microshare.demo.environment.unpacked`

Fridge : `io.microshare.demo.fridge.unpacked`

Desk, Room, Batroom occupancy/activity : `io.microshare.demo.motion.unpacked`

Feedback : `io.microshare.demo.feedback.unpacked`