---
layout: docs
title: Hourly Snapshot Data Format
description: Let's take a look at the Microshare™ Hourly Snapshot data format
toc: true
---

{% include image.html url="/assets/img/thumbnail-8.jpg" height="900" width="900" description="thumbnail 2" %}


<br>

---------------------------------------

##### SUMMARY: 

1. [Overview](./#1-overview)
2. [Microshare hourly snapshot data format](./#2-microshare-hourly-snapshot-data-format)

---------------------------------------

## 1. Overview
---------------------------------------
This page provides an overview of the data structure for the hourly snapshot data format used in the [predictive cleaning](https://www.microshare.io/eversmart-predictive-cleaning/) solution developed by Microshare™. The data is presented using the json format and contains information about the actual hourly metric, expected hourly metric, location data and statistical analysis of data from the same day and hour across the past few weeks.


## 2. Microshare hourly snapshot data format
---------------------------------------
This is an example piece of data. Elements of this data will be explained in the further sections.

```
{
    "current": {
        "avg": 8.8,
        "count": 1,
        "first": 8.8,
        "last": 8.8,
        "max": 8.8,
        "median": 8.8,
        "min": 8.8,
        "range": 0,
        "sum": 8.8
    },
    "meta": {
        "agg": {
            "period": {
                "from": "2024-05-20T23:00:00.000Z",
                "to": "2024-05-21T00:00:00.000Z"
            }
        },
        "date": {
            "firstDate": "2024-05-06T23:00:00.000Z",
            "lastDate": "2024-05-20T23:00:00.000Z"
        },
        "details": {
            "label": "",
            "unit": ""
        },
        "device": [
            "Executive Plaza",
            "2nd Floor",
            "Networking Hub",
            "Desk 79",
            ""
        ],
        "generator": "pipeline",
        "global": [
            "Microshare",
            "demo",
            "solutions",
            "desk"
        ],
        "iot": {
            "time": "2024-05-21T00:00:00.000Z"
        },
        "snapshot": {
            "category": "device",
            "metric": "snr"
        }
    },
    "time": "2024-05-21T00:00:00.000Z"
}
```

### A. Current
---------------------------------------

```
"current": {
    "avg": 8.8,
    "count": 1,
    "first": 8.8,
    "last": 8.8,
    "max": 8.8,
    "median": 8.8,
    "min": 8.8,
    "range": 0,
    "sum": 8.8
}
```

This element specifies the actual metric data detected in a certain location within the current hour.

- **avg**: The average value of the data points.
- **count**: The total number of data points.
- **first**: The first data point in the series.
- **last**: The last data point in the series.
- **max**: The maximum value among the data points.
- **median**: The median value of the data points.
- **min**: The minimum value among the data points.
- **range**: The difference between the maximum and minimum values.
- **sum**: The sum of all the data points.

### B. Meta
---------------------------------------

```
"meta": {
    "agg": {
        "period": {
            "from": "2024-05-20T23:00:00.000Z",
            "to": "2024-05-21T00:00:00.000Z"
        }
    },
    "date": {
        "firstDate": "2024-05-06T23:00:00.000Z",
        "lastDate": "2024-05-20T23:00:00.000Z"
    },
    "details": {
        "label": "",
        "unit": ""
    },
    "device": [
        "Executive Plaza",
        "2nd Floor",
        "Networking Hub",
        "Desk 79",
        ""
    ],
    "generator": "pipeline",
    "global": [
        "Microshare",
        "demo",
        "solutions",
        "desk"
    ],
    "iot": {
        "time": "2024-05-21T00:00:00.000Z"
    },
    "snapshot": {
        "category": "device",
        "metric": "snr"
    }
}
```

This element specifies the miscellaneous meta data related to this specific hour's data.

- **agg.period:** Start and end times for the current hour.
- **date:** Date range over which the expected data is aggregated.
- **device:** Location of the device generating this data.
- **global:** Organisation that owns the device. 
- **iot.time:** Timestamp of the time this data was generated.
- **snapshot:** The category of the device and the type of metric that is calculated. eg: motion, snr, etc.
