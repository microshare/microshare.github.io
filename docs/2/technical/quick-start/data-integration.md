---
layout: docs
title: Data Integration
description : Which pages can help me with data integration?
toc: true
---

---------------------------------------

##### SUMMARY : 

1. [Qucik Start](./#1-quick-start)
2. [From Somewhere to Microshare](./#2-from-somewhere-to-microshare)
3. [From Microshare to Somewhere](./#3-from-microshare-to-somewhere)
    - A) [API](./#a-api)
    - B) [Azure Event Hub](./#b-azure-event-hub-integration)
    - C) [AWS Kinesis Data Stream Integration](./#c-aws-kinesis-data-stream-integration)

---------------------------------------



## 1. Quick Start
---------------------------------------

Data integration is the process of combining data from different sources into a unified view: from importing to cleansing to mapping and transforming into a target repository, ultimately making the data more usable and useful to the users who view it.

It is in this sense that Microshare allows you to integrate all your IoT data and much more easily to find all this data in the best place. Learn how to integrate the data into Microshare. 

But we also know that you linked all that data to Microshare. Once you have used them with Microshare, enhanced or filtered them with our big data tools and added your robots to react to events.
Although our dashboards are very powerful, you may need to integrate the improved data into your own platform to integrate it live into your solutions. There are several ways to integrate data from Microshare into your platform

So if you are a Microshare reseller, you can send the data to Microshare and then once it has been processed you can retrieve the useful part to create something directly to your customers from this data without them necessarily seeing the Microshare aspect which however allows you to master this chain so easily.

<br>

## 2. From Somewhere to Microshare
---------------------------------------

To integrate the data into Microshare there are three possibilities. 

First, you push the data to Microshare. 
For an IoT Server network you push the data on a rectype as shown on this page: 
##### > [Data Ingestion](/docs/2/technical/microshare-platform-advanced/data-ingestion/)
Each time a new data is created it is sent to Microshare and if the Data Formatting tools are in place the data will be automatically processed and improved.

In a second way you can use the robots as explained on the page :
##### > [Data Ingestion By Robots](/docs/2/technical/microshare-platform-advanced/data-ingestion-by-robots/)
Indeed with this you will be able to create Websockets, or even pull data at regular time intervals.

Finally you can use our simple API request to write into Microshare with an API.
##### > [APIs](/docs/2/technical/api/quick-start/)

<br>

## 3. From Microshare to Somewhere
---------------------------------------

There are several methods to integrate microshare data into your own platform.

<br>

### A) API

The API can be summed up as an IT solution that allows applications to communicate with each other and exchange services or data with each other. It is actually a set of functions that facilitate, via a programming language, access to the services of an application.

So here it's all about being able to use APIs to access Microshare data easily from your own solution. 
You can even access this data via the Microshare big data tools. 

To do this is very simple, just follow the steps in the Microshare APIs tutorial.
##### > [APIs](/docs/2/technical/api/quick-start/)

<br>

### B) Azure Event Hub Integration

Event Hubs is a fully managed, simple, secure and scalable real-time data ingest service. Broadcast millions of events per second from any source to create dynamic data pipelines and instantly address business challenges.
So with Microshare you can simply inject your data into the Event Hub and integrate it with other tools you may already have in place.
##### > [Azure Event Hub Integration](/docs/2/technical/extra-information/azure-event-hub-integration/)

<br>

### C) AWS Kinesis Data Stream Integration

Amazon Kinesis facilitates real-time streaming data collection, processing, and analysis to quickly obtain strategic information and respond quickly. Amazon Kinesis offers critical capabilities to cost-effectively process streaming data at any scale, as well as the ability to choose the tools best suited to the needs of your application.
So with Microshare you can simply inject your data into the AWS Kinesis Data Stream and integrate it with other tools you may already have in place.
##### > [AWS Kinesis Data Stream Integration](/docs/2/technical/extra-information/aws-kinesis-data-stream-integration/)