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
