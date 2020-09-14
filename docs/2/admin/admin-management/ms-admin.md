---
layout: docs
title: First Step as a Microshare™ Admin
description: A guide to managing client's data access
toc: true
---



{% include image.html url="/assets/img/thumbnail-11.jpg" description="thumbnail 2" %}

<br>

---------------------------------------

##### SUMMARY : 

1. [Quick Start](./#1-quick-start)
2. [Setting Favorites](./#2-setting-favorites)



---------------------------------------

## 1. Quick Start
---------------------------------------

Before starting to use the ms_admin account, you must understand what is shared with an indentity and what belongs to the ms_admin account. The [overview page](../overview) tackles these concepts in great detail. As the administrator with the ms_admin account, you have the responsibility of administrating and managing the corresponding identities. 

<br>
#### A. As administrator, your first action will be creating the device clusters on Microshare®.

{% include image.html url="/assets/img/cards/dc-card.png" description="Banner" width="200" %} 

You can add devices using your computer or your Installer can quickly add devices via the Deploy-M app. 

To learn how to create a device cluster, what they do and the best practices you should follow, use the following guide:

###### > [Device Cluster Guide](/docs/2/technical/microshare-platform/device-cluster-guide/)
<br>

#### B. The administrator also controls a subset of their organization's data and can set [Rules.](/docs/2/technical/microshare-platform/rules-guide/) to govern how much of that data their normal users can view. 

{% include image.html url="/assets/img/cards/rule-card.png" description="Banner" width="200" %} 

Once the device clusters are created, you will receive data on the ms_admin account. Once the data is shared, The data can be used to create applications or robots. 

To do share data you will create share rules for the identities who will use this data. Share the data of a cluster device only with the group of people registered to the selected identity. They will be able to use the data with the applications of the identity.
<br>

#### C. The administrator also has the ability to own [Robots.](/docs/2/technical/microshare-platform-advanced/robots-guide/)

{% include image.html url="/assets/img/cards/robot-card.png" description="Banner" width="200" %} 

Robots are used on Microshare® to automate tasks. A popular use case is to use robots to trigger an action when a particular event occurs or send an email alert when a temperature in a room is exceeded.

To do this, you just need to link a robot to a data stream from a device cluster. 
Those who you previously granted access to will be able to create their own robots on the data streams. Microshare® advises that the general robots be created on the ms_admin account so you can easily make the email alerts sent to other users from a single robot. 

<br>

#### D. The administrator also has the ability to own [Apps.](/docs/2/technical/microshare-platform/dashboard-guide/)

{% include image.html url="/assets/img/cards/app-card.png" description="Banner" width="200" %} 

For applications, these are shared within the identity. So each application that you create on the different identities will be visible to all users of the same identity, except for the Microshare® default identity. 

On the other hand, seeing the applications does not necessarily mean that they will work. You must share the data with the correct indentities for these applications to use the intended data. 

### 2. Setting Favorites
---------------------------------------

Once you have completed the apps, use the Postman application to create a /share with recType io.point.userPrefs. Login with the client's ms_admin account credentials.  Body should look like: 

{% highlight js %}
  { 
    "favs" : { 
      "apps" : 
        [ 
          "5a1p2p3sf1e00000343f72???", 
          "5a1p2p3sb1e00006a3ef72???", 
          "5a1p2p3sc1e00009151f78???", 
          "5a1p2p3s51d0000d1b8c0b???" 
        ] 
    }
  } 
{% endhighlight %}

Then create a share rule to share the user preferences with the rest of the organization so all organization members can see the apps:

{% include image.html url="/assets/img/Setting_favorites_rules_screenshot.png" description="Setting Favorites" %}


