---
layout: docs
title: Azure IoT Hub Integration
description: 
group: Azure IoT Hub Integration
toc: true
---
---------------------------------------

##### SUMMARY : 

1. [Overview](./#overview)
2. [Basic Architecture](./#basic-architecture)
3. [Setup](./#setup)
4. [Security](./#security)

---------------------------------------

## Overview
---------------------------------------

Azure IoT Hub Integration is a streaming data integration that pushes data from the Smart Network into a client&#39;s Azure tenancy in real-time. Data is typically made available to an IoT Hub with sub-second latency to ensure that event handling and analytics are feed with the most current state of the measured space. Azure IoT Hub Integration creates a pathway to advanced storage, visualization, and analytics in the Microsoft Azure ecosystem from the Microshare® Smart Network. Use Azure IoT Hub to standardize your IoT data pipelines, integrate with Azure Digital Twins, and take advantage of advanced device health services.

### Necessary Information

In order to configure the Azure IoT Hub Integration for you, your support contact will need the connectivity endpoint and credentials labelled as the &quot;Primary Connection String&quot; for a dedicated IoT Device entry from the Azure Portal or output from ARM/Terraform execution. More information is included below.

## Basic Architecture
---------------------------------------

The typical architecture for streaming data within the Azure environment using the Azure IoT Hub Integration will include components for:

**1.** Cold Path Storage – long-term, low-cost raw data storage in either JSON or Avro formats. Data is typically stored in time-series files with each data stream (recType) segregated into unique files.

<br>
**2.** Warm Path Processing – mid-term, relational data that will typically be used to feed visualization tools via SQL storage.

<br>
**3.** Operational Path – Used to trigger downstream business processes in real-time. Typically involves notifications, invocation of human workflows, and the updated of asset records to reflect current state.

<br>
{% include image.html url="/assets/img/azure-iot-hub/Azure_downstream_architecture.png" description="Azure downstream architecture" %}

Example Azure IoT Hub downstream architecture

## Setup
---------------------------------------

If you already use IoT Hub in your organization, an existing IoT Hub may be reused. If so, skip to Creating a Device. If not, continue with the following steps to create a new IoT Hub within your Azure tenancy.

The steps will be:

**1.** Setup an IoT Hub.
<br>
**2.** Create a device entry.
<br>
**3.** Copy device Primary Connection String.

### Step 1: Setup an IoT Hub

{% include image.html url="/assets/img/azure-iot-hub/Azure_IoT_Hub1.png" height="500" width="500" description="Azure Hub pic 1" %}

{% include image.html url="/assets/img/azure-iot-hub/Azure_IoT_Hub2.png" height="500" width="500" description="Azure Hub pic 2" %}

The default Networking option should be Public endpoint. This is the necessary setting to allow inbound data access from the Microshare Smart Network servers.

{% include image.html url="/assets/img/azure-iot-hub/Azure_IoT_Hub3.png" height="500" width="500" description="Azure Hub pic 3" %}

For most installations, the S1: Standard Tier should be sufficient to begin using the Microshare IoT Hub Integration. For installations involving more than 1000 devices, consult Microshare Services contact.

(See [the Azure website](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-scaling) for additional details.)

### Step 2: Create a device entry

In this step, you will create a 'catch-all' device registration that can be used to secure the connection between the Microshare Smart Network and the IoT Hub in Azure. It is recommended that a unique device entry be made for every unique data stream to allow for easier segmentation downstream. Typically, the IoT device is named using the Microshare recType of the data stream.

{% include image.html url="/assets/img/azure-iot-hub/Azure_create_device1.png" height="500" width="500" description="Azure create a device 1" %}

Once the IoT Hub has been provisioned, select the console blade and click on the &quot;IoT devices&quot; menu under &quot;Explorers&quot;. Then, click the &quot;+ New&quot; link at the top middle of the navigation.

{% include image.html url="/assets/img/azure-iot-hub/Azure_create_device2.png" height="500" width="500" description="Azure create a device 2" %}

For the Device ID, it is recommended that the Microshare recType using the dot notation be used. This is an arbitrary convention but will make it easier to keep your subscriptions aligned with upstream and downstream processing. Allow Azure to auto-generate the encryption keys and ensure that the Enable switch is active (these should be defaults).

{% include image.html url="/assets/img/azure-iot-hub/Azure_create_device3.png" height="600" width="600" description="Azure create a device 3" %}

The following detail will be provided after the Device ID is provisioned. This information can be retrieved after the fact by clicking on the Device ID in the &quot;IoT devices&quot; blade view.

Your Microshare Service or Support contact will need the "Primary Connection String" it should look something like this:

HostName=your-hub-name.azure-devices.net;DeviceId=io.microshare.contact.unpacked.event;SharedAccessKey=SOME000BASE64KEY=

This key should remain private. Do not transmit or store the key in an unsecure manner. It is recommended that this information be sent securely via GPG encrypted email or through an encrypted chat connection using keybase.io.

#### Setup References

[https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-create-through-portal](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-create-through-portal)

[https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-scaling](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-scaling)

## Security
---------------------------------------
As with most Azure facilities, IoT Hub supports authentication and authorization through Share Access Signatures (SAS) which allow the client full control over the write permissions for each configured IoT device. The SAS (aka Primary Connection String) positively identifies the Smart Network access. Data is encrypted on the network and at rest by default with the IoT Hub. Logging and monitoring of both data and management activity is available on the IoT Hub. Because the Smart Network originates outside of the corporate networks, Network Security restrictions on write operations are not possible on the inbound network endpoint. Restriction of internal network access is possible. Consult a Microsoft Certified partner for more information.

### Security References

[https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-tls-support](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-tls-support)

[https://docs.microsoft.com/en-us/azure/iot-fundamentals/iot-security-deployment?context=azure/iot-hub/rc/rc](https://docs.microsoft.com/en-us/azure/iot-fundamentals/iot-security-deployment?context=azure/iot-hub/rc/rc)