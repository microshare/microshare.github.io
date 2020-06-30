---
layout: docs
title: Device Cluster Guide

toc: true
---

---------------------------------------

##### SUMMARY : 

1. [Introduction](./#1-introduction-what-is-a-device-cluster)
2. [Creating a Device Cluster](./#2-creating-a-device-cluster)
3. [Set the right RecType](./#3-set-the-right-rectype)
4. [Updating a Device Cluster](./#4-updating-a-device-cluster)
5. [Reauthorizing a Device Cluster](./#5-reauthorizing-a-device-cluster)

---------------------------------------

## 1. Introduction: What is a Device Cluster?
---------------------------------------

A device cluster is a group of sensors, most applicable to sensors in the same area, where their data is combined and displayed together when configured in your dashboard. This is most practical when looking to observe the area, and not just data from a single sensor. For example, Observing occupancy of all the desks in the office over the course of the workday, rather than just a single desk. It is important to note that all the devices within a cluster must be the same model of sensor. 

#### What does the Device Cluster process look like?

Data from your sensors is sent via "Lora" signal to your LoRaWAN gateway. The gateways sends the data via WiFi or cellular signal to its corresponding network then to the Microshare® network under the source recType name. The device cluster program takes the data from the source recType, and pushes it into the Microshare® data lake under the target recType name. From there, the data goes through the decoding function corresponding to the type of your device. After, the program POSTs your data in a digestible format to the Microshare® API so that it can be represented on your dashboard or app.  

## 2. Creating a Device Cluster
---------------------------------------
A device cluster can be either created by using [The Deploy- M App](/docs/2/installer/deploy-m/download-the-app/), or on the computer by following this tutorial. 

Head over to the [dapp.microshare.io](https://dapp.microshare.io/) developer page and login. If you do not already have a login in, [you can create one here](/docs/2/general-user/quick-start/create-an-account/). Navigate over to the Manage tab in top right-hand corner. Then, click the devices tab on the left-hand side.

{% include image.html url="\assets\img\device-cluster-image-1.png" height="900" width="900" description="Device CLuster 1" %}

Click the Create Button with the wrench tool icon. It will take you to the following page:

{% include image.html url="\assets\img\device-cluster-image-2.png" height="900" width="900" description="Device CLuster 2" %}

1.	Give a name to your device cluster according to your company, the type of sensors, the area they are in and so on.
2.	Give a brief description elaborating on the device cluster.
3.	Make sure your cluster is turned on. Make sure the box underlined in green is checked.
4.	The record types are underlined in blue. The source record type is where the device cluster’s data is coming from. The target record type is the name under which your data from the device clusters will be stored. The naming convention works where the the first part of the rectype details who made the naming convention. So for example, if Comcast owned the record type, their source record type would be com.comcast.environment. The unpacked label for the target rectype details that the data has been decrypted, which is very important for when you call on the rectype to be represented in your dashboard. As of right now, Microshare® is the only source of naming the client’s rectypes, but the ability for clients to create their own naming conventions exists. 
##### <!> Please make sure to follow the [RecType best practices](./#3-set-the-right-rectype) ! <!>
5.	Underlined in orange is the device manufacturer box. Click the drop down and select the type of device your device cluster has. Selecting the model will automatically fill in the box labeled <em>Device Payload Unpacker</em>.
6.	Underlined in purple is the location metadata category. Enter tags detailing the location of the device cluster so it is easier to identify the devices later-on, it's a general location for all the devices of the device cluster. Here is an example of what it should be : 
* *Europe,United Kingdom,London,5 Merchant Square,desk*

So as you can understand the structure is as follows:

`continent` **/** `country` **/** `city` **/** `address` **/** `usecase`

{% include image.html url="\assets\img\device-cluster-image-3.png" height="900" width="900" description="Device Cluster 3" %}
7.	Underlined in yellow is where your cluster performance will be graphed when you add your devices to the cluster in the next step.
8.	To add devices to the device cluster, click the add button underlined in red. 
* 	Enter the devices EUI or ID. You can find your device’s EUI or ID [here](/docs/2/installer/quick-start/faq-about-installations/).
* 	Add the tags describing the location of the device. For example, include tags for the city, building, room, and what part of the room.
* 	Repeat these steps for all of your devices that you wish to add to the cluster.
9.	Underlined in teal is your network provider. Click the drop down and select the appropriate network.
###### <!> These following steps are not often used just take care of them if you are using Lora OTAA <!>
10.	Underlined in green is a LoRa OTAA checkbox. OTAA stands for Over the Air Authentication. This is a gateway with extra data security. If you plan on using this service for your device cluster, check this box. Only follow the next few steps if you are using LoRa OTAA.
{% include image.html url="\assets\img\device-cluster-image-4.png" height="900" width="900" description="Device Cluster 4" %}
11.	Provide your account token in the box underlined in blue. This can be done through the API, and a tutorial to do so [can be found here](/docs/2/technical/api/quick-start/).
12.	Click the dropdown underlined in purple for the Lora frequency plan of your region. If you do not know your region’s frequency plan, you can use [this page](https://www.thethingsnetwork.org/docs/lorawan/frequencies-by-country.html) to help.
13.	Select your LoRaWAN version underlined in orange.
14.	Enter your server joinEUI underlined in green to compete the necessary information for using the LoRa OTAA.

#### What can I do from here?

Once you have created your device cluster, You can now create a dashboard to view your clusters data using the tutorial in the [Dashboard Guide](/docs/2/technical/microshare-platform/dashboard-guide/). You can also learn on how to update your device cluster in the next section. 

You can also learn to create rules and views to manage who can see the data from your device cluster through following the guides in the Microshare® platform documentation. 


## 3. Set the right RecType
---------------------------------------

To make sure you have a working system it is important to follow the instructions for using the correct recType. 

The pattern is:  

`<reverse DNS of model owner>.<data domain tag>.<data state/stage>`

 

The device formats will be owned by io.microshare because of our Data Domain Modules (DDM) define the standard JSON models for given domains.

 

eg. 

    io.microshare.motion.packed => io.microshare.motion.unpacked 

---------------------------------------

###### <!>It is possible that the corresponding packed RecType has something different, although not recommended, if the organization is old or more representative. But it is necessary that the unpacked RecType follows best practices. <!>

---------------------------------------

**Examples**

 

Using standard conventions for different types of data:  

* io.microshare.motion.unpacked

* io.microshare.feedback.unpacked 

* io.microshare.environment.unpacked 

* io.microshare.gps.unpacked 

* io.microshare.alarm.unpacked 

 

Common recTypes will allow greater consistency for pipeline processing downstream. Data that shares a recType should have JSON formats in common and can take advantage of common processing steps. Common recTypes will create consistency in the product apps and downstream analytics products by eliminating the need for tweaks to code and config. 

 

The rules engine automatically filters out records with the same recType that are owned (and not shared) making inclusion of organizational context in the recType unnecessary. 

 

Tags should be used to distinguish the contextual information used to filter the data from data with similar tags. Good tagging practices is important to allow consistent recTypes to function.  

 

Ownership/client is already denoted separately in the records through the "owner" segment of the record. Additional owner context can be provided through tags. 

 

##### Devices 

Here is a table of unpackers with the fields they generate and the domains they might be appropriate for: 

 
| Unpacker                          | Fields                                                             | Domain(s)               |
| --------------------------------- | ------------------------------------------------------------------ | ----------------------- |
| ch.parametric.counter.PCR1LR      | motions\_since\_transmit                                           | motion                  |
| cn.winext.smoke.AN102C            | alarm, smokiness, temperature, humidity, haziness                  | alarm  environment      |
| cn.winext.gas.AN302               | alarm, gas                                                         | alarm  environment      |
| cn.winext.sos.AN301               | alarm                                                              | alarm                   |
| com.adeunis.motion.ARF8276A       | motions\_since\_reset                                              | motion                  |
| com.adeunis.temperature.ARF8180   | temperature                                                        | environment             |
| com.bosch.parking.TPS110          | presence                                                           | motion                  |
| com.brighterbins.level.V00001     | distance, temperature                                              | distance  environment   |
| com.brighterbins.level.V00001     | fill, temperature                                                  | environment, ??         |
| com.gemteks.tracker.WSMS116       | presence, gps                                                      | motion, gps             |
| com.mcf88.environment.LW12VOC     | iso\_time, temperature, humidity, pressure, illuminance, voc       | environment             |
| com.netvox.environment.R711       | temperature, humidity                                              | environment             |
| com.netvox.leak.R311W             | alarm                                                              | alarm                   |
| com.netvox.motion.RB11E           | temperature, illuminance, presence                                 | environment             |
| com.netvox.panic.RB02I            | alarm                                                              | alarm                   |
| com.netvox.security.R311A         | closed                                                             | ??                      |
| com.netvox.smoke.RA02A            | alarm                                                              | alarm                   |
| com.risinghf.environment.RHF1S001 | temperature, humidity                                              | environment             |
| eu.skiply.button.SmilioAction     | swipe, pushes\_since\_reset                                        | feedback                |
| io.tracknet.healthy.TBHV100       | temperature, humidity, co2, voc                                    | environment             |
| io.tracknet.leak.TBWT100          | leak, temperature, humidity                                        | environment, ??         |
| io.tracknet.light.TBAM100         | temperature, illuminance                                           | environment             |
| io.tracknet.motion.TMBS100        | presence, temperature, motions\_since\_reset                       | motion  environment,    |
| io.tracknet.security.TBDW100      | closed, temperature, motions\_since\_reset                         | environment  motion, ?? |
| io.tracknet.sound.TBSL100         | temperature, loudness                                              | environment, ??         |
| se.elsys.environment.ERSCO2       | temperature, humidity, illuminance, motions\_since\_transmit, co2  | environment  motion     |
| se.elsys.motion.ERSEye            | temperature, humidity, illuminance                                 | environment             |

Here is a list of our product apps along with the domain data they require: 

| App                       | recType                 |                                                         |
| ------------------------- | ----------------------- | ------------------------------------------------------- |
| air\_quality              | environment, airquality | Used to be airquality, now moving to environment        |
| attendance                |                         |                                                         |
| available\_desks          | motion                  |                                                         |
| available\_meeting\_rooms | motion                  |                                                         |
| environment               | environment             |                                                         |
| feedback\_3               | feedback                |                                                         |
| feedback\_5               | feedback                |                                                         |
| floorplan                 | occupancy, environment  | Uses both IF floorplan displays occupancy AND temp data |
| motion                    | motion                  |                                                         |
| occupancy                 | motion                  |                                                         |
| occupancy\_meeting\_rooms | motion                  |                                                         |
| refrigerator              | environment             |                                                         |
 



## 4. Updating a Device Cluster
---------------------------------------

To update your device cluster, simply go to the device cluster page, then click update. You will be able to modify the information of your device cluster and your devices. 

Warning: 
* You won't be able to change the rectypes
* Do not reuse an old device cluster for a new type of device. It is better to create a new device cluster for this purpose.

You can simply upgrade your device cluster and it will work. 

If you feel that your changes have not been taken into account, please click on re-authorize on the update page.

## 5. Reauthorizing a Device Cluster
---------------------------------------

With Microshare® you have the possibility to reauthorize a device cluster, you can do the same thing with a robot as well. 

What does reauthorize mean?

To understand this it is necessary to understand the principle of [identity](../../microshare-platform-advanced/identity-guide). And ownership linked to share rules. 

The reauthorization will allow to reassociate the ownership of a device cluster. When you click on this button, Microshare® will take the account under which you are logged in, as well as the identity you are currently on, and will reauthorize the ownership and identity of the device cluster. 

This is especially useful when the device cluster has been created under the wrong identity. Because usually we recommend to create it under the Microshare® default identity.

Be careful, changing the ownership of the data means that it can also impact the sharing of the data, if the share rules do not match anymore.
