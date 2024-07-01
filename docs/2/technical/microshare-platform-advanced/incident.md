---
layout: docs
title: Incident
description: Let's take a look at the Microshare™ incidents
toc: true
---

{% include image.html url="/assets/img/banner-2.jpg" description="thumbnail 2" %}

## 1. Microshare alerts
---------------------------------------

In the Microshare data pipeline, we process our IoT data (from sensors) into events and alerts, leading to a more responsive system where motion and environmental data are transformed into alerts and action data.

Alert data is the end of the process in the basic IoT pipeline, leading to a notification, a text message, or an email and leaving the customer to decide what to do next.

## 2. Microshare extends IoT with BPM
---------------------------------------

#### BPM

"Business Process Management" (BPM) is a systematic approach to making an organization's workflow more effective, efficient, and adaptable to an ever-changing environment. It aims to align all aspects of an organization with the wants and needs of clients. BPM is a holistic management approach that promotes business effectiveness and efficiency while striving for innovation, flexibility, and integration with technology.

BPM attempts to improve processes continuously. It can therefore be described as a "process optimization process." It is argued that BPM enables organizations to be more efficient, effective, and capable of change than a functionally focused, traditional hierarchical management approach.

Key components of BPM include:

- **Process Modeling**: Identifying and documenting existing processes as well as designing new ones. This often uses flowcharts or similar tools.
- **Process Analysis**: Examining processes to identify inefficiencies or bottlenecks.
- **Process Design and Optimization**: Redesigning processes to improve efficiency, reduce errors, or accommodate new business needs.
- **Process Execution**: Implementing new or revised processes, often using software tools.
- **Monitoring and Control**: Tracking the performance of processes after implementation, identifying areas for further improvement.
- **Technology and Integration**: Leveraging technology to facilitate better process management, which might include integrating various business technologies or automating certain processes.
- **Organizational and Cultural Change**: Addressing changes in company culture or structure that may be necessary to support process improvements.

BPM often involves the use of various software tools known as BPM systems, which are designed to support the implementation and management of BPM in organizations. These tools can automate, measure, and optimize business processes and are integral to many BPM strategies.

#### IoT and BPM

As shown in this image:

{% include image.html url="/assets/img/bpm.jpg" width="800" height="500" description="bpm" %}

The implementation of BPM, in addition to our IoT expertise, will help better manage what happens after an alert.

We created a BPM called "incident," which is triggered by our alerts and offers multiple capabilities.

## 3. Incidents
---------------------------------------
#### A. Starting

An incident is triggered by a first alert, and at this point, it starts a process with multiple steps and options.

#### B. Ending

An incident can be closed if it is resolved (aka complete), if someone cancels it, or if it times out due to inaction.

#### C. Assignment

Different users are assigned to an incident depending on the configuration and can act on an incident in order to resolve it.

#### D. Steps

We designed our incident to be a three-step resolution process:
- Who is taking action on the incident
- When the assigned person starts taking action on the incident
- When the person taking action is done with the incident

These three steps can be parameterized individually. It is also possible to create a lighter incident by removing some of the steps.

#### E. Notification

Our incident system has been built to make the notification system easier. By adding some subscriptions to special kinds of alerts, the notification system can notify the right persons with their correct contact details.

#### F. Bundling - Smart Incident

The incident has been created to be smart and able to group alerts corresponding to the same incident when an incident is already open for the same problem.

So when multiple alerts are received from a sensor while nobody is taking action, these alerts are bundled together in one incident, avoiding alert fatigue and leading to better resolution.

The incident system is smart and can be set up to bundle to a broader area than just a sensor. If you define that many sensors' alerts correspond to the same incident, you can adjust the incident to bundle per site, building, floor, area, room, etc.

## 4. Analytics
---------------------------------------

As explained earlier, the BPM helps you better structure the actions taken after an IoT alert. It also helps in saving statistics of your resolution ability.

Using incidents will help analyze your time to complete an incident, your ability to respond quickly and accurately, and collect information based on location and the person who helped resolve the incident.
