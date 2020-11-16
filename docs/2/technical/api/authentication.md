---
layout: docs
title: Authentication
description: Security is our watchword when it comes to data access
toc: true
---


{% include image.html url="/assets/img/thumbnail-5.jpg" height="900" width="900" description="thumbnail 2" %}


<br>
#### SUMMARY:

1. [Introduction](./#introduction)
2. [Steps](./#steps)



## Introduction
---------------------------------------

This guide will walk you through getting an authentication token to work with the Microshare Demo API. You will first need to follow the [API Quick Start Guide](/docs/2/technical/api/quick-start/) to get your key and get started with Postman. Only after you have completed that walkthrough can you move on to the following steps. 



## Steps
---------------------------------------

<br>
**1.** With your Postman environment setup, you can authenticate to the service by running the request `Authentication -> Request token` for the collection. Select the `Request token` POST call on the right hand side and hit the `send` button. If you have all the proper credentials established from the [API Quick Start Guide](/docs/2/technical/api/quick-start/), you should receive your token in the yellow box marked below.  

<br>
{% include image.html url="/assets/img/get-share-call-1.png" description="Successful password token call" %}

<br>
**2.** An access token, valid for 48 hours, is generated and returned under the `access token` key in the result set.

<br>
**Note:** You could run the `Authentication -> Request Pipe token` request to generate a token valid for an unlimited time BUT that can only be used to post data to the Microshare platform (no read). Such a token is convenient to setup a routed stream of IoT data from another platform.

<br>
{% include image.html url="/assets/img/generate-pipe-token-3.png" description="Successful pipe token call" %}

<br>
**Note:** All generated tokens can be found, copied or revoked from the `Manage -> Key -> Tokens` screen in Microshare. If you didn't copy the pipe token immediately after the call, Log into your [Microshare account.](https://app.microshare.io), go to `Manage -> Key -> Tokens`and find the Pipe token. Copy it!

<br>
{% include image.html url="/assets/img/generate-pipe-token-4.png" description="Token revocation page" %}
 
<br>
**3.** The access token was automatically pasted in your Postman environment. It is used by the other API calls to ensure that it is YOU who is querying the data.



---------------------------------------

Now that you have completed authentication, you can now make your first requests.

###### > [Share API](../share-api)

{% include image.html url="\assets\img\microshare-logo.png"  description="ms logo" %}