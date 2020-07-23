---
layout: docs
title: Overview
description: Let's take a look at the Microshare™ data structure.
toc: true
---

## 1. Intro
---------------------------------------

To best use Microshare® data, it is important to understand how the data is structured,
 especially in regard to the use of views, robots, APIs and the creation of Applications.

As described in the Microshare® Platform Advanced section, data formatting follows data ingestion.B what does this mean in terms of data? 

When the raw data is ingested in Microshare® it is stored in a simple form, while at the same time the unpacked data is stored in the unpacked recType. The new unpacked recType contains much more data according to the Microshare® formalism.

RecTypes are further explored in the [API Collection page](http://localhost:4000/docs/2/technical/api/api-collection/#api-structures).

This guide serves to help you discern the different components of a Microshare® data payload. 


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

In the above example, the information was requested without specification of the number of pages or the amount of data per page.  By default, the number of pages (`totalPages`) is set to 1 and the number of data `perPage` is set to 999. Because the example has only one piece of data, it has `one count and one page`. 

The `source` object represents where the information came from. In this case, the data payload is from the database or `db`.

Please note that if you have access to the `meta` data but not the `obj` data, this is most likely because of a sharing rule. Please revisit your sharing rule to solve this issue. 


#### B) Objs

The `Objs` section of the data stores most of the descriptors of the interaction. `Objs` stores data as an array, hence using more than one entry may be necessary depending on the call.   

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

* `"_id"` and `"id"`

The Id of the data is its unique identifier. It is used by a Microshare® Technician to find a particular piece of data in the datalake.

* `"checksum"`

The checksum is another identifier that Microshare® technicians use to find that peice of data in the datalake.

* `"createDate"`

CreateDate details the time the peice of data was created.

* `"creatorId"`

CreatorId suplies the email address of the creator this piece of data.

* `"desc"`

This object serves to describe the sensor the information comes from. Usually, this object is empty. 

* `"name"`

This object gives the name of the sensor that the information comes from. This field is usually empty. 

* `"recType"`

The recType is the endpoint of a data flow in the data lake, the name underwhich your data is stored. [You can learn more about recTypes here.](/docs/2/technical/api/api-collection/#api-standards)

* `"tstamp"`

This is the timestamp (in milliseconds)in the Unix epoch unit. The Unix epoch (or Unix time or POSIX time or Unix timestamp) is the number of seconds that have elapsed since January 1, 1970 (midnight UTC/GMT), not counting leap seconds (in ISO 8601: 1970-01-01T00:00:00Z). Literally speaking the epoch is Unix time 0 (midnight 1/1/1970), but 'epoch' is often used as a synonym for Unix time. Some systems store epoch dates as a signed 32-bit integer, which might cause problems on January 19, 2038 (known as the Year 2038 problem or Y2038). The converter on this page converts timestamps in seconds (10-digit), milliseconds (13-digit) and microseconds (16-digit) to readable dates.

[https://www.epochconverter.com/](https://www.epochconverter.com/)

Here the value is 1590759984779 so the date is Friday 29 May 2020 13:46:24.779 which is exactly the `createDate` value : "2020-05-29T13:46:24.779Z"

* `"updateDate"`

The `updateDate` gives the time that the data was updated. Here the data has not been updated, so the `updateDate` is the same as the `createDate`

* `"updaterId"`

The `updaterId`notes which account updated the data. Here the data has not been updated, so the `updaterId` is the same as the `creatorId`

##### B.2 Data

```
"data": {
    "Test": "Data"
},
```

This is the most important section of the data as it gives the information on what we have just created. This is where you will find the data that you integrated into Microshare® under that recType. This will be explored later on. 

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

Here you find the origin of the data, who created it, when, and under which recType (`name`).

You will also find even more information about the PIs of the systems that created this data.

The origin can be useful when the data is shared with you as you can easily decipher where it comes from.


##### B.4 Owner

```
"owner": {
    "appid": "B8E2F5B2-969D-4EFF-BD45-B8CFF2F2????",
    "org": "io.microshare",
    "owners": [],
    "user": "yourname@microshare.io"
},
```

The ownership of the data is an essential part of the data, here you will find who owns the data, which account (`user`) and under which identity (`org`). In case there is doubt surrounding the creation of a share rule, this section helps to clarify that the right data is being shared correctly. 

The additional information in the `appid` corresponds to the app-key that is used to create the data. The app- key creates a token or pipe token to securely create the data. 

## 3. Go further
---------------------------------------


Next, you should follow the [Microshare® Standards](/docs/2/technical/data-format/microshare-standards) to dive further into the data ingestion process by device clusters and how to request information using a push action. This guide will describe the components of IoT data packets and IPSO data. 