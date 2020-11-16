---
layout: docs
title: How to create a Rule
description: A Dashboard Guide Child Page
group: advanced
toc: true
---

---------------------------------------

 The views used by the generic applications are generic views created by Microshare and hosted on the account **asset@microshare.io**. 

These views are already shared with all accounts. You can find more information about this in the [views guide.](/docs/2/technical/microshare-platform/views-guide)

If a new view is created for the dashboards, it is necessary to follow the following steps:

 * Create [Rules](/docs/2/technical/microshare-platform/rules-guide/) to share the views to everyone through the **assets@microshare.io** account.  
 * The name should be "Share Views with <em>(insert client name)</em>"
 
 {% include image.html url="\assets\img\dashboard-guide-1.png" height="900" width="900" description="Dashboard Guide1" %}
 
 * Check ON Active, underlined in blue. 
 * Use the Record Type: io.microshare.fm.master.agg underlined in red.
 * Check ON Operations: Read, Query, and Execute underlined in green.