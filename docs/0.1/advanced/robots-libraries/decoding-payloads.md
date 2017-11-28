---
layout: docs
title: Decoding Payloads with Robots
description:
group: advanced
toc: true
---

### encoding or decoding base64 messages

{% highlight js %}
var lib = require('./libs/helpers');
function main(text, auth){

    var message = 'Hello World';

    var base64EncodedMessage = lib.btoa(message);
    print(base64EncodedMessage);

    var base64DecodedMessage = lib.atob(base64EncodedMessage);
    print(base64DecodedMessage)

}
{% endhighlight %}