---
layout: docs
title: Integrating microshare into Senet
description:
group: advanced
toc: true
---

# How to: stream IoT packets from Senet to Microshare

This tutorial assumes that you already registered for and have [a Senet Developer account](http://www.senetco.com/developer-portal/). It also assumes that you have provisioned at least one device sending uplink packages to Senet.

This tutorial will show you how to configure your Senet devices to forward IoT data to the microshare.io data lake. It will take you through creating a microshare account, generating a streaming token, and using it in a Senet notification target. After this you'll be able to use the functionality of the microshare platform to share your data securely, build data workflows, Apps, etc.

## Register for a Microshare.io account

The microshare registration process is simple. Browse to [https://app.microshare.io](https://app.microshare.io) and click [Sign Up](https://auth.microshare.io/portal/signup).

You will receive an email asking you to confirm your account & setting your account password.

Your experience should be similar to the screenshots below.

{% include image.html url="/assets/img/create-microshare-account-1.png" description="Sign In page" %}
{% include image.html url="/assets/img/create-microshare-account-2.png" description="Provide an email" %}
{% include image.html url="/assets/img/create-microshare-account-3.png" description="Sent email modal" %}
{% include image.html url="/assets/img/create-microshare-account-4.png" description="User account creation email" %}
{% include image.html url="/assets/img/create-microshare-account-5.png" description="Choose password" %}

## How to send data to microshare

Now that you have created your account, you own a little piece of the microshare data lake. You will now use Senet's automated redirection of packets, aka a device's notification target, to pass that data through to [microshare's RESTful API](../../generic-rest-api).

The API needs to know two things when receiving data from an external service:

- The owner of the data
- The category of the data

These two pieces of information are configured in Senet's notification target.

To identify yourself as the owner of the streamed data, you must generate a token for your microshare account. Generating this token will be covered in the next section.

The category under which every one of your data packets get stored in microshare is called a recType (as in the Type of your Record). There are no preset categories, you can use whatever you want, and even reuse a recType for two separate devices. We will give you some tips on how to determine recTypes later

## Generate a Microshare Pipe Token

Now you'll genreate a Pipe Token using microshare's API. The easiest way to interact with the microshare api is to use [the Postman collection](../../generic-rest-api) from the documentation website.

To use the token generation calls, you need to identify yourself with your username, password and an APIkey.

To get an APIkey, login to your microshare account and go to Manage -> Keys.

Clicking 'CREATE NEW APP' opens a modal allowing you to name your APIkey.

Once the key is created, click on it to copy it to your clipboard. (See the screenshots below)

{% include image.html url="/assets/img/create-apikey-1.png" description="Manage -> Keys page" %}
{% include image.html url="/assets/img/create-apikey-2.png" description="Add an App" %}
{% include image.html url="/assets/img/create-apikey-3.png" description="APIkey generated" %}

Go back to Postman and edit your environment. Copy the APIkey and enter your username and password.
This allows you to run the request `Authentication -> Request pipe token`. The generated token is returned under the `access token` key in the result set and is valid for an unlimited time.  The Pipe token can only be used to post data to the microshare platform.

Later we'll use the `Request Token` call that returns an access token which is only valid for 48 hours and can be used with the other microshare APIs.

{% include image.html url="/assets/img/generate-pipe-token-1.png" description="Empty Postman environment" %}
{% include image.html url="/assets/img/generate-pipe-token-2.png" description="Filled Postman environment" %}
{% include image.html url="/assets/img/generate-pipe-token-3.png" description="Successful pipe token call" %}

**Note** All generated tokens can be found, copied or revoked from the `Manage -> Key -> Tokens` screen in microshare. If you didn't copy the pipe token just after the call, go on that screen, find the Pipe typed token and copy it.

{% include image.html url="/assets/img/generate-pipe-token-4.png" description="Token revocation page" %}

## Setup your notification target on Senet

Now that you have your generated token [log into Senet](https://portal.senetco.io/) and open the configuration of a device.
Click the `Notification Target` tab.
To redirect the packets to our API, use the `Forward to HTTP` option.

Since you have the pipe token in your clipboard, set that up first. Add a header parameter like this:
- Header Key: Authorization
- Header Value: Bearer <enter the pipe token here>

Then enter this in the URL field: `https://api.microshare.io/share/< enter the recType you chose here>`

**Tip**: We usually compose a recType based on the data's origin, using a schema from the most general to more specific. For example, here the device is a sodaq board, provisioned in Senet, physically located in Philadelphia in the US, so the recType can be: `us.philadelphia.senet.sodaq`

All the other options are Senet specific, you don't need them enabled for your sensor data to be posted to microshare. Learn more about the extra data you can add to your packet from the Senet documentation: [http://docs.senetco.io/docs/stream/#packet-data](http://docs.senetco.io/docs/stream/#packet-data)

Finally, don’t forget to enable the notification target.

{% include image.html url="/assets/img/senet-notification-target-1.png" description="Senet portal" %}
{% include image.html url="/assets/img/senet-notification-target-2.png" description="Empty notification target" %}
{% include image.html url="/assets/img/senet-notification-target-3.png" description="Microshare notification target" %}

**Note** You can only have one notification target per device in the Senet platform but you can use the same recType for several devices if you want their packets to arrive in microshare as a bundled stream.

## Verify the data streaming to microshare

Your Senet device data should now be streaming to your microshare account. You can verify that with the microshare API.

You are going to use the `Share -> Get Shares by recType` call, for which you need a `password token`.

Open and run the request `Authentication -> Request Token`. The generated `access-token` is automatically copied to your environment, so you are immediately ready to go and run `Get Shares by recType`.

For the `Get Shares by recType` request, specify the recType you used in the query params, and click send. It returns a view of all the data **THAT YOU ONLY HAVE ACCESS TO** associated to that recType:
            
{% include image.html url="/assets/img/get-share-call-1.png" description="Successful password token call" %}
{% include image.html url="/assets/img/get-share-call-2.png" description="Successful share call" %}
{% include image.html url="/assets/img/get-share-call-3.png" description="Senet data in microshare example" %}

As a consequence of the redirection, you now see your Senet data under the `objs -> data` keys. The `pdu` key holds your device's payload data which is generally sensor data such as temperature, GPS or CO2 measurements.

If you execute the request again, the number of records will increase as the data is streamed. The microshare metadata tells you how many pages of records you have, and the total number of records (platform wide) stored under this recType.

**Beware** the `totalCount` value can be higher than the total number of records you own.  This is because another user could be storing data under the same recType. Don't worry, you will only see your data, and the other user will only see their data, unless you have created Rules to share your data.

Learn more on how to work collaboratively with other users by sharing records, check out [Rules guide](../../../getting-started/rules-guide)
