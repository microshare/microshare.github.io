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
This page provides an overview of the data structure for the hourly snapshot data format used in the [predictive cleaning](https://www.microshare.io/eversmart-predictive-cleaning/) solution developed by Microshare™. The data is presented in JSON format and contains hourly aggregated snapshots of a given metric produced by a device.


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
        "date": "2024-05-20T23:00:00.000Z"
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
    "date": "2024-05-20T23:00:00.000Z",
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
This element specifies the miscellaneous meta data related to the current hour's snapshot

- **date:** The date when the snapshot was taken.
- **device:** The location of the device generating this data, specified as an array of strings detailing the building, floor, specific area, and desk number.
- **global:** An array of strings representing the organization that owns the device and other relevant tags.
- **iot.time:** The timestamp indicating when this data was generated.
- **snapshot:** An object containing:
  - **category:** The category of the device (e.g., "device").
  - **metric:** The type of metric that is calculated (e.g., "snr" for signal-to-noise ratio).
