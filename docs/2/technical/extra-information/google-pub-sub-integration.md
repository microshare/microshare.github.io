---
layout: docs
title: Google Pub/ Sub Integration
description: 
toc: true
---




{% include image.html url="\assets\img\google-pub-sub\Google_Logo.png" description="google pub/ sub logo" %}


-----------------------------------------------------------------
# Overview

Google Cloud Pub/Sub Integration is a streaming data integration that pushes data from the Smart Network into a client&#39;s Google Cloud Pub/Sub tenancy in real-time. Data is typically made available to Google Cloud Pub/Sub Topics, on which Subscribment can be set up to ensure that event handling and analytics are fed with the most current state of the measured space. Google Cloud Pub/Sub Integration creates a pathway to advanced storage, visualization, and analytics in the Google Cloud ecosystem from the Microshare® Smart Network.

# Setup

{% include image.html url="\assets\img\google-pub-sub\Pub_flowmap.png" description="flowmap" %}

-----------------------------------------------------------------

## **Client Side**

**Requirements :**

 - Create a Service Account 
 - Generate a Key 

### Create a Service Account

In order to create a Service Account, first log into your Google Cloud Platform (GCP).

{% include image.html url="\assets\img\google-pub-sub\Pub_1.png" description="image 1" %}

Then go to **Menu &gt; API &amp; Services &gt; Credentials.**

{% include image.html url="\assets\img\google-pub-sub\Pub_2.png" description="image 2" %}

{% include image.html url="\assets\img\google-pub-sub\Pub_3.png" description="image 3" %}

Click on **Create Credentials** and on **Service Account.**

{% include image.html url="\assets\img\google-pub-sub\Pub_4.png" description="image 4" %}

Then you will have to give it name such as _&quot;Microshare_® _Data&quot;_ for example, and a **Service Account Id** , which could be the same as the name. And finally you can add your own **description**.

{% include image.html url="\assets\img\google-pub-sub\Pub_5.png" description="image 5" %}

Our example :

{% include image.html url="\assets\img\google-pub-sub\Pub_6.png" description="image 6" %}

Regarding the permissions, it is important to select **PubSub Editor** or **PubSub Admin** for better maintenance.

{% include image.html url="\assets\img\google-pub-sub\Pub_7.png" description="image 7" %}

You can leave the last page as is and click **Done.**

{% include image.html url="\assets\img\google-pub-sub\Pub_8.png" description="image 8" %}

The Service Account is now set up, and the email is :

 - [Service Account Id]@[Project Name].iam.gserviceaccount.com

If at any time you need to change the role, you can change the settings for the email in the role interface.

{% include image.html url="\assets\img\google-pub-sub\Pub_9.png" description="image 9" %}

## Generate the needed key

Now let&#39;s **click on the created Service Account.**

{% include image.html url="\assets\img\google-pub-sub\Pub_10.png" description="image 10" %}

Then **go to the bottom** of the page to find the **&quot;Keys&quot; section .**

{% include image.html url="\assets\img\google-pub-sub\Pub_11.png" description="image 11" %}

And **Click on Add Key &gt; Create new Key.**

{% include image.html url="\assets\img\google-pub-sub\Pub_12.png" description="image 12" %}

**Pick JSON** and click on **CREATE.**

{% include image.html url="\assets\img\google-pub-sub\Pub_13.png" description="image 13" %}
Your key is now **created** and **automatically downloaded** on your computer.

{% include image.html url="\assets\img\google-pub-sub\Pub_14.png" description="image 14" %}

You can open it to check that it&#39;s all right like that :

{% include image.html url="\assets\img\google-pub-sub\Pub_15.png" description="image 15" %}

Be careful to store and transmit the resulting file in a secure fashion. These access credentials are stored in plain text and are vulnerable to security leaks.

Your Microshare® Service or Support contact will need the **.json file**. It is recommended that this information be sent securely via GPG encrypted email or through an encrypted chat connection using keybase.io.

-----------------------------------------------------------------

# **Microshare® Side**


### Connect to the Customer Pub Sub

First **open Google Cloud Console** , and click on the top right console button to **open the console.**

{% include image.html url="\assets\img\google-pub-sub\Pub_16.png" description="image 16" %}

{% include image.html url="\assets\img\google-pub-sub\Pub_17.png" description="image 17" %}

Click on Console **Menu &gt; Upload File**
Select the Json file that the customer sent you.

{% include image.html url="\assets\img\google-pub-sub\Pub_18.png" description="image 18" %}

Once uploaded, do a  **&quot;ls&quot;**  **command** to verify that the file is here and then it would be easier to copy and paste it&#39;s name.

{% include image.html url="\assets\img\google-pub-sub\Pub_19.png" description="image 19" %}

Copy and paste this command Line :

**gcloud auth activate-service-account --key-file &quot;[FileName]&quot;**

And Replace [FileName] by the name of the creds file

{% include image.html url="\assets\img\google-pub-sub\Pub_20.png" description="image 20" %}

{% include image.html url="\assets\img\google-pub-sub\Pub_21.png" description="image 21" %}

And then **Enter**

{% include image.html url="\assets\img\google-pub-sub\Pub_22.png" description="image 22" %}

The result is a confirmation message complete with the email target:

- [Service Account Id]@[Project Name].iam.gserviceaccount.com

**!!! You are now successfully connected to the customer&#39;s PubSub Tools !!!**

If you want to log out of the Customer&#39;s Instance use the command line

**gcloud auth revoke**

More informations here :
[https://cloud.google.com/sdk/gcloud/reference/auth/revoke](https://cloud.google.com/sdk/gcloud/reference/auth/revoke)


Then you will have to create a topic, there is two ways for that :

- Create a Topic on Remote
- Create a Topic as the Client

## Create a Topic on Remote

Stay connected on your own Project and use **the command line:**

**gcloud pubsub topics create projects/ [Customer&#39;s Project] /topics/ [Topic Name To Create]**

{% include image.html url="\assets\img\google-pub-sub\Pub_23.png" description="image 23" %}
It automatically creates the topic on the client side :

{% include image.html url="\assets\img\google-pub-sub\Pub_24.png" description="image 24" %}

## Create a Topic as the client

Navigate to the Customer&#39;s Project from your console with this command line:

**gcloud config set project [Client&#39;s Project]**

{% include image.html url="\assets\img\google-pub-sub\Pub_25.png" description="image 25" %}

{% include image.html url="\assets\img\google-pub-sub\Pub_26.png" description="image 26" %}

Even if the message returns &quot;it doesn&#39;t work&quot;, the manuever has worked.

Now on the Customer&#39;s project, you need to specify where you want the topic to be created.

**gcloud pubsub topics create [Topic Name To Create]**

{% include image.html url="\assets\img\google-pub-sub\Pub_27.png" description="image 27" %}

On the Customer side :

{% include image.html url="\assets\img\google-pub-sub\Pub_28.png" description="image 28" %}

Then push the data on the Customer&#39;s topic, and the customer can create the Subs to these topics quite easily.

-----------------------------------------------------------------

There is also a solution by API, but this one isn&#39;t quite as useful, because the customer has to create an API Key using the command line:

**gcloud auth application-default print-access-token**

The key you create here is only valid for 24 hours.

[https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics/create](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics/create)

{% include image.html url="\assets\img\google-pub-sub\Pub_29.png" description="image 29" %}

