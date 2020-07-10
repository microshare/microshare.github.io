---
layout: docs
title: Overview
description: What it means to be a company adminsistrator through Microshare™
toc: true
---

---------------------------------------

##### SUMMARY : 

1. [What are the Administrator Responsibilities](./#1-what-are-the-administrators-responsibilities)
2. [What Data or Apps are normally shared?](./#2-what-data-or-apps-are-normally-shared)
3. [Types of Administrators](./#3-types-of-administrators)

---------------------------------------


## 1. What are the Administrator's responsibilities?
---------------------------------------

As an administrator, you are in charge of ensuring that the best practices are applied through your actions and those of your employees. 

Depending on the degree of administration, you have powerful tools in your hands. You must use them following the main guidelines.

While reading this documentation if you encounter any issues or have any feedback please do not hesitate to contact us at `support@microshare.io`. 


## 2. What Data or Apps are normally shared?
---------------------------------------

By default the data from a device is NOT SHARED. Only the device cluster's owner can see it (assuming they use their own authorization for the device cluster). In most cases, this will require a share rule for that record type to be created in order to allow other parties to view the data. The device cluster is managed by the MS admin.

However, Apps are shared at the organizational level by default. They do not require share rules to be created. They can't be restricted in access, although, they can be filtered out of the default user view using favorites. Thus the accessibility of an entity is managed by any person who is accredited as an identity administrator.

Robots are visible to only the creator. There is not currently a mechanism to share robots. 

It is possible to share views very simply so that they can be reused by another user, but simply their use will be shared, they will not be visible on the account of the one who receives the right to use them. 


## 3. Types of Administrators
---------------------------------------

There are thus 3 types of administrator. 

The [identity administrator](../identity-admin) which is accessible to any user, but given to people who manage entities. 

The [MS administrator](../ms-admin) who is the `ms_admin@*customer.org*` account has a more important feature management.

The [Super Admin at Microshare®](../super-admin) is a member of Microshare® and is therefore able to create ms_admin accounts and identities. 


