---
layout: docs
title: Views Guide
description: 
group: getting-started
toc: true
---

## What’s a View?

A View is a component for managing your data access. It lets you send static data, query the data lake, manage content and data formats and also puts controls over data elements along with sharing rules.

## What can I do with them?

#### - Query Data Lake
Use the "Pipeline Query" option to query the data lake. The query format is based on [MongoDB Aggregation Query](https://docs.mongodb.com/v3.4/aggregation/). It can apply search criteria, group data elements, sort and project necessary data elements as results.

#### - Create Sample or Reference Data
Use the "Static JSON" option to create data samples for testing or reference data.

## How do I use them?

You'll need to create and save a View into the "VIEWS" section from the "MANAGE" menu of the Microshare portal.
 
#### - Creating a View

Views can be created via API or through the Rule editor in the Composer Console. To get to the View editor, click "MANAGE" in the upper navigation panel. A horizontal panel will appear on the left side of the page. Select the "VIEWS" panel navigator on the left to see a view of all of your saved Views. 

{% include image.html url="/assets/img/composer-fact-factindex1.jpg" description="View Index - Card View" %}

Click the "Create" button to create a new View for your data.

#### - A Static View

Views can be used to create static data, by selecting the tab "Static JSON", it will allow you to input or paste static data into the editor section in JSON format.

{% include image.html url="/assets/img/composer-fact-create-static1.jpg" description="View Create Static" %}

Click the "Create" button on the top to create your new View.

#### - A Pipeline Query View

Views can be configured to aggregate or obfuscate data from the Microshare datalake using MongoDB aggregation query language. This will allow you to do the following searches, sorts, projections, and groups:

{% include image.html url="/assets/img/composer-fact-create-query1.jpg" description="View Create Query" %}

##### * Search via $match;
$match allows you to put in search criteria to find records, this will get you all records of the "recType" with a value of "io.microshare.demo.sensor.temprature".
{% highlight JSON %}  
  [
    {"$match": {"recType": "io.microshare.demo.sensor.temprature"}}
  ]
{% endhighlight %}  
For more criteria of search, just add them in the $match elements
{% highlight JSON %}  
[
  {
    "$match": {
      "recType": "io.microshare.demo.sensor.temprature",
      "data.FCntUp": 168
    }
  }
]{% endhighlight %}  


##### * Sort when multiple records returns;
This sample shows what happens when you sort by timestamp on the record, but you can sort by any data element in your data or meta-data
{% highlight JSON %}  
[
  {
    "$match": {
      "recType": "io.microshare.demo.sensor.temprature"
    }
  },
  {
    "$sort": {
      "tstamp": -1
    }
  }
]
{% endhighlight %}  
The sort can also be any data elements in the records
{% highlight JSON %}
"$sort": {
    "data.region": 1
}
{% endhighlight %}  

##### * Group by Defined Data Elements;
Group by is used when you have multiple returns and need to group the results for certain operations like sum, count, avg, or as examples show, get only the first record.
{% highlight JSON %}  
[
  {
    "$match": {
      "recType": "io.microshare.demo.sensor.temprature"
    }
  },
  {
    "$group": {
      "_id": "$data.region",
      "data": {
        "$first": "$data"
      }
    }
  }
]
{% endhighlight %}  
Or you can do a count of how many records there are for each of the regions:
{% highlight JSON %}
    "$group": {
      "_id": "$data.region",
      "count" : {"$sum" : 1 }
    }
{% endhighlight %}  

##### * Returns only data elements you want to share using $project;
You can selectively return only data elements you want to expose and change the name of elements in the data returned.
{% highlight JSON %}
[
  {
    "$match": {
      "recType": "io.microshare.demo.sensor.temprature"
    }
  },
  {
    "$project": {
      "region_Name": "$data.region",
      "region_ID": "$data.regionid",
      "sensorData": "$data.FRMPayload",
      "Session_ID": "$data.SessID"
    }
  }
]
{% endhighlight %}  
Be aware of the data return as above will be 4 elements with new names defined, plus a system record of object id in the data lake, which is added by the system as default.
{% highlight JSON %}
        "_id": {
          "$oid": "59dfa6a646e0fb0022dd17d3"
        },
{% endhighlight %}  


For more details of query syntax, please refer to the MongoDB doc site 
[Aggregation Pipeline Operators](https://docs.mongodb.com/manual/reference/operator/aggregation/)


## Default View query size

To optimize the performance of your View query, it is not run against your whole collection of records, that can reach millions of entries, but run by default against the set of the most recent 999 records matching your match clause.  
So a View query like this:

{% highlight JSON %}  
  [
    {"$match": {"recType": "com.your.recType"}}
  ]
{% endhighlight %}  

Is interpreted as:  

{% highlight JSON %}
  [
    {"$match": {"recType": "com.your.recType"}},
    {"$limit": 999}
  ]
{% endhighlight %}

To override this default behavior, you can specify your own $limit clause.
For example in this request:
{% highlight JSON %}
  [
    {"$match": {"recType": "com.your.recType"}},
    {"$limit": 42},
    {"$project": {"myData":"$data"}
  ]
{% endhighlight %}
the $project clause is run against the most recent 42 records with the recType com.your.recType, making it that much faster.

## String replacements for Views
Static and Query Views support String replacement of variables with the syntax ```${myVariable}```.  
The replacement values can be passed via the /share API call, or through the lib.readShareByView functions params parameter of a [Robot](../robot-guide).

### Example 1: String replacement for Static Views via /share calls
Consider a static View with a recType of ```com.your.recType``` and an id of ```1234```, with the following static entry:
{% highlight JSON %}
  {"name":"${myName}", "age":${myAge}}
{% endhighlight %}

You can dynamically replace the ```${myAge}``` and ```${myName}``` variable as you call the View via a API /share as such:   
```/share/com.your.recType?id=1234&myName=Bob&myAge=35```
Is interpreted as 
{% highlight JSON %}
  {"name":"Bob", "age":35}
{% endhighlight %}

### Example 2: String replacement for Views query from a Robot
A very powerful way to customize a View query is to pass it a dynamic variable calculated by a Robot.

For example, if you want to get all records of recType myRecords *created in the last minute*, you can use this View query (View recType ```com.your.recType``` and id ```1234```):
{% highlight JSON %}
  [{"$match": {"recType": "myRecords", "tstamp": {"$gt": ${timeLimit} }}}]
{% endhighlight %} 

And trigger it with this Robot call:
{% highlight js %}
  var lib = require('./libs/helpers');

  function main(text, auth) {
      
      var now = new Date();
      
      var oneMinuteAgo = new Date(now - 60000).getTime();

      var paramMap = {
            timeLimit: oneMinuteAgo
      }; 
      
      lib.readShareByView(auth, "com.your.recType", "1234", [], paramMap);
  }
{% endhighlight %}

The ```timeLimit``` variable passed along in the ```lib.readShareByView()``` parameters will replace the ```${timeLimit}``` mvel insert in the View's pipeline query.  
The View will then run its query and retrieve only the records created in the last minute.

#### - Edit and Test View

You can edit your Views by selecting and clicking on the pen icon to open the View editor view. 

{% include image.html url="/assets/img/composer-fact-edit-edit1.jpg" description="View Index - Card View" %}

To test the response of this fact in the api call, scroll down to the "View Preview" section, click on the "SAVE & TEST" button to see the test results. This also works great when you want to see the query results.

{% include image.html url="/assets/img/composer-fact-edit-test1.jpg" description="View Index - Card View" %}