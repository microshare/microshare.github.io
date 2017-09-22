---
layout: docs
title: Facts Guide
description: Coming soon
group: getting-started
toc: true
---

## Default Fact query size

To optimize the performance of your Fact query, it is not ran against your whole collection of records, that can reach millions of entries, but ran by default against the set of the most recent 999 records matching your match clause.
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

To override this default behaviour, you can specify your own $limit clause.
For example in this request:
{% highlight JSON %}
  [
    {"$match": {"recType": "myRecType"}},
    {"$limit": 42},
    {"$project": {"myData":"$data"}
  ]
{% endhighlight %}
the $project clause is ran against the most recent 42 records with the recType myRecType, making it that much faster.

## String replacements for Facts
Static and Query Facts support String replacement of variables with the syntax ```${myVariable}```.  
The replacement values can be passed via the /share API call, or through the lib.read library of a Robot.

### Example 1: String replacement for Static Facts via /share calls
Consider a static Fact with a recType of ```myRecType``` and an id of ```1234```, with the following static entry:
{% highlight JSON %}
  {"name":"${myName}", "age":${myAge}}
{% endhighlight %}

You can dynamically remplace the ```${myAge}``` and ```${myName}``` variable as you call the Fact via a API /share as such:   
```/share/myRecType?id=1234&myName=Bob&myAge=35```
Is interpreted as 
{% highlight JSON %}
  {"name":"Bob", "age":35}
{% endhighlight %}

### Example 2: String replacement for Facts query from a Robot
A very powerful way to customize a Fact query is to pass it a dynamic variable calculated by a Robot.

For example, if I want to get all records of recType myRecords *created in the last minute*, I can use this Fact query (Fact recType ```myRecType``` and id ```1234```):
{% highlight JSON %}
  [{"$match": {"recType": "myRecords", "tstamp": {"$gt": ${timeLimit} }]
{% endhighlight %} 

And trigger it with this Robot call:
{% highlight js %}
  var lib = require('./libs/helpers');

  function main(text, auth) {
      
      var now = new Date();
      
      var oneMinuteAgo = new Date(now - 60000);

      var paramMap = {
            id: 1234,
            timeLimit: oneMinuteAgo
      }; 
      
      lib.read(text, auth, [], paramMap);
  }
{% endhighlight %}

The ```timeLimit``` variable passed along in the ```lib.read()``` parameters will replace the ```${timeLimit}``` in the Fact query.  
The Fact will then run its query, and retrieve only the records created in the last minute.