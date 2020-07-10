---
layout: docs
title: Authentication
description: Security is our watchword when it comes to data access.
toc: true
---

---------------------------------------

* With your Postman environment setup, you can authenticate to the service by running the request `Authentication -> Request token` for the collection.   

* An access token, valid for 48 hours, is generated and returned under the `access token` key in the result set.

{% include image.html url="/assets/img/get-share-call-1.png" description="Successful password token call" %}

**Note** You could run the `Authentication -> Request Pipe token` request to generate a token valid for an unlimited time BUT that can only be used to post data to the Microshare® platform (no read). Such a token is convenient to setup a routed stream of IoT data from another platform.

{% include image.html url="/assets/img/generate-pipe-token-3.png" description="Successful pipe token call" %}

**Note** All generated tokens can be found, copied or revoked from the `Manage -> Key -> Tokens` screen in Microshare®. If you didn't copy the pipe token just after the call, go on that screen, find the Pipe typed token and copy it.

{% include image.html url="/assets/img/generate-pipe-token-4.png" description="Token revocation page" %}
 
* The access token was automatically pasted in your Postman environment. It is used by the other API calls to know that it is YOU that is writing or reading data on the platform.



---------------------------------------

Now that you have passed authentication, you can now make your first requests.

###### > [Simple Request](../simple-requests)