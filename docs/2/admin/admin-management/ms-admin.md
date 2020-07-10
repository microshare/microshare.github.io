---
layout: docs
title: First Step as a Microshare™ Admin

toc: true
---


---------------------------------------

##### SUMMARY : 

1. [Quick Start](./#1-quick-start)
2. [Setting Favorites](./#2-setting-favorites)



---------------------------------------

## 1. Quick Start
---------------------------------------

Before starting to use the ms_admin account, you must understand what is shared with an indentity and what belongs to the ms_admin account. The [overview page](../overview) tackles these concepts in great detail. As the administrator with the ms_admin account, you have the responsibility of administrating and managing the corresponding identities. 

##### As administrator, your first action will be to create the device clusters on Microshare®.

{% include image.html url="/assets/img/cards/dc-card.png" description="Banner" width="200" %} 

You can add sensors using your computer or your Installer can quickly add devices via the Deploy-M app. 

To learn how to create a device cluster, what they do and the best practices you should follow, use the following guide:

###### > [Device Cluster Guide](/docs/2/technical/microshare-platform/device-cluster-guide/)
<br>

##### The administrator also controls a subset of their organization's data and can set [Rules](/docs/2/technical/microshare-platform/rules-guide/) to govern how much of that data their normal users can view. 

{% include image.html url="/assets/img/cards/rule-card.png" description="Banner" width="200" %} 

Once the device clusters are created, you will receive data on the ms_admin account. Once the data is shared, Tthe data can be used to create applications or robots. 

To do share data you will create shares rules. Particularly to the identity who will use this data. So you will share the data of a cluster device only to the group of people registered to the selected identity. They will be able to use the data with the applications of the identity.
<br>

##### The administrator also has the ability to own [Robots](/docs/2/technical/microshare-platform-advanced/robots-guide/).

{% include image.html url="/assets/img/cards/robot-card.png" description="Banner" width="200" %} 

Robots are used on Microshare® to automate tasks. For example: to trigger an action when a particular event occurs or send an email alert when a temperature in a room is exceeded.

To do this, you just need to link a robot to a data stream from a device cluster. 
People accessing the identity according to the rights you have given them with the sharing rules will be able to create their own robots on the data streams you share with them if they wish.
But it is still advisable to have the general robots on the ms_admin account. This way you can simply make the email alerts be received by other users from one and the same robot.
<br>

##### The administrator also has the ability to own [Apps](/docs/2/technical/microshare-platform/dashboard-guide/).

{% include image.html url="/assets/img/cards/app-card.png" description="Banner" width="200" %} 

For applications, these are shared within the identity. So each application that you create on the different identities will be visible to all users of the same identity. Except on the Microshare® default identity which is particular. 

On the other hand, seeing the applications does not mean that they will work because it is necessary to have shared the data correctly with the users of the identity, for these applications to be able to use the data.


### 2. Setting Favorites
---------------------------------------

Once you have completed the apps, use postman to create a /share with recType io.point.userPrefs. Login with the client's ms_admin account credentials.  Body should look like: 

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

Then create a share rule to share the user preferences with the rest of the organization so all organisation members can see the apps:

{% include image.html url="/assets/img/Setting_favorites_rules_screenshot.png" description="Setting Favorites" %}


