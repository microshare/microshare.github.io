---
layout: docs
title: Getting Started
description: 
group: getting-started
toc: true
---

Get your IoT data workflow started with the following steps:

1. [Create a Microshare account](./#register-for-a-microshare-account)
2. [Get an API key](./#get-an-api-key)
3. [Setup Microshare's Postman API collection on your computer](./#setup-postman)
4. [Write and Read data on Microshare](./#use-the-api)
5. [Transform incoming data with a Robot](./#create-robots-to-transform-data-and-send-alerts)

## Register for a Microshare account

* Navigate to [https://app.microshare.io](https://app.microshare.io).  
{% include image.html url="/assets/img/create-microshare-account-1.png" description="Sign In page" %}

* Click [Sign Up](https://auth.microshare.io/portal/signup).  
{% include image.html url="/assets/img/create-microshare-account-2.png" description="Provide an email" %}{% include image.html url="/assets/img/create-microshare-account-3.png" description="Sent email modal" %}

* You will receive an email requesting you to confirm your account and set your account password.  
{% include image.html url="/assets/img/create-microshare-account-4.png" description="User account creation email" %}{% include image.html url="/assets/img/create-microshare-account-5.png" description="Choose password" %}

* You can then log into your account from [https://app.microshare.io](https://app.microshare.io).

## Get an API key

Request an API key for authentication with the services.
You can then use Microshare Share API to read data from, as well as write data to the platform. 

* Log in your [microshare account](https://app.microshare.io)
* Go to `Manage -> Keys.`  
{% include image.html url="/assets/img/create-apikey-1.png" description="Manage -> Keys page" %}
* Click `CREATE NEW APP` and give a friendly name to your APIkey (why not "My first IoT App"?).  
{% include image.html url="/assets/img/create-apikey-2.png" description="Add an App" %}
* Once the key is created, copy it somewhere handy, you will need it to execute microshare API calls.
{% include image.html url="/assets/img/create-apikey-3.png" description="APIkey generated" %}

## Setup Postman

This step is optional if you already have another way of invoking the API. In which case, visit [Microshare API doc](../../advanced/api-reference) for a list of API call and move to the next section.

Otherwise, you can setup the API manager with Postman on your computer for a quick start access to Microshare API collection.

* Visit our [API documentation page](../../advanced/api-reference)

* Click on the `Run in Postman` button to install Postman on you computer and automatically load in our Postman API collection and environment.  
**If that fails**, go to [the Postman website](https://www.getpostman.com/) to install Postman manually, then download and import the collection and environment from our [API documentation page](../../advanced/api-reference).

* Open Postman on your computer. It will prompt you with a `Create New` modal, just close it.
{% include image.html url="/assets/img/configure-postman.png" description="Close Create New modal" %}

* To see the Microshare Postman **collection**, click on `Collections` on the left hand pane.
* To configure your Microshare **environment**, select the cog icon situated at the top right of the screen.  
Then `Manage Environments`, then click on `microshare`.{% include image.html url="/assets/img/configure-postman-2.png" description="Collection adn Environment config" %}

* In the environment configuration, paste your the API key in the apikey field, and enter your username and password in the corresponding fiels. 
{% include image.html url="/assets/img/generate-pipe-token-1new.png" description="Empty Postman environment" %}{% include image.html url="/assets/img/generate-pipe-token-2new.png" description="Filled Postman environment" %}

That's it! You now have access to the microshare API collection, and are setup to authenticate, write data and read data with the platform. 

## Use the API

### Authenticate

* With your Postman environment setup, you can authenticate to the service by running the request `Authentication -> Request token` for the collection.   

* An access token, valid for 48h is generated and returned under the `access token` key in the result set.

{% include image.html url="/assets/img/get-share-call-1.png" description="Successful password token call" %}

**Note** You could run the `Authentication -> Request Pipe token` request to generate a token valid for an unlimited time BUT that can only be used to post data to the microshare platform (no read). Such a token is convenient to setup a routed stream of IoT data from another platform.

{% include image.html url="/assets/img/generate-pipe-token-3.png" description="Successful pipe token call" %}

**Note** All generated tokens can be found, copied or revoked from the `Manage -> Key -> Tokens` screen in microshare. If you didn't copy the pipe token just after the call, go on that screen, find the Pipe typed token and copy it.

{% include image.html url="/assets/img/generate-pipe-token-4.png" description="Token revocation page" %}
 
* The access token was automatically pasted in your Postman environment. It is used by the other API calls to know that it is YOU that is writing or reading data on the platform.

### Write data

* From the Postman collection, open the request `Shares -> Create one Share`.

* Click on `Params`, next to the `Send` button, to edit the recType Value. The recType is the category, or id, under which the data is stored in microshare. You usually have one recType per data stream (per IoT gateway, or IoT device if you can differentiate them).

* Enter you own recType there, by using your `firstName.lastName` combination.
**Tip**: For IoT data streams, we usually compose a recType based on the data's origin, using a schema from the most general to more specific. For example, if your IoT streams is from a TrackNet device, going through a Kerlink gateway, physically located in Philadelphia in the US, the recType can be: `us.philadelphia.kerlink.tracknet`

* Click on the `Body` tab, under the Params zone, and write any JSON body there, for example `{"Test":"Data"}`.

* Click `Send`

* A confirmation message will be sent, indicating that the data was successfully written to Microshare. It returns metadata usable with other API calls.

### Read data

* From the Postman collection, open the request `Shares -> Get Shares by recType` to configure it.
* Click on `Params`, next to the `Send` button, to edit the recType Value. Specify the recType you used in the Write query.
* Click `Send`. 
Ther response of the request is a view of all the data stored under the specified recType. Part of the displayed metadata is your login and API key, showing that YOU are the owner of that data:
{% include image.html url="/assets/img/get-share-call-3.png" description="Senet data in microshare example" %}

* If you execute Write request again, and then the Read, the number of records increases as you have created a new record. The microshare metadata tells you how many pages of records you have, and the total number of records (platform wide) stored under this recType.

**Note**: The `totalCount` value can be higher than the total number of records you own.  This is because another user could be storing data under the same recType. Don't worry, you will only see your data, and the other users will only see their data, unless you have created Rules to share your data.

Rules are an advanced feature of the platform, and are described in the ADVANCED section at the end of this quick start.

* You can use the request `Shares -> Get Latest Shares by recType`, that returns only the very last record created under this recType.

* For more information on how to setup a IoT data stream from a web platform using this API, check our [IoT documentation](../../advanced/lorawan-devices/). 

## Create a Robot to Transform data and Send alerts

Robots are automated workflow elements allowing you to transform, analyze and report on incoming data on the fly.

We are going to create and chain two Robots to detect an abnormal temperature level, and send email notifications.

* Navigate to [microshare platform](https://app.microshare.io)
* Click the `Manage` button in the top toolbar
* Click the `Robots` button in the left toolbar and click `CREATE`

{% include image.html url="/assets/img/hackiot-create-a-robot.png" description="Create a Robot from the composer" %}

We will do the minimum to unlock all the Robot options for now.

* Give your Robot a name.
* Enter the Record Type you used in the calls in the previous section.
* Complete the creation by clicking the `CREATE` button, and entering your login, password and API key combination.

{% include image.html url="/assets/img/hackiot-create-a-robot-2.png" description="Minimal Robot configuration" %}

You'll be back in the Robot cards list and your Robot should now be displayed.
If you don't see your new Robot card listed:

* Open the option menu
* Increase the `Cards per Page` to 999 
* Click Apply

The new Robot card should now be visible.

{% include image.html url="/assets/img/hackiot-configure-robot.png" description="Increase Cards per Page" %}

To edit an existing Robot, find your Robot in the list:

* Click on it 
* Click on the `pencil` icon at the top of the page

{% include image.html url="/assets/img/hackiot-configure-robot-2.png" description="Open Robot edition mode" %}

While in edit mode you can:
* Turn your Robot on and off
* Write the Robot script
* Test the script

{% include image.html url="/assets/img/hackiot-configure-robot-3new.png" description="Full Robot edition mode" %}

We don't have real data to use here, so we going to transform it with our own fake data.
We are going to add a fake temperature value, and the current date/time to the record, then save that transformed record.

* Replace the code in your Robot script with:
{% highlight js %}
  var lib = require('./libs/helpers');
  function main(text, auth) {
      
      var rec = lib.parseMsg(text);
      var newData = rec.objs[0].data;
      var recType = rec.objs[0].recType;
      
      var now = new Date();

      newData.temperature = now.getSeconds();
      newData.dateTime = now.toString();

      lib.writeShare(auth, recType + '.withTemperature', newData, []);

  }
{% endhighlight %}

Activate and Update your Robot when done. It will now be triggered automatically to read, anhance, then write back a record to the data lake, with the added `.withTemperature` suffix to the recType.

You can test that your Robot triggers by Writing a new piece of data with your initial recType, and Read the `recType.withTemperature` with the API.

You can use that second recType as the trigger to another Robot for data transformation, etc.
This is exactly what we are going to do now!

* Create a new Robot
* Give your Robot a name.
* Enter the Record Type with the `.withTemperature` suffix.
* Complete the creation by clicking the `CREATE` button, and entering your login, password and API key combination.
* Now edit that Robot, and replace the script with:
{% highlight js %}

var lib = require('./libs/helpers');
function main(text, auth){

    var rec = lib.parseMsg(text);
    var data = rec.objs[0].data;

    if (data.temperature > 30){

        /* lib.sendMicroshareEmail(recipient's email address,
            subject of your email,
            body of your email);
           The email sender will be notification@microshare.io
        */

        var TO = 'INPUT YOUR EMAIL HERE';
        var SUBJECT = 'High temperature alert';
        var BODY = 'A temperature of ' + data.temperature + ' was detected at ' + data.dateTime;

        lib.sendMicroshareEmail(TO, SUBJECT, BODY);

    }
}

{% endhighlight %}

* Within the code pasted into the "Script" section change the variable "TO" to your email
* Activate and update your Robot
* Write a few record for your recType.

The two Robots are activated in succession. If the fake temperature created is above 30, you receive an email alert.

You are now ready to setup your own IoT data stream, and transform, analyze, alert on data.

## More Information

For additional details on available Robot methods, visit [Robot library](../../advanced/robots-libraries)

For help on how to route your IoT stream from your favorite platform or gateway to Microshare, check our [IoT integration documentation](../../advanced/lorawan-devices).