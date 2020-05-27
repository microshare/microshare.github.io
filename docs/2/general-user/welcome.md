---
layout: docs
title: Welcome
description: Get started with microshare™, the world's only prebuilt, scalable data management and sharing solution for IoT.
redirect_from:
  - /
  - /docs/
  - /docs/2/
  - /docs/2/general-user/
toc: true
---

---------------------------------------

##### SUMMARY : 

1. [Introduction](./#1-introduction)
2. [Quick Links](./#2-quick-links)
3. [Platform](./#3-platform)

---------------------------------------



## 1. Introduction
---------------------------------------

Microshare makes it easy for you to work with shareable data. Once your data is uploaded on our platform, we provide all the tools you need to transform, visualize and share the data.

While reading this documentation if you encounter any issues or have any feedback please do not hesitate to contact us at `docs@microshare.io`.  

## 2. Quick Links
---------------------------------------

###  [Microshare quick start](../../getting-started/quick-start)
###  [Link your favorite IoT gateway to Microshare](../../advanced/lorawan-devices)
###  [Decode your IoT devices payload](../../advanced/robots-libraries)

## 3. Platform
---------------------------------------

The Microshare™ platform is comprised of two cooperating clusters of microservices: **microshare core** and **microshare stream**.

Microshare Core combines a data lake architecture, a simple RESTful API to allow programmatic interaction with data objects, and a contextual security, rules engine to make policy decisions. 
The API allows storage (via POST) and retrievals (via GET). The [data lake](https://en.wikipedia.org/wiki/Data_lake) will store any type of data that can be serialized to JSON. Your data is stored in an annotated but unmodified form inside of the data lake. Retrieval operations consider the policy established by a data owner before granting or rejecting any requested operation.

Microshare Stream provides a scalable architecture for intelligent data enrichment and complex event processing. 
Robots are microservices that can be setup to take action when a triggering event occurs. 
Triggering events may include timed events (scheduled start), new data introduction, and policy invocation. 
You can create your own unique logic by writing Javascript functions inside of a Robot Configuration.

You can access the Microshare platform [right here](https://app.microshare.io/composer).

{% include image.html url="/assets/img/banner.jpg" description="Banner" %}
