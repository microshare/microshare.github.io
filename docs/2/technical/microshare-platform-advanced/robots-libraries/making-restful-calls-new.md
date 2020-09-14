---
layout: docs
title: Making RESTful calls from Robots
description:
group: advanced
toc: true
---


### calling an API (GET) using apikey authentication

{% highlight js %}
var lib = require('./libs/helpers');
function main(text, auth){

    /* BASIC GET API call */

    var getUrl = 'https://api.your.com/v1/object';
    var getHeaders = {};

    getHeaders['authType'] = 'API';

    print(getUrl);

    var getResponse = lib.get(getUrl, getHeaders);
    print(JSON.stringify(getResponse));
}
{% endhighlight %}

### calling an API (GET) using a BASIC authentication

{% highlight js %}
var lib = require('./libs/helpers');
function main(text, auth){

    /* BASIC GET API call */

    var getUrl = 'https://api.your.com/v1/object';
    var getHeaders = {};

    getHeaders['authType'] = 'BASIC';
    getHeaders['username'] = msg.basicUsername;
    getHeaders['password'] = msg.basicPassword;

    print(getUrl);

    var getResponse = lib.get(getUrl, getHeaders);
    print(JSON.stringify(getResponse));
}
{% endhighlight %}

### calling an API (POST/GET) using an OAUTH2 authentication

{% highlight js %}
var lib = require('./libs/helpers');
function main(text, auth){

    var share = lib.parseMsg(text);
    
    /* OAUTH2 POST API call */

    var postUrl = 'https://api.your.com/v1/object';
    var postHeaders = {};

    postHeaders['authType'] = 'OAUTH2';
    postHeaders['token'] = msg.oauthToken;
    postHeaders['contentType'] = 'application/json';

    // Body from JSON String
    var body1 = '{\"test\":\"data\"}';
    
    // Body from triggering share
    var body2 = JSON.stringify(share.objs[0].data);
    
    var postResponse = lib.post(postUrl, postHeaders, JSON.parse(body2));
    print(JSON.stringify(postResponse));

    /* OAUTH2 GET API call */

    var getUrl = 'https://api.your.com/v1/object';
    var getHeaders = {};

    getHeaders['authType'] = 'OAUTH2';
    getHeaders['token'] = msg.oauthToken;

    var getResponse = lib.get(getUrl, getHeaders);
    print(JSON.stringify(getResponse));

}
{% endhighlight %}

### calling an API (GET) using a CUSTOM authentication

{% highlight js %}
var lib = require('./libs/helpers');

function main(text, auth) {
    
    var getUrl = 'https://api.your.com/v1/object';
    var getHeaders = {};

    getHeaders.authType = 'CUSTOM';
    getHeaders.headerName = 'X-API-Key';
    getHeaders.headerValue = '12345678900998877665544332211';

    var getResponse = lib.get(getUrl, getHeaders);
    print(JSON.stringify(getResponse));
}
{% endhighlight %}
