---
layout: docs
title: Overview
description: Let's take a look at the Microshare™ data structure.
toc: true
---


---------------------------------------


#### Summary:

1. [Introduction](./#introduction)
2. [First Example](./#first-example)
3. [Go Further](./#go-further)

---------------------------------------


## Introduction
---------------------------------------

To best use Microshare® data, it is important to understand how the data is structured,
 particularly for use of views, robots, APIs and the creation of Applications.

As described in the Microshare® Platform Advanced section, data unpacking follows data ingestion. But what does this mean in terms of data? 

When the raw data is ingested in Microshare® it is stored in a simple form, while at the same time the unpacked data is stored in the unpacked recType. The new unpacked recType contains much more data according to the Microshare® formalism.

RecTypes are further explored in the [API Collection page](http://localhost:4000/docs/2/technical/api/api-collection/#api-structures).

This guide serves to help you discern the different components of a Microshare® data payload. 


## First Example
---------------------------------------

To start with something simple we'll take the piece of data we generated with the API tutorial: [API Simple Requests](/docs/2/technical/api/simple-requests/#2-write-data).


{% highlight javascript %}
{
    "meta": {
        "currentCount": 1,
        "currentPage": 1,
        "perPage": 999,
        "source": "db",
        "totalCount": 1,
        "totalPages": 1
    },
    "objs": [
        {
            "_id": "5ed1123046e0fb0028b70???",
            "checksum": "05B21996343E63CDEF5F8DB6F2D20FB96B61FA60B1E35D900F3875E2822AB12EL15",
            "createDate": "2020-05-29T13:46:24.779Z",
            "creatorId": "yourname@microshare.io",
            "data": {
                "Test": "Data"
            },
            "desc": "",
            "id": "5ed1123046e0fb0028b70???",
            "name": "",
            "origin": {
                "checksum": "05B21996343E63CDEF5F8DB6F2D20FB96B61FA60B1E35D900F3875E2822AB12EL15",
                "createDate": "2020-05-29T13:46:24.779Z",
                "creatorId": "yourname@microshare.io",
                "desc": "Record of Type your.name",
                "id": "5ed1123046e0fb0028b70???",
                "name": "your name",
                "remoteAddress": "your remote address",
                "tokendata": {
                    "id": "006f6b5f-171e-46cf-8f70-c4fa15b6????",
                    "ip": "your ip address"
                }
            },
            "owner": {
                "appid": "B8E2F5B2-969D-4EFF-BD45-B8CFF2F2????",
                "org": "io.microshare",
                "owners": [],
                "user": "yourname@microshare.io"
            },
            "recType": "your.name",
            "tstamp": 1590759984779,
            "updateDate": "2020-05-29T13:46:24.779Z",
            "updaterId": "yourname@microshare.io"
        }
    ]
}
{% endhighlight %}

#### A) Meta

In the above example, the information was requested without specification of the number of pages or the amount of data per page.  By default, the number of pages (`totalPages`) is set to 1 and the number of data `perPage` is set to 999. Because the example has only one piece of data, it has `one count and one page`. 

The `source` object represents where the information came from. In this case, the data payload is from the database or `db`.

Please note that if you have access to the `meta` data but not the `obj` data, this is because you lack the privileges necessary to read it. Your privileges can be adjusted by the creation of a [share Rule](/docs/2/technical/microshare-platform/rules-guide).


#### B) Objs

The `Objs` section of the data stores most of the descriptors of the interaction. `Objs` stores data as an array, hence using more than one entry may be necessary depending on the call.   

##### B.1 Simple values

{% highlight javascript %}
"_id": "5ed1123046e0fb0028b70???",
"checksum": "05B21996343E63CDEF5F8DB6F2D20FB96B61FA60B1E35D900F3875E2822AB12EL15",
"createDate": "2020-05-29T13:46:24.779Z",
"creatorId": "yourname@microshare.io",

"desc": "",
"id": "5ed1123046e0fb0028b70???",
"name": "",

"recType": "your.name",
"tstamp": 1590759984779,
"updateDate": "2020-05-29T13:46:24.779Z",
"updaterId": "yourname@microshare.io"
{% endhighlight %}

* `"_id"` and `"id"`

The Id of the data is its unique identifier. It is used by a Microshare® Technician to find a particular piece of data in the datalake.

* `"checksum"`

The checksum is a cryptographic hash of the data portion of the record. Using the sha-256 hashing algorithm to generate a new hash from the contents of the Data element, a comparison can be made to ensure that the data has not be compromised. A checksum is also included in the Origin section of the JSON structure that captures the data contents when the record was first introduced to the system. By comparing these two checksums, you can prove that the data has not be modified inside the Microshare®  system.

* `"createDate"`

CreateDate is an ISO 8601 date/time stamp in the YYYY-MM-DDThh:mm:ss.sTZD pattern that represents the date/time of the data's introduction to the Microshare®  system.

* `"creatorId"`

CreatorId suplies the email address of the creator this piece of data.

* `"desc"`

This object serves to describe the sensor the information comes from. Usually, this object is empty. 

* `"name"`

This object gives the name of the sensor that the information comes from. This field is usually empty. 

* `"recType"`

The recType is a notation that describes the format of the data. It is used to direct the flow of processing throughout the Smart Network. It is the most important tag used in the storage and retrieval of information in the Microshare® system. recTypes that begin with io.microshare are using a canonical JSON format that is managed by Microshare® . You will find these canonical formats described here. You can learn more about [recTypes here](.//docs/2/technical/api/api-collection/#api-standards).

* `"tstamp"`

This is the timestamp (in milliseconds)in the Unix epoch unit. The Unix epoch (or Unix time or POSIX time or Unix timestamp) is the number of seconds that have elapsed since January 1, 1970 (midnight UTC/GMT), not counting leap seconds (in ISO 8601: 1970-01-01T00:00:00Z). Literally speaking the epoch is Unix time 0 (midnight 1/1/1970), but 'epoch' is often used as a synonym for Unix time. Some systems store epoch dates as a signed 32-bit integer, which might cause problems on January 19, 2038 (known as the Year 2038 problem or Y2038). The converter on this page converts timestamps in seconds (10-digit), milliseconds (13-digit) and microseconds (16-digit) to readable dates.

[https://www.epochconverter.com/](https://www.epochconverter.com/)

Here the value is 1590759984779 so the date is Friday 29 May 2020 13:46:24.779 which is exactly the `createDate` value : "2020-05-29T13:46:24.779Z".

* `"updateDate"`

UpdateDate is an ISO 8601 date/time stamp in the YYYY-MM-DDThh:mm:ss.sTZD pattern that represents the date/time of the data's last update in the Microshare®  system. If the data has not been updated, it will be the same as the createDate.

* `"updaterId"`

The `updaterId`notes which user has last updated the data. If the data has not been updated, the `updaterId` will be the same as the `creatorId`.

##### B.2 Data

{% highlight javascript %}
"data": {
    "Test": "Data"
},
{% endhighlight %}

This section contains the core information as ingested by the Microshare® Smart Network. The format of the data section will vary based on the recType. If the recType begins with io.microshare, then the cannonical format of this section will be documented in this section.

##### B.3 Origin

{% highlight javascript %}
"origin": {
    "checksum": "05B21996343E63CDEF5F8DB6F2D20FB96B61FA60B1E35D900F3875E2822AB12EL15",
    "createDate": "2020-05-29T13:46:24.779Z",
    "creatorId": "yourname@microshare.io",
    "desc": "Record of Type your.name",
    "id": "5ed1123046e0fb0028b70???",
    "name": "your name",
    "remoteAddress": "your remote address",
    "tokendata": {
        "id": "006f6b5f-171e-46cf-8f70-c4fa15b6????",
        "ip": "your ip address"
    }
},
{% endhighlight %}

Here you find the origin of the data, who created it, when, and under which recType (`name`).

You will also find even more information about the PIs of the systems that created this data.

The origin can be useful when the data is shared with you as you can easily decipher where it comes from.


##### B.4 Owner

{% highlight javascript %}
"owner": {
    "appid": "B8E2F5B2-969D-4EFF-BD45-B8CFF2F2????",
    "org": "io.microshare",
    "owners": [],
    "user": "yourname@microshare.io"
},
{% endhighlight %}

The ownership of the data is an essential part of the data, here you will find who owns the data, which account (`user`) and under which identity (`org`). There may be multiple owners for every piece of data. Owners have the ability to create share Rules that grant privileges to other users. 

The additional information in the `appid` corresponds to the app-key that is used to create the data. The app- key creates a token or pipe token to securely create the data. 

## Go further
---------------------------------------


Next, you should follow the [Microshare® Standards](/docs/2/technical/data-format/microshare-standards) to dive further into the data ingestion process by device clusters and how to request information using a push action. This guide will describe the components of IoT data packets and IPSO data. 


{% include image.html url="\assets\img\microshare-logo.png"  description="ms logo" %}