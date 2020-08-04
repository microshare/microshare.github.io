---
layout: docs
title: Registration
description: A comprehensive guide to installing devices with Deploy-M
group: deploy-m
toc: true
---

Deploy-M is a mobile application that streamlines the device configuration process.  Using Deploy-M to configure the devices in your Microshare® account at the same time as you are physically installing them ensures that the digital twinning process is simple and error-free.

##### Get your Internet of Things data workflow started with the following steps

---------------------------------------

##### SUMMARY 

1. [Requirements](./#1-requirements)
2. [Sign In](./#2-sign-in)
3. [Access a device cluster](./#3-access-to-device-cluster)
4. [Add a device](./#4-add-a-device)
5. [Change a device](./#5-change-a-device)
6. [Delete a device](./#6-delete-a-device)

---------------------------------------

## 1. Requirements
---------------------------------------

To be able to use the Deploy-M application to configure your devices, make sure you have completed the prerequisite steps.  

To start, a Microshare® account is required, either from our Production or Development platform. 
To create an account, [follow this guide](/docs/2/general-user/quick-start/create-an-account/).

This account should have one or more "device clusters" to host the devices we will register with the application. 
To create a device cluster, [follow this guide](/docs/2/technical/microshare-platform/dashboard-guide/).

Now you are ready add devices to the Microshare® platform. Devices obtained through Microshare® will be labeled with Microshare® QR codes which will make configuration with the Deploy-M application easier, faster, and less error-prone.

## 2. Sign In
---------------------------------------
Now that all you are ready, let's start!

Launch the Deploy-M application on your smartphone.

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M01.PNG" description="Deploy-M App" %}

The first time you launch the application, you will be prompted to log in to the Microshare® production server. Fill in your user credentials to log in. 

You will arrive on the device cluster management page, where you will see the previously created device cluster(s).

NOTE: In order to use Microshare's development server, first log in to the production server as above. Then go to the About page. 

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M02.PNG" description="Deploy-M App" %}

Toggle the "Development Server" switch then log out.  Now you will be able to log in with your development server credentials. 

## 3. Access a device cluster
---------------------------------------

Make sure you are on the device cluster management page, where you can see the device clusters in your account. 

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M03.PNG" description="Deploy-M App" %}

Tap a device cluster to see the devices within that cluster.  

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M04.PNG" description="Deploy-M App" %}


## 4. Add a device
---------------------------------------

To add a device, tap the "Add" button at the bottom of the screen.

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M04B.PNG" description="Deploy-M App" %}

You can add a device manually or by scanning the Microshare® QR code.  

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M05.PNG" description="Deploy-M App" %}

Tap the "Scan" button to open the scan page, then move the camera and/or device until the QR code is visible in the camera view as seen in the image below.

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M06.PNG" description="Deploy-M App" %}

Deploy-M reads the device ID and the device type from the QR code and opens the "Add/Edit Device" page to allow you to fill in additional information.

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M07.PNG" description="Deploy-M App" %}

The four dropdown fields are the location tags used for digital twinning.  They usually correspond to the building, floor, room and optional location index.

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M08.PNG" description="Deploy-M App" %}

Make sure you fill in the correct location tags as this is critically important to the digital twinning process.

Once you've finished filling in the fields, tap the "Save" button to add the device to the device cluster and save the change to your Microshare account.

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M10.PNG" description="Deploy-M App" %}

## 5. Edit a device
---------------------------------------

To modify a device, tap the device cluster, then the desired device.  

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M09.PNG" description="Deploy-M App" %}

Modify the information manually, or tap the "Rescan" button to scan in a different device for this location.  Save your changes to your Microshare account by tapping the "Save" button.

## 6. Delete a device
---------------------------------------

To delete a device, swipe left on it, then tap "Delete".

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M11.PNG" description="Deploy-M App" %}

The device is now deleted.

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M04.PNG" description="Deploy-M App" %}
