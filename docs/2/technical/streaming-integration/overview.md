---
layout: docs
title: Streaming Integration
description : Which type of streaming integration do I need?
toc: true
---
{% include image.html url="/assets/img/thumbnail-3.jpg" description="thumbnail 2" %}

---

## SUMMARY :

[Streaming Data Format from Microshare](./#streaming-data-format-from-microshare)

[Streaming APIs from Microshare](./#3-streaming-apis-from-microshare):

- A) [Azure IoT Hub](./#a-azure-iot-hub-integration)
- B) [Azure Event Hub](./#b-azure-event-hub-integration)
- C) [AWS Kinesis Data Stream Integration](./#c-aws-kinesis-data-stream-integration)
- D) [AWS SQS Integration](./#d-aws-sqs-integration)
- E) [Google PubSub Integration](./#e-google-pub-sub-integration)

---

## Streaming Data Format from Microshare

---

The JSON data envelope can be thought of as a wrapper around the "obj" data structure that would normally be returned by the REST API. The "obj" data structure contains the actual data for the object that has been created, while the data envelope contains additional metadata about the object, such as the event type, object type, and source. By wrapping the "obj" data structure in the data envelope, the streaming integration can provide additional context and information about the object that has been created. This can be useful for downstream applications or systems that need to process the data and make decisions based on the metadata provided in the data envelope. Overall, the JSON data envelope provides a standardized way of capturing and transmitting data from streaming integrations, making it easier to integrate with other systems and applications.

This JSON data envelope is used for streaming integrations and contains the following JSON elements:

"event_type": This key specifies the type of event that has occurred. In this case, the value is "create", which means that a new object has been created. Valid values include "create", "update", "delete".

"id": This key contains the unique identifier for the object that is being streamed. The value is a string of alphanumeric characters.

"obj": This key contains the data for the object that has been created. The value will be a JSON object containing data.

"obj_type": This key specifies the type of object that has been created. In this case, the value is "objs", which could refer to any type of IOT data object. Valid values include "objs", "devices", "health".

"recType": This key specifies the record type of the object. The value is a string that identifies the type of record.

"source": This key specifies the source of the data. The value is a string that identifies the source of the data, in this case, it is "ShareService".

This JSON data envelope is used to capture data from streaming integrations and is typically used to send data to other systems or applications. The data can be used for various purposes, such as analytics, reporting, or monitoring. The JSON data envelope is a flexible and versatile format that can be used to capture data from different types of sources and can be easily integrated with other systems and applications.

<br><br>

## Streaming APIs from Microshare

---

There are several methods to integrate Microshare data into your own platform with continuously updated stream of real-time data.
<br>

### Microsoft Azure

<br>

#### A) Azure IoT Hub Integration

Azure IoT Hub is a fully managed, simple, secure and scalable real-time data ingestion service designed specifically for IoT workloads. Broadcast millions of events per second from any source to create dynamic data pipelines and instantly address business challenges.
With Microshare, you can simply inject your data into the IoT Hub and combine it with IoT data streaming from other sources to create a unified data pipeline.

##### > [Azure IOT Hub Integration](/docs/2/technical/streaming-integration/azure-iot-hub-integration/)

<br>

#### B) Azure Event Hub Integration

Azure Event Hub is a fully managed, simple, secure and scalable real-time data ingestion service. Broadcast millions of events per second from any source to create dynamic data pipelines and instantly address business challenges.
With Microshare, you can simply inject your data into the Event Hub and integrate it with other tools you may already have in place.

##### > [Azure Event Hub Integration](/docs/2/technical/streaming-integration/azure-event-hub-integration/)

<br>

### Amazon Web Services (AWS)

<br>
#### C) AWS Kinesis Data Stream Integration

Amazon Kinesis facilitates real-time streaming data collection, processing, and analysis to quickly obtain strategic information and respond quickly. Amazon Kinesis offers critical capabilities to cost-effectively process streaming data at any scale, as well as the ability to choose the tools best suited to the needs of your application.
With Microshare, you can simply inject your data into the AWS Kinesis Data Stream and integrate it with downstream tools from the AWS ecosystem.

##### > [AWS Kinesis Data Stream Integration](/docs/2/technical/streaming-integration/aws-kinesis-data-stream-integration/)

<br>

#### D) AWS SQS Integration

Amazon Simple Queue Service (SQS) is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications. SQS eliminates the complexity and overhead associated with managing and operating message oriented middleware, and empowers developers to focus on differentiating work. Using SQS, you can send, store, and receive messages between software components at any volume, without losing messages or requiring other services to be available.
With Microshare, you can simply inject your data into the AWS SQS service and integrate it with downstream tools from the AWS ecosystem.

##### > [AWS SQS Integration](/docs/2/technical/streaming-integration/aws-sqs-integration/)

<br>

### Google Cloud Platform (GCP)

<br>
#### E) Google Pub/Sub

Pub/Sub is an asynchronous messaging service that decouples services that produce events from services that process events.

You can use Pub/Sub as messaging-oriented middleware or event ingestion and delivery for streaming analytics pipelines.

Google Pub/Sub offers durable message storage and real-time message delivery with high availability and consistent performance at scale. Pub/Sub can be used as messaging-oriented middleware or event ingestion and delivery for streaming analytics pipelines. Pub/Sub offers durable message storage and real-time message delivery with high availability and consistent performance at scale.
With Microshare, you can simply inject your data into the Google Pub/Sub service and integrate it with downstream tools from the Google ecosystem.

##### > [Google PubSub Integration](/docs/2/technical/streaming-integration/google-pub-sub-integration/)

<br>
