---
layout: docs
title: Facts Guide
description: 
group: getting-started
toc: true
---

## What’s a Fact?

Fact is a component for managing your data access. It lets you to send static data, or query into data lake, manage the content and format of data, 
and put controls over data elements alone with sharing rules.

## What can I do with them?

#### - Give Sample Data
Use "Static" option to give data sample for testing or data format and content type discovery.

#### - Query Data Lake
Use "ObjectStore" option to query data lake, current support mongoDB aggregation query. It can apply search criteria, group data elements, sort and project only necessary data elements as results.

#### - Trigger a Data Process
Use "Component" option to trigger start a microshare flow to process data.




## How do I use them?

You'll need to create and save a Fact into "FACTS" section in "MANAGE" of microshare portal.
 
#### - Creating a Fact

Fact can be created via API or through the Rule editor in the Composer Console. To get the the Fact editor, click "MANAGE" in the upper navigation panel. A horizontal panel will appear on the left-side of the page. Select the "FACTS" panel navigator on the left to see a view of all of your saved Facts. 

{% include image.html url="/assets/img/composer-fact-factindex1.jpg" description="Fact Index - Card View" %}

Click the "Create" button to create a new Fact for your data.

#### - A Static Fact

Fact can be used to give static data content, by selecting the tab "Static", it will allow you to input or paste static data into the editor section in JSON format.

{% include image.html url="/assets/img/composer-fact-create-static1.jpg" description="Fact Index - Card View" %}

Click the "Create" button on the top to create your new Fact.

#### - Edit and Test Fact

You can edit your Fact by select and click on pen icon to open the Fact editor view. 

{% include image.html url="/assets/img/composer-fact-edit-edit1.jpg" description="Fact Index - Card View" %}

To test what the response of this fact in the api call, scroll down to "Fact Preview" section, click on "SAVE & TEST" button to see the test results. This also works great when you want to see the query results.

{% include image.html url="/assets/img/composer-fact-edit-test1.jpg" description="Fact Index - Card View" %}

#### - A Fact Query the Data Lake

Fact can be a query into data lake using MongoDB aggregation query. This can let you do 
##### * Search via $match;
$match let you put in search criteria to find records, this get you all records of "recType" is "io.microshare.demo.sensor.temprature".
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
This sample shows sort by timestamp on the record, but you can sort by any data element in your data or meta-data
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
Or the sort can be any data elements in the records
{% highlight JSON %}
"$sort": {
    "tstamp": -1
}
{% endhighlight %}  

##### * Group by Defined Data Elements;
Group by is used when you have multiple returns and need to group the results for certain operations like sum, count, avg, or as example shows, get only the first record.
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
Or the you can do a count of how many records for each of region:
{% highlight JSON %}
    "$group": {
      "_id": "$data.region",
      "count" : {"$sum" : 1 }
    }
{% endhighlight %}  

##### * Returns only data elements you want to share using $project;
You can selectively return only data elements you want to bring in, and change the name of elements when data returns.
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
Be aware of the data return as above will be 4 elements with new names defined, plus a system record of object id in the data lake, which is added by system as default.
{% highlight JSON %}
        "_id": {
          "$oid": "59dfa6a646e0fb0022dd17d3"
        },
{% endhighlight %}  


For more details of query syntex, please refer to mongodb doc site
[Aggregation Pipeline Operators](https://docs.mongodb.com/manual/reference/operator/aggregation/)


## Default Fact query size

To optimize the performance of your Fact query, it is not run against your whole collection of records, that can reach millions of entries, but run by default against the set of the most recent 999 records matching your match clause.  
So a Fact query like this:

{% highlight JSON %}  
  [
    {"$match": {"recType": "myRecType"}}
  ]
{% endhighlight %}  

Is interpreted as:  

{% highlight JSON %}
  [
    {"$match": {"recType": "myRecType"}},
    {"$limit": 999}
  ]
{% endhighlight %}

To override this default behavior, you can specify your own $limit clause.
For example in this request:
{% highlight JSON %}
  [
    {"$match": {"recType": "myRecType"}},
    {"$limit": 42},
    {"$project": {"myData":"$data"}
  ]
{% endhighlight %}
the $project clause is run against the most recent 42 records with the recType myRecType, making it that much faster.

## String replacements for Facts
Static and Query Facts support String replacement of variables with the syntax ```${myVariable}```.  
The replacement values can be passed via the /share API call, or through the lib.read library of a [Robot](../robot-guide).

### Example 1: String replacement for Static Facts via /share calls
Consider a static Fact with a recType of ```myRecType``` and an id of ```1234```, with the following static entry:
{% highlight JSON %}
  {"name":"${myName}", "age":${myAge}}
{% endhighlight %}

You can dynamically replace the ```${myAge}``` and ```${myName}``` variable as you call the Fact via a API /share as such:   
```/share/myRecType?id=1234&myName=Bob&myAge=35```
Is interpreted as 
{% highlight JSON %}
  {"name":"Bob", "age":35}
{% endhighlight %}

### Example 2: String replacement for Facts query from a Robot
A very powerful way to customize a Fact query is to pass it a dynamic variable calculated by a Robot.

For example, if I want to get all records of recType myRecords *created in the last minute*, I can use this Fact query (Fact recType ```myRecType``` and id ```1234```):
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
            id: 1234,
            timeLimit: oneMinuteAgo
      }; 
      
      lib.read(text, auth, [], paramMap);
  }
{% endhighlight %}

The ```timeLimit``` variable passed along in the ```lib.read()``` parameters will replace the ```${timeLimit}``` in the Fact query.  
The Fact will then run its query, and retrieve only the records created in the last minute.