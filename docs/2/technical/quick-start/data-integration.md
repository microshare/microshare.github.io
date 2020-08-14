---
layout: docs
title: Data Integration
description : Which pages can help me with data integration?
toc: true
---

---------------------------------------

##### SUMMARY : 

1. [Quick Start](./#1-quick-start)
2. [Ingesting Data into Microshare®](./#2-ingesting-data-into-microshare)
3. [Streaming Data from Microshare®](./#3-stream-data-from-microshare)
    - A) [AZure IoT Hub](./#a-azure-iot-hub-integration)
    - B) [Azure Event Hub](./#b-azure-event-hub-integration)
    - C) [AWS Kinesis Data Stream Integration](./#c-aws-kinesis-data-stream-integration)
    - D) [AWS SQS Integration](./#d-aws-sqs-integration)
    - E) [Google PubSub Integration](./#e-google-pub-sub-integration)    
4. [Managing Data with Microshare® REST API](./#4-managing-data-with-microshare)


---------------------------------------

## 1. Quick Start
---------------------------------------

Data integration is the process of combining data from different sources into a unified view. The data is first imported, then cleaned to mapping and finally transformed into a target repository. This process ultimately makes the data more usable and useful to the users who view it.

This way, Microshare® allows you to integrate all your IoT data in an organized and accessible manner. This guide will walk you through how to integrate your data into Microshare®.

Once you have linked all your data to Microshare®, the data can be enhanced or filtered with our big data tools and robots can be created to act on certain events.
Although our dashboards are very powerful, you may need to integrate the improved data into your own platform for your own solutions. There are several ways to integrate data from Microshare® into your platform.

If you are a Microshare® reseller, you can send the data to Microshare® and once it has been processed, you can retrieve the useful information to create something directly for your customers. All this can be performed without revealing the Microshare® process, which allows you to easily master this chain.

<br>

## 2. Ingesting Data into Microshare®
---------------------------------------

To integrate the data into Microshare® there are three methods: 

### A) Network Server to push data.
For an IoT Server network you push the data on a rectype as shown on this page: 
##### > [Data Ingestion](/docs/2/technical/microshare-platform-advanced/data-ingestion/)

### B) HTTP POST to push data.
The API supports RESTful POST operations to inject data into the system as JSON documents. 
##### > [APIs](/docs/2/technical/api/quick-start/)

### C) Robots polling API endpoints to pull data.
Robots may run Javascript that can be used to pull in data via APIs at regular time intervals.
##### > [Data Ingestion](/docs/2/technical/microshare-platform-advanced/data-ingestion/)

<br>

## 3. Streaming Data from Microshare®
---------------------------------------

There are several methods to integrate Microshare® data into your own platform.
<br>
### Microsoft Azure
<br>

#### A) Azure IoT Hub Integration

Azure IoT Hub is a fully managed, simple, secure and scalable real-time data ingestion service designed specifically for IoT workloads. Broadcast millions of events per second from any source to create dynamic data pipelines and instantly address business challenges.
With Microshare®, you can simply inject your data into the IoT Hub and combine it with IoT data streaming from other sources to create a unified data pipeline. 
##### > [Azure IOT Hub Integration](/docs/2/technical/streaming-integration/azure-iot-hub-integration/)

<br>

#### B) Azure Event Hub Integration

Azure Event Hub is a fully managed, simple, secure and scalable real-time data ingestion service. Broadcast millions of events per second from any source to create dynamic data pipelines and instantly address business challenges.
With Microshare®, you can simply inject your data into the Event Hub and integrate it with other tools you may already have in place.
##### > [Azure Event Hub Integration](/docs/2/technical/streaming-integration/azure-event-hub-integration/)

<br>

### Amazon Web Services (AWS)

<br>
#### C) AWS Kinesis Data Stream Integration

Amazon Kinesis facilitates real-time streaming data collection, processing, and analysis to quickly obtain strategic information and respond quickly. Amazon Kinesis offers critical capabilities to cost-effectively process streaming data at any scale, as well as the ability to choose the tools best suited to the needs of your application.
With Microshare®, you can simply inject your data into the AWS Kinesis Data Stream and integrate it with downstream tools from the AWS ecosystem.
##### > [AWS Kinesis Data Stream Integration](/docs/2/technical/streaming-integration/aws-kinesis-data-stream-integration/)

<br>

#### D) AWS SQS Integration

Amazon Simple Queue Service (SQS) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. SQS eliminates the complexity and overhead associated with managing and operating message oriented middleware, and empowers developers to focus on differentiating work. Using SQS, you can send, store, and receive messages between software components at any volume, without losing messages or requiring other services to be available.
With Microshare®, you can simply inject your data into the AWS SQS service and integrate it with downstream tools from the AWS ecosystem.
##### > [AWS SQS Integration](/docs/2/technical/streaming-integration/aws-sqs-integration/)

<br>

### Google Cloud Platform (GCP)

<br>
#### E) Google Pub/Sub

 Pub/Sub is an asynchronous messaging service that decouples services that produce events from services that process events.

You can use Pub/Sub as messaging-oriented middleware or event ingestion and delivery for streaming analytics pipelines.

Google Pub/Sub offers durable message storage and real-time message delivery with high availability and consistent performance at scale. Pub/Sub can be used as messaging-oriented middleware or event ingestion and delivery for streaming analytics pipelines. Pub/Sub offers durable message storage and real-time message delivery with high availability and consistent performance at scale.
With Microshare®, you can simply inject your data into the Google Pub/Sub service and integrate it with downstream tools from the Google ecosystem.
##### > [Google PubSub Integration](/docs/2/technical/streaming-integration/google-pub-sub-integration/)

<br>

## 4. Managing Data with Microshare® REST API
---------------------------------------

An API is an IT solution that allows applications to communicate with each other and exchange services or data with each other. It is a set of functions that facilitate, via a programming language, access to the services of an application.

All of the services offered by the Microshare Platform are available for management via a robust RESTful API. Using the API, you can manage data and configuration using a consistent API which leverages HTTPS transport with JSON payloads.
The APIs to access Microshare® data easily from your own solution. 

To do this is very simple, just follow the steps in the Microshare® APIs tutorial.
##### > [APIs](/docs/2/technical/api/quick-start/)

<br>

{% include image.html url="\assets\img\microshare-logo.png"  description="ms logo" %}