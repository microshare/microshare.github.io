---
layout: docs
title: Microshare™ Glossary
description: Confused on any common Microshare™ terms?
toc: true
---
---

{% include image.html url="/assets/img/thumbnail-3.jpg" description="thumbnail 2" %}

<br>

---

## Summary

1. [Overview](./#overview)
2. [Microshare Terminology](./#microshare-terminology)
3. [Industry Terminology](./#industry-terminology)
4. [Extended IOT Technology Terminology](../faq/technical-terms.md)

## Overview

---

With a lot of documentation comes a variety of phrases and words which may not be familiar to the average reader. This page stands as a reference for any unfamiliar word you may come across. The glossary is seperated into two parts, one for Microshare specfic terms and another for terms frequently used in the IoT industry.

Having trouble with a word or phrase that you can't find here? Do not hesitate to ask for help at `support@microshare.io`

---

## Microshare Terminology

<br>

##### App

a Microshare app is a  web application that is configured, managed, and accessed via the Microshare portal.  Such apps are often used to visualize data in a dashboard.

<br>

<!--Data Formatting may be removed from phrasing in the documentation-->

##### Data Formatting

Data formatting or processing is the process by which Microshare takes encrypted data from your device(s) and represents them onto your dashboard.

<br>

##### Data Ingestion

Data ingestion is the process by which Microshare consumes data from various sources for distribution through the Smart Network and/or for storage in the Microshare [data lake.](./#data-lake)

<br>

##### Deploy- M

The Microshare mobile application that provides an easy way to configure your devices on location from your Android or IOS devices.

<br>

##### Device

Microshare uses the term 'device’ to designate an individual hardware component which encompasses one or more [sensors](./#sensor) used to collect data from your environment.

<br>

##### Device Cluster

A device cluster is a group of devices of like type – usually physically located in the same place. Device clusters can be further used to logically divide devices into functional groups, whose data is intended to be displayed or analyzed together in a  single representation or visualization.

<br>

##### Event

Data that has been [unpacked](./#packed) but not stored on the Microshare [data lake.](./#data-lake)

<br>

##### Facts

Microshare apps store app specific configuration information as JSON fomatted [facts.](./#facts)  When an app is launched, the facts are passed to the JavaScript in the underlying form file like arguments passed to a function.

<br>

##### Form

A form assigns the type of data that is being handled so that the data can be properly used and displayed.

<br>

##### Identity

The account you are under which not only what data you can view, but what apps and forms you have jurisdiction over. An identity shares its applications and sharing rights with its users.

<br>

##### Microshare Core

combines a [data lake](./#data-lake) architecture, a simple [RESTful API](./#api) to allow programmatic interaction with data objects, and a contextual security, rules engine to make policy decisions.

<br>

##### Microshare Stream

provides a scalable architecture for intelligent data enrichment and complex event processing.

<br>

##### Policy Fabric™

Microshare uses a patented policy fabric to allow its clients to have fine-grained control over who can access their data.  Also see [share rules](./#share-rule).

<br>

##### Record

Each unit of data stored in the Microshare [data lake](./#data-lake) is called a record or a share record.

<br>

##### recType

The name under which data is stored under.

<br>

##### Rule

A Rule is a concrete expression of a sharing policy. It allows a data owner to set the conditions in which a requested operation will be granted. Rules only allow sharing. Rules do not prevent sharing. Sharing is blocked by default.

<br>

##### Sensor

The component of the device that collects information of your environment.

<br>

##### Share

When one [identity](./#identity) distributes the ability to see access their data with other identities.

<br>

##### Share Record

Each unit of data stored in the Microshare [data lake](./#data-lake) is called a record or a [share record](./#share-record).

<br>

##### Share Rule

A Rule is a concrete expression of a sharing policy. It allows a data owner to set the conditions in which a requested operation will be granted. Rules only allow sharing. Rules do not prevent sharing. Sharing is blocked by default.

<br>

##### Tag

A [JSON](./#json) label that is given to a device for clarification on its location.

<br>

##### View

A View is a component for managing data access. It provides advanced ways of querying the [data lake](./#data-lake). A view can also be used to store and retrieve proprietary static data.

<br>

---

## Industry Terminology

<br>

##### API

The Microshare RESTful API (Application Programming Interface) is a set of functions that give developers programmatic access to the Microshare system.

<br>

##### Bearer

The account that is associated with the [token](./#token).

<br>

##### Data Integration

Data integration is the process of combining data from different sources into a unified view.

<br>

##### Data Lake

Microshare stores its data in a [data lake](./#data-lake), which is a single repository of differing types of data – both raw and transformed.  Data producers differentiate the data by designating a “record type” aka [recType](./#rectype) when storing records. This same recType must be invoked at data retrieval time.

<br>

##### Digital Twin

A virtual representation or model of a physical space. Microshare uses a hierarchical tagging system for digitial twinning.

<br>

##### Gateway

The "middleman" between the Microshare Network and your [device](./#device). The device will send data it collects to the Gateway which will then send it onto the Microshare Network.

<br>

##### JSON

JavaScript Object Notation; a mechanism for storing and retrieving arbitrarily complex data in a variety of data types as a human readable cross-platform string.

<br>

##### Key

A piece of authentication information used in your interactions with the [API](./#api). This is a very secure piece of information and should not be share d with anyone.

<br>

##### LoRa®

the physical layer or the wireless modulation utilized to create the long range communication link.

<br>

##### Packed

The raw data sent from your device in hexadecimal format which has not yet been [unpacked](./#unpacked) into digestible data.

<br>

##### Query

A request to the [API](./#api) or a database for information.

<br>

##### Robot

Robots are microservices that can be setup to take action when a triggering event occurs.

<br>

##### Source

The place where the information is coming from.

<br>

##### Standard

The formal model by which Microshare upholds in our process of managing data.

<br>

##### Target

The place where the information is going.

<br>

##### Token

A piece of authentication information that last for a short time period used in your interactions with the [API](./#api). This is a very secure piece of information and should not be shared with anyone.

<br>

##### Unpacked

To transform the binary data produced by the device into [JSON](./#json) formated data that can be more easily processed by the downstream data consumer.
