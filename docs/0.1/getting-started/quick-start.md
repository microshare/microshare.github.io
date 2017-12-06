---
layout: docs
title: Tutorial
description: Getting Set-up in Microshare
group: getting-started
toc: true
---


This tutorial will provide an simple review of Microshare. In this tutorial we will:

1. Create an account  
2. Get an access token  
3. Post data to Microshare  
4. Make a rule to govern this data  
5. Create a robot to moniter this data  
6. Make a dashboard to view this data  

This process will require Postman. It is avaliable to download and install [here](https://www.getpostman.com/)

## Create an Account

1. Navigate to the [Microshare platform](https://app.microshare.io)
2. Click on the "Sign up" link
2. Input your email address, first name, and last name
3. A link will be sent to your email, open this link 
4. Create your password
5. Login to the platform with your newly created account!
    * Note: You do not need an organization code to sign in


## Get an Access Token

You will need an access token to push data into the Microshare platform. Follow the steps listed below to get an access token.

Note: you will need an account to get an access token


1.  Navigate to the [Microshare platform](https://app.microshare.io) and sign in using your credentials
2.  Click the "Manage" button in the top toolbar
3.  Click the "Keys" button in the left toolbar
4. Click on the "Create New App" button at the top right of the screen
5. Type the app name and any appropriate notes relating to the app, then click "Create App"
6. Click on the newly created API Key to copy it 
7. Open Postman
8. Make a Post call to https://auth.microshare.io
    * See below for an example of the parameters for the Post Call:


{% highlight JSON%}
{
    "key": "grant_type",
    "value": "password",
    "equals": true,
    "description": ""
},
{
    "key": "client_id",
    "value": "12345678-ABCD-9123-EFGH-456789IJKLMN",
    "equals": true,
    "description": ""
},
{
    "key": "scope",
    "value": "ALL:ALL",
    "equals": true,
    "description": ""
},
{
    "key": "username",
    "value": "example@microhare.io",
    "equals": true,
    "description": ""
},
{
    "key": "password",
    "value": "samplePassword",
    "equals": true,
    "description": ""
},
{% endhighlight %}

* The parameters of the Post call explained:
    * The key "grant_type" should have a value of "password"
    * The key "client_id" should have the API Key as it's value
    * The key "scope" should have a value of "ALL:ALL"
    * The key "username" should have your email as it's value
    * The key "password" should have your accounts password as it's value

* This will return a JSON with an access token. The access token will be a series of letters and numbers that is associated with the "access_token" Key. You can post data to Microshare with this access token.

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
