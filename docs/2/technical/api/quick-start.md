---
layout: docs
title: API Quick Start
description: An introduction to the Microshare™  API 
toc: true
---




{% include image.html url="/assets/img/thumbnail-14.jpg" height="900" width="900" description="thumbnail 2" %}


<br>

---------------------------------------

##### SUMMARY : 

1. [Introduction](./#1-introduction)
2. [Get an API key](./#2-get-an-api-key)
3. [Setup Postman](./#3-setup-postman)

---------------------------------------
## 1. Introduction
---------------------------------------

You will use the Microshare® API to set up your interactions with the Microshare® platform through requests. The API is the destination of your devices’ data and is the main form of communication with the Microshare® platform. This guide will walk you through setting up the Postman software to interact with the API and start operating with the Microshare® platform.

## 2. Get an API key
---------------------------------------

First and foremost, you will need to request an API key for authentication with the services. Afterword, you can then use the Microshare® Share API to read data from, as well as write data to the platform.

* Log into your [Microshare® account.](https://app.microshare.io)
* Go to `Manage -> Keys.`  

{% include image.html url="/assets/img/create-apikey-1.png" description="Manage -> Keys page" %}

<br>
* Click `CREATE NEW APP` and give a friendly name to your APIkey (why not "My first IoT App"?).

<br>
{% include image.html url="/assets/img/create-apikey-4.png" description="Add an App" %}

{% include image.html url="/assets/img/create-apikey-2.png" description="Add an App" %}

<br>
* Once the key is created, copy it somewhere handy, you will need it to execute Microshare® API calls.

<br>
{% include image.html url="/assets/img/create-apikey-3.png" description="APIkey generated" %}

## 3. Setup Postman
---------------------------------------

This step is optional if you already have another way of invoking the API. In which case, visit [Microshare® API doc](../api-collection) for a list of API call and move to the next section.

Otherwise, you can setup the API manager with Postman on your computer for a quick start access to Microshare® API collection.


<br>
**1.** Visit our [API documentation page](../api-collection/) (preferable in another tab so that you may have both references open).

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/800c4698e3342072364c)

<br>
**2.** Click on the `Run in Postman` button to install Postman on you computer and automatically load in our Postman API collection and environment.  

**If that fails**, go to [the Postman website](https://www.getpostman.com/) to install Postman manually, then download and import the collection and environment from our [API documentation page](../api-collection/).

<br>
**3.** Open Postman on your computer. It will prompt you with a `Create New` modal, just close it.

<br>
{% include image.html url="/assets/img/configure-postman.png" description="Close Create New modal" %}

<br>
**4.**To see the Microshare® Postman **collection**, click on `Collections` on the left hand pane.

<br>
{% include image.html url="/assets/img/configure-postman-2new.png" description="Collection and Environment config" %}

<br>
**5.** To configure your Microshare® **environment**, select the cog icon situated at the top right of the screen.Then `Manage Environments`, then click on `microshare`.

<br>
{% include image.html url="/assets/img/create-apikey-5.png" description="Empty Postman environment" %}

<br>
**6.** In the environment configuration, paste your the API key in the apikey field, and enter your username and password in the corresponding fields. 

<br>
{% include image.html url="/assets/img/generate-pipe-token-1new.png" description="Empty Postman environment" %}
{% include image.html url="/assets/img/generate-pipe-token-2new.png" description="Filled Postman environment" %}

<br>
That's it! You now have access to the Microshare® API collection, and are setup to [authenticate](../authentication), [write data and read](../share-api) data with the platform. 

###### > [Authentication](../authentication)
###### > [Share API](../share-api)
###### > [Demo API](../demo-api)
