---
layout: docs
title: Configuring the Suite App
description: A Dashboard Guide Child Page
group: advanced
toc: true
---


---------------------------------------

A Suite App allows you to encapsulate multiple apps into a single interface that is more straightforward to configure and navigate than using the sandwich menu in the trending or realtime forms.  It’s easy to set up one or more suite apps that group "child" apps together.

## 1. Create a new App:

{% include image.html url="\assets\img\suite-app-1.png" description="Dashboard Guide 4" %}

* `App Type`: Suite
* `Name`: Enter the user- facing name for the new application.
* `Parent Tag(s)`: (Optional) this allows suite app to itself be configured within another suite app.
* `Child Tag`: Enter a unique tag that your suite app uses to select its child app, MUST match the parent tag(s) of the child apps.
* `Style Choice`: Showcase.
* `Theme`: [https://s3.amazonaws.com/cdn.point.io/distribution/product/1_00/stylesheet.common.css](https://s3.amazonaws.com/cdn.point.io/distribution/product/1_00/stylesheet.common.css)
* `Include`: Leave blank unless instructed otherwise.
* `Icon`: Select the same as seein in the demo suite app in the assets account.
* `Facts to Display`: None.
* `Form to Display`: pick Suite icon form v2.5.
* `footerLogo`: [https://s3.amazonaws.com/cdn.point.io/distribution/product/1_01/footer](https://s3.amazonaws.com/cdn.point.io/distribution/product/1_01/footer.png)
* `headerLogo`: [https://s3.amazonaws.com/cdn.point.io/distribution/product/1_01/footer](https://s3.amazonaws.com/cdn.point.io/distribution/product/1_01/header.png)
* `sortedApps`: (optional) a list of the app names. Should only be used if the sort order is not alphabetic.

{% include image.html url="\assets\img\dashboard-guide-3.png" description="Dashboard Guide 4" %}
{% include image.html url="\assets\img\app-facts-tree.png" description="Dashboard Guide 4" %}
## 2. Configuring the Child Apps of the Suite App

Remember that “Child Tag” you configured in the Suite App?  Add that to the “Parent Tag(s)” field of the relevant app(s).

Remember to test your Suite App, the child apps should appear as tiles within the Suite App.

{% include image.html url="\assets\img\microshare-logo.png"  description="ms logo" %}