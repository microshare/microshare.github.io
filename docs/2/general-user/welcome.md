---
layout: docs
title: Welcome
description: Get started with Microshare™, the world's only prebuilt, scalable data management and sharing solution for IoT.
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

Microshare® makes it easy for you to work with shareable data. Once your data is uploaded on our platform, we provide all the tools you need to transform, visualize and share the data.

While reading this documentation if you encounter any issues or have any feedback please do not hesitate to contact us at `support@microshare.io`.  

&nbsp;
&nbsp;
&nbsp;


#### For updates on the Microshare® Platform's Release dates, please refer to the [Management Console Access Page](https://www.microshare.io/management-console-access/).


## 2. Quick Links
---------------------------------------

Within Microshare® there are several profiles, but they all share one thing in common: They all have a Microshare® account. 
This part of the documentation is intended to guide you through the very first steps within Microshare®, and to explain the main features of our platform. 

#####  > [First steps in Microshare®](../quick-start/create-an-account)
#####  > [What's Microshare®](../meet-microshare/technical-overview)

Then there are profiles more advanced than the user, there are the following profiles: 

#####  > [Installer](../../installer/quick-start/overview)
#####  > [Admin](../../admin/admin-management/overview)
#####  > [Technical](../../technical/quick-start/overview)

## 3. Platform
---------------------------------------

The Microshare® platform is comprised of two cooperating clusters of microservices: **Microshare® Core** and **Microshare® Stream**.

Microshare® Core combines a data lake architecture, a simple RESTful API to allow programmatic interaction with data objects, and a contextual security, rules engine to make policy decisions. 
The API allows storage (via POST) and retrievals (via GET). The [data lake](https://en.wikipedia.org/wiki/Data_lake) will store any type of data that can be serialized to JSON. Your data is stored in an annotated but unmodified form inside of the data lake. Retrieval operations consider the policy established by a data owner before granting or rejecting any requested operation.

Microshare® Stream provides a scalable architecture for intelligent data enrichment and complex event processing. 
Robots are microservices that can be setup to take action when a triggering event occurs. 
Triggering events may include timed events (scheduled start), new data introduction, and policy invocation. 
You can create your own unique logic by writing Javascript functions inside of a Robot Configuration.

These two entities are grouped together on the Microshare® platform. This one is **Microshare® Composer**, indeed the interest of this platform is to be able to build different tools that can work together to create applications, intelligent and extremely efficient workflows.

You can access the Microshare® platform right here : 

#####  > [Production](https://app.microshare.io/composer).
#####  > [Development](https://dapp.microshare.io/composer).

{% include image.html url="/assets/img/banner.jpg" description="Banner" %}
