---
layout: docs
title: Quick Start
description: Getting Set-up in Microshare
group: getting-started
toc: true
---

Get your Internet of Things data workflow started with the following steps:

1. [Create a microshare account](./#register-for-a-microshareio-account)
2. [Get an API key](./)
3. [Setup microshare's Postman API collection on your computer](./)
4. [Write and Read data on microshare](./)
5. [Transform incoming data with a Robot](./)

# Register for a Microshare.io account

* Browse to [https://app.microshare.io](https://app.microshare.io).  
{% include image.html url="/assets/img/create-microshare-account-1.png" description="Sign In page" %}

* Click [Sign Up](https://auth.microshare.io/portal/signup).  
{% include image.html url="/assets/img/create-microshare-account-2.png" description="Provide an email" %}{% include image.html url="/assets/img/create-microshare-account-3.png" description="Sent email modal" %}

* You will receive an email asking you to confirm your account & setting your account password.  
{% include image.html url="/assets/img/create-microshare-account-4.png" description="User account creation email" %}{% include image.html url="/assets/img/create-microshare-account-5.png" description="Choose password" %}

* You can then log into your account from [https://app.microshare.io](https://app.microshare.io).

# Get an API key

You will need to use the microshare Share API to Write and Read data into the platform. 
You will first need an API key for authentication with the API.

* Log in your [microshare account](https://app.microshare.io)
* Go to `Manage -> Keys.`  
{% include image.html url="/assets/img/create-apikey-1.png" description="Manage -> Keys page" %}
* Clic `CREATE NEW APP` and give a friendly name to your APIkey (why not "My first IoT App"?).  
{% include image.html url="/assets/img/create-apikey-2.png" description="Add an App" %}
* Once the key is created, copy it somewhere handy, you will need it to execute microshare API calls.
{% include image.html url="/assets/img/create-apikey-3.png" description="APIkey generated" %}

# Setup Postman

This step is optional if you already have your own way of executing API call. If that's the case, go to [microshare API doc]() for a list of API call and move to the next section.

Otherwise, you can setup the API manager Postman on your computer for a quick start access to microshare API collection.

* Go to our [API documentation page](../../api-reference)

* Click on the `Run in Postman` button to install Postman on you computer and automatically load in our Postman API collection and environment.  
**If that fails**, go to [the Postman website](https://www.getpostman.com/) to install Postman manually, then download and import the collection and environment from our [API documentation page](../../api-reference).

* Open Postman on your computer. It will prompt you with a `Create New` modal, just close it.
{% include image.html url="/assets/img/configure-postman.png" description="Close Create New modal" %}

* To see the Microshare Postman **collection**, click on `Collections` on the left hand pane.
* To configure your Microshare **environment**, select the cog icon situated at the top right of the screen.  
Then `Manage Environments`, then click on `Microshare`.

{% include image.html url="/assets/img/configure-postman-2.png" description="Collection adn Environment config" %}

* In the environment configuration, paste your the API key in the apikey field, and enter your username and password in the corresponding fiels. 
{% include image.html url="/assets/img/generate-pipe-token-1.png" description="Empty Postman environment" %}{% include image.html url="/assets/img/generate-pipe-token-2.png" description="Filled Postman environment" %}

That's it! You now have access to the microshare API collection, and got everything setup to authenticate, write data and read data with the platform. 

# Use the API

## Authenticate

* With your Postman environment setup, you can authenticate to the service by running the request `Authentication -> Request token` for the collection.   

* An access token, valid for 48h is generated and returned under the `access token` key in the result set.

**Note** You could run the `Authentication -> Request Pipe token` request to generate a token valid for an unlimited time BUT that can only be used to post data to the microshare platform (no read). Such a token is convenient to setup a routed stream of IoT data from another platform.

{% include image.html url="/assets/img/generate-pipe-token-3.png" description="Successful pipe token call" %}

**Note** All generated tokens can be found, copied or revoked from the `Manage -> Key -> Tokens` screen in microshare. If you didn't copy the pipe token just after the call, go on that screen, find the Pipe typed token and copy it.

{% include image.html url="/assets/img/generate-pipe-token-4.png" description="Token revocation page" %}
 
* The access token was automatically pasted in your Postman environment. It is used by the other API calls to know that it is YOU that is writing or reading data on the platform.

## Write data



Make a post call using the same parameters as before, but with two notable additions. 

1. Include the data you wish to upload into the body of the call in JSON format. For example:

    {"Test":"Data"}
    
2. Include a header with a key of "recType" 
    * This will create a space for the data and attribute the above value as the recType's name  
        * It is recommended that your first recType follow a simple naming convention I.E. "yourFirstName.yourLastName"

**Tip**: We usually compose a recType based on the data's origin, using a schema from the most general to more specific. For example, here the device is a sodaq board, provisioned in Senet, physically located in Philadelphia in the US, so the recType can be: `us.philadelphia.senet.sodaq`

## Read data

Use the read call
You see your data
You see who is the owner (you)

ou are going to use the `Share -> Get Shares by recType` call, for which you need a `password token`.

1. Open and run the request `Authentication -> Request Token`. The generated `access-token` is automatically copied to your environment, so you are immediately ready to run other requests.
2. Open the `Shares -> Get Shares by recType` to configure it.
3. Specify the recType you used in Senet in the query params.
4. Click `Send`. 
Ther response of the request is a view of all the data **THAT YOU ONLY HAVE ACCESS TO** stored under the specidifed recType:
            
{% include image.html url="/assets/img/get-share-call-1.png" description="Successful password token call" %}
{% include image.html url="/assets/img/get-share-call-2.png" description="Successful share call" %}
{% include image.html url="/assets/img/get-share-call-3.png" description="Senet data in microshare example" %}

If you execute the request again, the number of records will increase as the data is streamed. The microshare metadata tells you how many pages of records you have, and the total number of records (platform wide) stored under this recType.

**Note** the `totalCount` value can be higher than the total number of records you own.  This is because another user could be storing data under the same recType. Don't worry, you will only see your data, and the other user will only see their data, unless you have created Rules to share your data.

Rules are an advanced feature of the platform, out of the scope of this quick start. Learn more about Rules with our [Rules guide](../../../getting-started/rules-guide)

# Create a Robot to transform incoming data

* Navigate to [our platform](https://app.microshare.io)
* Click the "Manage" button in the top toolbar
* Click the "Robots" button in the left toolbar
* Click the "Create" button 
* Input the Robot name in the top most text field 
* Type "My First Robot" in the text field labeled "Description"
* Check off the box labled "Active"
* Input the same recType from previouly in the "recType" section
* Copy and paste the code depicted below in the "Script" section

Chagne the date too

{% highlight js %}

var lib = require('./libs/helpers');
function main(text, auth){

    /* lib.sendMicroshareEmail(recipient's email address,
          subject of your email,
          body of your email);
       The email sender will be notification@microshare.io
    */

    var TO = 'INPUT YOUR EMAIL HERE';
    var SUBJECT = 'This is a test email';
    var BODY = 'This is a test email!';

    lib.sendMicroshareEmail(TO, SUBJECT, BODY);

}

{% endhighlight %}

* Within the code pasted into the "Script" section change the variable "TO" to your email


You should now receive an email whenever the recType is accessed! Test it out by posting data to your recType!


Click [here](http://docs.microshare.io/docs/0.1/getting-started/robot-guide/) for more information.

1. Go to [the Robot tab](https://app.microshare.io/composer#/robos) and click `CREATE`

{% include image.html url="/assets/img/hackiot-create-a-robot.png" description="Create a Robot from the composer" %}

We'll do the minimum to unlock all the Robot options for now.

1. Give your Robot a name.
2. Enter the exact Record Type you used in the Senet portal.
3. Complete the creation by clicking the `CREATE` button.

{% include image.html url="/assets/img/hackiot-create-a-robot-2.png" description="Minimal Robot configuration" %}

### Edit and test Robot

You'll be back in the Robot cards list and your Robot should now be displayed.
If you don't see your new Robot card listed:

1. Open the option menu
2. Increase the `Cards per Page` to 999 
3. Click Apply

The new Robot card should now be visible.

{% include image.html url="/assets/img/hackiot-configure-robot.png" description="Increase Cards per Page" %}

To edit an existing Robot, find your Robot in the list:

1. Click on it 
2. Click on the `pencil` icon at the top of the page

{% include image.html url="/assets/img/hackiot-configure-robot-2.png" description="Open Robot edition mode" %}

While in edit mode you can:
1. Turn your Robot on and off
2. Write the Robot script
3. Test the script

{% include image.html url="/assets/img/hackiot-configure-robot-3.png" description="Full Robot edition mode" %}

Replace the code in your Robot script with:
{% highlight js %}
  var lib = require('./libs/helpers');
  function main(text, auth) {
      
      var rec = lib.read(text, auth, []);
      var m = rec.objs[0].data;
      var recType = rec.objs[0].recType;
      
      var decodedLPP = lib.decodeCayenneLPP(m.pdu);    
      var decodedLPPJSON = JSON.parse(decodedLPP);
      
      decodedLPPJSON.forEach(function(entry){
          
          print(entry);
          print(JSON.stringify(entry));

          lib.write(recType + '.decoded', entry, auth, []);

      });
  }
{% endhighlight %}

Activate and Update your Robot when done. It will now be triggered automatically to read, decode, then write back a record to the data lake, with the added `.decoded` suffix to the recType.
You can use that second recType as the trigger to another Robot for data transformation, etc.


But think a second.
What if you have 2 streams? You can combine those!
3 streams? Combine them too! into an advanced record

What if a friend of yours has data you want to collaborate: create a Rule !

Let's move to the advanced features

6. ADVANCED - [Aggregate data with a View](./)
6. ADVANCED - [Share data with a Rule](./)
7. ADVANCED - [Display data with an App](./)

# Make a View

Perform advanced DB query (filter, group by, sort, ...) with Views. Mongo aggregation queries.
Go to the View screen

Match the recType
Make a filter on date ($gt)

Test and Run

Post under another recType
Match on the two recTypes, then group by recType

Test and Run

Cool cool, but you can also use variables
gt as a var
Test and Run

We'll use that in a moment

# Create a Rule


You can already stream data into the platform, get it automatically transformed, and read it back in different formats.

So you can already build Apps

Views

# Create an App

We have an App engine, supports Ember.js (preferred) and pure javascript/jquery
Create a Form: call the Fact and display it
There are a few reserved variables, an authenticated token is one 
And you can use the variable here ! (now - 10 minutes)

Then create an App that uses the Form
And voila
