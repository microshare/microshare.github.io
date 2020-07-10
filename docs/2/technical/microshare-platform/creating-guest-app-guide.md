---
layout: docs
title: How to Configure a Guest Access App
toc: true
---

#### Summary:

1. [What is a Guest Access App?](./#1-what-is-it)
2. [Creating the Guest App](./#2-creating-the-guest-app)

---------------------------------------

### 1. What is a Guest Access App?

Microshare® makes it possible to provide controlled access to Apps/Dashboards for anonymous (unauthenticated) users. This is desirable in situations where the general public is invited to interact with the data. It should only be used for data that is intended to be for general public release (green data).  

To make this work, a "Link To" object is created by the application owner which provides a pointer to an asset that can be accessed through an unauthenticated URL /guest. The guest URL takes the Link To object id to determine the intended behavior.  

The guest will appear to the system (APP & API) as guest@microshare.net. Share rules may be created to make accessible assets beyond the App/Form. This makes it possible for view and shares to be leveraged. Writing data back to the system through the api server's POST commands is also possible within the guest app. The data created will be owned by the user guest@microshare.net with the org of the app owner.  


### 2. Creating the Guest App

<!--Details on having the app/ data on hand-->
1. Authorize (via Dauth api) as the application/view/data owner (or some shared user)
2. Use the dapp api /links2 to create an entry in the links collection 
* POST `https://dapp.microshare.io/links2?Authentication=<sessionkey>` Note: THis is different from using the Bearer token in the header authorization
*   Settings for that POST are () raw and then pick JSON from the text dropdown
*  Sessionkey is used via the Authentication query string parameter
*  targetId = app id
*  Email = guest@microshare.io (or whoever) 
*  targetType = app 
*  Use example body 

```
{"name":"Feedback App Test", "recType":"pipe", 

"desc":"Link toFeedback App Test",  

"data":{ "email" : "guest@microshare.net", "targetId" : "5e6ce6b62b0000636ad81a38" , "targetType" : "app"}  

} 
```

Note: make sure to use .net and not .io for the email

3. Get the id back from the link call above
* Example Product Suite in assests account is `5e73b63d3a00002a934523d4`
* Example Touchless Feedback app in assets account is 5e77ac483a0000df97452437 

4. Compose a URL `https://dapp.microshare.io/guest/<linkid>?optional-query-string=optional`
* Example URL for Product Suite in assets account is `https://dapp.microshare.io/guest/5e73b63d3a00002a934523d4`

5. Grab that link
6. For any views, create rules that share 'filtered objects"  with guest@microshare.net with Execute rights 
7. In order to view data that was created by a guest user interacting with a link to the app, you must also create a rule that shares that data back from guest@microshare.net to the organization (an org admin). 

{% include image.html url="/assets/img/creating-guest-app-guide-1.png" description="CGAG1" %}

{% include image.html url="/assets/img/creating-guest-app-guide-2.png" description="CGAG2" %}

{% include image.html url="/assets/img/creating-guest-app-guide-3.png" description="CGAG3" %}

{% include image.html url="/assets/img/creating-guest-app-guide-4.png" description="CGAG4" %}


