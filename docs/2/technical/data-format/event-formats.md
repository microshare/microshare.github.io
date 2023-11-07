---
layout: docs
title: Event Formats
description: Let's take a look at the Microshare™ event data structure.
toc: true
---




{% include image.html url="/assets/img/banner-2.jpg" description="thumbnail 2" %}

## 1. Microshare event format
---------------------------------------

For many use-cases, Microshare will provide an additional interpretation stage in the pipeline to transform telematics in the unpacked format into a format that is in-line with the majority of analytic expectations. An example of this is many devices report activity as an incrementing count in the unpacked data. The pipeline will track subsequent records and produce the subtracted values (the delta) in the form of an event record.


## 2. Microshare Feedback event data example
---------------------------------------


```
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
            "_id": "651ac581c280e00aef5407dd",
            "checksum": "1FA94476E4CAA524F2622E41805A0484AD03D4DCA50FB0C0BC6B8933441E6445L650",
            "createDate": "2023-10-02T13:28:33.029Z",
            "creatorId": "yourname@microshare.io",
            "data": {
                "button": "Button #1, Upper Left",
                "change": 1,
                "current": {
                    "sum": 221
                },
                "event": "soap",
                "history": {
                    "sum": 220
                },
                "label": "Low Soap",
                "meta": {
                    "backboard": "5ea0488146e0fb002a074145",
                    "device": [
                      "Building 1",
                      "1st Floor",
                      "Men-West",
                      "Men"
                    ],
                    "global": [
                      "Europe",
                      "United Kingdom",
                      "London"
                    ],
                    "iot": {
                        "bw": 125,
                        "channel": 7,
                        "device_id": "70-B3-D5-32-6B-00-08-8E",
                        "fcnt_dwn": 0,
                        "fcnt_up": 6,
                        "fport": 2,
                        "freq": 903.7,
                        "iso_time": "2023-10-02T13:28:32.556Z",
                        "ns_version": "v3.0",
                        "payload": "0200dd001a02f2005a002f",
                        "payload_fmt": 1,
                        "rssi": -79,
                        "sf": 10,
                        "snr": 9.5,
                        "time": "2023-10-02T13:28:32.556Z",
                        "type": "uplink"
                    },
                    "source": [],
                    "usecase": "SF01"
                },
                "time": "2023-10-02T13:28:32.556Z"
            },
            "desc": "",
            "id": "651ac581c280e00aef5407dd",
            "name": "",
            "origin": {
                "checksum": "1FA94476E4CAA524F2622E41805A0484AD03D4DCA50FB0C0BC6B8933441E6445L650",
                "createDate": "2023-10-02T13:28:33.029Z",
                "creatorId": "yourname@microshare.io",
                "desc": "Record of Type io.microshare.feedback.unpacked.event.meta",
                "id": "651ac581c280e00aef5407dd",
                "name": "io.microshare.feedback.unpacked.event.meta",
                "remoteAddress": "172.172.172.35",
                "tokendata": {
                    "id": "58fb08bc-5b6f-4607-9606-8f8a821a0477",
                    "ip": "172.172.172.114"
                }
            },
            "owner": {
                "appid": "51C54CDB-D278-4CFD-B8378EF13462E5FB",
                "org": "io.microshare",
                "owners": [],
                "user": "yourname@microshare.io"
            },
            "recType": "io.microshare.feedback.unpacked.event.meta",
            "tags": [
              "Europe",
              "United Kingdom",
              "London",
              "Building 1",
              "1st Floor",
              "Men-West",
              "Men"
            ],
            "tstamp": 1696253313029,
            "updateDate": "2023-10-02T13:28:33.029Z",
            "updaterId": "yourname@microshare.io"
        }
    ]
}

```

## 3. Microshare Motion event data example
---------------------------------------


```
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
            "_id": "651ac581c280e00aef5407dd",
            "checksum": "1FA94476E4CAA524F2622E41805A0484AD03D4DCA50FB0C0BC6B8933441E6445L650",
            "createDate": "2023-11-01T13:40:19.984Z",
            "creatorId": "yourname@microshare.io",
            "data": {
                "device": {
                    "connection_restart": false,
                    "id": "E8-E1-E1-00-01-08-2F-CA",
                    "last_record": "2023-11-01T13:27:19.344Z",
                    "missing_records": 1
                },
                "elapsed": {
                    "minutes": 13
                },
                "motion": {
                    "hourly_rate": 32,
                    "value": 7
                },
                "presence": {
                    "change": true,
                    "state_time": {
                        "false": {
                            "minutes": 5
                        },
                        "true": {
                            "minutes": 8
                        }
                    },
                    "value": false
                },
                
                "meta": {
                    "backboard": "5ea0488146e0fb002a074145",
                    "device": [
                      "Building 1",
                      "1st Floor",
                      "Men-West",
                      "Men"
                    ],
                    "global": [
                      "Europe",
                      "United Kingdom",
                      "London"
                    ],
                    "iot": {
                        "bw": 125,
                        "channel": 7,
                        "device_id": "70-B3-D5-32-6B-00-08-8E",
                        "fcnt_dwn": 0,
                        "fcnt_up": 6,
                        "fport": 2,
                        "freq": 903.7,
                        "iso_time": "2023-11-01T13:40:19.247Z",
                        "ns_version": "v3.0",
                        "payload": "000b370500bd460a",
                        "payload_fmt": 1,
                        "rssi": -79,
                        "sf": 10,
                        "snr": 9.5,
                        "time": "2023-10-02T13:28:32.556Z",
                        "type": "uplink"
                    },
                    "source": [],
                    "usecase": "SC03"
                },
                "time": "2023-11-01T13:40:19.247Z"
            },
            "desc": "",
            "id": "651ac581c280e00aef5407dd",
            "name": "",
            "origin": {
                "checksum": "1FA94476E4CAA524F2622E41805A0484AD03D4DCA50FB0C0BC6B8933441E6445L650",
                "createDate": "2023-11-01T13:40:19.984Z",
                "creatorId": "yourname@microshare.io",
                "desc": "Record of Type io.microshare.motion.unpacked.event",
                "id": "651ac581c280e00aef5407dd",
                "name": "io.microshare.motion.unpacked.event",
                "remoteAddress": "172.172.172.35",
                "tokendata": {
                    "id": "58fb08bc-5b6f-4607-9606-8f8a821a0477",
                    "ip": "172.172.172.114"
                }
            },
            "owner": {
                "appid": "51C54CDB-D278-4CFD-B8378EF13462E5FB",
                "org": "io.microshare",
                "owners": [],
                "user": "yourname@microshare.io"
            },
            "recType": "io.microshare.feedback.unpacked.event.meta",
            "tags": [
              "Europe",
              "United Kingdom",
              "London",
              "Building 1",
              "1st Floor",
              "Men-West",
              "Men"
            ],
            "tstamp": 1696253313029,
            "updateDate": "2023-10-02T13:28:33.029Z",
            "updaterId": "yourname@microshare.io"
        }
    ]
}
```