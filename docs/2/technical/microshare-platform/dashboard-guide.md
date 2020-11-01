---
layout: docs
title: Dashboard Guide
description: Understanding your Apps
toc: true
---


{% include image.html url="/assets/img/thumbnail-12.jpg" description="thumbnail 2" %}


##### SUMMARY : 

1. [Types of Dashboards](./#1-types-of-dashboards)
2. [Prerequisites](./#2-prerequisites)
3. [Dashboard Configuration](./#3-dashboard-configuration)
4. [App Facts](./#4-app-facts)
5. [How the app is displaying](./#5-how-the-app-is-displaying)




## 1. Types of Dashboards
---------------------------------------

Under the Microshare App (Dashboards) creator there is 4 different types of apps. In this page we are gonna explain how a Display App works.

* Workflow

Not really ue anymore, provide the possibility to create real workflow from data trigger, and assign works to user following the current step of the workflow.

* Display

The most type currently use. Using a [form]() and the [App Facts](./#4-app-facts) it generates a realtime or tranding application depending on your code and settings. 
**Microshare provides with sensors and data some Standards Dashboards. In our Product line we can fin some Trending and Realtime application to perfecltoy vizualize the data.**

* Suite

The suite app is used to create a landing page for the app that belongs to the same group. So it's easier to use the selected Display App in a single app.
<br> >> [Suite App](/docs/2/technical/microshare-platform/suite-app-guide)

* Dashboard

The Dashboard app used to be helpful for the "Dashboard" tab (you can fintd it in the microshare topbar, near "Manage") to have the ability to display main metrics in the "resume" app (small rectangles). And then when you click on it it works like a Display app.


##### Guest App

When you create an app on Microshare there is a posibility for you to set this app as a public app by making it a guestapp :
[Guest App](/docs/2/technical/microshare-platform/creating-guest-app-guide)

## 2. Prerequisites
---------------------------------------

_Microshare is using Ember.js for it's composer, so you should learn how Ember.js is working to use it well in the apps._

 1. Configure the client accounts and identities. Differentiate between which accounts will have the ability to own the apps or own the data. 
 2. Create a Push on the network.
 3. Create a [device cluster](./#2-dashboard-configuration) with all the necessary devices with the appropriate recType (e.g.  `io.microshare.motion.unpacked` ). Only devices of the same type may be in a device cluster. For example, motion sensors for room occupancy cannot be in the a desk occupancy device cluster. 
 4. Have the locations of the devices prepared for the tags loc1, loc2 and loc3. 
 5. [**<!> Create a Rule if needed.<!>**](/docs/2/technical/microshare-platform/create-rule)

 
## 3. Dashboard Configuration
---------------------------------------

 
#### Create a New App with the configuration:
 {% include image.html url="\assets\img\dashboard-guide-8.png" height="700" width="900" description="Dashboard Guide 8" %}
 {% include image.html url="\assets\img\dashboard-guide-2.png" height="900" width="900" description="Dashboard Guide 2" %}
 

 * `App Type`: Display _// Most common type of app_
 * `Parent Tag(s)`: Leave Blank _// Used by Suite apps_
 * `Style Choice`: Showcase _// The microshare app template_
 * `Theme`: https://wwwyourdomain.com/assets/css/style.css _// Use this to upload your custom style files_
 * `Include`: Leave Blank unless requested otherwise _// This is used to load an other "form" that can containt (JS / CSS ....)_
 * `Facts to display`: None 
 * `Form to display`: Your_Form _// Select the form you want to use_
 * `Facts`: See next section for specific details
 
 

## 4. App Facts
---------------------------------------
<!---This is where Cole will add the child pages to the JSON examples for the Facts --->

### Tips 

It is best to give the facts in JSON code format. To do so, simply click on the tree button and select code.

{% include image.html url="\assets\img\app-facts-tree.png" width="800" description="Factes Tree" %}

{% include image.html url="\assets\img\app-facts-code.png" width="800" description="Facts Code" %}


### App Facts

The app facts are the parameters that can be send to your application. The goal is to have scalable application that use the same form, maybe some different CSS/JS form or file that are includes for all the apps. And finally the only few parameters that needs to change are contain in the app facts.


## 5. How the app is displaying
---------------------------------------

Once everything is set up, when you will launch your app, it will display an app generated from the different composants (app facts, form, included form, theme) in this order : 

* Theme
* App Facts
* Included Form
* Form

 {% include image.html url="\assets\img\microshare-logo.png" description="logo" %}
