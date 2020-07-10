---
layout: docs
title: Data Ingestion
description: How your data gets into the Microshare™ Data Lake
toc: true
---

---------------------------------------
##### SUMMARY : 

1. [What is Data Ingestion?](./#1-what-is-data-ingestion)
2. [New Process](./#2-new-process)
3. [Ingesting Data Manually](./#3-ingesting-data-manually)
4. [How do I set up my Device Cluster to ingest my data automatically into the Data Lake?](./#4-how-do-i-set-up-my-device-cluster-to-ingest-my-data-automatically-into-the-data-lake)
5. [How does the Data Ingestion Process work?](./#5-how-does-the-data-ingestion-process-work)



## 1. What is Data Ingestion? 

---------------------------------------

Data ingestion is the process by which Microshare® can help you migrate data from various other sources and store them in the Microshare® data lake. This is most applicable to take the data from your sensors and display them on your dashboard/ app. 


## 2. New Process

---------------------------------------

Microshare® used to automate this process through the use of robots but have sense developed programs to gather and unpack data more efficiently through the device clusters. You can learn a lot more about how Microshare® used to ingest and format data in the [Data Ingestion by Robots](/docs/2/technical/microshare-platform-advanced/data-ingestion-by-robots/) and the [Data Formatting by Robots](/docs/2/technical/microshare-platform-advanced/data-formatting-by-robots/) pages.



## 3. Ingesting Data Manually

---------------------------------------

You can also upload data to the Microshare® data lake without the device cluster or robots. Manual upload is the most basic way of loading data from your own database, or from an open data project. To do so, send your data as the body of a [POST /share call](/assets/html/api-ms.html#request-shares-create-one-share). It will then be available to use from the data lake with [GET /share calls](/assets/html/api-ms.html#request-shares-get-one-share).


## 4. How do I set up my Device Cluster to ingest my data automatically into the Data Lake?

---------------------------------------

[The Device Cluster Guide](/docs/2/technical/microshare-platform/device-cluster-guide/) serves as a great tutorial for walking you through the process of setting up the device cluster. In this guide, there will be a more in depth description regarding the numerous parameters for the device cluster. 



## 5. How does the Data Ingestion Process Work?

---------------------------------------

{% include image.html url="/assets/img/data-ingestion-1.png" description="DI1" %}

The part of the device cluster involved in data ingestion is collecting the data from the devices and depositing them into the lake. When creating the device cluster, the **source** recType, marked in green, denotes the name under which the encrypted information is coming from, and the **target** recType, marked in blue, is where it will be stored. In the unpacker code, the program will read the data stream from the source recType and store under the target recType. The target recType will be useful later when you want to pull the data from the data lake. The unpacked directory of the target recType is very important as it signifies that the data has been decoded. 

{% include image.html url="/assets/img/data-ingestion-2.png" description="DI2" %}


Marked in teal is the network provider category. This field is required as each network has their own format to deliver information to the Microshare® network. Filling out the wrong network provider will prohibit your devices' data from properly being represented on your dashboard. 


## What's Next?
---------------------------------------

After the data is injested into the lake, the data is then unpacked, or decrypted. This process is explained in detail in the [Data Formatting page](/docs/2/technical/microshare-platform-advanced/data-formatting-by-robots/).

