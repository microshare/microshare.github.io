---
layout: docs
title: Quick Start
description: Quickly get started with Microshare
group: getting-started
redirect_from: "/getting-started/"
toc: true
---

## Management Console
The management console is available [here](https://msaf.microshare.io).
It is a great tool to share and manipulate your data.

In this _Getting Started_ section we will go through each of the different things you can create on that console. For more detailed information you can access the detailed documentation via the menu on the left.

## Uploading Data
Our `/share` API allows you to upload your data to our data lake.
Example of a POST /share call to upload one piece of data:
{% highlight http %}
POST /share/:recType HTTP/1.1
Host: api01.microshare.io
Content-Type: application/json
Authorization: Bearer {{token}}
{
  "hello": "world"
}
{% endhighlight %}

To each piece of data is associated a `recType` field, which is a record type. `recType` are for example `io.microshare.sensortype.temperature`, and are usually associated with an organization.

A full documentation of the API is available [here](https://msaf.microshare.io/resources/api-ms#folder-shares)

## Sharing Data
Once you have some data in the data lake, you may want to share it with specific users or members of an organization.

Creating **Rules** is what you need. When creating a rule, from the management console, you specify to which `recType` the rule will be associated with, and a set of operations to which the rule will apply.
These operations include:
- Read
- Query
- Write
- Delete
- Execute
- Policy


## Robots
