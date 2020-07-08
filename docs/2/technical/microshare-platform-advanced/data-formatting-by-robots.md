---
layout: docs
title: Data Formatting by Robots
description: Robot examples to build a Data Workflow
toc: true
---

---------------------------------------

##### SUMMARY : 

1. [Formatting the data with a robot](./#1-formatting-the-data-with-a-robot)
  - A. [What is a data workflow?](./#a-what-is-a-data-workflow)
  - B. [Read data from the data lake](./#b-read-data-from-the-data-lake)
  - C. [Read record triggering the Robot](./#c-read-record-triggering-the-robot)
  - D. [Read any record(s)](./#d-read-any-records)
  - E. [Data lake advanced queries](./#e-data-lake-advanced-queries)
  - F. [Data Parsing](./#f-data-parsing)
  - G. [Data Transformation](./#g-data-transformation)
  - H. [Data Formatting](./#h-data-formatting)
  - I. [External services triggering](./#i-external-services-triggering)
  - J. [Write data to the data lake](./#j-write-data-to-the-data-lake)
  - K. [Data workflow example](./#k-data-workflow-example)
2. [What's next ?](./#2-whats-next)

---------------------------------------

## 1. Formatting the data with a robot

### A. What is a data workflow?
You can set up automated multistep processes to route and transform your data so it's ready to be consumed by an App or a Dashboard.  
This is called a data workflow. The automated actions are managed by [Robots](../robot-guide), and the access to transformed data is granted with [Rules](../rules-guide).  
In this article we will describe the usual actions you can perform with Robots to get your data workflow ready.  

For an introduction to robots take a look at the [Robot Guide](../robot-guide)

### B. Read data from the data lake

Your workflow will usually start with reading data that was pushed to the data lake. This can be triggered automatically if your Robot was listening to a data stream recType, or periodically with a scheduled Robot.  
Below are code snippets to read data from the data lake.  

### C. Read record triggering the Robot

Parse the message that triggers the Robot using lib.parseMsg to get the data and metadata from the 'text' parameter: 

{% highlight js %}
  // Include the helper objects which allows you to read and write to Microshare® datalake
  var lib = require('./libs/helpers');

  // Always need a main function, but can have other functions to keep your code modular.
  function main(text, auth) {
    print('################################# RECORD READ START ###########################');
    
    var record = lib.parseMsg(text, auth, []);
    
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
            "updaterId": "your@email.com",
            "desc": "",
            "name": "",
            "createDate": {
                "$date": 1507824651492
            },
            "_id": {
                "$oid": "59df940b46esfdf028fbb???"
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
                "DevEui": "58-A0-CB-FF-FF-FE-??-??",
                "SessID": 3,
                "FCntUp": 165,
                "ArrTime": 1506622798.0322363,
                "confirm": false,
                "region": "EU863",
                "regionid": 1000,
                "FRMPayload": "00EB05050046E90F",
                "FPort": 102
            },
            "creatorId": "your@email.com",
            "id": "59df940b46e0fb0028fb????",
            "checksum": "F1F3C807902AA03C4BCF2FAEE986B460C1E0434451682A6BE7799D0D07B28B98L266",
            "tstamp": {
                "$numberLong": "1507824651492"
            },
            "origin": {
                "tokendata": {
                    "id": "3766b4fc-4fae-49ab-afc4-cb0d741d????"
                },
                "desc": "Object of Type io.microshare.demo.sensor.temprature",
                "name": "io.microshare.demo.sensor.temprature",
                "createDate": {
                    "$numberLong": "1507824651492"
                },
                "creatorId": "your@email.com",
                "id": "59df940b46e0fb0028fb????",
                "checksum": "F1F3C807902AA03C4BCF2FAEE986B460C1E0434451682A6BE7799D0D07B28B98L266"
            },
            "recType": "io.microshare.demo.sensor.temprature",
            "owner": {
                "appid": "51C54CDB-D278-FFFF-B8378EF13462????",
                "org": "com.email",
                "user": "your@email.com"
            }
        }
      ]  
  }
{% endhighlight %} 

### D. Read any record(s)
You can also read any record from which you know the recType and/or id.  
This call will always return an array and depending on the read, you may have 0 or more records returned.

To get records by the recType and id:

{% highlight js %}
  var record = lib.readShareById(auth, "com.yourdomain.yourrecType", "yourid");

{% endhighlight %}

To get records by the recType and associated tags:

{% highlight js %}
  var tags = ["tag1", "tag2"]
  var record = lib.readShareByTags(auth, "com.yourdomain.yourrecType", tags);

{% endhighlight %}

### E. Data lake advanced queries
You can use [VIEWS](https://microshare.github.io/docs/0.1/getting-started/views-guide/) to do advanced queries to the data lake.

Views run an aggregation query on the data lake entries and can take parameters. The returned format is the same as the read.

{% highlight js %}
  //Include the helper objects which allows you to read and write to Microshare® datalake
  var lib = require('./libs/helpers');

  // Always need a main function, but can have other functions to keep your code modular.
  function main(text, auth) {
    print('################################# VIEW READ START ###########################');
    
    var queryParams = {
        "substitute": "value"
    };
    
    var viewResult = lib.readShareByView(auth, "com.your.recType", "1234viewid", queryParams);
    
    print('################################# VIEW READ END #############################');
  }
{% endhighlight %}

IMPORTANT: Your View must have the same recType as the one triggering the Robot !!! 

### F. Data Parsing

Ideal for separating different sensor records coming from the same stream of IoT packages.  
For example if you have a single platform pushing records about 2 different devices through the same pipe (same recType), you might want to parse by devEUI after.  

The example below shows how one Robot can parse two devEUI.  
Another strategy would be to use one Robot per devEUI, that can be turned on and off to start or stop 2 data flows.  

{% highlight js %}
  var lib = require('./libs/helpers');

  function main(text, auth) {
    print('################################# MY SCRIPT START ###########################');

    var rec = lib.parseMsg(text);
    var m = rec.objs[0].data;
    var recType = rec.objs[0].recType;

    if (m.DevEui == "58-A0-CB-FF-FF-FE-??-??") {
        
        //Motion Sensor
        //Write a new record with the Motion Sensor payload and the Time included in the network info
        lib.writeShare(auth, recType + '.motionsensor', {"payload": m.FRMPayload, "timestamp": m.ArrTime}, ['payload', 'timestamp']);
        
    } else if (m.DevEui == "58-A0-CB-FF-FF-FE-??-??") {
        
        //Healthy Home Sensor
        //Write a new record with the Healthy Home Sensor payload and the Time included in the network info
        lib.writeShare(auth, recType + '.healthyhomesensor', {"payload": m.FRMPayload, "timestamp": m.ArrTime}, ['payload', 'timestamp']);        
    }

    print('################################# MY SCRIPT END #############################');
  }
{% endhighlight %} 

### G. Data Transformation

Robots are running JS scripts, so any data transformation logic can be added to your workflow.  
A usual transformation step of your workflow is the decoding of your IoT Payload. See our list of decoding methods [here](/docs/1/advanced/robots-libraries/decoding-payloads).

IMPORTANT: The Robot scripts use ES6 only, so you can't rely on your usual browser APIs for data transformation

Below is an example of Payload decoding, ending up in writing a new record in the datalake:
{% highlight js %}
  var lib = require('./libs/helpers');

  function main(text, auth) {
    print('################################# MY SCRIPT START ###########################');

    var rec = lib.parseMsg(text);
    var m = rec.objs[0].data;
    var recType = rec.objs[0].recType;

    var decodedRecord = lib.decodeTabsHealthyHomeSensor(m.payload);
    var decodedRecordJSON = JSON.parse(decodedRecord);
    decodedRecordJSON.timestamp = m.timestamp;

    //Save the record enhanced with the decoded data
    lib.writeShare(auth, recType + '.decoded', decodedRecordJSON, ['status', 'battery', 'temperature', 
'humidity', 'CO2', 'VOC', 'timestamp']);

    print('################################# MY SCRIPT END #############################');
  }
{% endhighlight %}

### H. Data Formatting

Data formatting in a Robot allows you to identify interesting records, and format the data to be used in your report, App or Dashboard.  
Below is an example of a Robot passing only high CO2 records.

{% highlight js %}
    var lib = require('./libs/helpers');

  function main(text, auth) {
    print('################################# MY SCRIPT START ###########################');

    var rec = lib.parseMsg(text, auth, []);
    var m = rec.objs[0].data;
    var recType = rec.objs[0].recType;
    
    if(m.CO2 > 1500){
        var highValueRecord = {'CO2':m.CO2, 'CO2Unit':m.CO2Unit, 'timestamp':m.timestamp};
        
        var newRecType = recType.replace('decoded','highCO2');
        
        lib.writeShare(auth, newRecType, highValueRecord, ['highCO2', 'timestamp']);
    
    }

    print('################################# MY SCRIPT END #############################');
  }
{% endhighlight %}

### I. External services triggering
You have access to notifications libraries, and RESTful POST and GET from a Robot script. This allows you to call external services from your data workflow.  
For example, at Microshare® we like to log on our slack channel, below is an example about how to do just that.

{% highlight js %}
  var webhookURL = 'The webhook to a Slack channel: https://api.slack.com/incoming-webhooks';
  var body = '{\"text\":\"' + JSON.stringify(m, null, '\t').replace(/"/g, "\\\"") + '\"}';
  lib.post(webhookURL, headers, body);
{% endhighlight %}

For more examples, see our [notification methods](/docs/1/advanced/robots-libraries/sending-notifications) and [calling external APIs methods](/docs/1/advanced/robots-libraries/making-restful-calls)

### J. Write data to the data lake
As shown above, each step of a workflow usually ends with writting a record in the data lake.  

A data write use is twofold: it builds the audit trail of your data, and allows to trigger the next step of the workflow.

As shown below, you can specify the recType and tags of your new data entry.
{% highlight js %}
  var lib = require('./libs/helpers');

  function main(text, auth) {
    print('################################# VIEW READ START ###########################');
    var tags = ['some', 'list', 'tags'];
    var write = lib.writeShare(auth, recType, obj, tags);
    
    print('################################# VIEW READ END #############################');
  }
{% endhighlight %} 

### K. Data workflow example

In this example we are receiving data from two Tabs sensor in a building in London.  
We want to display the latest high CO2 alerts in an App, available to all Microshare® employees.  

Our data workflow is the following:
1. Parse the incoming data stream to single out the Healthy Home Sensor
2. Decode the Payload from the Healthy Home Sensor
3. Single out cases where the CO2 level is high, and pass only those to the next step
4. Aggregate the latest 10 records with [a View](../views-guide)
5. Setup [a Rule](../rules-guide) so that all Microshare® employees can run the aggregation View

At Microshare® we usually represent data workflows with [draw.io](https://www.draw.io) diagrams. [Click here to see is a data workflow template](/assets/html/Data Workflow Template.html) that describes this example.  

 1 would use the snippet from the [Data Parsing](#data-parsing) above  
 2 would use the snippet from the [Data Transformation](#data-transformation) above  
 3 would use the snippet from the [Data Formatting](#data-formatting) above  
 4 The View query would be:  
{% highlight JSON %}
  [
    {"$match" : {"recType" : "london.tabs.healthyhomesensor.highco2"}},
    {"$limit" : 10}
  ] 
{% endhighlight %}
 5 The Rule would point to the View's recType, allow Execute operation, with the Requestor Organization set to &

## 2. What's next?
You have now access to decoded IoT data through the Microshare® API. This allows you to build whatever view you want with your favorite tools: web Apps, mobile Apps, Dashboards, etc. Unleash the data, and let your imagination go wild!  
