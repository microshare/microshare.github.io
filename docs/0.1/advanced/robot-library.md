---
layout: docs
title: Robot library
description: snippets of usable lib methods from Robots
group: advanced
toc: true
---

# Robot lib

The Robot library is accessible from Robot scripts via  
{% highlight js %} var lib = require('./libs/helpers'); {% endhighlight %}

It gives access to handy methods to ease your life.

Below are code snippets to guide you how to use these lib methods.

## Making GET and POST calls to external services

### calling an API using apikey authentication

{% highlight js %}
var lib = require('./libs/helpers');
function main(text, auth){

    /* BASIC GET API call */

    var msg = JSON.parse(text);

    var getUrl = msg.apiGetUrl;
    var getHeaders = {};

    getHeaders['authType'] = 'API';

    print(getUrl);

    var getResponse = lib.get(getUrl, getHeaders);
    print(JSON.stringify(getResponse));
}
{% endhighlight %}

### calling an API using a BASIC authentication

{% highlight js %}
var lib = require('./libs/helpers');
function main(text, auth){

    /* BASIC GET API call */

    var msg = JSON.parse(text);

    var getUrl = msg.basicGetUrl;
    var getHeaders = {};

    getHeaders['authType'] = 'BASIC';
    getHeaders['username'] = msg.basicUsername;
    getHeaders['password'] = msg.basicPassword;

    print(getUrl);

    var getResponse = lib.get(getUrl, getHeaders);
    print(JSON.stringify(getResponse));
}
{% endhighlight %}

### calling an API using an OAUTH2 authentication

{% highlight js %}
var lib = require('./libs/helpers');
function main(text, auth){

    /* OAUTH2 POST API call */

    var msg = JSON.parse(text);

    var postUrl = msg.oauthPostUrl;
    var postHeaders = {};

    postHeaders['authType'] = 'OAUTH2';
    postHeaders['token'] = msg.oauthToken;
    postHeaders['contentType'] = 'application/json';

    var body = '{\"test\":\"data\"}';
    var postResponse = lib.post(postUrl, postHeaders, JSON.parse(body));
    print(JSON.stringify(postResponse));


    /* OAUTH2 GET API call */

    var getUrl = msg.oauthGetUrl;
    var getHeaders = {};

    getHeaders['authType'] = 'OAUTH2';
    getHeaders['token'] = msg.oauthToken;

    var getResponse = lib.get(getUrl, getHeaders);
    print(JSON.stringify(getResponse));

}
{% endhighlight %}

## Sending messages around

### logging a message in microshare

{% highlight js %}
var lib = require('./libs/helpers');
function main(text, auth){

    /* lib.say(message to log); */
    lib.say('Hello World');

}
{% endhighlight %}

### sending an email as notification@microshare.io

{% highlight js %}
var lib = require('./libs/helpers');
function main(text, auth){

    /* lib.sendMicroshareEmail(recipient's email address,
          subject of your email,
          body of your email);
       The email sender will be notification@microshare.io
    */

    var TO = 'jgaye@microshare.io';
    var SUBJECT = 'This is a test email';
    var BODY = 'Dear Resident,\n The time we spent together, however long it was, meant the world to me. I would love to see you again but unfortunately I cannot. You see, I am a ghost. I can only materialize once every decade, on the anniversary of my death. I chose to spend my one day among the living with you, sweet resident. Perhaps we will meet again, in another decade--provided you keep your figure.\n Until then, all my love from the beyond,\n Barney.';

    lib.sendMicroshareEmail(TO, SUBJECT, BODY);

}
{% endhighlight %}

### sending an email

{% highlight js %}
var lib = require('./libs/helpers');
function main(text, auth){

    /* lib.sendEmail(sender's email address,
        recipient's email address,
        subject of your email,
        body of your email);
    */

    var FROM = 'jgaye@microshare.io';
    var TO = 'jgaye@microshare.io';
    var SUBJECT = 'This is a test email';
    var BODY = 'Dear Resident,\n The time we spent together, however long it was, meant the world to me. I would love to see you again but unfortunately I cannot. You see, I am a ghost. I can only materialize once every decade, on the anniversary of my death. I chose to spend my one day among the living with you, sweet resident. Perhaps we will meet again, in another decade--provided you keep your figure.\n Until then, all my love from the beyond,\n Barney.';

    lib.sendEmail(FROM, TO, SUBJECT, BODY);

}
{% endhighlight %}

### send a SMS via Twilio

{% highlight js %}
var lib = require('./libs/helpers');
function main(text, auth){

    /* lib.sendSMS(sender's phone number (should be your Twilio phone number),
          recipient's phone number,
          content of the SMS,
          your Twilio ACCOUNT_SID,
          your Twilio AUTH_TOKEN);
    */

    var fromPhoneNumber = ???;
    var toPhoneNumber = ???;
    var messageContent = ???;
    var ACCOUNT_SID = ???;
    var AUTH_TOKEN = ???;

    lib.sendSMS(fromPhoneNumber, toPhoneNumber, messageContent, ACCOUNT_SID, AUTH_TOKEN);

}
{% endhighlight %}

### sending a message to a WebSocket service

{% highlight js %}
var lib = require('./libs/helpers');
function main(text, auth){

    /* lib.sendWSMessage(WebSocekt service uri, message to send); */

    var wsUri = 'wss://echo.websocket.org';
    var message = 'Hello World';

    lib.sendWSMessage(wsUri, message);

}
{% endhighlight %}