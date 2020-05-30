---
layout: docs
title: First Step as an Admin

toc: true
---

[Microshare.io](https://microshare.io)

---------------------------------------

##### SUMMARY : 

1. [Providing Client Access via Microshare](./#1-part-A)
2. [Setting Favorites](./#2-part-2)


---------------------------------------



### 1. Providing Client Access via Microshare
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


