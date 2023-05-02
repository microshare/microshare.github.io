# Microshare Documentation Site

Get started with Microshare, the world's only prebuilt, scalable data management and sharing solution for IoT.

This folder is relative to the [Microshare documentation website](httms://docs.microshare.io).

---------------------------------------

##### SUMMARY : 

[From jira to doc website](#jira-to-doc)
1. [Introduction](#1-introduction)
2. [How it works](#2-how-it-works)
    - A. [Documentation Structure](#a-documentation-structure)
    - B. [How is a page built ?](#b-how-a-page-is-built-)
        - [Where is the page : /docs/2/ folder](#where-is-the-page--docs2-folder)
        - [How the page works](#how-the-page-works)
    - C. [Page content](#c-page-content)
        - [Add Images](#add-images)
        - [Add an Accordion (Mainly for FAQ)](#add-an-accordion-mainly-for-faq)
        - [Add Code Snippets](#add-code-snippets)
    - D. [Writing new articles - create new pages](#d-writing-new-articles---create-new-pages)
    - E. [Add a page to the left sidebar menu](#e-add-a-page-to-the-left-sidebar-menu)
3. [Contribute](#3-contribute)
    - A. [Run it locally and add your changes. - strongly technical](#a-run-it-locally-and-add-your-changes---strongly-technical)
        - [Prerequisites](#prerequisites)
        - [Build](#build)
4. [Visit Microshare](https://www.microshare.io)

---------------------------------------

# Jira to Doc

This page contain a lot of details on content creation and architecture. 
To understand quickly how to add content we have a special page for you : [https://github.com/microshare/microshare.github.io/tree/master/jira](https://github.com/microshare/microshare.github.io/tree/master/jira)

So from a Jira ticket you can directly write documentation. And you can use chat gpt to help you ! 



# 1. Introduction


This documentation is built with [Jekyll](https://jekyllrb.com/) and hosted on GitHub Pages at https://microshare.github.io.

The goal of this documentation is to offer some useful details on our technology and how to make it work, for our customers, partners, resellers ...

If you want more information on any topic please contact `support@microshare.io` with the subject "DOCUMENTATION". 

# 2. How it works


Before making a contribution you need to understand how the documentation works.

## A. Documentation Structure

So as you may see on this page the documentation website contains a number of files and folders. 

Here they are shown along with the content associated with each : 

├─ _data/<br>
├───────── docs.yml  -- `Organisation of the sidebar menu and keywords for the search bar`<br>
├─ _includes/   -- `Contains specific elements of the pages used in /_layout/`<br>
├─ _layout/  -- `Contains the different page layouts`<br>
├─ assets/ <br>
├───────── brand/  -- `All the Microshare logos used in the doc`<br>
├───────── css/  -- `The styling files`<br>
├───────── img/  -- `All the images used in the doc`<br>
├───────── js/  -- `Javascript files`<br>
├───────── pdf/<br>
├───────── vendor/-- `External libraries that we use`<br>
├───────── xlsx/<br>
├─ docs/ -- `The content of the documentation website`<br>
├───────── 2/ -- `Version of the documentation`<br>
├────────────────── general/ ...  -- `General Part of the documentation`<br>
├────────────────── admin/ ...  -- `Admin Part of the documentation`<br>
├────────────────── installer/ ...  -- `Installer Part of the documentation`<br>
├────────────────── technical/ ...  -- `Technical Part of the documentation`<br>
├───────── index.md  -- `Home Page`<br>
├───────── 404.md  -- `404 Page`<br>
├─ .DS_Store -- Not to be considered<br>
├─ .gitignore  -- Not to be considered<br>
├─ CNAME  -- Not to be considered<br>
├─ Gemfile  -- Not to be considered<br>
├─ README.md -- `The current file you are reading`<br>
├─ _config.yml -- `Part of the Jekyll configuration`<br>
├─ favicon.ico -- `The website favicon`<br>
├─ index.html -- `Redirection to /docs/2/index.md`<br>
├─ microshare.github.io.iml  -- Not to be considered<br>


As you can see in this tree structure, the content of our pages is in the `docs/2/` folder, the design of the pages is in the `_layout/` folder and this uses the `_includes` folder. The sidebar for and the tree structure of the pages is in the `_data/docs.yml` file. This is basically all we will have to use. And also the `asset/img` folder when we need to add some images. 

## B. How is a page built ?

To create a doc page we will need two things : 

* a template (already existing : /layout/docs.html)
* the content (an .md file in the /docs/2/ folder)

### Where is the page ? : /docs/2/ folder

If you go on the Microshare documentation website, on any page the `url` will be the path to the content file.

For example the Microshare Welcome page under the general menu has this url : 
https://docs.microshare.io/docs/2/general/welcome/

So if you follow the path */docs* + */2* + */general* on github you will see the *welcome.md* content file. 

This is important for understanding how the content files are organised, and will be helpful if you need to add a new page.

So if you need to add a page you simply have to create the content, and the template will automatically use the template, we will explain how later.

Of course it isn't easy to navigate in GitHub to find the right .md file so we added at the right of every pages an `Edit on Github` button to help you find the right github file. 

### How the page works. 

As we said all the content pages are *.md* files. Indeed documentation articles are written in [Markdown](https://en.wikipedia.org/wiki/Markdown). If you aren't at your ease with markdown please take a look at how it works, it's quite simple. 

So basically every article page is split in two : 
* at the top you will find this : 

```
---
layout: docs
title: What's new?
description: Take a look at our latest updates
toc: true
---
```

As we said we use the "docs" layout and this is how we make the link with the layout file. Then the title and description need to be clear and small. 
Finally the toc value needs to stay true.

* then you have the content of your file in markdown.


## C. Page content

If you want to refresh your memory about Markdown here are some details : [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

To write some articles quicker we created some bits of code to accelerate your development.


### Add Images
Use the `_includes/image.html` helper to add images to your content, simply add in your `.md` file:

`{% include image.html url="/assets/img/banner.jpg" description="Banner" %}`

And replace the url with the path to your image (usually in the `/assets/img` folder) and add a description.

If needed, you can set the width of your image with the `width` parameter, for example:

`{% include image.html url="/assets/img/banner.jpg" description="Banner" width="250px" %}`

### Add an Accordion (Mainly for FAQ)
Use the `_includes/accordion.html` helper to add accordion to your content, simply add in your `.md` file:

```
<!-- ********************
**    New Question     **
********************* -->

{% capture title %}
Are my employers tracking my movements at work?
{% endcapture %}

{% capture content %}
<b>No,</b> the Microshare wearable devices are only recording material proximity events, i.e. 2m or within for 5 minutes or more. The badges do not know where employees are within the facility. The wearable devices are the only sensors picking up/recording data.
{% endcapture %}

{% include accordion.html title=title content=content key="wearable_tracking" %}
```

And replace the title content with your question and the content block with the answer.
Finally the *key value needs to be unique*.

### Add Code Snippets
Syntax highlighting of code snippets is supported using [Rouge](http://rouge.jneen.net/).
To include a code snippet, just use the dedicated tag as below:

```
{% highlight http %}
  POST /share/:recType HTTP/1.1
  Host: api.microshare.io
  Content-Type: application/json
  Authorization: Bearer {{token}}
  {
    "hello": "world"
  }
{% endhighlight %}
```

A list of tags and supported languages is available at [List of supported languages and lexers](https://github.com/jneen/rouge/wiki/List-of-supported-languages-and-lexers)


## D. Writing new articles - create new pages

We will now see how to write a new article from scratch.

A Markdown editor is recommended for easiest contribution. Many Markdown editors will provide a WYSIWYG representation so you can ignore the details of Markdown notation.

To add a new article create a file with the top structure as shown just before in the desired folder in the [docs/2](/docs/2) folder.

## E. Add a page to the left sidebar menu

To add a new article to the left sidebar menu head to [_data/docs.yml](_data/docs.yml) and add the title of the article following the structure of the path where the .md file is.


# 3. Contribute


To contribute to this documentation, create a jira ticket for the content you want to add, read the section from Jira to Doc. Follow the tutorial and request a PR. 


## A. Run it locally and add your changes. - strongly technical

You may need https://desktop.github.com/ for a faster way to manage branches. 

Please create your branch to push the changes and then do a PR with your changes.

It is not necessary to run the site locally in order to contribute updates to the documents, but it may be useful for larger contributions.

Clone this repo to your local disk. Open a terminal and cd into the repo directory.

### Prerequisites

[Ruby](https://www.ruby-lang.org/en/) and [Rubygems](https://rubygems.org/) are needed in order to build the web site.

Install [bundler](https://bundler.io/)

    gem install bundler

### Build

In order to build and serve the web site locally, run :

    bundle install
    bundle exec jekyll serve
    
Once Jekyll is running, visit the site at http://localhost:4000

For complete instructions on how to run Jekyll locally, refer to [Jekyll Installation](https://jekyllrb.com/docs/installation/) and [Jekyll Quick Start](https://jekyllrb.com/docs/) documents.
