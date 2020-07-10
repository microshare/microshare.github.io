---
layout: docs
title: Data Formatting
description: How your data is decrypted and delivered to you
toc: true
---

---------------------------------------
##### SUMMARY : 

1. [What is Data Formatting?](./#1-what-is-data-formatting)
2. [New Process](./#2-new-process)
3. [Setting up Device Cluster for Data Formatting](./#3-setting-up-device-clsuter-for-data-formatting)
4. [How does the Data Formatting Process Work?](./#4-how-does-the-data-formatting-process-work)
5. [Set up your platfrom to post the data](./#5-set-up-your-platform-to-post-the-data)
6. [What's next?](./#6-whats-next)



## 1. What is Data Formatting?
---------------------------------------

Data formatting or processing is the process by which Microshare® takes encrypted data from your device(s) and represents them onto your dashboard.  

## 2. New Process
---------------------------------------

Microshare® used to perform data formatting with a series of robots, but have hence engineered a new solution for representing your data through device clusters. You can learn a lot more about how Microshare® used to format data in the [Data Formatting by Robots](/docs/2/technical/microshare-platform-advanced/data-formatting-by-robots) page.

## 3. Setting up the Device Cluster for Data Ingestion
---------------------------------------

[The Device Cluster Guide](/docs/2/technical/microshare-platform/device-cluster-guide/) serves as a great tutorial for walking you through the process of setting up the device cluster. The data formatting page will be a more in depth description regarding the numerous parameters for the device cluster. 

## 4. How does the Data Formatting Process Work?
---------------------------------------

After completing the source and target recTypes, the next set of information that you give relates to the devices themselves. When you give the device model specifications, it automatically fills out the device payload unpacker.


{% include image.html url="/assets/img/data-formatting-1.png" description="DF1" %}

The device model specifications catagory is marked in green and the device payload unpacker is marked in blue. The device payload unpacker is specific to the format of information that you device sends, and relates to the specific function that  decrypts your information. 


You then give each of your devices' EUI or Id and the location tags. These specifications are underlined in red and orange. These specifications allow the unpacker code to only decipher information from your devices and differentiate from records coming from multiple devices. After being parsed, the payload is then transformed by the unpacker code. Depending on what you are recording, an event can be triggered and the data  is stored with extra information on the value that was decoded, its unit, the device it came from, the time the recording occurred and so on. 

Finally, the data is written to the data lake under the target recType.unpacked name along with the tags specified while creating the device cluster. The datawrite builds the audit trail of your data and allows the triggering of the next step in the workflow. 

#### The entire process looks like this:

Data from your sensors is sent via "Lora" signal to your LoRaWAN gateway. The gateways sends the data via WiFi or cellular signal to its corresponding network then to the Microshare® network under the source recType name. The device cluster program takes the data from the source recType, and pushes it into the Microshare® data lake under the target recType name. From there, the data goes through the decoding function corresponding to the type of your device. From there, the program POSTs your data in a digestible format to the Microshare® API so that it can be represented on your dashboard or app.  


## 5. Set up your platform to post the data
---------------------------------------

For [Actility ThingsPark](https://partners.thingpark.com/en/dashboard) or a Kerlink private gateway.
Some platforms can be configured to POST data. Configure them to do a POST /share/:recType call.


## 6. What's next?
---------------------------------------

Once your data is loaded in the data lake, you'll want to get it ready to be used in dashboards and applications. Build your multisteps worflow with a [Data Workflow](../data-workflow) to parse, transform and format your data automatically.  