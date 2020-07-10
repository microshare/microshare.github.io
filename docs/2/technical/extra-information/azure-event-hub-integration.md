---
layout: docs
title: Microsoft Azure Hub Integration
description: 
toc: true
---


## 1. Overview
---------------------------------------

Event Hub integration is a streaming data integration that pushes data from the Smart Network into a client's Azure tenancy in real-time. Data is typically made available to an Event Hub with sub-second latency to ensure that event handling and analytics are delivered with the most current state of the measured space. 


## 2. Setup
---------------------------------------

To be suitable for real-time integration, the Event Hub Namespace must be configured with the following options:

>> 1) Kafka API enabled - this option cannot be changed once the Event Hub Namespace is created

>> 2) Shared Access Policy (SAS) that grants the "Manage" policy as with the "Ingest" SAP in the screenshot below. 

Setup this way, the integration will automatically create new Event Hub queues within your Event Hub Namespace so that new data types can be transmitted without further configuration. Each Microshare® recType will be exported into its own unique queue so that even with multiple sensors and data streams, the data remains segmented for easy analysis. 

{% include image.html url="\assets\img\azure-hub.png" width="900" description="azure event hub" %}

Your Microshare® Service or Support contact will need the "Connection string-primary key" it should look something like this: 

`Endpoint=sb://yourchoice.servicebus.windows.net/;SharedAccessKeyName=microshareintegration;SharedAccessKey=mkeyQB/MuK/hfHwSomeOtherChars2qyqroAJsS92vt0=;EntityPath=yourchoice`
 
This key should remain private. Do not transmit or store the key in an unsecure manner.



## 3. Security
---------------------------------------

As with most Azure facilities, Event Hubs support authentication and authorization through Share Access Signatures (SAS) which allow the client full control over the write permissions for the Event Hub Namespace and positively identifies the Smart Network access. Data is encrypted on the network and at rest by default with Event Hubs. Logging and monitoring of both data and management activity is available on the Event Hub. Because the Smart Network originates outside of the corporate networks, Network Security restrictions on write operations are not possible on the inbound network endpoint. Restriction of internal network access is possible. Consult a Microsoft Certified partner for more information.

Security References

[https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-security-controls](https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-security-controls)

[https://docs.microsoft.com/en-us/azure/event-hubs/authorize-access-shared-access-signature](https://docs.microsoft.com/en-us/azure/event-hubs/authorize-access-shared-access-signature)