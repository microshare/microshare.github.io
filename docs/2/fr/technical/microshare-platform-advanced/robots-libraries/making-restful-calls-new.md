---
layout: docs
title: Appels RESTful depuis les Robots
description:
group: advanced
lang: fr
translation_of: docs/2/technical/microshare-platform-advanced/robots-libraries/making-restful-calls-new.md
translations:
  en: /docs/2/technical/microshare-platform-advanced/robots-libraries/making-restful-calls-new
  fr: /docs/2/fr/technical/microshare-platform-advanced/robots-libraries/making-restful-calls-new
---
### Appeler une API (GET) avec authentification par clé API

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

### Appeler une API (GET) avec authentification BASIC

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

### Appeler une API (POST/GET) avec authentification OAUTH2

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

### Appeler une API (GET) avec authentification CUSTOM

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
