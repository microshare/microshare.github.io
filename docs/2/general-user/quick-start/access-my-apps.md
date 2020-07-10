---
layout: docs
title: Access My App
description: How to use Microshare™ Apps
toc: true
---

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

To do this simply go to the following pages: 

Dev : [dapp.microshare.io](https://dapp.microshare.io/login)

Prod : [app.microshare.io](https://app.microshare.io/login)

{% include image.html url="/assets/img/access-my-apps/log-in.png" description="Log in" %}

You will go directly to the main page of your account which looks like this: 

{% include image.html url="/assets/img/access-my-apps/microshare-homepage.png" description="microshare homepage" %}

This is the dashboard of the identity you're on. 

Continue this tutorial to understand how to switch from one identity to another. 

## 2. Select My Identity
---------------------------------------

Identities make it easy to navigate on Microshare® from one dashboard/data set to another without changing accounts. 

Here we will simply look at the general information about the identities. For more information on identities an in-depth tutorial can be found here: 

##### > [Identity guide](../../../technical/microshare-platform-advanced/identity-guide)

When you log in, the identity will be the your most recently active one. 
When creating an account, you were simply added to the `Microshare Default` identity. This one is unique to your organization. 

If you are a Microshare® customer you will be invited to other identities, these may be different for each of the sites where you have integrated Microshare® technology. 

For example, if you have four sites where you have integrated Microshare® technology, you will be invited to four identities, each with several dashboards and their own data.

Clicking on the profile icon in the top right hand corner will allow you to quickly switch identities.  

{% include image.html url="/assets/img/access-my-apps/microshare-identity.png" description="microshare identity" %}

Here, for example, we can simply navigate between two identities.


## 3. Navigate on my Account
---------------------------------------

Once you have logged in and chosen the identity that corresponds to what you are looking for you will be able to use the different Microshare® tools. 

To get started your homepage is full of applications. Just click on one of them to launch it and you will be able to see and use your data easily.

{% include image.html url="/assets/img/access-my-apps/demo-dashboard.png" description="microshare demo" %}

Then by going to `Manage` you will have access to more advanced tools.  

{% include image.html url="/assets/img/access-my-apps/microshare-manage.png" description="microshare homepage" %}

If you want to better understand all of Microshare®'s tools continue on the technical documentation:

##### > [Technical](../../../technical/quick-start/overview)

If you are an administrator of your identity, specific documentation is available for you: 

##### > [Admin](/docs/2/admin/admin-management/overview/)

Finally, if you have created your account and want to use the installation tools, please continue here: 

##### > [Installer](/docs/2/installer/quick-start/overview/)


## 4. What Data or Apps are normally shared?
---------------------------------------

By default the data from a device is NOT SHARED. Only the device cluster's owner can see the cluster's data (assuming they use their own authorization for the device cluster). In most cases, this will require a share rule for that record type to be created in order to allow other parties to view the data. The cluster device is managed by the MS admin.

Apps, however, by default are shared at the organizational level. They do not require share rules to be created. They can't be restricted in access although they can be filtered out of the default user view using favorites. Thus the accessibility of an entity is managed by any person who is accredited as an identity administrator.

Robots are visible to only the creator. There is not currently a mechanism to share robots. 

It is possible to share views very simply so that they can be reused by another user, but their use will be shared, they will not be visible on the account of the one who receives the right to use them. 
