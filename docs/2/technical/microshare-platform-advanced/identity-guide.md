---
layout: docs
title: Identity Guide
toc: true
---

---------------------------------------

##### SUMMARY : 
1. [What are Identities?](./#1-what-are-identities)
2. [Switching Identities](./#1-switching-identities)

---------------------------------------
## 1. What are Identities?

Your identity determines not only what data you can view, but what apps, robots, device clusters or rules you have jurisdiction over. Often when you cannot see the same data that you should be able to, you are logged into the wrong identity. The types of identities are:

1. **General User:** has the ability to view data certain data, can view apps but not edit them.
* They have a role specific identity.
* com.clientName.site.user

2. **Client Admin:** has the ability to set [Rules](/docs/2/technical/microshare-platform/rules-guide/) to govern their own subset of data, own [Robots](/docs/2/technical/microshare-platform-advanced/robots-guide) and [apps](/docs/2/technical/microshare-platform-advanced/identity-guide/).
* They have a site specific identity.
* com.clientName.site

3. **Microshare Super Admin:** The Microshare team will create the [Device Cluster](/docs/2/technical/microshare-platform/device-cluster-guide/) for the client, and create the [Rules](/docs/2/technical/microshare-platform/rules-guide/) to share the proper data with the appropriate Client Admins. 

4. **Microshare Developer:** The Microshare Developer has access to create anything necessary to solve potential issues or set up a client's configuration.


## 2. Switching Identities
---------------------------------------

To switch identities, you must:
1. Navigate and log into the Console screen at [https://app.microshare.io](https://app.microshare.io).
&nbsp;
2. Click on the person icon in the top right corner of the Console screen.
&nbsp;
{% include image.html url="/assets/img/access-my-apps/microshare-identity.png" description="Profile Pic" %}
&nbsp;
3. Select the "Construction" identity.
&nbsp;
4. View the apps under your identity.


