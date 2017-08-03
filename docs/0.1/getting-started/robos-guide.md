---
layout: docs
title: Robos Guide
description: Comprehensive guide to understand robos
group: getting-started
toc: true
---

## What's a robo?
A robo is a piece of your automatic pipeline that transforms and improves data from your [microshares™](../microshares-guide).  
A chain of robos is capable of preparing your data to be easily consumed in [Dashboards](../dashboards) and Applications.  
Robos run in parallel to the data lake by reacting to new microshares being created, and by writing new ones in your behalf.  

{% include image.html url="/assets/img/Robo_interacting_with_the_data_lake.jpg" description="Your fleet of robos" %}

Each step of your data pipeline will and should create new data in the lake. Embrace it, there is no such thing as too much data with microshare.io. This builds multiple access points to your Dahsboards and Applications, as well as an automated audit trail.    

## What can I do with them?
To keep your data pipeline clear, we suggest each one of your robos takes care of only one single action. Below are some typical use cases we identified.  
[1. Data ingestion](../data-ingestion)  
For robos tasked to pull or receive data sent by an external source.  

[2. Data parsing](../data-pipelines/#data-parsing)  
Usually managed with several robos, to triage a bunch of records.  
  
[3. Data transformation](../data-pipelines/#data-transformation)  
Perfect for decoding an formatted IoT payload.  
  
[4. Data formatting](../data-pipelines/#data-formatting)  
Prepare your data to be used in a [Dashboard](../dashboards).  
  
[5. External services triggers](../data-pipelines/#external-services-triggering)  
For a robo used to trigger another service on the web.  
  
## How do I use them?
### Accessing the UI
From the management console available [here](https://app.microshare.io), open the Manage -> Robots panels. Create and edit your robos here.  
  
### Basic code  
The guts of a robo is its JavaScript script. Below is most common template you will use.  

{% include image.html url="/assets/img/Basic_robo_script.png" description="Minimal script" %}

First of all, this part is compulsory:

{% highlight js %}
  // Include the helper objects 
  // which allows you to read and write to microshare datalake
  var lib = require('./libs/helpers');

  // Always need a main function, 
  // but can have other functions to keep your code modular.
  function main(text, auth) {
  }
{% endhighlight %}

The ```require``` method loads the library of function your robo will be able to use,  
and the ```main``` function is what's actually ran, so it **must** encapsulate all of robo's actions.
Its two parameters are
* ```text``` that is the metadata about the record that triggered the robo.  
* ```auth``` is your auth token to allow this robo to access the data lake on your behalf.  

You will use the two other functions 99.9% of the time:
* ```lib.read(text, auth, []);``` reads the record that triggered your robo from the data lake.
* ```lib.write(newRecType, newRecord, auth, ['tags']);``` writes back a new record with a new recType in the data lake.  

For more code samples, refer to the [data-pipelines page](../data-pipelines).  

### Triggered vs scheduled  
Your newly created robo will first do... nothing!  
To activate it, be sure to check the Active checkbox.  

{% include image.html url="/assets/img/Activate_a_robo.png" description="Activating a robo" %}

Once that is done, your robo will trigger __each time a new record with its RECORD TYPE is added to the data lake__. So set that RECORD TYPE in your robo accordingly.  

Optionally, your robo can also run on a schedule, without waiting for a new record to be created.  
**Delay time** will run your robo once after the specified amount of time, the countdown starts when you activate the robo.  
**Interval time** triggers your robo periodically every interval, forever.  
Set the Delay and/or Interval times, activate the checbox (ticked means on), sit back and relax.

{% include image.html url="/assets/img/Schedule_a_robo.png" description="Schedule a robo" %}

### Testing  
If you edit an existing robo, you will see that a testing panel is present. Follow the instruction to simulate a run of the robo with sample data.  
Important: the lib.write is only simulated in a test, so you are not at risk to pollute your data.  

## How do they work?
Behind the scene, each robo is an Akka Agent loaded with its ECMAScript 6 compatible script.  
Our Java Stream-Service is able to set up, start, and stop Agents; and leverages the Oracle Nashorn JavaScript engine to compile the ES6 scripts.  
The Java libraries accessed by the robos point to to the adequate Service to read and write in the data lake.  