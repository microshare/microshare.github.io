---
layout: docs
title: B-L072Z-LRWAN1 Discovery kit
description:
group: advanced
toc: true
---

# Getting Started

In this tutorial you're going to program the [B-L072Z-LRWAN1 LoRa®Discovery kit](http://www.st.com/en/evaluation-tools/b-l072z-lrwan1.html) using the [System Workbench for STM32 IDE](../system-workbench-st32-ide).

## Get the ST Micro Resource

- Log into your [ST Micro account](https://my.st.com/cas/login?service=https%3A%2F%2Fmy.st.com%2Fcontent%2Fmy_st_com%2Fen.html) or create an account if you don't already have one
- Download the ST Micro [I-CUBE-LRWAN SDK](http://www.st.com/content/st_com/en/products/embedded-software/mcus-embedded-software/stm32-embedded-software/stm32cube-embedded-software-expansion/i-cube-lrwan.html)
- Unzip the I-CUBE-LRWAN SDK file `en.i-cube_lrwan.zip` you just downloaded

## System Workbench STM32 IDE

- Download & Install the [System Workbench for STM32 IDE](../system-workbench-st32-ide)

### Import the I-CUBE-LRWAN SDK into the System Workbench IDE

- Open the System Workbench IDE
- Click `File` > Open Projects from File System...
- Click `Directory` > Browse to the `en.i-cube_lrwan` directory created when you unzipped the en.i-cube_lrwan.zip file
- Continue browsing to `/Projects/Multi/Applications/LoRa/End_Node/SW4STM32/B-L072Z-LRWAN1/`
- Select the `mlm32l07x01` Click `OK`
- **Check** the box next to `mlm32l07x01`
- Click `Finish`

### Initial Build of the mlm32l07x01 Porject

At this point you've opened the `mlm32l07x01` project and now you must build all the SDK libraries.

- In the Project Explorer you should see the `mlm32l07x01` folder
- Click the `Project` Menu > `Build All` or Press CTRL-B to build
- When the build completes you should see a success messages such as this `15:13:22 Build Finished (took 22s.424ms)`

### Configure Global Environment Settings

If you are in the USA you must change the LoRaWAN frequency to `915MHZ` in the project's `Preprocessor` setting in the IDE

- In the Project Explorer window find the `mlm32l07x01` project
- Right Click the `mlm32l07x01` folder > Click `Properties`
- Expand `C/C++ Build` tree > Click `Settings`
- Click `Tools Settings` tab > Expand the `MCU GCC Compiler` tree
- Click `Preprocessor` folder > Double Click the `REGION_EU868` value in the Defined Symbols section
- Click replace the REGION_EU868 value with `REGION_US915` > Click `OK` > Click `OK` again
- Recompile with new settings > Click the `Project` Menu > `Build All` or Press CTRL-B to build

After the project Builds successfully you're ready to being programming the B-L072Z-LRWAN1 device to join a LoRaWAN network such as [Senet](http://www.senetco.com/) or [MachineQ](http://machineq.com/)

## Provision B-L072Z-LRWAN1 Discovery Kit on [Senet](http://www.senetco.com/)

Before you begin programming the device to join the Senet LoRaWan network you must add your device to your Senet Developer account profile. 

### Register for a Senet Developer Account

If you don't have a Senet account go over to the [Senet website](http://www.senetco.com/developer-portal/) & apply for a developer account.  When your Senet Developer account is approved you must log into the Developer Portal and register your new device using the Over The Air `OTAA` activation using the [Senet Device Registration](http://docs.senetco.io/docs/dev/#device-registration) instructions.

### Capture Required LoRa Device Keys

After adding your new device be sure to capture the MSB Hex Formated Numbers which resembles this example `{0x00,0x22,0x00,0x00,0x00,0x01,0x00,0x04}`

Get the values for the following keys:

- Device EUI
- App EUI
- AppKey

You will program the device with these values.

### Configure the Devices for OTAA Activation

Fill the rest in