---
layout: docs
title: SODAQ ExpLoRer
description:
group: lorawan-devices
toc: true
---

In this tutorial you're going to program the [SODAQ ExpLoRer board](http://support.sodaq.com/sodaq-one/explorer/){:target="_blank"} using the [Aurduino IDE](https://www.arduino.cc/en/Main/Software){:target="_blank"}.  Follow this guide to program the SODAQ Explorer board and connect it to the [The Thinks Network (TTN)](https://www.thethingsnetwork.org/)

**Important** You must be within range of The Things Network coverage area or gateway.  You can see the [The Things Network Coverage Map](https://www.thethingsnetwork.org/map){:target="_blank"} to check coverage in your area or install your own [LoRaWAN gateway](https://www.thethingsnetwork.org/docs/gateways/gateway/){:target="_blank"} connected to The Things Network.  If you are **not** within The Things Network coverage area your device will not connect and transmit data to the The Things Network platform.

### Linux Requirement
**This applies to Linux ONLY** `Linux Users` you may need to give your current user read/write access to the serial device file. This usually requires you to add the current user to a system group. These group names vary depending on the Linux distro that you're using. Here are some examples for Ubuntu & Arch Linux.

`Ubuntu Serial Access` run this command in a terminal and `REBOOT` the machine
```
sudo usermod -a -G dialout $USER
```

`Arch Linux Serial Access` run this command in a terminal and `REBOOT` the machine
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
- Type `CayanneLPP` in the filter text field
- Click the install button in the `CayenneLPP Arduino Library` section

{% include image.html url="/assets/img/arduino_sodaq_install_cayanneLPP.png" description="Install the CayenneLPP Arduino Libraries" %}

Learn more about [Cayenne LPP here](https://mydevices.com/cayenne/docs_stage/lora/#lora-cayenne-low-power-payload){:target="_blank"}

### Select the SODAQ Explorer Board
- Click `Tools` > `Board` > `Boards Manager` scroll down the menu find & click on the `SODAQ Explorer` option in the list
 
{% include image.html url="/assets/img/arduino_menu_select_sodaq.png" description="Select the SODAQ Board Libraries" %}

### Setup the Arduino Serial Port
The Serial Monitor enables you to interact, log & debug applications on connected devices.  You will be using the Serial Monitor to get information from the connected device. At this point connect the micros usb to the device then to the computer. Next select the serial port in Arduino IDE.

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

In the Serial Monitor window you should start seeing information scrolling. Un-check the `Auto Scroll` check box to stop the auto scrolling. Manually scroll to the top of the Serial Monitor and record or copy the `DevEUI` value listed

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

- #define freqPlan `TTN_FP_EU86`

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

## Stream IoT packets from Senet to Microshare®

Follow [this The Things Network (TTN) tutorial](../ttn_tutorial) to set up a redirection of IoT packets to the Microshare® platform.