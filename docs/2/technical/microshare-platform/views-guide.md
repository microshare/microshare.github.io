---
layout: docs
title: Views Guide
description: Comprehensive guide to understand Views
toc: true
---

---------------------------------------

##### SUMMARY : 

1. [What is a View?](./#1-whats-a-view)
2. [What can I do with them?](./#2-what-can-i-do-with-them)
  - [Query the Data Lake](./#--query-data-lake)
  - [Create Sample or Reference Data](./#--create-sample-or-reference-data)
3. [How do I use them?](./#3-how-do-i-use-them)
  - A. [Creating a View](./#--a-creating-a-view)
  - B. [Static Views](./#--b-a-static-view)
  - C. [Pipeline Query Views](./#--c-a-pipeline-query-view)
4. [Default View query size](./#4-default-view-query-size)
5. [String replacements for Views](./#5-string-replacements-for-views)
6. [Putting it together (Tracking Record Count Use Case)](./#6-putting-it-together)

---------------------------------------

## 1. What is a View?
---------------------------------------
A View is a component for managing data access. It provides advanced ways of querying the data lake. A view can also be used to store and retrieve proprietary static data.

## 2. What can I do with a View?
---------------------------------------

#### Query the Data Lake
Use the "Pipeline Query" option to query the data lake. The query format is based on [MongoDB Aggregation Query](https://docs.mongodb.com/v3.4/aggregation/). Using a view gives you more advanced control over data retrieval than you have using the Microshare RESTful API calls on their own.

Use a view to

  • Apply search criteria  
  • Group data  
  • Sort data  
  • Flatten or restructure data into a format more easily consumable by your application or use case
  • Configure precise share rules

Note that using search criteria inside a view provides distinct advantages over using vanilla API calls.  For example:
  
  • The record limit is applied AFTER the match is performed so that you can more easily retrieve a predictable number of records from YOUR data  
  • Retrieving historical data is easier using a view since you can include the start and end dates in the match criteria.  With the API, the only way to do this is via pagination.
  • Views allow you fine-grained control over who has access to which parts of your data.  For example, you can write a view to expose a subset of your data and then write share rules to specify who has access to the data returned by the view.  
  • The performance of data retrieval is better with a view since Microshare caches data returned by views.

#### Create Sample Data or Configuration Data
Use the "Static JSON" option to  

  •  Create fixed data samples for testing  
  •  Store and retrieve your own proprietary configuration data  

## 3. How do I use Views?
 
#### How to create a View

Views can be created via the API or through the "View" editor in the Composer Console. To get to the View editor, click "MANAGE" in the upper navigation panel. A horizontal panel will appear on the left side of the page. Select the "VIEWS" panel navigator on the left to see a list of your saved Views. 

{% include image.html url="/assets/img/composer-fact-factindex1.jpg" description="View Index - Card View" %}

Click the "Create" button to create a new View for your data.

#### Static Views

To create a view that returns static data, select the tab "Static JSON".  From here you can input or paste static data into the editor section in JSON format.

{% include image.html url="/assets/img/composer-fact-create-static1.jpg" description="View Create Static" %}

Click the "Create" button on the top to create your new View.

#### Pipeline Query Views

To create a view that can retrieve, aggregate or transform data from the Microshare® data lake using the MongoDB aggregation query language, select the tab "Pipeline Query".

{% include image.html url="/assets/img/composer-fact-create-query1.jpg" description="View Create Query" %}

##### Search via $match
$match allows you to specify search criteria to find records.

For example, this will get you all records which have a "recType" of "io.microshare.environment.unpacked.  
{% highlight JSON %}  
  [
    {"$match": {"recType": "io.microshare.environment.unpacked"}}
  ]
{% endhighlight %}  

Additional search criteria can be added to the $match statement by appending them to the $match elements.
{% highlight JSON %}[
  {
    "$match": {
      "recType": "io.microshare.environment.unpacked",
      "data.meta.device": {
        "$all": [
          "London"
        ]
      }
    }
  }
]{% endhighlight %}  

In this example, the search will return all records with a recType of "io.microshare.environment.unpacked and a location tag of "London" that the user has access to.


##### Sorting Multiple Records
This example demonstrates how to return the records in order of their timestamp, but you can sort by any field in your data or meta-data.  
{% highlight JSON %}  
[
  {
    "$match": {
      "recType": "io.microshare.environment.unpacked"
    }
  },
  {
    "$sort": {
      "data.meta.iot.time": -1
    }
  }
]
{% endhighlight %}  

The sort can also be on any other field in the records.  
{% highlight JSON %}
  "$sort": {
    "data.meta.iot.device_id": -1
  }
{% endhighlight %}  

##### Group by Defined Data Elements
You can use the Mongo query language to group the results of the query for certain operations such as sum, count, max, min, first, last or average.  

The following example returns the latest "device" structure and location tags for each unique device id. This can be helpful for determining battery life.
{% highlight JSON %}  
[
  {
    "$match": {
      "recType": "io.tracknet.healthy.TBHV100"
    }
  },
  {
    "$sort": {
      "data.meta.iot.time": -1
    }
  },
  {
    "$limit": 1000
  },
  {
    "$group": {
      "_id": {
        "devEUI": "$data.device.id"
      },
      "loc1": {
        "$last": {
          "$arrayElemAt": [
            "$data.meta.device",
            0
          ]
        }
      },
      "loc2": {
        "$last": {
          "$arrayElemAt": [
            "$data.meta.device",
            1
          ]
        }
      },
      "loc3": {
        "$last": {
          "$arrayElemAt": [
            "$data.meta.device",
            2
          ]
        }
      },
      "device": {
        "$last": "$data.device"
      }
    }
  }
]
{% endhighlight %}  

Or you count of how many records there are for each of the regions:
{% highlight JSON %}
    "$group": {
      "_id": "$data.region",
      "count" : {"$sum" : 1 }
    }
{% endhighlight %}  

##### Specify which fields to share using $project
You can selectively return only data fields you want to expose and/or change the name of the fields in the data returned.

In the following example, each record will contain 2 fields with newly defined fieldnames.  The record id from the data lake is also added by the system as default.
{% highlight JSON %}
[
  {
    "$match": {
      "recType": "io.microshare.environment.unpacked"
    }
  },
  {
    "$project": {
      "temp": "$data.temperature.0.value",
      "humidity": "$data.humidity.0.value"
    }
  }
]
{% endhighlight %}  



For more details of query syntax, please refer to the MongoDB doc site 
[Aggregation Pipeline Operators](https://docs.mongodb.com/manual/reference/operator/aggregation/).


## 4. Default View query size
---------------------------------------

To optimize the performance of your View query, it is not run against your whole collection of records - that could encompass millions of entries.  Instead, it is run by default against the most recent 999 records matching your match clause.  
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

## 5. String replacements for Views
---------------------------------------

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
  [ 
    {
      "$match": {
        "recType": "${recType}",
          "data.meta.iot.time": {
            "$gt": "${timeLimit}"
          }
        }
    }
]
{% endhighlight %} 

And trigger it with this Robot call:
{% highlight js %}
  var lib = require('./libs/helpers');

  function main(text, auth) {
      
      var now = new Date().getTime();
      
      var oneMinuteAgo = new Date(now - 60000).getTime();

      var paramMap = {
            timeLimit: oneMinuteAgo
      }; 
      
      lib.readShareByView(auth, "com.your.recType", "1234", [], paramMap);
  }
{% endhighlight %}

The ```timeLimit``` variable passed along in the ```lib.readShareByView()``` parameters will replace the ```${timeLimit}``` value in the View's pipeline query.  
The View will then run its query and retrieve only the records created in the last minute.

### Edit and Test View

You can edit your Views by selecting and clicking on the pen icon to open the View editor view. 

{% include image.html url="/assets/img/composer-fact-edit-edit1.jpg" description="View Index - Card View" %}

To test the response of this fact in the api call, scroll down to the "View Preview" section, click on the "SAVE & TEST" button to see the test results. This also works great when you want to see the query results.

{% include image.html url="/assets/img/composer-fact-edit-test1.jpg" description="View Index - Card View" %}

## 6. Putting it together: 
---------------------------------------

### Use-case: Tracking Record Count

The intent of the solution is to provide a simple programmatic way to check that the count of received records at the Microshare® layer is consistent with the expected count. 

An API call can be used to invoke a View within Microshare® whose job is to request a count between a given datetime range that corresponds with the sample duration. The response from the API can be compared against the actual recorded records to determine if they are in agreement.

To start, create a new View in Composer under the account that owns the data records in Microshare®. That view should look something like:

##### Query
{% highlight JSON %}
[
  {
    "$match": {
      "recType": "${recType}",
      "createDate": {
        "$gte": "${from}",
        "$lte": "${to}"
      }
    }
  },
  {
    "$sort": {
      "createDate": -1
    }
  },
  {
    "$limit": 2500
  },
  {
    "$count": "count"
  }
]
{% endhighlight %}

The time values might also come from a data-level datetime stamp such as data.meta.iot.time when available for common IoT data formats.

{% include image.html url="/assets/img/view-example-usecase1.png" description="View Setup for Use Case 1" %}

##### Test Parameter Example
{% highlight JSON %}
{
    "recType":"com.mycompany.sensor.unpacked",
    "from":"2020-04-03T00:00:00-0400",
    "to":"2020-04-04T00:00:00-0400"
}
{% endhighlight %}

##### API Call
`{{hostname}}/share/com.mycompany.count?id=5cd9809446e0fb002312cebe&from=2019-04-03T00:00:00-0400&to=2019-04-04T00:00:00-0400&recType=com.mycompany.sensor.unpacked`

Notice that the recType included in the path is the recType assigned to the View. It is arbitrary but must agree with the recType used to create the View in Composer. The ?id= query string parameter is the id of the View.

The other query parameter values align with the text inserts in the query (eg. &from => ${from}). The parameterization allows the calling agent to specify the datetime range and recType to allow for maximum flexibility. The recType may be the recType of either the raw OR the unpacked records. 

##### Example API Response:
{% highlight JSON %}
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
      "desc": "Derived from com.mycompany.count",
      "name": "Derived Data",
      "url": "/share/com.mycompany.count",
      "_id": "5cd9809446e0fb002312c???",
      "tags": [],
      "data": {
        "count": 18688
      },
      "id": "5cd9809446e0fb002312c???",
      "tstamp": "05/13/2019 02:40:38:311 PM",
      "recType": "com.mycompany.count"
    }
  ]
}
{% endhighlight %}

##### API Authorization
The API may authenticate as the owner of the View OR the API may leverage a separate authentication entity. In the event that a different credential is used, a Rule must be created to share the View with the API's user. To do so, select "Shares: filtered objects (via View)" from the Resource Type drop-down of the Rule and allow Read/Query/Execute operations. See documentation on [Rules](../rules-guide) for more information.

{% include image.html url="/assets/img/rule-share-view-with-select.png" description="Rule Setup for Use Case 1" %}