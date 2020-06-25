---
layout: docs
title: Technical Overview
description: A guide to interacting with Microshare™ Technology
toc: true
---

##### SUMMARY : 

1. [Introduction](./#1-introduction-the-architecture)
2. [What can you expect to work with](./#2-what-can-you-expect-to-work-with)

---------------------------------------

## 1. Introduction: The Architecture


The Microshare® platform is built as a set of microservices to communicate data from your devices to you. The platform operates through JSON based RESTful API calls which makes it very applicable to other systems. The data can be stored either in the Microshare® data lake, any other on-storage premise or the cloud. 
 
The Microshare® service is very versatile in that Microshare® can run on directly on all devices through our secure cloud or your data center. 

---------------------------------------
## 2. What can you expect to work with?


As a developer, you will mostly be working with the Microshare® platform and the API. You can get started with understanding how to work with these tools in the [Basic Developer Roadmap](/docs/2/technical/quick-start/basic-dev-roadmap/).  After walking through the Basic Developer Roadmap, the [Advanced Developer Roadmap](/docs/2/technical/quick-start/advanced-dev-roadmap/) guides you through the more complicated interactions with the Microshare® platform and API. Additionally, the [Technical Structure Page](/docs/2/technical/quick-start/microshare-technical-structure/) guides you through the framework on how the components interact with each other to a greater extent. 

#### The Microshare® Platform


The [Microshare® Platform](/docs/2/technical/microshare-platform/quick-start/) is the hub of interacting with devices and their data. In the Microshare® platform, you will be able to create device clusters to group your devices’ data together, create robots to automate tasks, create dashboards to view your data and administrate who can see your devices’ data. 

#### The Microshare® API


You will first interact with the [Microshare® API](/docs/2/technical/api/quick-start/) to jumpstart your data representation with the Microshare® platform. You will learn basic calls to receive information from Microshare® to implement into your Microshare® dashboard. The Microshare® structure takes many cryptic precautions to ensure the privacy of the user and interactions with the Microshare® API will help you navigate these characteristics. 

#### LoRaWAN Technology


LoRaWAN devices are the sensors that you will use to collect data on your environment. They use a signal called Lora rather than Wi-Fi or a cellular signal to communicate with LoRaWAN gateways. Lora provides a significantly larger area of communication and extends the battery life of the devices. LoRaWAN gateways take the information from the sensors and send them to the Microshare® network, where the data is represented on your dashboard. The [LoRaWAN Technology](/docs/2/technical/lorawan/lorawan-technology/) page describes the relationship and technology in greater detail, while the [LoRaWAN Sensors](/docs/2/technical/lorawan/lorawan-sensors/) and [LoRaWAN Gateways](/docs/2/technical/lorawan/lorawan-gateways/) pages explore the specific models of devices that you will work with. 