---
layout: docs
title: The Microshare Technical Structure
toc: true
---

---------------------------------------

Microshare brings data of your environment to your fingertips, but how? Underneath Microshare’s plug-n-play module lies a system of collecting data and communicating the results through our API. As you can see, the Technical side of the documentation site is separated into Microshare Platform, API and LoRaWAN categories. These three sections represent the columns of Microshare’s technical structure. 


{% include image.html url="/assets/img/LoRa00.png" description="LoRa" %}


Firstly, Microshare uses hardware set around the client’s environment to communicate with our API. This is done via three type of devices: Sensors, Gateways and our Networks. The sensor is a LoRaWAN device which collects data and sends that information via Lora signal to the LoRaWAN Gateway, which is also installed in the environment. That Gateway then sends the information to the Microshare Network via cellular or WiFi signal. The Microshare API takes the information, and represents it within your dashboard, which you can access on the [app](https://app.microshare.io/) website or on the Deploy- M app. You can learn how these devices are installed [here](/docs/2/technical/api/authentication/). The devices arrive at your doorstep all ready set up and ready to go by our fufillment team. 


The API, or Application Programming Interface, has Microshare’s specific protocols and tools to communicate the devices data. Microshare’s API takes many security procautions to ensure the protection of client data, understanding [Authentication](/docs/2/technical/api/authentication/) will be crucial for learning the interface. Learning simple requests will allow you to create and manage your data within Microshare’s data lake.


The Microshare Platform allows the control over the visualization of the data collected by the devices. Creating a Device Cluster, you can group data from multiple devices to be represented together. Creating an App allows you to customize how that data is represented. Implementing Rules and Views allow you to control who has access to certain data, and Robots allow you to automate certain tasks within the platform. Identities give certain clearance to view data,further regulating who has access to certain tools and information. All tools are key components to the platform, and allow you to have complete control over your data. 


As a developer, you will explore the features and applications of these components in greater detail. [The Basic Developer Roadmap](/docs/2/technical/quick-start/basic-dev-roadmap/) walks you through, step- by- step, how you can best become familiar with what Microshare has to offer behind the scenes. Furthermore, the [Advanced Developer Roadmap](/docs/2/technical/quick-start/advanced-dev-roadmap/) guides you through the more difficult concepts of the Microshare Platform and API. 
