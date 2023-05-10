This tutorial is intended for non-technical people. Technical people can create branches and files in their preferred way, but they should still pay attention to the content.

The process involves creating a branch, adding/editing content, and then submitting a pull request.

To find more details about the content format, read a little about markdown format. You can also use ChatGPT to generate it for you. Additionally, you can find more details about content creation on the main readme.

## 1. Creating a Branch

1. Go to the documentation website.
2. Click on "Contribute."
3. If you don't have a GitHub account, create one.
4. If you don't have access to the repository, request access from Jeffrey.
5. Take note of your Jira ticket number (e.g., DOC-22).
6. Create a branch with the following naming convention: "{Jira ticket number}--{brief explanation}."

https://user-images.githubusercontent.com/48103544/235675909-117beb7e-e833-4a87-87e3-5980ce804500.mp4

## 2. Making Changes - Updating a File

1. Go to the page you want to change on the documentation website.
2. Click on "Edit this page on GitHub."
3. Select your branch.
4. Click on "Edit."
5. Add your content.
6. Save your changes.

https://user-images.githubusercontent.com/48103544/235676079-221a5260-c507-49ad-8e1b-60eaa44a13a8.mp4

## 3. Making Changes - Creating a File

1. Decide on which section you want to add your content.
2. Go to the corresponding folder: "docs/2/{section}/{subsection}".
3. Create a file.
4. The name of the file should be in lowercase with dashes, and end with ".md."
5. Paste the following template and replace the values in "{}":

```
---
layout: docs
title: {title of the page}
description: {brief description of the page}
toc: true
---

{% include image.html url="/assets/img/thumbnail-8.jpg" height="900" width="900" description="thumbnail 2" %}


<br>

---------------------------------------

##### SUMMARY: 

{replace this section with the whole summary}
1. [What’s a Rule?](./#1-what-is-a-rule)
2. [Creating a Rule](./#2-creating-a-rule)
  - A. [Create a name and description](./#a-create-a-name-and-description)

---------------------------------------

{replace this section with the whole content}

## 1. What is a Rule?
---------------------------------------
A Rule is a concrete expression of a sharing policy. It allows a data owner to set the conditions under which a requested operation will be granted. Rules only allow sharing. They do not prevent sharing. Sharing is blocked by default.

## 1. {title}
---------------------------------------
{content}

```

https://user-images.githubusercontent.com/48103544/235676232-8cd21941-3348-469d-8b77-00e7e5082d65.mp4


## 4. Add your page to the sidebar menu

1. Open [https://github.com/microshare/microshare.github.io/blob/master/_data/docs.yml](https://github.com/microshare/microshare.github.io/blob/master/_data/docs.yml)
2. Select your branch.
3. Add your page title in the correct location following the architecture.
4. Add some keywords related to the page.



https://user-images.githubusercontent.com/48103544/235676568-5d40c540-bc28-4071-ad11-b1f12f0d1ad5.mp4



## 5. Creating a Pull Request

1. Once you have made all your changes, create a pull request.
2. Give it a name that corresponds to your Jira ticket.
3. Add some explanations.
4. Add the appropriate reviewer.
5. Validate the pull request.

https://user-images.githubusercontent.com/48103544/235676283-34ef7d12-5312-4f94-b0ee-8614a7d8afb0.mp4


## 6. Using Chat GPT for content

1. Get your content file (word content or other)
2. Go to chat.openai.com
3. Give chat gpt this first content: 
```
Hi, 
Do not take any action, just reply ok, I will provide you a template to reuse for my next question.
Here is a template/layout of one of our readme documentation website page:
---
layout: docs
title: The Advanced Developer's Roadmap to Microshare™
toc: true
---


{% include image.html url="/assets/img/thumbnail-6.jpg" height="1000" width="1000" description="thumbnail 2" %}

---------------------------------------
#### Summary:
1. [Introduction](./#introduction)
2. [Creating Robots](./#1-creating-robots)
3. [Creating Admin API with Microshare's API](./#2-creating-admin-api-with-microshares-api)
4. [Working with Identities](./#3-working-with-identities)
5. [Creating Dashboards](./#4-creating-dashboards)
6. [Data Management](./#5-data-management-workflow)


---------------------------------------
## Introduction
---------------------------------------
##### What else can a developer do?

Once you have completed the [Novice Developer's Roadmap](/docs/2/technical/quick-start/basic-dev-roadmap/), the advanced developer is prepared to use the materials under the <em> Microshare Platform Advanced </em> section and follow the following steps:

## 1. Creating Robots
---------------------------------------

A Robot is an actor that automates the tasks associated with transforming, enriching, and annotating your data. Use the [Robots Guide](/docs/2/technical/microshare-platform-advanced/robots-guide/) to learn how you can create robots to automate tasks within your system. Additionally, the Robots Guide will go over the alerts setting, allowing you to create notifications for when an event occurs. Upon completion, the [Robots Library](/docs/2/technical/microshare-platform-advanced/robots-library/) is a great resource to find examples of robots in action.



## 2. Creating Admin API with Microshare's API
---------------------------------------

Now that you have become familar with creating [share API](/docs/2/technical/api/share-api/) with Microshare's API, its now time to communicate with the API to draw more information using [complex requests.](/docs/2/technical/api/admin-api/)

## 3. Working with Identities
---------------------------------------

Through the [Identity Guide](/docs/2/technical/microshare-platform-advanced/identity-guide/), you will find that different identities have different access to viewing, creating, and owning information. Understanding the applications of different identities will better allow you to determine who gets to see certain information and have access to certain robots, devices, clusters and rules when working for different clients of Microshare.  

## 4. Creating Dashboards
---------------------------------------

[Dashboards](/docs/2/technical/microshare-platform/dashboard-guide/) will allow you to organize apps together and eliminate clutter on you manage page. This will be especially useful for grouping a client's apps together. Although the Dashboards Guide is not under the advanced section, the guide dives heavily into advanced material. 

## 5. Data Management/ Workflow
---------------------------------------

Finally, you will learn how to manage your data within Microshare. Microshare no longer uses robots for data ingestion and unpacking, but the guides will be a great resource to understanding what the new method is doing and how powerful the applications of robots can be. The path of data management is:

<br>
**1.** [Data Ingestion](/docs/2/technical/microshare-platform-advanced/data-ingestion/)
<br>
**2.** [Data Unpacking](/docs/2/technical/microshare-platform-advanced/data-unpacking/)
<br>
**3.** [Data Unpacking by Robots](/docs/2/technical/microshare-platform-advanced/data-unpacking-by-robots/)
<br>
Have any questions? please don't hesitate to contact `support@microshare.io` with any issues. 
```

4. Now ask him: 
```
Here is my content : 

{{content}}

Can you transform it into a readme file using the layout I just give you ? 
``` 

5. Copy the readme content, then follow the steps for creating/updating content explained above. 
