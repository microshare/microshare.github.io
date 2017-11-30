---
layout: docs
title: Data Workflow
description: Robot examples to build a Data Workflow
group: getting-started
toc: true
---

## What is a data workflow?
You can set up automated multistep processes to route and transform your data so it's ready to be consumed by an App or a Dashboard.  
This is called a data workflow. The automated actions are managed by [Robots](../robot-guide), and the access to transformed data is granted with [Rules](../rules-guide).  
In this article we will describe the usual actions you can perform with Robots to get your data workflow ready.  

For an introduction to robots take a look at the [Robot Guide](../robot-guide)

## Read data from the data lake

Your wokflow will usually start with reading data that was pushed to the data lake. This can be triggered automatically if your Robot was listening to a data stream recType, or periodically with a scheduled Robot.  
Below are code snippets to read data from the data lake.  

### Read record triggering the Robot

Read the record that triggers the Robot using lib.read to get the data and metadata: 

{% highlight js %}
  // Include the helper objects which allows you to read and write to microshare datalake
  var lib = require('./libs/helpers');

  // Always need a main function, but can have other functions to keep your code modular.
  function main(text, auth) {
    print('################################# RECORD READ START ###########################');
    
    var record = lib.read(text, auth, []);
    
    print('################################# RECORD READ END #############################');
  }
{% endhighlight %}
  
And the returned data model is  
{% highlight js %}

  {
    "meta": {
        "totalPages": 1,
        "currentPage": 1,
        "perPage": 999,
        "totalCount": 1,
        "currentCount": 1
    },
    "objs": [
        {
            "updaterId": "jwang@point.io",
            "desc": "",
            "name": "",
            "createDate": {
                "$date": 1507824651492
            },
            "_id": {
                "$oid": "59df940b46e0fb0028fbb54c"
            },
            "tags": [
                "tempID1234",
                "demoOnly",
                "raw"
            ],
            "data": {
                "Freq": 868300000,
                "upid": {
                    "$numberLong": "23393998034011604"
                },
                "DR": 5,
                "msgtype": "updf",
                "DevEui": "58-A0-CB-FF-FF-FE-BB-15",
                "SessID": 3,
                "FCntUp": 165,
                "ArrTime": 1506622798.0322363,
                "confirm": false,
                "region": "EU863",
                "regionid": 1000,
                "FRMPayload": "00EB05050046E90F",
                "FPort": 102
            },
            "creatorId": "jwang@point.io",
            "id": "59df940b46e0fb0028fbb54c",
            "checksum": "F1F3C807902AA03C4BCF2FAEE986B460C1E0434451682A6BE7799D0D07B28B98L266",
            "tstamp": {
                "$numberLong": "1507824651492"
            },
            "origin": {
                "tokendata": {
                    "id": "3766b4fc-4fae-49ab-afc4-cb0d741d89dc"
                },
                "desc": "Object of Type io.microshare.demo.sensor.temprature",
                "name": "io.microshare.demo.sensor.temprature",
                "createDate": {
                    "$numberLong": "1507824651492"
                },
                "creatorId": "jwang@point.io",
                "id": "59df940b46e0fb0028fbb54c",
                "checksum": "F1F3C807902AA03C4BCF2FAEE986B460C1E0434451682A6BE7799D0D07B28B98L266"
            },
            "recType": "io.microshare.demo.sensor.temprature",
            "owner": {
                "appid": "51C54CDB-D278-4CFD-B8378EF13462E5FB",
                "org": "io.point",
                "user": "jwang@point.io"
            }
        }
      ]  
  }
{% endhighlight %} 

### Read any record
You can also read any record from which you know the recType and/or id.  
This call will always return an array and depending on the read, you can have more than one record returned.
To get records by the recType and associated tags:

{% highlight js %}
  var tags = ["tempID1234"]
  var record = lib.read('{"message":"source=ShareService,type=objs,recType=io.microshare.demo.sensor.temprature,id="}', auth, tags);

{% endhighlight %}

