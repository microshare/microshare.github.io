---
layout: docs
title: Quick Start
description: Getting Set-up in Microshare
group: getting-started
toc: true
---

Get your Internet of Things data workflow started with the following steps:

1. [Create a microshare account](./)
2. [Get an API key](./)
3. [Setup microshare's Postman API collection on your computer](./)
4. [Write and Read data on microshare](./)
5. [Transform incoming data with a Robot](./)
6. [Aggregate data with a View](./)
7. [Display data with an App](./)

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

### Generate a Microshare Pipe Token

Now you'll generate a Pipe Token using microshare's API. The easiest way to interact with the microshare api is to use Postman.

**To install Postman on your computer:**

1. Go to our [API documentation page](../../api-reference)

2. Click on the `Run in Postman` button to install Postman on you computer and automatically load in our Postman API collection and environment.  
**If that fails**, go to [the Postman website](https://www.getpostman.com/) to install Postman manually, then download and import the collection and environment from our [API documentation page](../../api-reference).

3. Open Postman on your computer. It will prompt you with a `Create New` modal, just close it.
{% include image.html url="/assets/img/configure-postman.png" description="Close Create New modal" %}

4. To see the Microshare Postman collection **collection**, click on `Collections` on the left hand pane.
5. To configure your Microshare **environment**, select the cog icon situated at the top right of the screen.  
Then `Manage Environments`, then click on `Microshare`.

{% include image.html url="/assets/img/configure-postman-2.png" description="Collection adn Environment config" %}

Our next step is to set up the username, password and apike entries in the Environment.   

**To get a microshare APIkey:**

4. Log in your [microshare account](https://app.microshare.io)
5. Go to `Manage -> Keys.`  
6. Clic `CREATE NEW APP` and give a friendly name to your APIkey (why not "HackIoT"?).
5. Once the key is created, , click on the value in the API KEY (CLIENT ID) section to copy it to your clipboard. (See the screenshots below)

{% include image.html url="/assets/img/create-apikey-1.png" description="Manage -> Keys page" %}
{% include image.html url="/assets/img/create-apikey-2.png" description="Add an App" %}
{% include image.html url="/assets/img/create-apikey-3.png" description="APIkey generated" %}

**To finally generate the microshare Pipe Token:**
6. Go back to Postman and edit your environment.
7. Copy the APIkey and enter your username and password. (see the screenshots below)
8. This allows you to run the request `Authentication -> Request pipe token`.   The generated token is returned under the `access token` key in the result set and is valid for an unlimited time.  The Pipe token can only be used to post data to the microshare platform.

{% include image.html url="/assets/img/generate-pipe-token-1.png" description="Empty Postman environment" %}
{% include image.html url="/assets/img/generate-pipe-token-2.png" description="Filled Postman environment" %}

Later we'll use the `Request Token` call that returns an access token which is only valid for 48 hours and can be used with the other microshare APIs.

{% include image.html url="/assets/img/generate-pipe-token-3.png" description="Successful pipe token call" %}

**Note** All generated tokens can be found, copied or revoked from the `Manage -> Key -> Tokens` screen in microshare. If you didn't copy the pipe token just after the call, go on that screen, find the Pipe typed token and copy it.

{% include image.html url="/assets/img/generate-pipe-token-4.png" description="Token revocation page" %}

## Post Data to Microshare

Make a post call using the same parameters as before, but with two notable additions. 

1. Include the data you wish to upload into the body of the call in JSON format. For example:

    {"Test":"Data"}
    
2. Include a header with a key of "recType" 
    * This will create a space for the data and attribute the above value as the recType's name  
        * It is recommended that your first recType follow a simple naming convention I.E. "yourFirstName.yourLastName"


## Make a Rule 

A rule governs the data you have uploaded in a specific recType. You can adjust who can see the data and what they can do with it. In this section we will allow a user of your choosing to read and write to the data you have posted to microshare.

1. Navigate to [our platform](https://app.microshare.io)
2. Click the "Manage" button in the top toolbar
3. Click the "Rules" button in the left toolbar
4. Click the the "Create" button
5. Input the Rule name in the top most text field
5. Type "My First Rule" in the text field labeled "Description"
5. Input the same recType used in the previous section in the text field labeled "Record Type"  
5. In the section labeled operations check off the boxes for "Read" and "Write"
5. Scroll down to the section labeled "Requestor"
5. Click on the "user" dropdown within the "Requestor" section
5. Select the "Specific Value" option
    * A text box will appear with greyed out text reading "Please enter a value"
5. Enter the email of the user whom will be allowed to access the data
    * An example of a valid input would be "example@microshare.io"
    * Note: this new user's email must associated with an account on our platform in order to access the data

* Click the "Create" button at the top of the page 

You have now made a Rule to govern access to your data! 

Click [here](http://docs.microshare.io/docs/0.1/getting-started/data-sharing/) for more information.

## Create a Robot 

1. Navigate to [our platform](https://app.microshare.io)
2. Click the "Manage" button in the top toolbar
3. Click the "Robots" button in the left toolbar
4. Click the "Create" button 
4. Input the Robot name in the top most text field 
4. Type "My First Robot" in the text field labeled "Description"
4. Check off the box labled "Active"
4. Input the same recType from previouly in the "recType" section
4. Copy and paste the code depicted below in the "Script" section

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




## Make a Dashboard 


[Coming soon!]
