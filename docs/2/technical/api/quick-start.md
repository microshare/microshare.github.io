---
layout: docs
title: API Quick Start
description: description
toc: true
---

---------------------------------------

##### SUMMARY : 

1. [Get an API key](./#1-get-an-api-key)
2. [Setup Postman](./#2-setup-postman)

---------------------------------------

## 1. Get an API key

Request an API key for authentication with the services.
You can then use Microshare Share API to read data from, as well as write data to the platform. 

* Log in your [microshare account](https://app.microshare.io)
* Go to `Manage -> Keys.`  
{% include image.html url="/assets/img/create-apikey-1.png" description="Manage -> Keys page" %}
* Click `CREATE NEW APP` and give a friendly name to your APIkey (why not "My first IoT App"?).  
{% include image.html url="/assets/img/create-apikey-2.png" description="Add an App" %}
* Once the key is created, copy it somewhere handy, you will need it to execute microshare API calls.
{% include image.html url="/assets/img/create-apikey-3.png" description="APIkey generated" %}

## 2. Setup Postman

This step is optional if you already have another way of invoking the API. In which case, visit [Microshare API doc](./api-collection) for a list of API call and move to the next section.

Otherwise, you can setup the API manager with Postman on your computer for a quick start access to Microshare API collection.

* Visit our [API documentation page](../../../advanced/api-reference)

* Click on the `Run in Postman` button to install Postman on you computer and automatically load in our Postman API collection and environment.  
**If that fails**, go to [the Postman website](https://www.getpostman.com/) to install Postman manually, then download and import the collection and environment from our [API documentation page](../../../advanced/api-reference).

* Open Postman on your computer. It will prompt you with a `Create New` modal, just close it.
{% include image.html url="/assets/img/configure-postman.png" description="Close Create New modal" %}

* To see the Microshare Postman **collection**, click on `Collections` on the left hand pane.
* To configure your Microshare **environment**, select the cog icon situated at the top right of the screen.  
Then `Manage Environments`, then click on `microshare`.{% include image.html url="/assets/img/configure-postman-2.png" description="Collection adn Environment config" %}

* In the environment configuration, paste your the API key in the apikey field, and enter your username and password in the corresponding fields. 
{% include image.html url="/assets/img/generate-pipe-token-1.png" description="Empty Postman environment" %}{% include image.html url="/assets/img/generate-pipe-token-2.png" description="Filled Postman environment" %}

That's it! You now have access to the microshare API collection, and are setup to authenticate, write data and read data with the platform. 
