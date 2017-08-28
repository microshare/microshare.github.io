---
layout: docs
title: Robot Guide
description: Comprehensive guide to understand Robots
group: getting-started
toc: true
---

## What's a robo(t)?
A Robot is an actor that automates the routine, but sometimes complex tasks, associated with managing your data pipeline. Robots can transform and improve data from your [microshares™](../microshares-guide). Robots can interact with external services to feed external systems and to pull new data into microshare to further enrich your data. A single Robot usually automates a single such task. Keeping each Robot simple ensures that it will be:
1) easy to maintain, 
2) fast and efficient with higher volumes, and 
3) reusable in multiple projects.
 
Robots can be chained together to cooperate in fulfilment of more complicated needs. Such a chain is called a [Pipeline Workflow](../pipeline-workflow). Pipeline Workflows are capable of preparing your data to be easily consumed in [Dashboards](../dashboards) and multiple Applications. Each robotic 'step' of your Pipeline Workflow should create new data in the lake. Embrace it, there is no such thing as too much data with Microshare.io. These intermediary records preserve the transaction history, allow for fast error recovery, and keeps the stream processing fast and efficient. 

Robots are typically configured through the management console by creating or editing a Robo card. Robo cards allow you to specify the behavior of your Robots. Robots can be triggered by the arrival of new data into the microshare data lake, timed to run a preset intervals, or react to external events like the arrival of a data file or connection of a web socket. Accept for some specialized Robots, most are supplied with a simple piece of JavaScript code that defines it's desired behavior.

All Robots run in parallel (at the same time) and react to events as they occur. In many cases, a Robot will react to an event by reading a microshare record, acting on it in some way, and writing a new record back into microshare.

{% include image.html url="/assets/img/Robo_interacting_with_the_data_lake.jpg" description="Your fleet of Robots" %}


## What can I do with them?
To keep your data pipeline clear, we suggest each one of your Robots takes care of only one single action. Below are some typical use cases we identified.  
[1. Data ingestion](../data-ingestion)  
For Robots tasked to pull or receive data sent by an external source.  
* CSV files dropped in a target folder
* active web socket connection to a remote server
* interacting with an external service via API

[2. Data parsing](../data-pipelines/#data-parsing)  
Often managed with a Pipeline Workflow to massage and enrich a bunch of records.  
  
[3. Data transformation](../data-pipelines/#data-transformation)  
Perfect for decoding a formatted IoT payload.  
  
[4. Data formatting](../data-pipelines/#data-formatting)  
Prepare your data to be used in a [Dashboard](../dashboards).  
  
[5. External services triggers](../data-pipelines/#external-services-triggering)  
For a robo used to trigger another service on the web.  
  
## How do I use them?
### Accessing the UI
From the management console available [here](https://app.microshare.io), open the Manage -> Robots panels. Create and edit your Robots here.  
  
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
The Java libraries accessed by the Robots point to to the adequate Service to read and write in the data lake.  