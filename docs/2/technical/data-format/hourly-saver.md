---
layout: docs
title: Hourly Saver Data Format
description: Let's take a look at the Microshare™ Hourly Saver data format
toc: true
---

{% include image.html url="/assets/img/thumbnail-8.jpg" height="900" width="900" description="thumbnail 2" %}


<br>

---------------------------------------

##### SUMMARY: 

1. [Overview](./#1-overview)
2. [Microshare hourly saver data format](./#2-microshare-hourly-saver-data-format)

---------------------------------------

## 1. Overview
---------------------------------------
This page provides an overview of the data structure for the hourly saver data format used in the [predictive cleaning](https://www.microshare.io/eversmart-predictive-cleaning/) solution developed by Microshare™. The data is presented using the json format and contains information about the actual hourly motion, expected hourly motion, location data and statistical analysis of data from the same day and hour across the past few weeks.


## 2. Microshare hourly saver data format
---------------------------------------
This is an example piece of data. Elements of this data will be explained in the further sections.

```
{
    "analytics": {
        "coefficientOfVariation": 0.143,
        "relativeRange": 1.414,
        "variation": 0.45,
        "within1Stddev": true,
        "within2Stddev": true,
        "within3Stddev": true,
        "zScore": 0.374
    },
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
    "expected": {
        "avg": 8.35,
        "count": 2,
        "first": 7.5,
        "last": 9.2,
        "max": 9.2,
        "median": 7.5,
        "min": 7.5,
        "range": 1.69,
        "stddev": 1.202,
        "sum": 16.7,
        "variance": 1.445
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

### A. Analytics
---------------------------------------

```
"analytics": {
    "coefficientOfVariation": 0.143,
    "relativeRange": 1.414,
    "variation": 0.45,
    "within1Stddev": true,
    "within2Stddev": true,
    "within3Stddev": true,
    "zScore": 0.374
}
```

This element contains statistical measures for data collected from the same day and hour over the past few weeks.

### B. Current
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

This element specifies the actual motion data detected in a certain location within the current hour.

### C. Expected
---------------------------------------

```
"expected": {
    "avg": 8.35,
    "count": 2,
    "first": 7.5,
    "last": 9.2,
    "max": 9.2,
    "median": 7.5,
    "min": 7.5,
    "range": 1.69,
    "stddev": 1.202,
    "sum": 16.7,
    "variance": 1.445
}
```

This element specifies the expected traffic for the current hour. The expected traffic count is determined by analyzing the observed data from the same hour on the same day over the past few weeks and calculating the relevant statistical measures.

### D. Meta
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

**agg.period:** Specifies the start and end times for the current hour.

**date:** Specifies the date range over which the expected data is aggregated.

**device:** Specifies the location of the device generating this data.

**global:** Organisation that owns the device.

**iot.time:** Timestamp of the time this data was generated.
