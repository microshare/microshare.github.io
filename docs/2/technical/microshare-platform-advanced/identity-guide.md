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

Your identity determines not only what data you can view, but what apps and forms you have jurisdiction over. Often, when you cannot see the same data that you should be able to, you are logged into the wrong identity.


**An identity shares with its users:** its applications, and the sharing rights assigned to it.

To make it simple, once logged into your account you can go to the identity of your choice by following the instructions to change your identity. 

Once on your identity, you will see in your dashboard the applications that belong to your identity. That is to say that all the people who will have access to this identity will have exactly the same applications. 

**There is a difference between accessing applications and running applications with their data.**

Data used by an application that is shared with the global identity will only be accessible when logged into that identity. You have the ability to share  your identity without the data being shared as well. In this case, you will be able to open applications, but unfortunately, the applications will remain empty of data.

And here's the difference, applications will follow the identity, but the data is shared with the identity only if the right global sharing rule has been created.


## 2. Switching Identities
---------------------------------------

To switch identities, you must:
* Navigate and log into the Console screen at [https://app.microshare.io](https://app.microshare.io).

* Click on the person icon in the top right corner of the Console screen.

{% include image.html url="/assets/img/access-my-apps/microshare-identity.png" description="Profile Pic" %}

* Select the "Construction" identity.

* View the apps under your identity.

## 3. Some tips: 
---------------------------------------

####  Connect directly to an Identity

To avoid having to change your identity once connected, you can add a parameter to the connection in the `Organization (Optional)` value.

{% include image.html url="/assets/img/access-my-apps/log-in.png" description="Log in" %}

The correct value to insert in this parameter is found when you navigate through your keys once you are logged in at this location: 

{% include image.html url="/assets/img/identity_code.png" description="identity code" %}

So you can log in to the identity directly.

####  Sharing data has an entire identity

`Comming soon`

####  Access identity data via the API.

As for the Microshare® platform, the principle by API is the same. If we want to access data that is shared with the identity, our connection token must come from the right identity. 

For this, there are two possibilities: 
To be connected on Microshare® web on the right identity, and when you will ask for a token this one will come automatically from the right identity. You can check in the JSON received the corresponding identity here: 

{% include image.html url="/assets/img/identity-on-api.png" description="identity code" %}

Otherwise you can like when you connect with the identity parameter as seen above, add at the end of your request for a token this parameter: 

`&identity=YourIdentityID`


