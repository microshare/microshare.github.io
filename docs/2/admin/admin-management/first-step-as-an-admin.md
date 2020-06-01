---
layout: docs
title: First Step as an Admin

toc: true
---

[Microshare.io](https://microshare.io)

---------------------------------------

##### SUMMARY : 

1. [Create the Organization](./#1-create-the-organization)
2. [Providing Client Access via Microshare](./#2-providing-client-access-via-microshare)
3. [Setting Favorites](./#3-setting-favorites)


---------------------------------------
### 1. Create the Organization
---------------------------------------
{% include image.html url="/assets/img/Org_1.png" description="Org Settings" %}

In order to create the organization, you must login with an Admin account, which only a select few individuals have the ability to do. You must be logged into a microshare.io user account and have the "isAdmin" setting activated for the "pointdefau" identity. 

{% include image.html url="/assets/img/Org_2.png" description="Setting Favorites" %}

1. Org Name is for the Organization & Identity Combined   
* This is user facing text which is visible on the Microshare platform in the User dropdown under 'Switch Identities' 
2. Org Domain should be the official domain of the organization (typically where the corporate webpage is located). eg. Comcast.com 
* This is required to include a valid internet extension and a valid top level domain   
3. For example amazon.co,uk is valid, but neither co.uk nor amazon are valid 
* Identity Identifier must be unique in the system, can be dot separated, should be lowercase. eg. Aramark.admin 
4. Administrator email is the intended organization administrator, will "invite" the admin by sending an email to that address and [support@microshare.io]. Typically ms_admin@domain 
5. The full identity string will be reversed domain + identity identifier so org domain 'microshare.io' + identifier 'admin' will be io.microshare.admin 

### 2. Providing Client Access via Microshare
---------------------------------------

1. To determine user access, first log into Microshare as the appropriate ms_admin account. 
2. Head over to the Manage tab, then Keys, Organization. Here you can click on specific users next to the identity that you want to add them too 
3. Add the client's email address in the email section
4. Click the add button 
5. Repeat for the other clients as necessary 
6. Client POC should send an email similar to the sample below to the clients who have just been added to:
* confirm that they have been added correctly and 
* confirm that they are able to see the appropriate dashboards as we've had customers reach back out to us with issues with both 

Email Sample: 

 
{% highlight js %}

To: All clients who have just been provided access 

Attach: Update this attachment to be specific for your client and insert a version of it in the email to your client  

All, 

 
I have just added you to be able to access the Microshare dashboards.  You will be able to access the (INSERT NAMES OF DASHBOARDS PROVIDED) Dashboards. 

I am also attaching a set of instructions to help you access the dashboards.  There are some common troubleshooting tips available if needed. 

 
Please reach out to support@microshare.io if you have any questions or run into any issues. 

{% endhighlight %}

### 3. Setting Favorites
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


