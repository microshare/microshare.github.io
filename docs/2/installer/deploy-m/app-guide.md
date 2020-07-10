---
layout: docs
title: Registration
description: A comprehensive guide to install some sensors with Deploy-M
group: deploy-m
toc: true
---

Get your Internet of Things data workflow started with the following steps:

---------------------------------------

##### SUMMARY : 

1. [Requirement](./#1-requirements)
2. [Sign In](./#2-sign-in)
3. [Access to a device cluster](./#3-access-to-device-cluster)
4. [Add a device](./#4-add-a-device)
5. [Change a device](./#5-change-a-device)
6. [Delete a device](./#6-delete-a-device)

---------------------------------------

## 1. Requirements

To be able to use the Deploy-M application some prerequisites are necessary. 
To start, a Microshare® account is required, either from our Production or Development platform. 
To create an account, [follow this guide](/docs/2/general-user/quick-start/create-an-account/).

Then this account will need to contain a device cluster that will be ready to host the devices that we will register with the application. 
You can create a device cluster by following [this guide](/docs/2/technical/microshare-platform/dashboard-guide/).

Finally you need to add your devices to the Microshare® platform. It is recommended to have devices with Microshare® QR codes to save time with the Deploy-M application.

## 2. Sign In

Now that all you are ready, let's start!

Launch the application Deploy-M on your smartphone, and you will see this first page : 

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M01.PNG" description="Deploy-M App" %}

At the first launch you will be able to connect to the production server. Simply fill in your email and password information to log in. 

You will arrive on the device cluster management page, where you will find the previously created device cluster.

However, if you want to use the development server, you have to login as we did. Go to the following page: 

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M02.PNG" description="Deploy-M App" %}

And then you change the "Development Server" switch, and then log out, so you can log in with your development server credentials now. 

## 3. Access to device cluster

As mentioned before, you are now on the device cluster management page, so you can see all the device clusters in your account. 

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M03.PNG" description="Deploy-M App" %}

You can select one of them and see all your devices within the cluster. Now we can use the power of the Deploy-M application.

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M04.PNG" description="Deploy-M App" %}



## 4. Add a device

We will now add a device. To do so, just click on the add button at the bottom of the application.

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M04B.PNG" description="Deploy-M App" %}

Once this is done, you can watch a tutorial, or add the device manually or just scan it.  

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M05.PNG" description="Deploy-M App" %}

So we're going to choose to scan our device.

This will open a scan page, we will just have to bring the Qr code of the device under the scanner as on the image below: 

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M06.PNG" description="Deploy-M App" %}

And so the application will recognize all its key parameters to be able to declare the device on the network directly and will also tell the type of the sensor. 

You will be redirected to a page to fill in the information, which is the same page as the modification page. 

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M07.PNG" description="Deploy-M App" %}

Now the location fields 1, 2, 3 and 4 must be filled in. They generally correspond to the building, floor, room and optional location index.

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M08.PNG" description="Deploy-M App" %}

Once filled, simply save the sensor and it is added to the cluster device.

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M10.PNG" description="Deploy-M App" %}

## 5. Change a device

To modify a sensor, simply click on the desired sensor: 

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M09.PNG" description="Deploy-M App" %}

Modify the information, or click on "Rescan" to scan a different device instead of this one for this location, and then validate by clicking on "Save".

## 6. Delete a device

To delete a sensor just swipe left over the sensor concerned, and click on delete :

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M11.PNG" description="Deploy-M App" %}

The sensor is now deleted.

{% include image.html width="250rem" url="/assets/img/Deploy-M-app/Deploy-M04.PNG" description="Deploy-M App" %}
