---
layout: docs
title: Technical Overview
description: Designed for embedded systems
toc: true
---




{% include image.html url="/assets/img/CleanSafeOverview7.png" description="Microshare.io" %}


---------------------------------------

##### SUMMARY : 

1. [Architecture](./#1-architechture)
2. [Runs everywhere](./#2-runs-everywhere)
3. [Proven embedded](./#3-proven-embedded)
4. [How it works ?](./#4-how-it-works)


---------------------------------------
## Overview

Microshare brings data of your environment to your fingertips, but how? Underneath Microshare’s plug-n-play module lies a system of collecting data and communicating the results through our API. Data from your devices are sent to our network, where it is configured for your analysis on your Dashboard. Microshare operates on three main principles:

## 1. Architecture
---------------------------------------

- The platform is built as a set of microservices, which can be used independently to support your own offering.
- The entire stack operates as JSON based RESTful API calls, making it easy to interoperate with other systems.
- Data can be stored both in our Data Lake and in any other storage on-premise or in the cloud.

## 2. Runs everywhere
---------------------------------------

- Microshare can run as-a-service from our secure cloud.
- We can run all or part of the service in your Data Center. 
- We can also run directly on devices.

## 3. Proven embedded
---------------------------------------

- Part of the Microshare platform has already successfully been integrated in other software by large publicly traded enterprise software companies.
- Proven code quality through seamless integration and external audits (e.g. Black Duck).

## What will I be working with?
---------------------------------------

In order to view your environment’s data, you will need to interact with the Microshare Platform by first setting up a [Microshare Account](/docs/2/general-user/quick-start/create-an-account/) and receiving access from your Admin. Afterword, head over to the [Microshare Platform Consule](https://app.microshare.io/) and follow the [Access my Apps Guide.](/docs/2/general-user/quick-start/access-my-apps/)

Alternatively, if your Microshare Admin creates a guest app, no Microshare account is necessary! Just follow the link sent to your email inbox. 

## 4. How does it work?
---------------------------------------

Microshare’s plug-n-play IoT modules are our scalable solutions that power data insights in small installations or mega facilities.

#### No technology training required

Your pre-registered sensors install in minutes with average battery life of 5 years. Mount to walls and tables with standard screws, tape and silicone. Activate a local LoRaWAN gateway with our [Installation Guide](/docs/2/installer/lorawan/gateway-installation/). And all of your sensors are managed centrally so data populates your Microshare smart facility application in minutes.

#### The technology behind the scenes

{% include image.html url="https://www.microshare.io/wp-content/uploads/2019/07/multi-access-sensors.png" description="Multi Access Sensors" %}

Your device collects data and sends it to the Microshare data management platform, the epicenter of our IoT solutions. Our Rules Engine, Dynamic Data Modules, Application Accelerators, and our proprietary Data Ownership Module ensures that your data is collected, analyzed and distributed in a secure and effective manner. Your data passes through our data management platform where it is eventually represented on your dashboard in a digestible format. 

{% include image.html url="https://www.microshare.io/wp-content/uploads/2019/08/bridge-the-gap.png" description="Microshare Data" %}



{% include image.html url="\assets\img\microshare-logo.png"  description="ms logo" %}