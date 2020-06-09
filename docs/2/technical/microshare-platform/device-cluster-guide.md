---
layout: docs
title: Device Cluster Guide

toc: true
---

---------------------------------------

##### SUMMARY : 

1. [Introduction](./#1-introduction-what-is-a-device-cluster)
2. [Creating a Device Cluster](/.#2-creating-a-device-cluster)
3. [Updating a Device Cluster](/.#3-updating-a-device-cluster)

---------------------------------------

## 1. Introduction: What is a Device Cluster?
---------------------------------------

A Device Cluster is a group of sensors, most applicable to sensors in the same area, where their data is combined and displayed together when configured in your dashboard. This is most practical when looking to observe the area, and not just data from a single sensor. For example, Observing occupancy of all the desks in the office over the course of the workday, rather than just a single desk. 


## 2. Creating a Device Cluster
---------------------------------------
A device cluster can be either created by using [The Deploy- M App](/docs/2/installer/deploy-m/download-the-app/), or on the computer by following this tutorial. 

Head over to the [dapp.microshare.io](https://dapp.microshare.io/) developer page and login. If you do not already have a login in, [you can create one here](/docs/2/general-user/quick-start/create-an-account/). Navigate over to the Manage tab in top right-hand corner. Then, click the devices tab on the left-hand side.

{% include image.html url="\assets\img\device-cluster-image-1.png" height="900" width="900" description="Device CLuster 1" %}

Click the Create Button with the wrench tool icon. It will take you to the following page:

{% include image.html url="\assets\img\device-cluster-image-2.png" height="900" width="900" description="Device CLuster 2" %}

1.	Give a name to your device cluster according to your company, the type of sensors, the area they are in and so on.
2.	Give a brief description elaborating on the Device Cluster
3.	Make sure your Cluster is turned on. Make sure the box underlined in green is checked.
4.	The Record types are underlined in blue. The source record type is where the device cluster’s data is coming from. The target record type is the name under which your data from the device clusters will be stored. The naming convention works where the the first part of the rectype details who made the naming convention. So for example, if comcast owned the record type, their source record type would be com.microshare.environment. The unpacked label for the target rectype details that the data has been decrypted, which is very important for when you call on the rectype to be represented in your dashboard. As of right now, Microshare is the only source of naming the client’s rectypes, but the ability for clients to create their own naming conventions exists. 
5.	Underlined in orange is the device manufacturer box. Click the drop down and select the type of device your device cluster has. Selecting the model will automatically fill in the box labeled Device Payload Unpacker.
6.	Underlined in purple is the location metadata category. Enter tags detailing the location of the device so it is easier to identify the device later-on. For example, you should enter a tag for what city, building and room the device is in.

{% include image.html url="\assets\img\device-cluster-image-3.png" height="900" width="900" description="Device Cluster 3" %}
7.	Underlined in yellow is where your cluster performance will be graphed when you add your devices to the cluster in the next step.
8.	To add devices to the device cluster, click the add button underlined in red. 
* 	Enter the devices EUI or ID. You can find your device’s EUI or ID [here](/docs/2/installer/quick-start/faq-about-installations/).
* 	Add the tags describing the location of the device. For example, include tags for the city, building, room, and what part of the room
* 	Repeat these steps for all of your devices that you wish to add to the cluster
9.	Underlined in teal is your network provider. Click the drop down and select the appropriate network.
10.	Underlined in green is a LoRa OTAA checkbox. OTAA stands for Over the Air Authentication. This is a gateway with extra data security. If you plan on using this service for your device cluster, check this box. Only follow the next few steps if you are using LoRa OTAA

{% include image.html url="\assets\img\device-cluster-image-4.png" height="900" width="900" description="Device Cluster 4" %}

11.	Provide your Account Token in the box underlined in blue. This can be done through the API, and a tutorial to do so [can be found here](/docs/2/technical/api/quick-start/).
12.	Click the dropdown underlined in purple for the Lora frequency plan of your region. If you do not know your region’s frequency plan, you can use [this page](https://www.thethingsnetwork.org/docs/lorawan/frequencies-by-country.html) to help.
13.	Select your LoRaWAN version underlined in orange
14.	Enter your server joinEUI underlined in green to compete the necessary information for using the LoRa OTAA 

#### What can I do from here?

Once you have created your Device Cluster, You can now create a dashboard to view your clusters data using the tutorial in the [Dashboard Guide](/docs/2/technical/microshare-platform/dashboard-guide/). You can also learn on how to update your device cluster in the next section. 

You can also learn to create rules and views to manage who can see the data from your device cluster through following the guides in the Microshare Platform Documentation.  

## 3. Updating a Device Cluster
---------------------------------------
There's currently a bug that at times when a Device Cluster has been updated, there is duplicate data unpacked.  In order to mitigate this before the bug is fixed, do the following when you update a Device Cluster to confirm that there's only one Device Cluster 

1. Update the Device Cluster 

2. View the logs/write a query to see if duplicate data is being unpacked 

Query to check for a single device:

{% highlight js %}
  [ 

  { 

    "$match": { 

      "recType": "io.microshare.occupancy.unpacked", 

      "data.device.id": "58-A0-CB-00-00-10-B1-55" 

    } 

  }, 

  { 

    "$sort": { 

      "data.meta.iot.time": -1 

    } 

  }, 

  { 

    "$limit": 25 

  }, 

  { 

    "$project": { 

      "time": "$data.meta.iot.time", 

      "hour": { 

        "$hour": { 

          "date": { 

            "$dateFromString": { 

              "dateString": "$data.meta.iot.time" 

            } 

          }, 

          "timezone": "America/New_York" 

        } 

      }, 

      "status": "$data.status_label", 

      "length": "$data.time_label", 

      "sensor": "$data.device.id" 

    } 

  }, 

  { 

    "$group": { 

      "_id": "$sensor", 

      "pings": { 

        "$push": { 

          "time": "$time", 

          "status": "$status", 

          "length": "$length", 

          "hour": "$hour" 

        } 

      } 

    } 

  } 

]  
{% endhighlight %}



