---
layout: docs
title: Dashboard Design
description: Self-Serve tools for Design. Bring your dashboards to the next level, and make your own design.
toc: true
---

---------------------------------------

##### SUMMARY : 

1. [Dashboards system](./#1-dashboards-system)
  - A. [Apps](./#a-apps)
  - B. [Suite App](./#b-suite-app)
2. [Design CSS](./#2-design-css)

---------------------------------------

## 1. Dashboards system
---------------------------------------

### A. Apps

You are using micorshare apps but you don't know do they work, here is a quick explanation on their working system.

An app is made from 3 microshare components : 

1) The structure of the app, aka "form". We select a form when we create an app from a dropdown, you will find it under the naming of "Form to display"

2) The design of the app, aka "stylesheet form". It add all the design to the structure code, you will find it under the naming of "Include"in the app parameters. 

3) The configuration of the app, aka "app facts", as we know have the code of the app and the design the last step is only to feed the app with the right configuration ("which dashboards, which data ...)

All these 3 microshare components are configured by microshare internally and we advice you to not switch them without Microshare's approval. We will see later how to change the design in the [Section 2](./#2-design-css)

#### How can we see these app configurations ? 

1) Login to Microshare

{% include image.html url="/assets/img/apps/login.png" description="Login" %}

2) Go on the "Manage" Panel (top bar)

{% include image.html url="/assets/img/apps/home.png" description="Home" %}

3) Go to the "Apps" section (left bar)

{% include image.html url="/assets/img/apps/apps_menu.png" description="Home" %}

4) Click on an app and then click on the edit button at the top right.

{% include image.html url="/assets/img/apps/edit_app.png" description="Home" %}

5) Here you see the app configs.

{% include image.html url="/assets/img/apps/app_config.png" description="Home" %}



### B. Suite App

The suite app is an extension of the apps, it's an app that will display as an iframe the selected apps (through a combo of parent/child tags in the config), in an iframe as a multi app. 

So when you launch the suite app (that's is often configure as favorite app), it will open the code of the suite app. This one will discover the apps that have the same "parent tag" as the "child tag of this suite app". 

Then when you clic on one of the app, it will keep the top nav bar and the bottom bar of the suite app, and render the rest of the app through an iframe. 

So it means that the app look is a mix of the suite app and the app itself. As we will explain in the next section how to configure the design, don't forget the implication of the suite app. 


## 2. Design CSS
---------------------------------------

Ok, we show you the path to access the app config in the first section, now let see what you can configure. 

In term of design the first thing you can change are the top bar logos. First you can change the top left Microshare Smart Facilities Logo, but also add a logo at the top right.

To do so, in the app config (blue square on the image below), you can add the two fields : 

```"headerLogo":"",```

```"headerSecondaryLogo":"",```


and you can change the link to the image you want. 

Then you can change the CSS (Cascading Style Sheets), as explain in the name css works in cascade and here is how it works in the microshare config. 

    1) The Microshare Standard Stylesheet

    2) A possible external stylesheet link

    3) An individual (app by app) css code

So as mentionned above you won't change the "The Microshare Standard Stylesheet", but anything you will add in 2) or 3) with by the cascade function overwrite 1).

So 2) you can add a link to an external css where you can add your own stylesheet for the microshare structure. You would include this link in the "Theme" field of the app (in orange in the image below). This link can be used for many apps easily.

Finally 3) in the "style (green) section of the app config you can your own design by replacing the line ```<!--Enter Style Here-->``` by your css. 

You have to "Update" or "Quick Update" your changes to see them live. 

__The html structure of the forms might change through the time, we try to keep it stable as much as possible and we look forward to provide a better class naming convention to make the css overlay easier for our custmers.__


{% include image.html url="/assets/img/apps/app_config_edit.png" description="Home" %}

