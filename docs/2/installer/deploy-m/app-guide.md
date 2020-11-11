---
layout: docs
title: Registration
description: A comprehensive guide to installing devices with Deploy-M
group: deploy-m
toc: true
---


{% include image.html url="/assets/img/deploy-M-1.png" description="thumbnail 2" %}




##### SUMMARY 
1. [Overview](./#1-overview)
2. [Requirements](./#1-requirements)
3. [Sign In](./#2-sign-in)
4. [Access a device cluster](./#3-access-to-device-cluster)
5. [Add a device](./#4-add-a-device)
6. [Change a device](./#5-change-a-device)
7. [Delete a device](./#6-delete-a-device)
<br>


## 1. Overview
---------------------------------------
Deploy-M is a mobile application that streamlines the device configuration process. Use Deploy-M to configure all your devices to your Microshare® account simultaneously, saving you time and ensuring an error- free installation of your digital twinning solution. 

###### Get your Internet of Things data workflow started with the following steps


## 2. Requirements
---------------------------------------

To be able to use the Deploy-M application to configure your devices, make sure you have completed the following prerequisites.  

To start, a Microshare® account is required, either from our Production or Development platform. 
To create an account, [follow this guide.](/docs/2/general-user/quick-start/create-an-account/)

This account should have one or more "device clusters" to host the devices we will register with the application. 
To create a device cluster, [follow this guide.](/docs/2/technical/microshare-platform/device-cluster-guide/)

You are now ready to add devices to the Microshare® platform. Devices obtained through Microshare® will be labeled with Microshare® QR codes, which will make configuration with the Deploy-M application easier, faster, and less error-prone.

## 3. Sign In
---------------------------------------
Now that all you are ready, let's start!

<br>
**1.** Launch the Deploy-M application on your smartphone.

<br>
{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M01.PNG" description="Deploy-M App" %}

<br>
**2.** The first time you launch the application, you will be prompted to log in to the Microshare® production server. Fill in your user credentials to log in. 

<br>
You will arrive on the device cluster management page, where you will see the previously created device cluster(s).

**NOTE:** In order to use Microshare®'s development server, first log in to the production server as above. Then go to the About page. 

<br>
{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M02.PNG" description="Deploy-M App" %}

<br>
Toggle the **<em>Development Server</em>** switch then log out.  Now you will be able to log in with your development server credentials. 

## 4. Access a device cluster
---------------------------------------

**1.** Make sure you are on the device cluster management page, where you can see the device clusters in your account. 

<br>
{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M03.PNG" description="Deploy-M App" %}

<br>
**2.** Tap a device cluster to see the devices within that cluster.  

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M04.PNG" description="Deploy-M App" %}


## 5. Add a device
---------------------------------------

**1.** To add a device, tap the **<em>Add</em>** button at the bottom of the screen.

<br>
{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M04B.PNG" description="Deploy-M App" %}

You can add a device manually or by scanning the Microshare® QR code.  

<br>
{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M05.PNG" description="Deploy-M App" %}

**2.** Tap the **<em>Scan</em>** button to open the scan page, then move the camera and/or device until the QR code is visible in the camera view as seen in the image below.

<br>
{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M06.PNG" description="Deploy-M App" %}

<br>
Deploy-M reads the device ID and the device type from the QR code and opens the **<em>Add/Edit Device</em>** page to allow you to fill in additional information.

<br>
{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M07.PNG" description="Deploy-M App" %}

<br>
**3.** The four dropdown fields are the location tags used for digital twinning.  They usually correspond to the building, floor, room and optional location index.

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M08.PNG" description="Deploy-M App" %}

Make sure you fill in the correct location tags as this is critically important for the digital twinning process. Find more information on location tags [here](/docs/2/installer/deploy-m/contact-tracing-installation-guide/#more-on-tags).

**4.** Once you've finished filling in the fields, tap the **<em>Save</em>** button to add the device to the device cluster and save the change to your Microshare® account.

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M10.PNG" description="Deploy-M App" %}

## 6. Edit a device
---------------------------------------

To modify a device, tap the device cluster, then the desired device.  

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M09.PNG" description="Deploy-M App" %}

Modify the information manually, or tap the **<em>Rescan</em>** button to scan in a different device for this location.  Save your changes to your Microshare account by tapping the **<em>Save</em>** button.

## 7. Delete a device
---------------------------------------

To delete a device, swipe left on it, then tap **<em>Delete</em>**.

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M11.PNG" description="Deploy-M App" %}

<br>
The device is now deleted.

<br>
{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M04.PNG" description="Deploy-M App" %}

{% include image.html url="\assets\img\microshare-logo.png"  description="ms logo" %}
