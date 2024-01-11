---
layout: docs
title: Incident
description: Let's take a look at the Microshare™ incidents
toc: true
---




{% include image.html url="/assets/img/banner-2.jpg" description="thumbnail 2" %}

## 1. Microshare alerts
---------------------------------------

In the microshare data pipeline we have been able to process our IoT data (from sensors) into events and alerts. Leading to a more responsive system where motions, and environment data are transformed into alerts and action data. 

Alert data is the end of the process in the basic IoT pipeline, leading to a notification, a text message or an email and leaving the customer deciding what to do next. 


## 2. Microshare extends IoT with BPM
---------------------------------------

#### BPM

"Business Process Management" (BPM) is a systematic approach to making an organization's workflow more effective, more efficient, and more capable of adapting to an ever-changing environment. It aims to align all aspects of an organization with the wants and needs of clients. BPM is a holistic management approach that promotes business effectiveness and efficiency while striving for innovation, flexibility, and integration with technology.

BPM attempts to improve processes continuously. It can therefore be described as a "process optimization process." It is argued that BPM enables organizations to be more efficient, more effective and more capable of change than a functionally focused, traditional hierarchical management approach.

Key components of BPM include:

Process Modeling: Involves identifying and documenting existing processes as well as designing new ones. This often uses flowcharts or similar tools.

Process Analysis: This step involves examining processes to identify inefficiencies or bottlenecks.

Process Design and Optimization: Redesigning processes to improve efficiency, reduce errors, or accommodate new business needs.

Process Execution: Implementing new or revised processes, often using software tools.

Monitoring and Control: Tracking the performance of processes after implementation, identifying areas for further improvement.

Technology and Integration: Leveraging technology to facilitate better process management, which might include integrating various business technologies or automating certain processes.

Organizational and Cultural Change: Addressing changes in company culture or structure that may be necessary to support process improvements.

BPM often involves the use of various software tools known as BPM systems, which are designed to support the implementation and management of BPM in organizations. These tools can automate, measure, and optimize business processes and are integral to many BPM strategies.


#### IoT and BPM

As shown in this image: 

{% include image.html url="\assets\img\bpm.jpg" width="800" height="500" description="bpm" %}

The implementation of bpm in addition to our IoT expertise will help having a better management of what is happening after an alert. 

We created a BPM called "incident", that is triggered from our alerts and offer multiple capabilities. 


## 3. Incidents
---------------------------------------
#### A. Starting

An incident is triggered by a first alert, and a this point it start a process of multiple steps and options. 

#### B. Ending

An incident can be closed if it's resolve (aka complete), if someone cancel it or if it times out due to inaction. 

#### C. Assignement

Different users are assigned to an incident depending on the configuration and can act on an incident in order to resolve it. 

#### D. Steps

We design our incident to be a three steps resolution process: 
- who is taking action on the incident 
- when do the assigned person start taking action on the incident 
- when do the person taking action is done with the incident

This three steps can be parameterised individualy. Also it is possible to potentially create a lighter incident by removing some of the steps. 

#### E. Notification

Our incident system has been build to make the notification system easier, by adding some subscriptions to some special kind of alerts, the notification system can be acting to notify the right persons on their right contact details. 

#### D. Bundling - Smart Incident

The incident has been created to be smart and being able to group alerts corresponding to the same incident when an incident is already open for the same problem. 

So when multiple alerts are received from a sensor while nobody is taking action, these alerts are bundled together in one incident, avoiding alert fatique and better resolution. 

The incident system is smart and can be set up to bundle to a broader area than just a sensor. If you define that many sensors alerts corresponds to the same incident, you can adjust the incident to bundle per site, building, floor, area, room ... 


## 4. Analytics
---------------------------------------

As explained earlier, the bpn help you to better structure the action taken after an IoT alert. And it also help saving statistics of your resolution ability. 

Using incidents will help analysing your time to complete an incident, your ability to respond fast and with accuracy, collect information based on location and the person who helped resolving the incident. 


