---
layout: docs
title: The Microshare™ Technical Structure
toc: true
---




---------------------------------------
#### Introduction

Microshare® brings data of your environment to your fingertips, but how? Underneath Microshare®’s plug-n-play module lies a system of collecting data and communicating the results through our API. As you can see, the technical side of the documentation site is separated into Microshare® platform, API and LoRaWAN categories. These three sections represent the cornerstones of Microshare®’s technical structure. 


{% include image.html url="/assets/img/LoRa00.png" description="LoRa" %}

#### LoRaWAN Technology

Firstly, Microshare® uses hardware set around the client’s environment to communicate with our API. This is done via three type of devices: sensors, gateways and our networks. The sensor is a LoRaWAN device which collects data and sends that information via Lora signal to the LoRaWAN gateway, which is also installed in the environment. That gateway then sends the information to the Microshare® network via cellular or WiFi signal. The Microshare® API takes the information, and represents it within your dashboard, which you can access on the [Microshare® Platform](https://app.microshare.io/). You can learn how these devices are installed [here](/docs/2/installer/quick-start/overview/). The devices arrive at your doorstep all ready set up and ready to go by our fulfillment team and our [Deploy- M app](/docs/2/installer/deploy-m/download-the-app/) will make your installation very easy. 

#### Microshare®'s API

The API, or Application Programming Interface, has Microshare®’s specific protocols and tools to communicate the devices' data. Microshare®’s API takes many security precautions to ensure the protection of client data and understanding [Authentication](/docs/2/technical/api/authentication/) will be crucial for learning the interface. Learning simple requests will allow you to create and manage your data within Microshare®’s data lake. You can get started with the Microshare® API [with the Quick Start page](/docs/2/technical/api/quick-start/).

#### The Microshare® Platform

The Microshare® platform grants you control over the visualization of the data collected by the devices. Creating a device cluster, you can group data from multiple devices to be represented together. Creating an App allows you to customize how that data is represented. Implementing rules and views allow you to control who has access to certain data, and robots allow you to automate certain tasks within the platform. Identities give certain clearance to view data, further regulating who has access to certain tools and information. All tools are key components to the platform, and allow you to have complete control over your data. 
    
#### Where do I start? 

As a developer, you will explore the features and applications of these components in greater detail. [The Basic Developer Roadmap](/docs/2/technical/quick-start/basic-dev-roadmap/) walks you through, step- by- step, how you can best become familiar with what Microshare® has to offer behind the scenes. Furthermore, the [Advanced Developer Roadmap](/docs/2/technical/quick-start/advanced-dev-roadmap/) guides you through the more difficult concepts of the Microshare® platform and API. 