### Data lake advanced queries
You can use [FACTS](https://microshare.github.io/docs/0.1/getting-started/facts-guide/) to do advanced queries to the data lake.

Facts run an aggregation query on the data lake entries and can take parameters. The returned format is the same as the read.

{% highlight js %}
  //Include the helper objects which allows you to read and write to microshare datalake
  var lib = require('./libs/helpers');

  // Always need a main function, but can have other functions to keep your code modular.
  function main(text, auth) {
    print('################################# FACT READ START ###########################');
    
    var queryParams = {
        "id": "any fact id"
    };
    
    var factResult = lib.read(text, auth, [], queryParams);
    
    print('################################# FACT READ END #############################');
  }
{% endhighlight %}

IMPORTANT: Your Fact must have the same recType as the one triggering the Robot !!! 

## Data Parsing

Ideal for seperating different sensor records coming from the same stream of IoT packages.  
For example if you have a single platform pushing records about 2 different devices through the same pipe (same recType), you might want to parse by devEUI after.  

The example below shows how one Robot can parse two devEUI.  
Another strategy would be to use one Robot per devEUI, that can be turned on and off to start or stop 2 data flows.  

{% highlight js %}
  var lib = require('./libs/helpers');

  function main(text, auth) {
    print('################################# MY SCRIPT START ###########################');

    var rec = lib.read(text, auth, []);
    var m = rec.objs[0].data;
    var recType = rec.objs[0].recType;

    if (m.DevEui == "58-A0-CB-FF-FF-FE-BB-15") {
        
        //Motion Sensor
        //Write a new record with the Motion Sensor payload and the Time included in the network info
        lib.write(recType + '.motionsensor', {"payload": m.FRMPayload, "timestamp": m.ArrTime}, auth, ['payload', 'timestamp']);
        
    } else if (m.DevEui == "58-A0-CB-FF-FF-FE-BB-36") {
        
        //Healthy Home Sensor
        //Write a new record with the Healthy Home Sensor payload and the Time included in the network info
        lib.write(recType + '.healthyhomesensor', {"payload": m.FRMPayload, "timestamp": m.ArrTime}, auth, ['payload', 'timestamp']);
        
    }

    print('################################# MY SCRIPT END #############################');
  }
{% endhighlight %} 

## Data Transformation

Robots are running JS scripts, so any data trnsformation logic can be added to your workflow.  
A usual transformation step of your workflow is the decoding of your IoT Payload. See our list of decoding methods [here](/docs/0.1/advanced/robots-libraries/decoding-payloads).

IMPORTANT: The Robot scripts use ES6 only, so you can't rely on your usual browser APIs for data transformation

Below is an example of Payload decoding, ending up in writing a new record in the datalake:
{% highlight js %}
  var lib = require('./libs/helpers');

  function main(text, auth) {
    print('################################# MY SCRIPT START ###########################');

    var rec = lib.read(text, auth, []);
    var m = rec.objs[0].data;
    var recType = rec.objs[0].recType;

    var decodedRecord = lib.decodeTabsHealthyHomeSensor(m.payload);
    var decodedRecordJSON = JSON.parse(decodedRecord);
    decodedRecordJSON.timestamp = m.timestamp;

    //Save the record enhanced with the decoded data
    lib.write(recType + '.decoded', decodedRecordJSON, auth, ['status', 'battery', 'temperature', 
'humidity', 'CO2', 'VOC', 'timestamp']);

    print('################################# MY SCRIPT END #############################');
  }
{% endhighlight %}

## Data Formatting
Best practice is to build another record containing specifically the data you want, formatted as you want.  

If a specific format were required for a report, the object could be reformatted and then a new entry written with '.reporting' appended to the record type.

{% highlight js %}

    var record = lib.read(text, auth, []);
    var data = record.objs[0].data

    for (i = 0; i < data.length; i++) { 
         var res = lib.write("io.microshare.demo.sensor.temperature", data[i], auth, [data[i].DevEui, "raw"]);
    }
{% endhighlight %}

Think about it, this will be triggered every time a new record is pushed through the initial entry pipe. So that final cache record will always be up to date.  
But... we actually create a new record for this recType each time you say? Yes but we can easily grab only the latest as I will show you next.

## External services triggering
You have access to notifications libraries, and RESTful POST and GET from a Robot script. This allows you to call external services from your data workflow.  
For example, at microshare.io we like to log on our slack channel, below is an example about how to do just that.

{% highlight js %}
  var webhookURL = 'The webhook to a Slack channel: https://api.slack.com/incoming-webhooks';
  var body = '{\"text\":\"' + JSON.stringify(m, null, '\t').replace(/"/g, "\\\"") + '\"}';
  lib.post(webhookURL, headers, body);
{% endhighlight %}

For more examples, see our [notification methods](/docs/0.1/advanced/robots-libraries/sending-notifications) and [calling external APIs methods](/docs/0.1/advanced/robots-libraries/making-restful-calls)

## Write data to the data lake
As shown above, each step of a workflow usually ends with writting a record in the data lake.  

A data write use is twofold: it builds the audit trail of your data, and allows to trigger the next step of the workflow.

As shown below, you can specify the recType and tags of your new data entry.
{% highlight js %}
  var lib = require('./libs/helpers');

  function main(text, auth) {
    print('################################# FACT READ START ###########################');

    var write = lib.write(recType, obj, auth, [tags]);
    
    print('################################# FACT READ END #############################');
  }
{% endhighlight %} 

## Summary of a full example
I'd like to display that as a set of tabs
Code snippet of reading the first record and validating it
Code snippet of parsing by devEUI
Code snippet of calling another record to associate a name to a devEUI

Code snippet of a Robot, that does a final formatting and adds a timestamp
Code snippet of a schedule Robot that log something externally every 12 hours 


## What's next?
Next is calling the record in a [dashboard](https://microshare.github.io/docs/0.1/getting-started/dashboards/)...


