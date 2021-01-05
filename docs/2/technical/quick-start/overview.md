---
layout: docs
title: Technical Quick Start
description: A guide to interacting with Microshare™ Technology
toc: true
redirect_from:
  - /docs/2/technical/
---




{% include image.html url="/assets/img/banner-2.jpg" description="thumbnail 2" %}

<br>



---------------------------------------

#### Summary:

1. [What does Microshare do?](./#1-what-does-microshare-do)
2. [What can I do?](./#2-what-can-i-do)
3. [What's going on in the technical side of Microshare?](./#3-whats-going-on-in-the-technical-side-of-microshare)

## 1. What does Microshare do?
---------------------------------------

<br>
Microshare connects you to your buildings, assets, associates, and devices through a range of ready-to-deploy IoT solutions connected to the Microshare Smart Network™. From any of our dozens of solutions, Plug in your device and become connected to your surroundings.

{% include image.html url="/assets/img/microshareex1.png" width="800" description="demo" %}


Most recently, Microshare has made it possible for large enterprises to safely reopen their facilities and to rethink their physical footprint in the context of COVID-19. Our turnkey Sensing-as-a-Service model for Smart Facilities uses real-time data to detect building hotspots and mitigate the risk of exposure to the virus. With Universal Contact Tracing, we enable our clients globally to get back to business as quickly, safely, and cost-efficiently as possible without the privacy burdens of smartphone apps. Visit our [main website](https://www.microshare.io/smart-facilities-dashboards-and-solutions/) to learn more about Microshare solutions!

**Confused on any terminology? Head over to the [glossary page.](/docs/2/general/quick-start/glossary/)**

**Got any questions? Don’t be afraid to ask for assistance at `support@microshare.io`.**




## 2. What can I do?
---------------------------------------

<br>
Take a look at our [demo dashboard](/docs/2/general/meet-microshare/demo-live/) to see what all the technical documentation is working towards. Interact with the apps and view the data of the Microshare locations collected in real time!

{% include image.html url="/assets/img/demo-dashboard.jpg" width="800" description="dashboard demo" %}

Microshare connects the general user to their environment’s data on the dashboard while the technical side makes this happen through interactions with the Microshare developer console and the Microshare API. [The basic developer roadmap](/docs/2/technical/quick-start/basic-dev-roadmap/) navigates you through the initiation process of working with the Microshare developer console and the Microshare API. 


## 3. What's going on in the technical side of Microshare?

---------------------------------------

<br>

{% include image.html url="/assets/img/microshare-lora-governance-gap.png" width="800" description="process diagram" %}


Microshare's main technical objective is to get information about your environment and represent it on your dashboard. To do this, LoRaWAN devices first collect data of your environment and send it via Lora signal to your LoRaWAN gateway. The gateway sends the device’s information through WiFi or cellular to the Microshare Smart Network™ where it is stored as raw data. The device sends the data in an undigested form for security purposes. The raw data is digested into a readable form and represented onto your Dashboard similar to the [live demo]. As a developer, your responsibility is to manage how the data is represented on the dashboard, how it is formatted, and who gets to view the data. Additionally, you will need to learn how to interact with Microshare’s API to send and request information about the device’s data. Finally, your data is not stored locally, but on the cloud via a Data Integration solution such as Microsoft's Azure, Google Pub/Sub or Amazon Web Services. 


 