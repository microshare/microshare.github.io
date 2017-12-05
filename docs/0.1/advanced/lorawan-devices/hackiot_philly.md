---
layout: docs
title: HackIoT Philly Workshop
description:
group: advanced
toc: true
---

Here you'll find some of the resources and software that'll be used at HackIoT Philly.  Use the links below to download the files for your operating system:

##  Java (JDK) SE Development Kit 8u152

`Windows` and `Mac OSX` users - Install a newer version of the Java JDK if it's not already installed on your computer. It'll prevent System Workbench IDE installation issues.

Download the appropriate installer for your operating system from here
[Java SE Development Kit 8u152](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html){:target="_blank"}

## System Workbench IDE

Download the appropriate file for your Operating System

- [System Workbench for Microsoft Windows 64bit](https://drive.google.com/file/d/1tplySQhnj85qNOPn_d-jPpEaH9WIPR0a/view?usp=sharing){:target="_blank"}
- [System Workbench for Mac OSX](https://drive.google.com/file/d/1kUaZ8KR5JbjsTJm_xF5XH6n6OOLO29pZ/view?usp=sharing){:target="_blank"}
- [System Workbench for Linux](https://drive.google.com/file/d/1NYo3HcmrRE1lZgDtcUZ2kuOpvu9yyzs8/view?usp=sharing){:target="_blank"}

### Install System Workbench IDE

Windows - Double Click the .exe install file that you downloaded

Mac OSX/Linux:
Pay attention to the installation instruction **warnings**
Open a Command Line Terminal and change directory to the location of the installer file

- Set the file as an executable with:  
`> chmod +x install_sw4stm32_XXX-vX.X.run`
- Then run it with:  
`> ./install_sw4stm32_XXX-vX.X.run`

**Mac OSX/Linux Install Notes** 
- Check the `STLinkServer` option when the Wizard prompts you.
- As the installation proceeds a command line prompt will ask you for your `password`. **Be sure to check your terminal if the install appears stuck or takes longer than 5 minutes.**

When the installation is over, you will be able to open the IDE under `System Workbench` in your application menus

## I-CUBE-LRWAN SDK 

- Download the ST Micro [I-CUBE-LRWAN SDK](https://drive.google.com/file/d/1AoEDVmrFbWCsUeAAUfunqvHIpJhJSgLi/view?usp=sharing){:target="_blank"}
- Unzip the I-CUBE-LRWAN SDK file `en.i-cube_lrwan.zip` you just downloaded

Now that you have the System Workbench IDE installed downloaded the I-CUBE-LRWAN SDK you can proceed to programming your devices.
<hr>

## I-CUBE-LRWAN SDK in the System Workbench IDE

- Open the System Workbench IDE
- Click `File` > Open Projects from File System...
- Click `Directory` > Browse to the `en.i-cube_lrwan` directory that was created when you unzipped the en.i-cube_lrwan.zip file
- Continue browsing to `/Projects/Multi/Applications/LoRa/End_Node/SW4STM32/B-L072Z-LRWAN1/`
- Select the `mlm32l07x01` directory > Click `OK`
- **Check** the box next to the `mlm32l07x01` directory
- Click `Finish`

## Initial Build of the mlm32l07x01 Project

At this point you've opened the `mlm32l07x01` project and now you must build all the SDK libraries.

- In the Project Explorer you should see the `mlm32l07x01` directory
- Click the `Project` Menu > `Build All` or Press **CTRL-B** to build
- When the build completes you should see success messages such as this `15:13:22 Build Finished (took 22s.424ms)`

### Configure Global Environment Settings

If you are in the USA you must change the LoRaWAN frequency to `915MHZ` in the project's `Preprocessor` setting within the IDE

- In the Project Explorer window find the `mlm32l07x01` project
- Right Click the `mlm32l07x01` directory > Click `Properties`
- Expand `C/C++ Build` tree > Click `Settings`
- Click `Tools Settings` tab > Expand the `MCU GCC Compiler` tree
- Click `Preprocessor` directory > Double Click the `REGION_EU868` value in the Defined Symbols section
- Replace the **REGION_EU868** value with `REGION_US915` > Click `OK` > Click `OK` again
- Recompile with new settings > Click the `Project` Menu > `Build All` or Press **CTRL-B** to build

After the project compiles successfully you're ready to being programming the **B-L072Z-LRWAN1** device to join a LoRaWAN network such as [Senet](http://www.senetco.com/){:target="_blank"}

## Provision B-L072Z-LRWAN1 Discovery Kit on [Senet](http://www.senetco.com/){:target="_blank"}

Before you begin programming the device to join the Senet LoRaWan network you must add your device to your Senet Developer account profile. 

### Register for a Senet Developer Account

If you don't have a Senet account go over to the [Senet website](http://www.senetco.com/developer-portal/){:target="_blank"} & apply for a developer account.  When your Senet Developer account is approved you must log into the Developer Portal and register your new device using the Over The Air `OTAA` activation using the [Senet Device Registration](http://docs.senetco.io/docs/dev/#device-registration){:target="_blank"} instructions.

When registering a new device in the Senet portal interface do the following.

- Generate a `DevEUI` by clicking the `Senet’s EUI Registry` link under the DevEUI Field. This will assign the device a DevEUI in the platform.
- Activate Type:  `OTAA`
- Device Type:  `Nucleo + ST SX1276 Shield`

### Capture Required LoRa Device Keys

After adding your new device be sure to capture the `MSB Hex` Formated Numbers which resembles this example `{0x00,0x22,0x09,0x00,0x00,0x01,0x03,0x04}`

Get the values for the following keys:

- Device EUI - You'll have to convert the `DevEUI` value from the Senet portal to the `MSB Hex` formatted number mentioned above. For example if you have the number `12345678` the `MSB Hex` value is: `{ 0x12, 0x34, 0x56, 0x78 }`. Break the values into pairs then prefix the number pairs with `0x` and use a comma to separate the pairs. Braces `{   }` must surround the entire `MSB` formatted value

- App EUI - You can click the `Copy` icon next to the MSB number
- AppKey - You can click the `Copy` icon next to the MSB number

You will program the device with these values.

### Configure the Devices for OTAA Activation

Here you're going to change the values to some variables in the source code to match the values assigned to your device in the Senet platform.

In the System Workbench IDE:

- Expand the `mlm32l07x01` project in the Project Explorer
- Expand the `Includes` directory
- Find the Project's Include files which is normally the last directory in this list. The file path is similar to this `< filepath to your project directory>/Projects/Multi/Applications/LoRa/End_Node/inc`where the `< filepath to your project directory>` value is the location of your project on disk.
- Expand the `inc` directory and open these files in the IDE:
    - `hw_conf.h`
    - `Commissioning.h`

Open `main.c` file

- Expand the `Projects\End_Node\` directory
- Open the `main.c` file

### Configure hw_conf.h File    

The `hw_conf.h` file has some variables that should be set when using a [sensor shield](http://www.st.com/en/ecosystems/x-nucleo-iks01a2.html){:target="_blank"} or when you need to debug your application.

- If you have a [sensor shield](http://www.st.com/en/ecosystems/x-nucleo-iks01a2.html){:target="_blank"} attached the device then unComment the `#define SENSOR_ENABLED` statement

### Configure Commissioning.h File

At this point you're ready to configure the Senet `OTAA` values for your device.

Open the `Commissioning.h` file. Find the following statements in the code & replace their values

- #define STATIC_DEVICE_EUI &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         `1`
- #define LORAWAN_DEVICE_EUI &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       `Device EUI value from Senet Platform converted to MSB Hexidecimal format`
- #define LORAWAN_APPLICATION_EUI &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  `App EUI value from Senet Platform`
- #define LORAWAN_APPLICATION_KEY &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  `AppKey value from Senet Platform`
- Save your changes

### Configure main.c File

The payload data that this device is sending will be formatted using the Cayenne LPP format

- Uncomment the `//#define CAYENNE_LPP` statement
- #define LORAWAN_ADR_ON  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   `1`
- #define LORAWAN_CONFIRMED_MSG  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      `ENABLE`

### Build the Binary

After configuring the device with the appropriate values from the Senet platform you can now build/compile the project which will produce an application binary file.

- Click the `Project` Menu > `Build All` or Press CTRL-B to build
- You should see a **Successful Build** message in the IDE's Console Tab

### Program the Device

The binary file is ready to be uploaded to the device.

- Connect the device via USB to your computer
- Outside of the System Workbench IDE open a Widnows file explorer or OSX Finder window and find the attached device. It should appear as an external device and have a name similar to `DIS_L072Z`

Now you need to grab the binary and upload to the device.

- In Windows File Explorer/OSX Finder window browse to `< filepath to your project directory> /Projects/Multi/Applications/LoRa/End_Node/SW4STM32/B-L072Z-LRWAN1/mlm32l07x01/Debug/` where the `< filepath to your project directory>` value is the location of your project on disk.
- Find the `mlm32l07x01.bin` file and Copy/Paste or Drag & Drop it into the `DIS_L072Z` device listed in your operating systems file explorer
- The device led will flash green & red while the device is being programmed and will remain solid green or red when complete.

Congratulations! The device is now running the code that you compiled.  Next we'll check the Senet dashboard to see actual LoRaWAN traffic being collected from your device.

### Confirm the Device is Transmitting to Senet

Log into the Senet Portal and click on your registered B-L072Z device.  If the device is transmitting properly then you should see data in the Senet device portal in a few minutes. Use the [Senet User Interface Documentation](http://docs.senetco.io/docs/#user-interface) to learn about the Senet UI

If you're not seeing any data after a few minutes then:

- Confirm you properly configured the code with the proper values from this tutorial
- Ensure the code compiled without any Errors
- Copy the `.bin` file to the device again using steps in `Programming the Device` section
- Ensure that you are withing range of a Senet LoRaWAN Gateway or in an area within Senet Outdoor coverage check the [coverage map here](http://www.senetco.com/coverage/){:target="_blank"}

<hr>

# Stream IoT packets from Senet to Microshare

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
Use our [Robot decoding library](../../robots-libraries/decoding-payloads/) to decode the Low Power Payload

If you execute the request again, the number of records will increase as the data is streamed. The microshare metadata tells you how many pages of records you have, and the total number of records (platform wide) stored under this recType.

**Beware** the `totalCount` value can be higher than the total number of records you own.  This is because another user could be storing data under the same recType. Don't worry, you will only see your data, and the other user will only see their data, unless you have created Rules to share your data.

Learn more on how to work collaboratively with other users by sharing records, check out our [Rules guide](../../../getting-started/rules-guide)

### Decode the STM32 payloads

You can now start building your data workflow in microshare.io.
Go create a Robot to automatically decode any incoming STM32 packets’ payload.
-> https://app.microshare.io/composer#/robos 
Click ‘Create’
For now, just give it a name and set the Record Type to the one you used in Senet.
Click the ‘CREATE’ button


Find your Robot in the card list, click on it, then on the pencil icon at the top of the page to edit it.
On edition mode you can:
set up the script the Robot will run each time a new record with your recType enters the data lake
test that script in advance with a mock run against the data lake
  Copy that code in your Robot script:
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

You can change the Write recType (first argument of the lib.write method) to whatever you want. But DO NOT set it to the same recType as the incoming Senet packages. we recommend adding a ‘.decoded’ suffix.
You can test your script against real data with the buttons situated under the Script editor:
Select a record from the data lake with the Previous / Next button
Edit the Example Data before running the test if you want to 
Click the TEST button
  The actions taken by your Robot will be printed on the screen.
  The TEST doesn’t actually perform a real Write to the data lake, so you can use it confidently.
  Activate and Update your Robot when done. It will now be triggered automatically to read, decode, then write back a record to the data lake.
  You can use that second recType as the trigger to another Robot for data transformation, etc.
 




