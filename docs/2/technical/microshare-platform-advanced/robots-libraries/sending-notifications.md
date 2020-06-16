---
layout: docs
title: Sending Notifications from Robots
description:
group: advanced
toc: true
---

### Logging a message in Microshare®

{% highlight js %}
var lib = require('./libs/helpers');
function main(text, auth){

    /* lib.say(message to log); */
    lib.say('Hello World');

}
{% endhighlight %}

### Sending an email as notification@microshare.io

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

### Sending an email

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

### Send a SMS via Twilio

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

### Sending a message to a WebSocket service

{% highlight js %}
var lib = require('./libs/helpers');
function main(text, auth){

    /* lib.sendWSMessage(WebSocekt service uri, message to send); */

    var wsUri = 'wss://echo.websocket.org';
    var message = 'Hello World';

    lib.sendWSMessage(wsUri, message);

}
{% endhighlight %}