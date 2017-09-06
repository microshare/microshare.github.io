---
layout: docs
title: Pipeline Workflows
description: Pipeline Workflows with Robots
group: getting-started
toc: true
---

## For preparing your data to be used in Apps and Dashboards
You can set up automatic multisteps processes to transform your data so that it can be of the right format whan you access that data in an App or Dashboard.  
Each step of the pipeline is managed by a Robot.  
Here are some available Robot actions.  

FIRST, HAVE A LOOK AT THE ROBO GUIDE
//TODO link to Robot guide

## Data lake Read
### Read record triggering the Robot

Ideal for validation

Read the record that triggers the Robot thanks to our handy lib.  
You can grab the data, the id, the recType...  

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
  //TODO a real share result
{% endhighlight %}

An error will appear like this.  
//TODO error data model

So this is how you would safely detect those errors.  
//TODO code snippet  

### Read any record
You can also read any record from which you now the recType and/or id.  
Will return an array all the time, you can have more than one record returned.  
Perform like the API call.  
//TODO link to the API lib  
//TODO code snippet of the advanced read  
//Same recType as triggering the Robot, returning an array of results  

Same error handling ?  

## Data lake Write
You can write back a record after transformation of the data.  
You need to choose the recType, tags if you want.  
//TODO link to an article about tags
//TODO code snippet of the write  
This is what you get back  
//TODO write data model

And this is how errors can be handled
//TODO error data model

//TODO code snippet how to handle errors

## Data lake advanced queries
You can use FACTS to do advanced queries to the database.
//TODO link to FACTS documentation
Basically an aggregation query to the DB
Calling a fact is done from the lib.read with special parameters  
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

Also is an array of result
{% highlight js %}
  // TODO code snippet of calling a facts result 
{% endhighlight %}

Error handling
// TODO error data model
So
// TODO code snippet

IMPORTANT: Right now your Fact must have the same recType as the one triggering the Robot !!!  

## Data Parsing
Ideal for seperating different message coming from the same platform.  
For example if you have a single platform pushing records about 3 different devices through the same pipe (same recType), you might want to parse by devEUI after.  
Best practice for parsing is to create one Robot for each result you want. So for 3 devEUI you would create 3 Robotts like this:
// TODO code snippet listening to 1 recType and saving if the devEUI works.

If you don't want to record a devEUI anymore you just have to turn the one Robot off.    

## Data Transformation
Robo is a script, so you can do many actions.  
Ideal for decoding an IoT record.  
IMPORTANT this is ES6 only, so you can't rely on usual browser APIs

Couple examples of decoding you can do
//TODO code snippet of base64 decoding
//TODO code snippet of temp decoding from binary

We will build or use libraries in the future for the common decoding.

## Data Formatting
BEst practice is to build another record containing specifically the data you want, formatted as you want.  
For example, I take the last 100 recs of my recType via a fact, getting ony the entries I want. I know I need to format that to an array to do a nice pie chart though.
So that's what I do here with a foreach.  
// TODO code snippet of transforming to an array or something
// And saving a new record

Think about it, this will be triggered every time a new record is pushed through the initial entry pipe. So that final cache record will always be up to date.  
But... we actually create a new record for this recType each time you say. Yes but we can easily grab only the latest as I will show you next.

## External services triggering
You can actually do a POST to any endpoint. So that's how you trigger external services.  

For example at microshare.io we like to log on our slack channel, that is the code we use (after setting a webhook in Slack)
//TODO code snippet of a post to slack

We've got a very few libs you can use too:
Twilio code snippet
Email code snippet

## Summary of a full example
I'd like to display that as a set of tabs
Code snippet of reading the first record and validating it
Code snippet of parsing by devEUI
Code snippet of calling another record to associate a name to a devEUI

Code snippet of a Robot, that does a final formatting and adds a timestamp?
Code snippet of a schedule Robot that log something externally every 12 hours


## What's next?
Next is calling the record in a dashboard...
//TODO link to dashboard doc


