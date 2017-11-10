---
layout: docs
title: Integrating microshare into Senet
description:
group: advanced
toc: true
---

# How to: stream IoT packets from Senet to Microshare

This tutorial will show you how to configure your Senet devices to forward any IoT data to the microshare.io data lake. Once this is done, you'll be able to use the functionality of the microshare platform to share your. data securely, build data workflow, Apps, etc.

For the following, I will assume that you already have registered for [a Senet account](https://portal.senetco.io/), and that you have provisioned at least one device sending uplink packages to Senet.

I will show you how to create a microshare account, generate a streaming token, and use it in a Senet notification target.

## Create a microshare.io account

First things first, you need to create your own microshare.io account to claim your piece of land off of the data lake.  
The account creation process is simple: we ask you for your email address and send you an email to setup your password. When that's done, you'll be able to log in at [https://app.microshare.io](https://app.microshare.io) with your email / password combination,

To start the process, go to [https://app.microshare.io](https://app.microshare.io) and select [Sign Up](https://auth.microshare.io/portal/signup).  
Your experience should be similar to the screenshots below.

{% include image.html url="/assets/img/create-microshare-account-1.png" description="Sign In page" %}
{% include image.html url="/assets/img/create-microshare-account-2.png" description="Provide an email" %}
{% include image.html url="/assets/img/create-microshare-account-3.png" description="Sent email modal" %}
{% include image.html url="/assets/img/create-microshare-account-4.png" description="User account creation email" %}
{% include image.html url="/assets/img/create-microshare-account-5.png" description="Choose password" %}

## How to send data to microshare

Now that you have created your account, you own a little piece of the microshare data lake. You will now use Senet's automated redirection of packets, aka a device's notification target, to pass that data through to [microshare's RESTful API](../../generic-rest-api).  
The API needs to know two things when receiving data from an external service: which user is owner of that data, and under which category should it be stored in the data lake. Those two pieces of information are setup in Senet's notification target.  

To identify yourself as the owner of the streamed data, you will generate a token from your microshare account. I will cover how to get one in the next session.  

The category under which every one of your data packets get stored in microshare is called a recType (as in the Type of your Record). There are no preset category, you can use whatever you want, and even reuse a recType for two separate devices. I will give you some tips on how I decide my recTypes when we get to that.

## Generate a microshare pipe token

I will now show you how to create a token with microshare's API. The easiest way is to use [the Postman collection](../../generic-rest-api) from the documentation website with its environment.  
To use the token generation calls, you need to identify yourself with your username, password and an APIkey. 

To get an APIkey, login to your microshare account and go to Manage -> Keys.
Clicking 'CREATE NEW APP' opens a modal allowing you to name your APIkey.
Once the key is created, click on it to copy it to your clipboard. (See the screenshots below)

{% include image.html url="/assets/img/create-apikey-1.png" description="Manage -> Keys page" %}
{% include image.html url="/assets/img/create-apikey-2.png" description="Add an App" %}
{% include image.html url="/assets/img/create-apikey-3.png" description="APIkey generated" %}

Go back to Postman and edit your environment. Copy the apikey and fill up your username and password.
This allows you to run the Authentication -> Request pipe token one. The generated token is returned under access token, and is valid for an unlimited time, and used only to push data to microshare. 

Later we'll use the Request Token call that gets you a 48h validity tokn for other API calls.

{% include image.html url="/assets/img/generate-pipe-token-1.png" description="Empty Postman environment" %}
{% include image.html url="/assets/img/generate-pipe-token-2.png" description="Filled Postman environment" %}
{% include image.html url="/assets/img/generate-pipe-token-3.png" description="Successful pipe token call" %}

Note that all generated tokens can be found and copied or revoked from the Manage -> Key -> Tokens screen in microshare. If you didn't grab the pipe token just after the call, go on that screen, find the Pipe typed token and copy it.

{% include image.html url="/assets/img/generate-pipe-token-4.png" description="Token revocation page" %}

## Setup your notification target on Senet

Now that you have your generated token, [go to Senet](https://portal.senetco.io/) and open the configuration of a device.
Select the Notification Target tab.
To redirect the packets to our API, use the forward to HTTP option.

First, as you have the pipe token in your clipboard, let's set that up first. Add a header like this:
- Header Key: Authorization
- Header Value: Bearer <enter the pipe token here>

Then enter this in the URL to point to the data POSTing API: https://api.microshare.io/share/< enter the recType you chose here>
As a tip, I usually compose a recType from where the data comes from, from the most global to the more specific. For example, here my device is a sodaq board, provisioned in Senet, physically located in Philadelphia in the US, so my recType is: us.philadelphia.senet.sodaq.

And that's it for the microshare options! All the other options are Senet specific, you don't need them on for your sensor mesure to be passed to microshare. Check what extra data you can add to your packet from the Senet documentation: [http://docs.senetco.io/docs/stream/#packet-data](http://docs.senetco.io/docs/stream/#packet-data)

Finally, don’t forget to enable the notification target!

{% include image.html url="/assets/img/senet-notification-target-1.png" description="Senet portal" %}
{% include image.html url="/assets/img/senet-notification-target-2.png" description="Empty notification target" %}
{% include image.html url="/assets/img/senet-notification-target-3.png" description="Microshare notification target" %}

Note the you can only have one notification target by device, but that you can use the same recType for several devices if you want their packets to be rrive in microshare as a bundled stream.

## Verify the data streaming to microshare

Your Senet device data should now be streaming to your microshare account. Let me show you how to check that with the API.

You are going to use the Share -> Get Shares by recType call. But to do that we need a password token as explained in the previous section.
Open the Authenticaiton -> Request Token call, and run it once with your same environment. The generated access-token is automatically copied to your environment, so you are ready to go and run Get Shares by recType.

For that call, specify the recType you used in the query params, and click send. This request a view of all the data THAT YOU HAVE ACCESS TO with THAT RECTYPE:
            
{% include image.html url="/assets/img/get-share-call-1.png" description="Successful password token call" %}
{% include image.html url="/assets/img/get-share-call-2.png" description="Successful share call" %}
{% include image.html url="/assets/img/get-share-call-3.png" description="Senet data in microshare example" %}

If the redirection works well, you should see some objs returned with your Senet data under objs -> data. The pdu key holds your sensor mesure.  
If you rerun that call, the number of records will increase as the data is streamed. The microshare metadata tells you among others how many pages of records you have, and the total number of records stored under this recType, 

Beware that the totalCount can be higher that the total number of records you own, because another user can be storing data under the same recType. Don't worry, you will only see your data, and the other user will only see his or hers, unless you have created Rules to share your data together.  
If you want to know more on how to work collaboratively with other users by sharing records, check our [Rules guide](../../../getting-started/rules-guide). 