---
layout: docs
title: The Things Network (TTN) & Microshare™ integration
description:
group: advanced
toc: true
---

# How to: stream IoT packets from The Things Network (TTN) to Microshare®

This tutorial assumes that you already registered for and have [a TTN account](https://console.thethingsnetwork.org/){:target="_blank"}. It also assumes that you have provisioned at least one device sending uplink packages to TTN.

This tutorial will show you how to configure your TTN applications to forward IoT data to the Microshare® data lake. It will take you through creating a Microshare® account, generating a streaming token, and using it in a TTTN notification target. After this you'll be able to use the functionality of the Microshare® platform to share your data securely, build data workflows, Apps, etc.

### Register for a Microshare.io account

The Microshare® registration process is simple. 
1. Browse to [https://app.microshare.io](https://app.microshare.io){:target="_blank"}.
2. Click [Sign Up](https://auth.microshare.io/portal/signup){:target="_blank"}.

3. You will receive an email asking you to confirm your account & setting your account password.

Your experience should be similar to the screenshots below.

{% include image.html url="/assets/img/create-microshare-account-1.png" description="Sign In page" %}
{% include image.html url="/assets/img/create-microshare-account-2.png" description="Provide an email" %}
{% include image.html url="/assets/img/create-microshare-account-3.png" description="Sent email modal" %}
{% include image.html url="/assets/img/create-microshare-account-4.png" description="User account creation email" %}
{% include image.html url="/assets/img/create-microshare-account-5.png" description="Choose password" %}

### How to send data to Microshare®

Now that you have created your account, you own a little piece of the Microshare® data lake. You will now use TTN's automated redirection of packets, aka a device's notification target, to pass that data through to [Microshare®'s RESTful API](../../generic-rest-api){:target="_blank"}.

The API needs to know two things when receiving data from an external service:

- The owner of the data
- The category of the data

These two pieces of information are configured in TTN's Application Integrations sections.

To identify yourself as the owner of the streamed data, you must generate a token for your Microshare® account. Generating this token will be covered in the next section.

The category under which every one of your data packets get stored in Microshare® is called a `recType` (as in the Type of your Record). There are no preset categories, you can use whatever you want, and even reuse a recType for two separate devices. We will give you some tips on how to determine recTypes later

### Generate a Microshare® Pipe Token

Now you'll generate a Pipe Token using Microshare®'s API. The easiest way to interact with the Microshare® API is to use [Postman](https://www.getpostman.com/){:target="_blank"}

**To install Postman on your computer:**

1. Go to our [API documentation page](../../generic-rest-api){:target="_blank"}

2. Click on the `Run in Postman` button to install Postman on you computer and automatically load in our Postman API collection and environment.  
**If that fails**, go to [the Postman website](https://www.getpostman.com/){:target="_blank"} to install Postman manually, then download and import the collection and environment from our [API documentation page](../../generic-rest-api){:target="_blank"}.

3. Open Postman on your computer to see the Microshare® collection. You can select and manage environment from the top right of your Postman app.  
To use the token generation calls, you need to identify yourself with your username, password and an APIkey.  

**To get a Microshare® APIkey:**

4. Log in your [Microshare® account](https://app.microshare.io){:target="_blank"}
5. Go to `Manage -> Keys.`  
6. Click `CREATE NEW APP` and give a friendly name to your APIkey (why not "HackIoT"?).
5. Once the key is created, , click on the value in the API KEY (CLIENT ID) section to copy it to your clipboard. (See the screenshots below)

{% include image.html url="/assets/img/create-apikey-1.png" description="Manage -> Keys page" %}
{% include image.html url="/assets/img/create-apikey-2.png" description="Add an App" %}
{% include image.html url="/assets/img/create-apikey-3.png" description="APIkey generated" %}

**To finally generate the Microshare® Pipe Token:**
6. Go back to Postman and edit your environment.
7. Copy the APIkey and enter your username and password.

8. This allows you to run the request `Authentication -> Request pipe token`.   The generated token is returned under the `access token` key in the result set and is valid for an unlimited time.  The Pipe token can only be used to post data to the Microshare® platform.

Later we'll use the `Request Token` call that returns an access token which is only valid for 48 hours and can be used with the other Microshare® APIs.

{% include image.html url="/assets/img/generate-pipe-token-1new.png" description="Empty Postman environment" %}
{% include image.html url="/assets/img/generate-pipe-token-2new.png" description="Filled Postman environment" %}
{% include image.html url="/assets/img/generate-pipe-token-3.png" description="Successful pipe token call" %}

**Note** All generated tokens can be found, copied or revoked from the `Manage -> Key -> Tokens` screen in Microshare®. If you didn't copy the pipe token just after the call, go on that screen, find the Pipe typed token and copy it.

{% include image.html url="/assets/img/generate-pipe-token-4.png" description="Token revocation page" %}

### Setup your TTN Application Integration

- Now that you have your generated token [log into TTN](https://console.thethingsnetwork.org/) choose your application & click the `Integrations` tab.

{% include image.html url="/assets/img/ttn_app_integration_tab.png" description="" %}

- Click `Add Integration`
- Click the `HTTP Integration` option

{% include image.html url="/assets/img/ttn_app_integ_select_http.png" description="Select the Http Integration" %}
<br>
- Enter data into the following fields:
    - **Process ID:** give your integration a name like `microshare_hackiot_reading`
    - **Access Key:** select the `default` option
    - **URL:** the url value is composed of the base url **https://api.microshare.io/share/** and the `recType` value you chose previously.
    <br>**Tip**: We usually compose a recType based on the data's origin, using a schema from the most general to more specific. For example, here the device is a sodaq board, provisioned in TTN, physically located in Reading in the UK, so the recType can be: `uk.reading.ttn.sodaq` an example url & recType is `https://api.microshare.io/share/uk.reading.ttn.sodaq`
    - **Method:** Select the `POST` option
    - **Authorization:** Enter the word `Bearer` then paste your pipe token that you previously generated. The value should look similar to this example:<br>
    `Bearer eedbb46fd94XXXXXDDDDD537e0d1c8fd411bb8bf3556a39??`
    - Click the `Add Integration` button

All the other fields are not required for this tutorial.<br>
Below is an example of an `Integrations` form.

{% include image.html url="/assets/img/ttn_integ_http_form.png" description="TTN HTTP Integration Form" %}

Next you should see your newly created Microshare® HTTP integration running in the Integrations Overview section

{% include image.html url="/assets/img/ttn_integ_http_running.png" description="TTN HTTP Integration Running" %}

### Verify the data streaming to Microshare®

Your TTN device data should now be streaming to your Microshare® account. You can verify that with the Microshare® API.

You are going to use the `Share -> Get Shares by recType` call, for which you need a `password token`.

1. Open and run the request `Authentication -> Request Token`. The generated `access-token` is automatically copied to your environment, so you are immediately ready to run other requests.
2. Open the `Shares -> Get Shares by recType` to configure it.
3. Specify the recType you used in TTN in the query params.
4. Click `Send`. 

The response of the request is a view of all the data **THAT YOU ONLY HAVE ACCESS TO** stored under the specified recType:
            
{% include image.html url="/assets/img/get-share-call-1.png" description="Successful password token call" %}
{% include image.html url="/assets/img/get-share-call-2.png" description="Successful share call" %}
{% include image.html url="/assets/img/get-share-call-3-ttn-json.png" description="TTN data in microshare example" %}

The TTN data is under the `objs -> data` keys. The `payload_fields` key holds your device's payload data which is generally sensor data such as temperature, GPS or CO2 measurements.
Use our [Robot decoding library](../../robots-libraries/decoding-payloads/) to decode the Low Power Payload

If you execute the request again, the number of records will increase as the data is streamed. The Microshare® metadata tells you how many pages of records you have, and the total number of records (platform wide) stored under this recType.

**Beware** the `totalCount` value can be higher than the total number of records you own.  This is because another user could be storing data under the same recType. Don't worry, you will only see your data, and the other user will only see their data, unless you have created Rules to share your data.

Learn more on how to work collaboratively with other users by sharing records, check out our [Rules guide](../../../getting-started/rules-guide)
