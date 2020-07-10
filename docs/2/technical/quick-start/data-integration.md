---
layout: docs
title: Data Integration
description : Which pages can help me with data integration?
toc: true
---

---------------------------------------

##### SUMMARY : 

1. [Quick Start](./#1-quick-start)
2. [From Somewhere to Microshare®](./#2-from-somewhere-to-microshare)
3. [From Microshare® to Somewhere](./#3-from-microshare-to-somewhere)
    - A) [API](./#a-api)
    - B) [Azure Event Hub](./#b-azure-event-hub-integration)
    - C) [AWS Kinesis Data Stream Integration](./#c-aws-kinesis-data-stream-integration)

---------------------------------------



## 1. Quick Start
---------------------------------------

Data integration is the process of combining data from different sources into a unified view. The data is first imported, then cleaned to mapping and finally transformed into a target repository. This process ultimately makes the data more usable and useful to the users who view it.

This way, Microshare® allows you to integrate all your IoT data in an organized and accessible manner. This guide will walk you through how to integrate your data into Microshare®.

Once you have linked all your data to Microshare®, the data can be enhanced or filtered with our big data tools and robots can be created to act on certain events.
Although our dashboards are very powerful, you may need to integrate the improved data into your own platform for your own solutions. There are several ways to integrate data from Microshare® into your platform.

If you are a Microshare® reseller, you can send the data to Microshare® and once it has been processed, you can retrieve the useful information to create something directly for your customers. All this can be performed without revealing the Microshare® process, which allows you to easily master this chain.

<br>

## 2. From Somewhere to Microshare
---------------------------------------

To integrate the data into Microshare® there are three methods. 

First, you push the data to Microshare®. 
For an IoT Server network you push the data on a rectype as shown on this page: 
##### > [Data Ingestion](/docs/2/technical/microshare-platform-advanced/data-ingestion/)
Each time a new data is created it is sent to Microshare® and if the data formatting tools are in place the data will be automatically processed and improved.

The second method is to use robots which are further elaborated on this page:
##### > [Data Ingestion By Robots](/docs/2/technical/microshare-platform-advanced/data-ingestion-by-robots/)
With this you will be able to create Websockets or even pull data at regular time intervals.

Finally you can use our simple API request to write into Microshare® with an API.
##### > [APIs](/docs/2/technical/api/quick-start/)

<br>

## 3. From Microshare® to Somewhere
---------------------------------------

There are several methods to integrate Microshare® data into your own platform.

<br>

### A) API

The API can be summarized as an IT solution that allows applications to communicate with each other and exchange services or data with each other. It is actually a set of functions that facilitate, via a programming language, access to the services of an application.

So here it's all about being able to use APIs to access Microshare® data easily from your own solution. 
You can even access this data via the Microshare® big data tools. 

To do this is very simple, just follow the steps in the Microshare® APIs tutorial.
##### > [APIs](/docs/2/technical/api/quick-start/)

<br>

### B) Azure Event Hub Integration

Event Hubs is a fully managed, simple, secure and scalable real-time data ingestion service. Broadcast millions of events per second from any source to create dynamic data pipelines and instantly address business challenges.
With Microshare®, you can simply inject your data into the Event Hub and integrate it with other tools you may already have in place.
##### > [Azure Event Hub Integration](/docs/2/technical/extra-information/azure-event-hub-integration/)

<br>

### C) AWS Kinesis Data Stream Integration

Amazon Kinesis facilitates real-time streaming data collection, processing, and analysis to quickly obtain strategic information and respond quickly. Amazon Kinesis offers critical capabilities to cost-effectively process streaming data at any scale, as well as the ability to choose the tools best suited to the needs of your application.
With Microshare®, you can simply inject your data into the AWS Kinesis Data Stream and integrate it with other tools you may already have in place.
##### > [AWS Kinesis Data Stream Integration](/docs/2/technical/extra-information/aws-kinesis-data-stream-integration/)