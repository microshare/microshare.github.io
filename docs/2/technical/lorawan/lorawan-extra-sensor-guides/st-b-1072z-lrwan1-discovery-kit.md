---
layout: docs
title: B-L072Z-LRWAN1 Discovery kit
description:
group: advanced
toc: true
---

Follow this tutorial to program the [B-L072Z-LRWAN1 LoRa®Discovery kit](http://www.st.com/en/evaluation-tools/b-l072z-lrwan1.html){:target="_blank"} using the [System Workbench for STM32 IDE](../system-workbench-st32-ide){:target="_blank"}.

## Get the ST Micro Resources

- Log into your [ST Micro account](https://my.st.com/cas/login?service=https%3A%2F%2Fmy.st.com%2Fcontent%2Fmy_st_com%2Fen.html){:target="_blank"} or create an account if you don't already have one
- Download the ST Micro [I-CUBE-LRWAN SDK](http://www.st.com/content/st_com/en/products/embedded-software/mcus-embedded-software/stm32-embedded-software/stm32cube-embedded-software-expansion/i-cube-lrwan.html){:target="_blank"}
- Unzip the I-CUBE-LRWAN SDK file `en.i-cube_lrwan.zip` you just downloaded

## System Workbench STM32 IDE

- Download & Install the [System Workbench for STM32 IDE](../system-workbench-st32-ide)

### I-CUBE-LRWAN SDK in the System Workbench IDE

- Open the System Workbench IDE
- Click `File` > Open Projects from File System...
- Click `Directory` > Browse to the `en.i-cube_lrwan` directory that was created when you unzipped the en.i-cube_lrwan.zip file
- Continue browsing to `/Projects/Multi/Applications/LoRa/End_Node/SW4STM32/B-L072Z-LRWAN1/`
- Select the `mlm32l07x01` directory > Click `OK`
- **Check** the box next to the `mlm32l07x01` directory
- Click `Finish`

### Initial Build of the mlm32l07x01 Project

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

After adding your new device be sure to capture the MSB Hex Formated Numbers which resembles this example `{0x00,0x22,0x09,0x00,0x00,0x01,0x03,0x04}`

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

- If you have a [sensor shield](http://www.st.com/en/ecosystems/x-nucleo-iks01a2.html) attached the device then unComment the `#define SENSOR_ENABLED` statement

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
- Open a file explorer window and find the attached device. It should appear as an external device and have a name similar to `DIS_L072Z`

Now you need to grab the binary and upload to the device.

- Browse to `< filepath to your project directory> /Projects/Multi/Applications/LoRa/End_Node/SW4STM32/B-L072Z-LRWAN1/mlm32l07x01/Debug/` where the `< filepath to your project directory>` value is the location of your project on disk.
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

## Stream IoT packets from Senet to Microshare®

Follow [this Senet tutorial](../senet-tutorial) to set up a redirection of IoT packets to the Microshare® platform.
