---
layout: docs
title: Making RESTful calls from Robots
description:
group: advanced
toc: true
---


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