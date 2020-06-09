---
layout: docs
title: First Step as an Admin

toc: true
---

[Microshare.io](https://microshare.io)

---------------------------------------

##### SUMMARY : 

1. [Quick Start](./#1-part-A)
2. [Setting Favorite](./#2-part-2)



---------------------------------------

## 1. Quick Start
---------------------------------------

Before starting to use the ms_admin account it is necessary to know what is shared within an identity and what belongs to the ms_admin account completely. The [overview page]() of the Admin part explains this very well. Because indeed you are administrator of the ms_admin account but this includes being administrator of the corresponding identities.

##### As administrator your first role will be to create the device clusters on Microshare.

{% include image.html url="/assets/img/cards/dc-card.png" description="Banner" width="200" %} 

In order add the sensors using your computer. Or for your installer to use the Deploy-M application to install all the sensors very quickly. 

To do this please follow the Technical tutorial on how device clusters work and follow the best practices.

###### > [Device Clusters](/docs/2/technical/microshare-platform/device-cluster-guide/)
<br>

##### The administrator controls also a subset of their organization's data and can set [Rules](/docs/2/technical/microshare-platform/rules-guide/) to govern how much of that data their normal users can view. 

{% include image.html url="/assets/img/cards/rule-card.png" description="Banner" width="200" %} 

Once the cluster devices are created, you will receive data on the ms_admin account. This data can be used to create applications or robots. But first of all you will be able to share it. 

To do this you will create shares rules. Notament has the identity who must use this data. So you will share the data of a cluster device only to the group of people registered to the selected identity. They will be able to use the data with the applications of the identity.
<br>

##### The administrator also has the ability to own [Robots](/docs/2/technical/microshare-platform-advanced/robots-guide/).

{% include image.html url="/assets/img/cards/robot-card.png" description="Banner" width="200" %} 

Robots are used on Microshare to automate tasks. For example to trigger an action when a particular event occurs. 
For example send an email alert when a temperature in a room is exceeded.

To do this, you just need to link a robot to a data stream from a cluster device. 
People accessing the identity according to the rights you have given them with the sharing rules will be able to create their own robots on the data streams you share with them if they wish.
But it is still advisable to have the general robots on the ms_admin account. This way you can simply make the email alerts be received by other users from one and the same robot.
<br>

##### The administrator also has the ability to own [Apps](/docs/2/technical/microshare-platform/dashboard-guide/).

{% include image.html url="/assets/img/cards/app-card.png" description="Banner" width="200" %} 

For applications, these are shared within the identity. So each application that you create on the different identities will be visible to all users of the same identity. Except on the Microshare Default identity which is particular. 

On the other hand, seeing the applications does not mean that they will work because it is necessary to have shared the data correctly with the users of the identity, for these applications to be able to use the data.


### 2. Setting Favorites
---------------------------------------

Once you have completed the apps, use postman to create a /share with recType io.point.userPrefs. Login with the client's ms_admin account credentials.  Body should look like: 

{% highlight js %}
  { 
    "favs" : { 
      "apps" : 
        [ 
          "5d35d61f1e00000343f7204d", 
          "5d35c68b1e00006a3ef72041", 
          "5d825c8c1e00009151f7810f", 
          "5d6e8d451d0000d1b8c0b6c3" 
        ] 
    }
  } 
{% endhighlight %}

Then create a share rule to share the user preferences with the rest of the organization so all organisation members can see the apps

{% include image.html url="/assets/img/Setting_favorites_rules_screenshot.png" description="Setting Favorites" %}

