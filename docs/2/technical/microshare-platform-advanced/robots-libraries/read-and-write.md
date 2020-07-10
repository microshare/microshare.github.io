---
layout: docs
title: Read and Write records from the Microshare® datalake
description:
group: advanced
toc: true
---

## Read data from the data lake

Your workflow will usually start with reading data that was pushed to the data lake. This can be triggered automatically if your Robot was listening to a data stream recType, or periodically with a scheduled Robot.  
Below are code snippets to read data from the data lake.  

### Read record triggering the Robot

Parse the message that triggered the Robot using lib.parseMsg to get the data and metadata: 

{% highlight js %}
  // Include the helper objects which allows you to read and write to Microshare® datalake
  var lib = require('./libs/helpers');

  // Always need a main function, but can have other functions to keep your code modular.
  function main(text, auth) {
    print('################################# RECORD READ START ###########################');
    
    var resp1 = lib.parseMsg(text);
    if (resp1.err != 1) {
        print('resp1 = ' + JSON.stringify(resp1));
        print('obj = ' + JSON.stringify(resp1.objs[0]));
        print('updater = ' + JSON.stringify(resp1.objs[0].updaterId));
        print('recType = ' + JSON.stringify(resp1.recType));
    }
    
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

### Read any record(s)
You can also read any record from which you know the recType and/or id.  
This call will always return an array and depending on the read, you may have 0 or more records returned. The final parameter to each readShareBy call is optional.

To get records by the recType and id:

{% highlight js %}
// Include the helper objects which allows you to read and write to Microshare® datalake
  var lib = require('./libs/helpers');

  // Always need a main function, but can have other functions to keep your code modular.
  function main(text, auth) {
      print('################################# RECORD READ START ###########################');
      var tags = ["tag1", "tag2"]
      var record = lib.readShareById(auth, "com.yourdomain.yourrecType", "yourid");
      print('################################# RECORD READ END #############################');
  }
{% endhighlight %}

To get records by the recType and associated tags:

{% highlight js %}
// Include the helper objects which allows you to read and write to Microshare® datalake
  var lib = require('./libs/helpers');

  // Always need a main function, but can have other functions to keep your code modular.
  function main(text, auth) {
      print('################################# RECORD READ START ###########################');
      var tags = ["tag1", "tag2"]
      var record = lib.readShareByTags(auth, "com.your.recType", tags);
      print('################################# RECORD READ END #############################');
  }
{% endhighlight %}

### Data lake advanced queries
Review [Views Guide](../../../getting-started/views-guide/) to perform advanced queries against the data lake.

Views run an aggregation query on the data lake entries and can take parameters. The returned format is the same as the read.

{% highlight js %}
  //Include the helper objects which allows you to read and write to Microshare® datalake
  var lib = require('./libs/helpers');

  // Always need a main function, but can have other functions to keep your code modular.
  function main(text, auth) {
    print('################################# VIEW READ START ###########################');
    
    var queryParams = {
        "id": "any view id"
    };
    
    var viewResult = lib.readShareByView(auth, "com.your.recType", "1234viewid", queryParams);
    
    print('################################# VIEW READ END #############################');
  }
{% endhighlight %}

## Write data to the data lake
As shown above, each step of a workflow usually ends with writing a record in the data lake.  

A data write use is threefold: commits data to long-term storage, generates an audit trail of your data, and triggers the create event to start the next step of the workflow.

As shown below, you can specify the recType and tags of your new data entry.
{% highlight js %}
  var lib = require('./libs/helpers');

  function main(text, auth) {
    print('################################# WRITE START ###########################');
    
    var tags = ['some', 'tag', 'list'];

    var write = lib.writeShare(auth, recType, obj, tags);
    
    print('################################# WRITE END #############################');
  }
{% endhighlight %} 

## Function Quick Reference
**function parseMsg(text)**

    usage: parse the triggering message to obtain object and metadata
    input: text: JsObject
    output: JsObject{
        err: 0 = good, 1 = fail
        msg: error string or Success
        if err = 0
            meta: counts of returned shares
            objs[]: array of triggering shares [should be index 0]
            id: id of returned share
            recType: recType of returned share
    }

**function readShareById(auth, recType, id, params)**

    usage: read a single share from the datalake with the specified id and recType
    input: auth: String, recType: String, [optional] params: JsObject
    output: JsObject{
        err: 0 = good, 1 = fail
        msg: error string or Success
        if err = 0
            meta: counts of returned shares
            objs[]: array of returned shares [should be index 0]
            id: id of returned share
            recType: recType of returned share
    }

**function readShareByTags(auth, recType, tags, params)** 

    usage: read a shares from the datalake that contain all tags
    input: auth: String, recType: String, tags: Array[String], [optional] params: JsObject
    output: JsObject{
        err: 0 = good, 1 = fail
        msg: error string or Success
        if err = 0
            meta: counts of returned shares
            objs[]: array of returned shares
            id: empty string
            recType: recType of returned shares
    }

function readShareByView(auth, recType, viewId, params)**

    usage: read a view from the datalake by recType and viewId
    input: auth: String, recType: String, viewId: String, [optional] params: JsObject
    output: JsObject{
        err: 0 = good, 1 = fail
        msg: error string or Success
        if err = 0
            meta: counts of returned shares
            objs[]: array of the returned view objects
            viewId: id of the invoked view
            recType: recType of the invoked view
    }

**function writeShare(auth, recType, obj, tags)**

    usage: write a new share into the datalake
    input: auth: String, recType: String, obj: JsObject, tag: Array[String]
    output: JsObject{
        err: 0 = good, 1 = fail
        msg: error string or Success
        if err = 0
            meta: counts of returned shares
            objs[]: array of the returned view objects
            id: id of created share
            recType: recType of the invoked view
    }

**function writeShareWithOwners(auth, recType, obj, tags, owners)**

    usage: write a new share into the datalake with specified co-owners
    input: auth: String, recType: String, obj: JsObject, tag: Array[String], owners: JsObject
    output: JsObject{
        err: 0 = good, 1 = fail
        msg: error string or Success
        if err = 0
            meta: counts of returned shares
            objs[]: array of the returned view objects
            id: id of created share
            recType: recType of the invoked view
    }

