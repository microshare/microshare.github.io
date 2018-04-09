---
layout: docs
title: HackIoT Reading Workshop
description:
group: advanced
toc: true
---

Here you'll find some of the resources and software that'll be used at HackIoT Reading.  

# Getting Started
In this tutorial you're going to program the [SODAQ ExpLoRer board](http://support.sodaq.com/sodaq-one/explorer/){:target="_blank"} using the [Arduino IDE](https://www.arduino.cc/en/Main/Software){:target="_blank"}.  This tutorial is going to guide you in programming the SODAQ Explorer board and connecting it to the [The Thinks Network (TTN)](https://www.thethingsnetwork.org/)

**Important** You must be within range of The Things Network coverage area or gateway.  You can see the [The Things Network Coverage Map](https://www.thethingsnetwork.org/map){:target="_blank"} to check coverage in your area or install your own [LoRaWAN gateway](https://www.thethingsnetwork.org/docs/gateways/gateway/){:target="_blank"} connected to The Things Network.  If you are **not** within The Things Network coverage area your device will not connect and transmit data to the The Things Network platform.

## Linux Requirement
**This applies to Linux ONLY** `Linux Users` you may need to give your current user read/write access to the serial device file. This usually requires you to add the current user to a system group. These group names vary depending on the Linux distro that you're using. Here are some examples for Ubuntu & Arch Linux.

`Ubuntu Serial Access` run this command in a terminal & `REBOOT` the machine
```
sudo usermod -a -G dialout $USER
```

`Arch Linux Serial Access` run this command in a terminal & `REBOOT` the machine
```
gpasswd -a $USER uucp
```
``` 
gpasswd -a $USER lock
```

## Arduino Desktop IDE
- Download & Install the [Arduino Desktop IDE](../arduino_ide)

### Configure Arduino for the SODAQ ExpLoRer Libraries
- Open Arduino IDE
- Click `File` > `Preferences`
- In the `Additional Boards Manager URLs` field enter this url to set the SODAQ Explorer board's libraries

    ```
    http://downloads.sodaq.net/package_sodaq_samd_index.json
    ```
- Click `OK`

{% include image.html url="/assets/img/ardunino_sodaq_libs_preferences.png" description="Configure the SODAQ Board Libraries" %}

### Install Arduino the SODAQ Explorer Libraries via Board Manager
- Click `Tools` > `Board` > `Boards Manager`
- Type `SODAQ` in the filter text field
- Click the `Install` buttons for each of the SODAQ devices listed

{% include image.html url="/assets/img/sodaq_explorer_install_libs.png" description="Install the SODAQ Board Libraries" %}

### Install The Things Network Arduino Libraries
Install the TTN arduino device libraries
- Click `Sketch` > `Include Library` > `Manage Libraries`
- Type `The Things Network` in the filter text field
- Click the install button in the `The Things Network Arduino Library` section

{% include image.html url="/assets/img/arduino_install_ttn_lib.png" description="Install the TTN Arduino Libraries" %}

You can learn more about the TTN Arduino Library from the project's [github repo here](https://github.com/thethingsnetwork/arduino-device-lib){:target="_blank"}

### Install the Cayenne Low Power Payload (LPP) Libraries
Install the Cayenne LPP library in the Arduino IDE.
- Click `Sketch` > `Include Library` > `Manage Libraries`
- Type `CayenneLPP` in the filter text field
- Click the install button in the `CayenneLPP Arduino Library` section

{% include image.html url="/assets/img/arduino_sodaq_install_cayanneLPP.png" description="Install the CayenneLPP Arduino Libraries" %}

Learn more about [Cayenne LPP here](https://mydevices.com/cayenne/docs_stage/lora/#lora-cayenne-low-power-payload){:target="_blank"}

### Select the SODAQ Explorer Board
- Click `Tools` > `Board` > `Boards Manager` scroll down the menu find & click on the `SODAQ Explorer` option in the list
 
{% include image.html url="/assets/img/arduino_menu_select_sodaq.png" description="Select the SODAQ Board Libraries" %}

### Setup the Arduino Serial Port
The Serial Monitor enables you to interact, log & debug applications on connected devices.  You will be using the Serial Monitor to get information from the connected device. At this point connect the micro usb cable to the device then to the computer. Next select the serial port in Arduino IDE.

**Note** The actual `Port Names` will vary between different Operating Systems.  The screenshots below are from the Ubuntu OS.

- Click `Tools` > `Ports:`> Select the `USB` port which should correspond to the connected device.

{% include image.html url="/assets/img/arduino_serial_selection.png" description="Setup Ardunino Serial Port" %}

LoRaWAN requires information specific to individual devices in order for them to connect & function on LoRaWAN networks. You will use the `Arduino Serial Monitor` to get the device information that is required to register on The Things Network servers later in this tutorial.

- Click `Tools` > `Serial Monitor` a window will open (Make sure your device is connected & you selected the correct `USB Port`)

{% include image.html url="/assets/img/arduino_new_serial_monitor.png" description="Open Ardunino Serial Monitor" %}


### TTN SODAQ ExpLoRer Arduino Sketch/Code
The arduino platform maintains it's source code in `sketches` which are files with a `.ino` extension. The code that we're using for this tutorial can be found in the  github repo [https://github.com/microshare/hackiot_examples](https://github.com/microshare/hackiot_examples){:target="_blank"}

- Download or Clone the [examples repo](https://github.com/microshare/hackiot_examples){:target="_blank"} so that you have the source code locally
- Click `File` > `Open` browse to the location where you cloned the repo and open the `hackiot_examples/ttn_sodaq_hackiot_reading/ttn_sodaq_hackiot_reading.ino` file

You should see the codebase that we'll be using for this tutorial in the IDE. In order to properly register & connect the device to TTN we will need some information from the SODAQ board such as the board's [DevEUI](https://www.thethingsnetwork.org/docs/lorawan/address-space.html){:target="_blank"}.  Now you'll compile & upload this example app to the SODAQ board via the ide.  This example code will not function at this point because we're missing keys for the TTN.  In the next steps we'll get the information from the device that's required for registration on the TTN.

- Click the `Sketch` > `Upload`

The application will be compiled and uploaded to the SODAQ board.  You should see some similar success messages in the IDE's terminal section.

{% include image.html url="/assets/img/arduino_upload.png" description="Arduino Upload Success" %}

In the Serial Monitor window you should start seeing information scrolling. Un-check the `Auto Scroll` check box to stop the auto scrolling. Manually scroll to the top of the Serial Monitor and record or copy the `DevEUI` value listed.

{% include image.html url="/assets/img/arduino_sodaq_deveui.png" description="Arduino Upload Success" %}

Now that you have the `DevEUI` value for your device you can begin registering and connecting your device to The Things Network. The next section shows you how to register and connect your SODAQ device to TTN using LoRaWAN.

## Register a The Things Network Account
If you don't have a TTN account go over to the [The Things Network website](https://account.thethingsnetwork.org/register){:target="_blank"} and register for an account.  After registering and logging into your TTN account go to the [TTN Console Dashboard](https://console.thethingsnetwork.org/){:target="_blank"}

### TTN Console
In this console you'll need to create a new TTN Application which is essentially a container on the TTN platform and where you'll register/associate your SODAQ board.

- Go to the [TTN Console Dashboard](https://console.thethingsnetwork.org/){:target="_blank"}
- Click `Applications`
- Click `Add Application`
- Enter a name for your Application. You can enter whatever you like here.
- Enter a description for your app
- Select the appropriate Handler from the list.  These are based on the location your device will operate from.
    - Europe:   `ttn-handler-eu`
    - USA:      `ttn-handler-us-west`
    - Asia:     `ttn-handler-asia-se`

{% include image.html url="/assets/img/ttn_add_app.png" description="TTN Add Application" %}

## TTN Set Application Payload Format - CayenneLPP
The [Cayenne Low Power Payload (LPP)](https://mydevices.com/cayenne/docs_stage/lora/#lora-cayenne-low-power-payload){:target="_blank"} provides a convenient and easy way to send data over LPWAN networks such as LoRaWAN. The data transmitted to TTN is formatted using LPP and you must configure your newly created TTN Application to decode the data. 

- Click the `Payloads Formats` Tab
- Select > `Cayenne LPP` in the dropdown box
- Click `Save` button

{% include image.html url="/assets/img/ttn_app_format_LPP.png" description="TTN Add Application" %}

## TTN Register a Device
Now that you have created a new application we need to register a new device to the app which will provide the information you'll need to program the SODAQ board and connect it to TTN via LoRaWAN.
- Click the `Device Tab`
- Click `Register Device` 

{% include image.html url="/assets/img/ttn_dev_tab.png" description="TTN Register Device" %}

- **Device ID:** Enter a name for your device (this name is permanent and can not be changed after created)
- **DeviceEUI:** Enter the `DevEUI` for your device that you recorded in previous steps from the Serial Monitor.
- Click the `Register` button

{% include image.html url="/assets/img/ttn_reg_device.png" description="TTN Register Device" %}

After Clicking the `Register` button you will be redirected to the `Device Overview` console. Scroll down the `Example Code` section at the bottom of the page. There you will see variable definitions for the `appEUI` and `appKey` parameters. Copy these values, you're going to need them when programming the SODAQ board. These values are used by TTN to identify and secure the data flowing between the device and TTN.

{% include image.html url="/assets/img/ttn_dev_ex_code_vals.png" description="TTN Register Device" %}

## Program the Device
You now have all the information you need to program the SODAQ board to connect and transmit data to TTN. In this section you'll update the `ttn_sodaq_hackiot_reading.ino` code with the latest values

- Connect the device via USB to your computer
- Open the `ttn_sodaq_hackiot_reading.ino` file in Arduino IDE

Replace the values of these variables:

- `const char *appEui` = "< Enter your `appEUI` value from TTN >";
- `const char *appKey` = "< Enter your `appKey` value from TTN >";

Ensure that you specify the correct LoRa frequency for your location.
Europe: `TTN_FP_EU868`
USA:    `TTN_FP_US915`

- #define freqPlan `TTN_FP_EU868`

Your code is now ready to be compiled and uploaded to the device.

In the Arduino IDE:

-Click `File` > `Upload` or click the `Upload` toolbar button

{% include image.html url="/assets/img/arduino_upload_button.png" description="Arduino Upload Button" %}

The Arduino IDE's console shows the status of the compilation and upload of the application to the device. Use the `Serial Monitor` in the Arduino IDE to view the devices activity & connection status to TTN platform.

Congratulations! The device is now running the code that you compiled.  Next we'll check the TTN dashboard to see actual LoRaWAN traffic being collected from your device.

### Confirm the Device is Transmitting to The Things Network

Log into the TTN Portal and navigate to your TTN application and find your registered device.  If the device is transmitting properly then you will see data in the TTN device portal within a few minutes as shown below.

{% include image.html url="/assets/img/ttn_dev_data_view.png" description="TTN Device Payload View" %}

Your device is now programmed to read and transmit it's sensor data to the TTN platform for processing.

<hr />

# Integrate Microshare to The Things Network (TTN)

Now we'll show you how to configure your TTN applications to forward IoT data to the microshare.io data lake. It will take you through creating a microshare account, generating a streaming token, and using it in a TTTN notification target. After this you'll be able to use the functionality of the microshare platform to share your data securely, build data workflows, Apps, etc.

### Register for a Microshare.io account

The microshare registration process is simple. 
1. Browse to [https://app.microshare.io](https://app.microshare.io){:target="_blank"}.
2. Click [Sign Up](https://auth.microshare.io/portal/signup){:target="_blank"}.

3. You will receive an email asking you to confirm your account & setting your account password.

Your experience should be similar to the screenshots below.

{% include image.html url="/assets/img/create-microshare-account-1.png" description="Sign In page" %}
{% include image.html url="/assets/img/create-microshare-account-2.png" description="Provide an email" %}
{% include image.html url="/assets/img/create-microshare-account-3.png" description="Sent email modal" %}
{% include image.html url="/assets/img/create-microshare-account-4.png" description="User account creation email" %}
{% include image.html url="/assets/img/create-microshare-account-5.png" description="Choose password" %}

### How to send data to microshare

Now that you have created your account, you own a little piece of the microshare data lake. You will now use TTN's automated redirection of packets, aka a device's notification target, to pass that data through to [microshare's RESTful API](../../generic-rest-api){:target="_blank"}.

The API needs to know two things when receiving data from an external service:

- The owner of the data
- The category of the data

These two pieces of information are configured in TTN's Application Integrations sections.

To identify yourself as the owner of the streamed data, you must generate a token for your microshare account. Generating this token will be covered in the next section.

The category under which every one of your data packets get stored in microshare is called a `recType` (as in the Type of your Record). There are no preset categories, you can use whatever you want, and even reuse a recType for two separate devices. We will give you some tips on how to determine recTypes later.

### Generate a Microshare Pipe Token

Now you'll generate a Pipe Token using microshare's API. The easiest way to interact with the microshare api is to use [Postman](https://www.getpostman.com/){:target="_blank"}

**To install Postman on your computer:**

1. Go to our [API documentation page](../../generic-rest-api){:target="_blank"}

2. Click on the `Run in Postman` button to install Postman on you computer and automatically load in our Postman API collection and environment.  
**If that fails**, go to [the Postman website](https://www.getpostman.com/){:target="_blank"} to install Postman manually, then download and import the collection and environment from our [API documentation page](../../generic-rest-api){:target="_blank"}.

3. Open Postman on your computer to see the microshare collection. You can select and manage environment from the top right of your Postman app.  
To use the token generation calls, you need to identify yourself with your username, password and an APIkey.  

**To get a microshare APIkey:**

4. Log in your [microshare account](https://app.microshare.io){:target="_blank"}
5. Go to `Manage -> Keys.`  
6. Click `CREATE NEW APP` and give a friendly name to your APIkey (why not "HackIoT"?).
5. Once the key is created, , click on the value in the API KEY (CLIENT ID) section to copy it to your clipboard. (See the screenshots below)

{% include image.html url="/assets/img/create-apikey-1.png" description="Manage -> Keys page" %}
{% include image.html url="/assets/img/create-apikey-2.png" description="Add an App" %}
{% include image.html url="/assets/img/create-apikey-3.png" description="APIkey generated" %}

**To finally generate the microshare Pipe Token:**
6. Go back to Postman and edit your environment.
7. Copy the APIkey and enter your username and password.

8. This allows you to run the request `Authentication -> Request pipe token`.   The generated token is returned under the `access token` key in the result set and is valid for an unlimited time.  The Pipe token can only be used to post data to the microshare platform.

Later we'll use the `Request Token` call that returns an access token which is only valid for 48 hours and can be used with the other microshare APIs.

{% include image.html url="/assets/img/generate-pipe-token-1.png" description="Empty Postman environment" %}
{% include image.html url="/assets/img/generate-pipe-token-2.png" description="Filled Postman environment" %}
{% include image.html url="/assets/img/generate-pipe-token-3.png" description="Successful pipe token call" %}

**Note** All generated tokens can be found, copied or revoked from the `Manage -> Key -> Tokens` screen in microshare. If you didn't copy the pipe token just after the call, go on that screen, find the Pipe typed token and copy it.

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
    `Bearer eedbb46fd94XXXXXDDDDD537e0d1c8fd411bb8bf3556a3987`
    - Click the `Add Integration` button

All the other fields are not required for this tutorial.<br>
Below is an example of an `Integrations` form.

{% include image.html url="/assets/img/ttn_integ_http_form.png" description="TTN HTTP Integration Form" %}

Next you should see your newly created microshare HTTP integration running in the Integrations Overview section

{% include image.html url="/assets/img/ttn_integ_http_running.png" description="TTN HTTP Integration Running" %}

### Verify the data streaming to microshare

Your TTN device data should now be streaming to your microshare account. You can verify that with the microshare API.

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
Use our [Robot decoding library](../../robots-libraries/decoding-payloads/) to decode the Low Power Payload.

If you execute the request again, the number of records will increase as the data is streamed. The microshare metadata tells you how many pages of records you have, and the total number of records (platform wide) stored under this recType.

**Beware** the `totalCount` value can be higher than the total number of records you own.  This is because another user could be storing data under the same recType. Don't worry, you will only see your data, and the other user will only see their data, unless you have created Rules to share your data.

### Create Robot
A Robot is a script driven entity that is triggered to run when a specific recType write operation occurs in the datalake.

1. Go to [the Robot tab](https://app.microshare.io/composer#/robos) and click `CREATE`

{% include image.html url="/assets/img/hackiot-create-a-robot.png" description="Create a Robot from the composer" %}

We'll do the minimum to unlock all the Robot options for now.

1. Give your Robot a name.
2. Enter the exact Record Type you used in the TTN portal.
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
		print('########### START: Demo C to F Convert ##########');
		// this is to get the content of the incoming data
		var record = lib.parseMsg(text);
		var recordData = record.objs[0].data;
		var recType = record.recType;
		// if the payload needs to be decoded, then use our library lib.decode***(newData.payload);
		// In this demo, Celsius temperature will be coming directly in element .tempC
	   if (recordData.tempC !== undefined){
			recordData.tempF = recordData.tempC * 9/5 + 32;
		
		// If you need to create a new piece of data after processing the source, use the lib.write to commit to microshare
			var newRecType = recType + '.processed';
			var newTags = ['demo', 'test01', 'CtoF']
			lib.write(newRecType, recordData, auth, ['tag']);
		} else {
			print("******* tempC is not defined.")
		}
		print('########### START: Demo C to F Convert ##########');
	}

{% endhighlight %}

Activate and Update your Robot when done. It will now be triggered automatically to read, decode, then write back a record to the data lake, with the added `.decoded` suffix to the recType.
You can use that second recType as the trigger to another Robot for data transformation, etc.

## Give your teammates access to the data

The decoded data should be available to **only** one microshare account of your team right now.  
But Rules will allow you to extend access to the data to your other team members, or anybody you want.

To set one Rule up, login to your microshare account, go to `Manage -> Rules` and click `Create`.
What you have to setup is:

1. Give a friendly name to your Rule
2. Enter the recType your decoded data is stored under
3. This Rule has to allow the operations: Read and Query
4. Set the `Requestor User` to `Specific Value`, and enter the login email of your teammate
5. Click `Create`

{% include image.html url="/assets/img/hackiot-configure-rules.png" description="Share data with my teammates" %}

**Tip**  
By default, all of your data is shared with your _Organization_.  
Your _Organization_ is set from the suffixes of your login email address. For example, if you logged in as `franck@gmail.com`, your organization is set to `com.gmail`

For more info about Rules, check our [Rules Guide](../../getting-started/rules-guide)

## What's next?

You have now access to decoded IoT data as a team through the microshare API. This allows you to build whatever view you want with your favorite tools: web Apps, mobile Apps, Dashboards, etc. Unleash the data, and let your imagination go wild!  

You can also create new Robots to further your automated data workflow: transform the TNN data further, create alerts, etc.

Have a great Hackathon!
