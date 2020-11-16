---
layout: docs
title: Welcome
description: Get started with Microshare™, the world's only prebuilt, scalable data management and sharing solution for IoT.
redirect_from:
  - /docs/2/general-user/
toc: true
---

---------------------------------------

{% include image.html url="\assets\img\banner-2.jpg"  description="ms logo" %}

##### SUMMARY : 

1. [Introduction](./#introduction)
2. [Quick Links](./#quick-links)
3. [Platform](./#platform)

---------------------------------------
## Important

Wondering if the Microshare Consule is active? Check its status at the [Consule Access page](https://www.microshare.io/management-console-access/) for update release dates.


If you have any questions that are unanswered in this documentation, contact `support@microshare.io`.


## Introduction
---------------------------------------

Microshare provides Data Strategy as a Service, enabling our clients to quickly capture previously hidden data insights that produce cost savings, sustainability metrics and business opportunities. Our solutions produce data on Day One, installed at scale quickly by non-technical staff and operate separate from sensitive corporate IT networks. Our solutions create a Digital Twin of your physical assets, providing comprehensive picture of their performance, the risks they face going forward, and the steps required to produce maximum returns from these assets.

The Microshare documentation guides all users through the process of using the Microshare tools so that they can capitalize on their data. 

Want to learn more about Microshare solutions, check out our website at [microshare.io.](https://www.microshare.io/)


## What can I do?
---------------------------------------

As an everyday user, you will be viewing your data through a Microshare solution. To get started, first [create an account](/docs/2/general-user/quick-start/create-an-account/) and follow the [access my apps guide](/docs/2/general-user/quick-start/access-my-apps/). 
Want to see what Microshare is all about, **check out our [live demo page](/docs/2/general-user/meet-microshare/demo-live/) to see our solutions in action!**

Want to learn more about Microshare? The [Why Microshare page](/docs/2/general-user/meet-microshare/why-microshare/) will walk you through the applications of Microshare solutions. 

## What if I'm not a General User?
---------------------------------------

This documentation accommodate guides for other roles within a Microshare solution. 

Are you the one setting up a Microshare solution? Check out out guides for an [Installer.](/docs/2/installer/quick-start/overview/) 

Managing your company's or a client's data? Use the [Administrator's guides.](/docs/2/admin/admin-management/overview/)

Are you an engineer or developer working with Microshare's technical side? Check out the [Technical section.](/docs/2/technical/quick-start/overview/)

## Platform
---------------------------------------
{% include image.html url="\assets\img\banner.jpg"  description="ms logo" %}

The Microshare platform is comprised of two cooperating clusters of microservices: **Microshare Core** and **Microshare Stream**.

Microshare Core combines a data lake architecture, a simple RESTful API to allow programmatic interaction with data objects, and a contextual security, rules engine to make policy decisions. 
The API allows storage (via POST) and retrievals (via GET). The [data lake](https://en.wikipedia.org/wiki/Data_lake) will store any type of data that can be serialized to JSON. Your data is stored in an annotated but unmodified form inside of the data lake. Retrieval operations consider the policy established by a data owner before granting or rejecting any requested operation.

Microshare Stream provides a scalable architecture for intelligent data enrichment and complex event processing. 
Robots are microservices that can be setup to take action when a triggering event occurs. 
Triggering events may include timed events (scheduled start), new data introduction, and policy invocation. 
You can create your own unique logic by writing Javascript functions inside of a Robot Configuration.

These two entities are grouped together on the Microshare platform. This one is **Microshare Composer**, indeed the interest of this platform is to be able to build different tools that can work together to create applications, intelligent and extremely efficient workflows.

You can access the Microshare platform right here : 

#####   [Production](https://app.microshare.io/composer)
#####   [Development](https://dapp.microshare.io/composer)



{% include image.html url="\assets\img\microshare-logo.png"  description="ms logo" %}