---
layout: docs
title: The Novice Developer's Roadmap to Microshare™
toc: true
---

---------------------------------------

##### SUMMARY : 

1. [Where do I start?](./#1-where-do-i-start)
2. [Creating your Microshare® Developer Account](./#2-creating-your-microshare-developer-account)
3. [Working with the API](./#3-becoming-familiar-with-the-microshare-api)
4. [Getting started with the Microshare® platform](./#4-getting-started-with-the-microshare-platform)
5. [How to create an App](./#5-how-to-create-an-app)
6. [Ready for more](./#6-ready-for-more)

---------------------------------------

### 1. Where do I start?

The amount of information dedicated to the developer may seem overwhelming, so this guide serves to navigate you through how to get started and outlines the path you should follow to better understand Microshare®. 
After reading the [Overview](/docs/2/technical/quick-start/overview/) of the role of the developer and understanding the [Technical Structure of Microshare®](/docs/2/technical/quick-start-microshare-technical-structure), you should get started creating your developer Microshare® account, which will give you the ability to create robots, rules, views, apps, and device clusters.

---------------------------------------

### 2. Creating your Microshare® Developer account

Follow the steps outlined in the [Create an Account](/docs/2/general-user/quick-start/create-an-account/) page, but make sure to use the [http://dapp.microshare.io](http://dapp.microshare.io) environment. In the developer environment, you will be able to test out creating device clusters, dashboards, editing views, creating rules and robots. 

---------------------------------------

### 3. Becoming familiar with the Microshare® API

##### Authentication

First, Head over to the [API Quick Start](/docs/2/technical/api/quick-start/) to install the Postman application, and learn the terminology of Microshare®'s API. Next
use the [Authentication Guide](/docs/2/technical/api/authentication/) where you will learn how to navigate the security features of Microshare®'s API by requesting your own token. It is crucial that you complete the authentication guide before you move on to the simple request tutorial, as you will not be able to make the requests without the authentication.

##### Simple Requests

Following the [Simple Requests tutorial](/docs/2/technical/api/simple-requests/), you will learn how to send and request information to Microshare®'s API. These concepts are the fundamental components behind working with robots and device clusters moving forward. 

---------------------------------------

### 4. Getting Started with the Microshare® Platform

Once you have set yourself up in the developer environment, follow the next steps to interact with the Microshare® environment:

##### Device Clusters

[Device Clusters](/docs/2/technical/microshare-platform/device-cluster-guide/) allow you to group your devices that are in similar locations, combining the individual devices' data together. From here, you can create apps to display an analyse the cluster's information, and use rules to control how others may view that information. 

##### Views

[A View](/docs/2/technical/microshare-platform/views-guide/) is a component for managing your data access. It lets you send static data, query the data lake, manage content and data formats and also puts controls over data elements along with sharing rules. 

##### Dashboard

[Dashboards](/docs/2/technical/microshare-platform/dashboard-guide/) will allow you to organize apps together and eliminate clutter on you manage page. This will be especially useful for grouping a client's apps together. It is important to note that a lot of the material under the dashboard guide fall under the advanced developer category. 

##### Rules 

[A Rule](/docs/2/technical/microshare-platform/rules-guide/) is a concrete expression of a sharing policy. It allows a data owner to set the conditions in which a requested operation will be granted. Rules only allow sharing. Rules do not prevent sharing. Sharing is blocked by default.

---------------------------------------
### 5. How to create an App

First, head over to [dapp.microshare.io](http://dapp.microshare.io) and login. Second, naviagate over to the apps tab marked in green and click on the wrench icon to create a new app. From here, you should be able to see:

{% include image.html url="\assets\img\dashboard-guide-2.png" height="900" width="900" description="Dashboard Guide 2" %}
 
 Configure your app with following options:
 ```
 
 App Type: Display
 Parent Tag(s): Leave Blank
 Style Choice: Showcase
 Theme: https://s3.amazonaws.com/cdn.point.io/distribution/product/1_00/stylesheet.common.css 
 Include: Leave Blank unless requested otherwise
 Facts to display: None 
 Form to display: For realtime apps, pick Realtime Form v2.5 and pick Trending Form v2.6 for trending apps 
 
```
Now configure your app with facts.  Create a new fact by pressing the button above the green arrow and hitting apend. 

{% include image.html url="\assets\img\dashboard-guide-3.png" height="900" width="900" description="Dashboard Guide3" %}

Here are some details on facts that all apps require. For more specific facts per type of device, visit [the Dashboard Guide](/docs/2/technical/microshare-platform/dashboard-guide/).
```
appTitle: Should match the name you provided as the app’s Name (above)
navOptions: This credential should be completed last. Add the links and names of all apps in the client’s account to each app.json so that the client can navigate from one app to another
selectionOptions: All apps require you to provide the client specific location options in the navOptions field. Use the databoard to generate the JSON in the correct format. Get a token for the account that owns the device cluster(s) and head over to [https://databoard.azurewebsites.net/dashboard/0](https://databoard.azurewebsites.net/dashboard/0). Choose Edit Workspace from the settings menu, then Add Monitor Widget for the relevant clusters, then Lock Workspace, then click on the device monitor to show the list view, then click Download JSON. 
dataRecType: math the target recType of the device cluster
dataContext: Use the meta tag you chose in the device cluster
queryId, queryId1, queryId2, queryId3: it is recommended to leave the query settings the same as they are in the example json
footerLogo, headerLogo, header SecondaryLogo and get RecType: leave untouched unless requested otherwise
```
After completing all the necessary facts above and from [the Dashboard Guide](/docs/2/technical/microshare-platform/dashboard-guide/), you can finish by clicking the create button indicated by the gree arrow below.

{% include image.html url="\assets\img\basic-dev-roadmap-image-1.png" height="900" width="900" description="BDRM1" %}

---------------------------------------

### 6. Ready for more?

Head on over to the [Advanced Developer's Roadmap](/docs/2/technical/quick-start/advanced-dev-roadmap/) to take a deeper dive into interacting with the Microshare® platform.

Have any questions? please don't hesitate to contact `support@microshare.io` with any issues. 



