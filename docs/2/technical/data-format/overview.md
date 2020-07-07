---
layout: docs
title: Overview
description: Let's take a look at the Microshare™ data structure.
toc: true
---

## 1. Intro
---------------------------------------

To best use Microshare® data, it is necessary to understand how the data is structured. 
This is especially important in the use of views / robots, but also for the creation of Applications.

Finally, this is essential for the use of APIs.

As described in the Microshare® Platform Advanced section, data formatting follows data ingestion if the data is configured in this way. 

What does this mean in terms of data? 

This means that when the raw data is ingested in Microshare® it is stored in a simple form, while at the same time the unpacked data is stored in the unpacked recType. The new unpacked recType contains much more data according to the Microshare® formalism.

There is a lot of data and this part is intended to help you understand.


## 2. First Example
---------------------------------------

To start with something simple we'll take the piece of data we generated with the API tutorial: [API Simple Requests](/docs/2/technical/api/simple-requests/#2-write-data).


```
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
```

#### A) Meta

First of all there is the `meta` part which gives information about the API request itself.

Indeed, in the parameters of my request, I had simply asked to have the details without indicating the number of pages of data and data per page. 
Automatically the number of pages (`totalPage`) is set to its default value of 1 and the number of data `perPage` defaults to 999.
Out here I only have one piece of data, so I only have `one count and one page`. 

Finally the `source` is the database, hence the value `db`.

This is a quick summary of the data in `objs`. It's possible that you sometimes have the meta information without having access to all the data in `objs`. This may be due to sharing rules that don't give you access or that you use the wrong identity... so be careful.

#### B) Objs

Now let's look at the data, this one is very simple to start with.

Here we will see one by one the different components, starting with the unique values and then we will take a closer look at the data, origin and owner blocks.

##### B.1 Simple values

```
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
```

* `"_id"`

The Id of the data is its unique identifier. It is used by a Microshare® Technician to find a particular piece of data in the datalake.

* `"checksum"`

The checksum is another identifier also for other needs for Microshare®.

* `"createDate"`

CreateDate as its name indicates quite well when this piece of data was created.

* `"creatorId"`

CreatorId indicates who created this piece of data, you will find here the email of the account that created this data.

* `"desc"`

This value is usually empty, so you can ignore it when it is empty.

* `"id"`

This value is exactly the same as `"_id"`

* `"name"`

This value is usually empty, so you can ignore it when it is empty.

* `"recType"`

If you are on this page it's because you have started to manipulate the Microshare® APIs and in this case you are familiar with the notion of recType, as a quick reminder the recType is the endpoint of a data flow in the data lake.

* `"tstamp"`

This is the timestamp (in milliseconds), here is more information and a site to test this: 

The Unix epoch (or Unix time or POSIX time or Unix timestamp) is the number of seconds that have elapsed since January 1, 1970 (midnight UTC/GMT), not counting leap seconds (in ISO 8601: 1970-01-01T00:00:00Z). Literally speaking the epoch is Unix time 0 (midnight 1/1/1970), but 'epoch' is often used as a synonym for Unix time. Some systems store epoch dates as a signed 32-bit integer, which might cause problems on January 19, 2038 (known as the Year 2038 problem or Y2038). The converter on this page converts timestamps in seconds (10-digit), milliseconds (13-digit) and microseconds (16-digit) to readable dates.

[https://www.epochconverter.com/](https://www.epochconverter.com/)

Here the value is 1590759984779 so the date is Friday 29 May 2020 13:46:24.779 which is exactly the `createDate` value : "2020-05-29T13:46:24.779Z"

* `"updateDate"`

Here the data has not been updated, so the `updateDate` is the same as the `createDate`

* `"updaterId"`

Here the data has not been updated, so the `updaterId` is the same as the `creatorId`

##### B.2 Data

```
"data": {
    "Test": "Data"
},
```

 The information here is simply what we have just created. This is where you will find all the data that you integrate into Microshare® but we will see that later.

##### B.3 Origin

```
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
```

Here you find the origin of the data, who created it, when, under which recType (`name`).

You will also find even more information about the PIs of the systems that created this data.

The origin can be interesting when the data is shared with you to understand where it comes from.


##### B.4 Owner

```
"owner": {
    "appid": "B8E2F5B2-969D-4EFF-BD45-B8CFF2F2????",
    "org": "io.microshare",
    "owners": [],
    "user": "yourname@microshare.io"
},
```

The ownership of the data is an essential part of the data, here you will find who owns the data, which account (`user`) and under which identity (`org`). So in case of doubt for the creation of a share rule these data are essential to share from the right place the right data. 

The additional information in the `appid` corresponds to the app-key that is used to create the data. 
Thus has the creation of a token or pipe token to create data, these are made from an app-key, which will be found here.

## 3. Go further
---------------------------------------


To go further, we will use the principle of data ingestion by device clusters, and different pushes. 

This will allow us to see much more complete data using the [Microshare® Standards](/docs/2/technical/data-format/microshare-standards).

And we will also explain what the [IoT data](/docs/2/technical/data-format/microshare-standards) is when you go through the Microshare® devices clusters as well as [Ipso data](/docs/2/technical/data-format/microshare-standards).