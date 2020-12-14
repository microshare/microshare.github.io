---
layout: docs
title: Access My App
description: How to use Microshare™ Apps
toc: true
---





{% include image.html url="/assets/img/thumbnail-11.jpg" description="thumbnail 2" %}

<br>

---------------------------------------

##### SUMMARY : 

1. [Log In](./#1-log-in)
2. [Select my identity](./#2-select-my-identity)
3. [Navigate on my account](./#3-navigate-on-my-account)
4. [What Data or Apps are normally Shared?](./#4-what-data-or-apps-are-normally-shared)

---------------------------------------


## 1. Log In
---------------------------------------

Now that you have [created an account](../create-an-account) you will be able to log in.

To log in, head to your preferred environment: 

Dev : [dapp.microshare.io](https://dapp.microshare.io/login)

Prod : [app.microshare.io](https://app.microshare.io/login)

{% include image.html url="/assets/img/access-my-apps/log-in.png" description="Log in" %}

You will be sent to the main page which looks like: 

{% include image.html url="/assets/img/access-my-apps/microshare-homepage.png" description="microshare homepage" %}

This is the dashboard of the identity you are on. 

Next, you will learn how to interchange your identity to alternate your view of dashboards. 

## 2. Select My Identity
---------------------------------------

Identities make it easy to navigate from one dashboard/data set to another without changing accounts. 

This guide will only give a basic explanation of identities. For an in- depth explanation:

##### > [Identity guide](../../../technical/microshare-platform-advanced/identity-guide)

When you log in, the identity will be the your most recently active one. 
When creating an account, you were simply added to the `Microshare Default` identity. This one is unique to your organization. 

If you are a Microshare customer you will be invited to other identities, these may be different for each of the sites where you have integrated Microshare technology. 

For example, if you have four sites where you have integrated Microshare technology, you will be invited to four identities, each with several dashboards and their own data.

Clicking on the profile icon in the top right hand corner will allow you to quickly switch identities.  

{% include image.html url="/assets/img/access-my-apps/microshare-identity.png" description="microshare identity" %}

Here, for example, we can interchange between two identities.


## 3. Navigate on my Account
---------------------------------------

Once you have logged in and chosen the identity that corresponds to what you are looking for, you will mow be able to use the selection of Microshare tools. 

Your homepage is full of applications. Click on one to view that device cluster's data.

{% include image.html url="/assets/img/access-my-apps/demo-dashboard.png" description="microshare demo" %}

By going to the `Manage` tab, you will have access to more advanced tools.  

{% include image.html url="/assets/img/access-my-apps/microshare-manage.png" description="microshare homepage" %}

For an in- depth explanation and application of these tools, use the technical side of the documentation site:

##### > [Technical](../../../technical/quick-start/overview)

If you are an administrator of your company's data, use the administrators documentation for greater instruction: 

##### > [Admin](/docs/2/admin/admin-management/overview/)

For more information on the installation tools, please continue with the installer side of the documentation: 

##### > [Installer](/docs/2/installer/quick-start/overview/)


## 4. What Data or Apps are normally shared?
---------------------------------------

By default the data from a device is NOT SHARED. Only the device cluster's owner can see the cluster's data (assuming they use their own authorization for the device cluster). In most cases, this will require a share rule for that record type to be created in order to allow other parties to view the data. The cluster device is managed by the MS admin.

However apps, by default, are shared at the organizational level. They do not require share rules to be created. They can't be restricted in access (although they can be filtered out of the default user view using favorites). Thus the accessibility of an entity is managed by any person who is accredited as an identity administrator.

Robots are visible to only the creator. There is not currently a mechanism to share robots. 

Views can be shared so that they can be reused by another user. Views will not be visable on the account that received the rights to use the views, they will only be visable to the creator. 

 
