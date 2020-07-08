---
layout: docs
title: Robot Guide
description: Comprehensive guide to understand Robots
toc: true
---

---------------------------------------

##### SUMMARY : 

1. [What's a Robot?](./#1-whats-a-robot)
2. [What can I do with them?](./#2-what-can-i-do-with-them)
3. [How do I use them?](./#3-how-do-i-use-them)
  - A. [Accessing the UI](./#a-accessing-the-ui)
  - B. [Basic code](./#b-basic-code)
  - C. [Triggered vs scheduled](./#c-triggered-vs-scheduled)
  - D. [Testing](./#d-testing)
4. [Create a Robot to Transform data and Send alerts](./#4-create-a-robot-to-transform-data-and-send-alerts)
5. [How do they work?](./#5-how-do-they-work)
6. [More Information](./#6-more-information)

---------------------------------------

## 1. What's a Robot?
A Robot is an actor that automates the routine, but sometimes complex tasks, associated with managing your data workflow. Robots can transform and improve data from your microshares™. Robots can interact with external services to feed external systems and to pull new data into Microshare® to further enrich your data. A single Robot usually automates a single such task. Keeping each Robot simple ensures that it will be:
1) easy to maintain, 
2) fast and efficient with higher volumes, and 
3) reusable in multiple projects.
 
Robots can be chained together to cooperate in fulfilment of more complicated needs. Such a chain is called a [Data Workflow](../data-workflow). Data Workflows are capable of preparing your data to be easily consumed in Dashboards and multiple Applications. Each Robottic 'step' of your Data Workflow should create new data in the lake. Embrace it, there is no such thing as too much data with Microshare.io®. These intermediary records preserve the transaction history, allow for fast error recovery, and keeps the stream processing fast and efficient. 

Robots are typically configured through the management console by creating or editing a Robo card. Robo cards allow you to specify the behavior of your Robots. Robots can be triggered by the arrival of new data into the Microshare® data lake, timed to run a preset intervals, or react to external events like the arrival of a data file or connection of a web socket. Except for some specialized Robots, most are supplied with a simple piece of JavaScript code that defines it's desired behavior.

All Robots run in parallel (at the same time) and react to events as they occur. In many cases, a Robot will react to an event by reading a Microshare® record, acting on it in some way, and writing a new record back into Microshare®.

{% include image.html url="/assets/img/Robot_interacting_with_the_data_lake.jpg" description="Your fleet of Robots" %}


## 2. What can I do with them?
To keep your data workflow clear, we suggest each one of your Robots takes care of only one single action. Below are some typical use cases we identified.  
[1. Data ingestion](../data-ingestion)  
For Robots tasked to pull or receive data sent by an external source.  
* CSV files dropped in a target folder
* active web socket connection to a remote server
* interacting with an external service via API

[2. Data parsing](../data-workflow/#data-parsing)  
Often managed with a Data Workflow to massage and enrich a bunch of records.  
  
[3. Data transformation](../data-workflow/#data-transformation)  
Perfect for decoding a formatted IoT payload.  
  
[4. Data formatting](../data-workflow/#data-formatting)  
Prepare your data to be used in a Dashboard.  
  
[5. External services triggers](../data-workflow/#external-services-triggering)  
For a Robot used to trigger another service on the web.  
  
## 3. How do I use them?
### A. Accessing the UI
From the management console available [here](https://app.microshare.io), open the Manage -> Robots panels. Create and edit your Robots here.  
  
### B. Basic code  
The guts of a Robot is its JavaScript script. Below is the most common template you will use.  

{% include image.html url="/assets/img/Basic_robot_script.png" description="Minimal script" %}

First of all, this part is compulsory:

{% highlight js %}
  // Include the helper objects 
  // which allows you to read and write to Microshare® datalake
  var lib = require('./libs/helpers');

  // Always need a main function, 
  // but can have other functions to keep your code modular.
  function main(text, auth) {
  }
{% endhighlight %}

The ```require``` method loads the library of function your Robot will be able to use,  
and the ```main``` function is what's actually run, so it **must** encapsulate all of Robot's actions.
Its two parameters are
* ```text``` that is the metadata about the event that triggered the Robot.  
* ```auth``` is your auth token to allow this Robot to access the data lake on your behalf.  

You will use the two other functions 99.9% of the time:
* ```lib.parseMsg(text);``` parses the message that triggered your Robot from the data lake.
* ```lib.writeShare(auth, newRecType, newRecord, ['tags']);``` writes back a new record with a new recType in the data lake.  

For more code samples, refer to the [Data Workflow page](../data-workflow).  

### C. Triggered vs scheduled  
Your newly created Robot will first do... nothing!  
To activate it, be sure to check the Active checkbox.  

{% include image.html url="/assets/img/Activate_a_robot.png" description="Activating a Robot" %}

Once that is done, your Robot will trigger __each time a new record with its RECORD TYPE is added to the data lake__. So set that RECORD TYPE in your Robot accordingly.  

Optionally, your Robot can also run on a schedule, without waiting for a new record to be created.  
**Delay time** will run your Robot once after the specified amount of time, the countdown starts when you activate the Robot.  
**Interval time** triggers your Robot periodically every interval, forever.  
Set the Delay and/or Interval times, activate the checkbox (ticked means on), sit back and relax.

{% include image.html url="/assets/img/Schedule_a_robot.png" description="Schedule a Robot" %}

### D. Testing  
If you edit an existing Robot, you will see that a testing panel is present. Follow the instruction to simulate a run of the Robot with sample data.  
Important: the lib.write is only simulated in a test, so you are not at risk to pollute your data.  


## 4. Create a Robot to Transform data and Send alerts

Robots are automated workflow elements allowing you to transform, analyze and report on incoming data on the fly.

We are going to create and chain two Robots to detect an abnormal temperature level, and send email notifications.

* Navigate to [Microshare® platform](https://app.microshare.io)
* Click the `Manage` button in the top toolbar
* Click the `Robots` button in the left toolbar and click `CREATE`

{% include image.html url="/assets/img/hackiot-create-a-robot.png" description="Create a Robot from the composer" %}

We will do the minimum to unlock all the Robot options for now.

* Give your Robot a name.
* Enter the Record Type you used in the calls in the previous section.
* Complete the creation by clicking the `CREATE` button, and entering your login, password and API key combination.

{% include image.html url="/assets/img/hackiot-create-a-robot-2.png" description="Minimal Robot configuration" %}

You'll be back in the Robot cards list and your Robot should now be displayed.
If you don't see your new Robot card listed:

* Open the option menu
* Increase the `Cards per Page` to 999 
* Click Apply

The new Robot card should now be visible.

{% include image.html url="/assets/img/hackiot-configure-robot.png" description="Increase Cards per Page" %}

To edit an existing Robot, find your Robot in the list:

* Click on it 
* Click on the `pencil` icon at the top of the page

{% include image.html url="/assets/img/hackiot-configure-robot-2.png" description="Open Robot edition mode" %}

While in edit mode you can:
* Turn your Robot on and off
* Write the Robot script
* Test the script

{% include image.html url="/assets/img/hackiot-configure-robot-3new.png" description="Full Robot edition mode" %}

We don't have real data to use here, so we going to transform it with our own fake data.
We are going to add a fake temperature value, and the current date/time to the record, then save that transformed record.

* Replace the code in your Robot script with:
{% highlight js %}
  var lib = require('./libs/helpers');
  function main(text, auth) {
      
      var rec = lib.parseMsg(text);
      var newData = rec.objs[0].data;
      var recType = rec.objs[0].recType;
      
      var now = new Date();

      newData.temperature = now.getSeconds();
      newData.dateTime = now.toString();

      lib.writeShare(auth, recType + '.withTemperature', newData, []);

  }
{% endhighlight %}

Activate and Update your Robot when done. It will now be triggered automatically to read, anhance, then write back a record to the data lake, with the added `.withTemperature` suffix to the recType.

You can test that your Robot triggers by Writing a new piece of data with your initial recType, and Read the `recType.withTemperature` with the API.

You can use that second recType as the trigger to another Robot for data transformation, etc.
This is exactly what we are going to do now!

* Create a new Robot
* Give your Robot a name.
* Enter the Record Type with the `.withTemperature` suffix.
* Complete the creation by clicking the `CREATE` button, and entering your login, password and API key combination.
* Now edit that Robot, and replace the script with:
{% highlight js %}

var lib = require('./libs/helpers');
function main(text, auth){

    var rec = lib.parseMsg(text);
    var data = rec.objs[0].data;

    if (data.temperature > 30){

        /* lib.sendMicroshareEmail(recipient's email address,
            subject of your email,
            body of your email);
           The email sender will be notification@microshare.io
        */

        var TO = 'INPUT YOUR EMAIL HERE';
        var SUBJECT = 'High temperature alert';
        var BODY = 'A temperature of ' + data.temperature + ' was detected at ' + data.dateTime;

        lib.sendMicroshareEmail(TO, SUBJECT, BODY);

    }
}

{% endhighlight %}

* Within the code pasted into the "Script" section change the variable "TO" to your email
* Activate and update your Robot
* Write a few record for your recType.

The two Robots are activated in succession. If the fake temperature created is above 30, you receive an email alert.

You are now ready to setup your own IoT data stream, and transform, analyze, alert on data.

## 5. How do they work?
Behind the scene, each Robot is an Akka Agent loaded with its ECMAScript 6 compatible script.  
Our Java Stream-Service is able to set up, start, and stop Agents; and leverages the Oracle Nashorn JavaScript engine to compile the ES6 scripts.  
The Java libraries accessed by the Robots point to the adequate Service to read and write in the data lake.  


## 6. More Information

For additional details on available Robot methods, visit [Robot library](../../advanced/robots-libraries)

For help on how to route your IoT stream from your favorite platform or gateway to Microshare®, check our [IoT integration documentation](../../advanced/lorawan-devices).