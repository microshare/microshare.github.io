---
layout: docs
title: Device Declaration
description: description
toc: true
---

---------------------------------------

##### SUMMARY : 

1. [Possibilities](./#1-possibilities)
2. [Device Cluster Creation](./#2-device-cluster-creation)
2. [Add a device](./#3-add-a-device)

---------------------------------------


## 1. Possibilities
---------------------------------------

There are two solutions to install your sensors. 

The first is the old method where you create a device cluster and then add the devices on Microshare®. This involves knowing the exact location of the sensors before installation and then having to install the pre-selected sensor in exactly the right place. This method is not recommended because it is very time intenstive compared to the second method. 

The second method is much more simple than the first. Just create the device cluster on Microshare®. Then you just use Deploy-M to scan your sensors and indicate where you install them in real time. 

For both methods you need to create the cluster device first and then add the sensors. 

PS: Device clusters are often managed by the admin, please anticipate the needs with the admin to understand how devices are distributed by device clusters. 


## 2. Device Cluster Creation
---------------------------------------

This is a quick reference of the device cluster. A in- depth description of the device cluster and its applications can be found [here](../../../technical/microshare-platform/device-cluster-guide/).

A device cluster represents a grouping of sensors organized by sensor type. A device cluster cannot contain two types of sensors. The device cluster are often cross-referenced by global location (site or building) and finally by usecase.

Let's take an example, we have for example temperature sensors that we want to install in our building.

**We know:**

the type of sensor: Tabs Environment TBHV100

the global location: Europe,UK,London,Paddington,5 Merchant Square

the use case: temperature management

We can now create the device cluster. As previously recalled the device cluster are normally on the main administrator account. And this one is usually created by the administrator. You will simply make a request to the administrator of your entity to create the necessary device cluster.

## 3. Add a device
---------------------------------------

Once the device cluster has been created, all that remains to be done is to add the sensors. You can follow the [device cluster guide](../../../technical/microshare-platform/device-cluster-guide/) to add the devices the old way. 

Or simply download the [Deploy-M application](../../deploy-m/download-the-app) and follow this tutorial to use it and add all your sensors very quickly directly on site. 

##### > [Deploy-M Guide](../../deploy-m/app-guide)