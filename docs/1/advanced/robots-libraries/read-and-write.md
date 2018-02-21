---
layout: docs
title: Read and Write records from the microshare datalake
description:
group: advanced
toc: true
---

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
  // Include the helper objects which allows you to read and write to microshare datalake
  var lib = require('./libs/helpers');

  // Always need a main function, but can have other functions to keep your code modular.
  function main(text, auth) {
    print('################################# RECORD READ START ###########################');
    var tags = ["tempID1234"]
    var record = lib.read('{"message":"source=ShareService,type=objs,recType=io.microshare.demo.sensor.temprature,id="}', auth, tags);

    print('################################# RECORD READ END #############################');
  }
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