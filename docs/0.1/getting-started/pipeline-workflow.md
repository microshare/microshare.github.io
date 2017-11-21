---
layout: docs
title: Pipeline Workflows
description: Pipeline Workflows with Robots
group: getting-started
toc: true
---

## For preparing your data to be used in Apps and Dashboards
You can set up automatic multistep processes to transform your data so that it can be of the right format when you access that data in an App or Dashboard.  
Each step of the pipeline is managed by a Robot.  
Here are some available Robot actions.  

For an introduction to robots take a look at the [Robot Guide](../robot-guide)

## Data lake Read
### Read record triggering the Robot

Read the record that triggers the Robot using lib.read to get the data and metadata: 

{% highlight js %}
  var lib = require('./libs/helpers');

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
  var lib = require('./libs/helpers');

  function main(text, auth) {
    print('################################# RECORD READ START ###########################');

    var tags = ["tempID1234"]
    var record = lib.read('{"message":"source=ShareService,type=objs,recType=io.microshare.demo.sensor.temperature,id=1234"}', auth, tags);

    print('################################# RECORD READ END #############################');
  }

{% endhighlight %}

## Data lake Write
You can write back a record after transformation of the data.  
The recType is required with tags optional.   
{% highlight js %}
  var lib = require('./libs/helpers');

  function main(text, auth) {
    print('################################# RECORD WRITE START ###########################');

    var write = lib.write(recType, obj, auth, [tags]);
    
    print('################################# RECORD WRITE END #############################');
  }
{% endhighlight %}

## Data lake advanced queries
You can use [FACTS](https://microshare.github.io/docs/0.1/getting-started/facts-guide/) to do advanced queries to the data lake.

Facts run an aggregation query on the data lake entries and can take parameters. The returned format is the same as the read.

{% highlight js %}
  var lib = require('./libs/helpers');

  function main(text, auth) {
    print('################################# FACT READ START ###########################');
    
    var queryParams = {
        "id": "any fact id"
    };
    
    var factResult = lib.read(text, auth, [], queryParams);
    
    print('################################# FACT READ END #############################');
  }
{% endhighlight %}

IMPORTANT: Right now your Fact must have the same recType as the one triggering the Robot !!!  

## Data Parsing
Ideal for seperating different messages coming from the same platform.  
For example if you have a single platform pushing records about 3 different devices through the same pipe (same recType), you might want to parse by devEUI after.  
Best practice for parsing is to create one Robot for each result you want. So for 3 devEUI you would create 3 Robotts like this:
// TODO code snippet listening to 1 recType and saving if the devEUI works

If you don't want to record a devEUI anymore you just have to turn the one Robot off.    

## Data Transformation
Robot is a script, so you can do many actions.  
Ideal for decoding an IoT record.  
IMPORTANT this is ES6 only, so you can't rely on usual browser APIs

Couple examples of decoding you can do
//TODO code snippet of base64 decoding
//TODO code snippet of temp decoding from binary

We will build or use libraries in the future for the common decoding.

## Data Formatting
Best practice is to build another record containing specifically the data you want, formatted as you want.  

If a specific format were required for a report, the object could be reformatted and then a new entry written with '.reporting' appended to the record type.

{% highlight js %}
  var lib = require('./libs/helpers');

  function main(text, auth) {
    print('################################# RECORD READ AND WRITE START ###########################');

    var record = lib.read(text, auth, []);
    var data = record.objs[0].data

    for (i = 0; i < data.length; i++) { 
         var res = lib.write("o.microshare.demo.sensor.temprature", data[i], auth, [data[i].DevEui, "raw"]);
    }

    print('################################# RECORD READ AND WRITE END #############################');
  }
{% endhighlight %}

Think about it, this will be triggered every time a new record is pushed through the initial entry pipe. So that final cache record will always be up to date.  
But... we actually create a new record for this recType each time you say? Yes but we can easily grab only the latest as I will show you next.

## External services triggering
You can actually do a POST to any endpoint. So that's how you trigger external services.  

For example, at microshare.io we like to log on our slack channel, that is the code we use (after setting a webhook in Slack)

{% highlight js %}
  var lib = require('./libs/helpers');

  function main(text, auth) {
    print('################################# EXTERNAL POST START ###########################');

    var webhookURL = 'The webhook to a Slack channel: https://api.slack.com/incoming-webhooks';
    var body = '{\"text\":\"' + JSON.stringify(m, null, '\t').replace(/"/g, "\\\"") + '\"}';
    lib.post(webhookURL, headers, body);

    print('################################# EXTERNAL POST END #############################');
  }
{% endhighlight %}

We've got a very few libs you can use too:
Twilio code snippet
Email code snippet 

## Summary of a full example
I'd like to display that as a set of tabs
Code snippet of reading the first record and validating it
Code snippet of parsing by devEUI
Code snippet of calling another record to associate a name to a devEUI

Code snippet of a Robot, that does a final formatting and adds a timestamp
Code snippet of a schedule Robot that log something externally every 12 hours 


## What's next?
Next is calling the record in a [dashboard](https://microshare.github.io/docs/0.1/getting-started/dashboards/)...


