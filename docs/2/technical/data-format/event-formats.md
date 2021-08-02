---
layout: docs
title: Microshare™ Events
description: Let's take a look at the Microshare™ event data structure.
toc: true
---




{% include image.html url="/assets/img/banner-2.jpg" description="thumbnail 2" %}

## 1. Microshare event format
---------------------------------------

For many use-cases, Microshare will provide an additional interpretation stage in the pipeline to transform telematics in the unpacked format into a format that is in-line with the majority of analytic expectations. An example of this is many devices report activity as an incrementing count in the unpacked data. The pipeline will track subsequent records and produce the subtracted values (the delta) in the form of an event record.


## 2. Microshare event data example
---------------------------------------


{% highlight javascript %}
{
  "meta": {
    "currentCount": 337,
    "currentPage": 1,
    "perPage": 1000,
    "source": "db",
    "totalCount": 1000,
    "totalPages": 1
  },
  "objs": [
    {
      "_id": "5ed1123046e0fb0028b70???",
      "checksum": "09BE84FF7E4E9CF6E4777C9900EDCDE0C0397956F251C8BCF08A5226A387FFA1L1521",
      "createDate": "2021-08-02T15:23:33.78Z",
      "creatorId": "yourname@microshare.io",
      "data": {
        "button": "Button #5, Middle",
        "change": 1,
        "current": {
          "sum": 833
        },
        "event": "good",
        "history": {
          "sum": 632
        },
        "label": "Great job",
        "meta": {
          "device": [
            "Building 1",
            "1st Floor",
            "Men-West",
            "Men"
          ],
          "global": [
            "bathroom"
          ],
          "iot": {
            "device_id": "54-B3-E4-32-7B-22-01-EE",
            "fcnt_dwn": 0,
            "fcnt_up": 3,
            "fport": 2,
            "iso_time": "2021-08-02T15:23:33.780Z",
            "ns_version": "v3.0",
            "payload": "02001800020341001a0007",
            "payload_fmt": 1,
            "time": "2021-08-02T15:23:33.78Z",
            "type": "uplink"
          },
          "source": []
        },
        "time": "2021-08-02T15:23:33.78Z"
      },
      "desc": "",
      "id": "5ed1123046e0fb0028b70???",
      "name": "",
      "origin": {
        "checksum": "09BE84FF7E4E9CF6E4777C9900EDCDE0C0397956F251C8BCF08A5226A387FFA1L1521",
        "createDate": "2021-08-02T15:23:33.78Z",
        "creatorId": "yourname@microshare.io",
        "desc": "Record of Type io.microshare.yourenvironment.unpacked",
        "id": "5ed1123046e0fb0028b70???",
        "name": "io.microshare.yourenvironment.unpacked",
        "remoteAddress": "your remote address",
        "tokendata": {
          "id": "006f6b5f-171e-46cf-8f70-c4fa15b6????",
          "ip": "your ip address"
        }
      },
      "owner": {
        "appid": "B8E2F5B2-969D-4EFF-BD45-B8CFF2F2????",
        "meta": {},
        "org": "io.microshare",
        "owners": [],
        "user": "yourname@microshare.io"
      },
      "recType": "io.microshare.yourenvironment.unpacked",
      "tags": [
        "Europe",
        "United Kingdom",
        "London",
        "5 Merchant Square",
        "your environment",
        "London Office",
        "1st Floor",
        "Office 3"
      ],
      "tstamp": 1592387288980,
      "updateDate": "2021-08-02T15:23:33.78Z",
      "updaterId": "yourname@microshare.io"
    }
    ]
}

{% endhighlight %}

