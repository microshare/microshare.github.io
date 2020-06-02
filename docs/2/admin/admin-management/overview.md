---
layout: docs
title: Overview
description: What it means to be a company adminsistrator through Microshare
toc: true
---
<!--info taken from the Org Setup and Providing Client Access via Microshare pages from the delivery Notebook-->
[microshare](https://microshare.io)

---------------------------------------


## 1. What are the Administrator's responsibilities?
---------------------------------------
The administrator controls a subset of their organization's data and can set [Rules](/docs/2/technical/microshare-platform/rules-guide/) to govern how much of that data their normal users can view. The administrator also has the ability to own [Robots](/docs/2/technical/microshare-platform-advanced/robots-guide/) and [Apps](/docs/2/technical/microshare-platform/dashboard-guide/) for their data and devices. The administrator is supported by a 'Microshare Super Admin', who helps you manage your devices and data. 
These roles are further explored in the [Types of Administrators](./#3-types-of-administrators) section.

While reading this documentation if you encounter any issues or have any feedback please do not hesitate to contact us at `docs@microshare.io`. 


## 2. What Data or Apps are normally Shared?
---------------------------------------
By default the data from a device is NOT SHARED. Only the device cluster's owner can see it (assuming they use their own authorization for the device cluster). In most cases, this will require a share rule for that record type to be created in order to allow other parties to view the data

Apps, however, by default are shared at the organizational level. They do not require share rules to be created. They can't be restricted in access although they can be filtered out of the default user view using favorites. 

Robots are visible to only the creator. There is not currently a mechanism to share robots. 


## 3. Types of Admininstrators
---------------------------------------

Although you will have a lot of responsibility as an organization's administrator, There is a team at Microshare who will help you during your time managing your company's data. A 'Microshare Super Admin' is responsible for providing you and your assosiates access to your Microshare Dashboard as well as providing instructions to help you access the Dashboards. The 'Microshare Super Admin' owns the organization's device cluster(s) and makes sure the appropriate data is being shared with the appropriate administrators. If you have any questions regarding accessing your Dashboard, please refer to the [Admin FAQ page](/docs/2/admin/admin-management/faq-admin/) or reach out to `support@microshare.io` if you have any questions or run into any issues.



