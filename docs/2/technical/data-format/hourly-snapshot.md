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
2. [Hourly snapshot data format](./#2-hourly-snapshot-data-format)
    - A. [Current](./#a-current)
    - B. [Meta](./#b-meta)

---------------------------------------

## 1. Overview
---------------------------------------
This page provides an overview of the data structure for the hourly snapshot data format used in the [predictive cleaning](https://www.microshare.io/eversmart-predictive-cleaning/) solution developed by Microshare™. The data is presented in JSON format and contains hourly aggregated snapshots of a given metric produced by a device.

Hourly snapshots aggregate data collected over each hour, summarizing it into hourly metrics. This method helps manage and reduce the volume of data, making storage and processing more efficient compared to daily snapshots. By condensing data into hourly intervals, the number of raw data points is significantly reduced, which facilitates more efficient querying and analysis. This approach not only enhances data management but also allows for quicker and more detailed insights into hourly trends and patterns. Consequently, it becomes easier to monitor and respond to changes in the data on an hourly basis, providing a more granular view of the metrics being tracked.

Rectype for hourly snapshots: io.microshare.lake.snapshot.hourly

## 2. Hourly snapshot data format
---------------------------------------
This is an example piece of data. Elements of this data will be explained in the further sections.

```
{
    "current": {
        "avg": 7,
        "count": 1,
        "delta": 0,
        "first": 7,
        "last": 7,
        "max": 7,
        "min": 7,
        "range": 0,
        "sum": 7
    },
    "meta": {
        "agg": {
            "period": {
                "hour": 1
            }
        },
        "date": {
            "dayOfTheWeek": "1",
            "dayOfTheYear": "113",
            "weekOfTheYear": "17"
        },
        "details": {
            "label": "",
            "unit": ""
        },
        "device": [
            "Dinard",
            "1st Floor",
            "Bedroom 1",
            ""
        ],
        "global": [
            "escaldes",
            "dinard",
            "environment",
            "tbhv100",
            "iaq"
        ],
        "iot": {
            "time": "2024-04-22T00:00:00.000Z"
        },
        "snapshot": {
            "category": "device",
            "metric": "sf"
        }
    },
    "time": "2024-04-22T00:00:00.000Z"
}
```

### A. Current
---------------------------------------

```
"current": {
    "avg": 7,
    "count": 1,
    "delta": 0,
    "first": 7,
    "last": 7,
    "max": 7,
    "min": 7,
    "range": 0,
    "sum": 7
}
```

This element specifies the actual metric data detected in a certain location within the current hour.

- **avg**: The average value of the data points.
- **count**: The total number of data points.
- **delta**: The change in value from the previous data point.
- **first**: The first data point in the series.
- **last**: The last data point in the series.
- **max**: The maximum value among the data points.
- **min**: The minimum value among the data points.
- **range**: The difference between the maximum and minimum values.
- **sum**: The sum of all the data points.

### B. Meta
---------------------------------------

```
"meta": {
    "agg": {
        "period": {
            "hour": 1
        }
    },
    "date": {
        "dayOfTheWeek": "1",
        "dayOfTheYear": "113",
        "weekOfTheYear": "17"
    },
    "details": {
        "label": "",
        "unit": ""
    },
    "device": [
        "Dinard",
        "1st Floor",
        "Bedroom 1",
        ""
    ],
    "global": [
        "escaldes",
        "dinard",
        "environment",
        "tbhv100",
        "iaq"
    ],
    "iot": {
        "time": "2024-04-22T00:00:00.000Z"
    },
    "snapshot": {
        "category": "device",
        "metric": "sf"
    }
}
```
The `meta` object contains metadata about the hourly snapshot. This metadata provides essential context for understanding the source, timing, and nature of the data collected.

- **agg**: This object contains information about the aggregation period.
  - **period**: Specifies the time period over which the data is aggregated.
    - **hour**: The value `1` indicates that the data is aggregated on an hourly basis.

- **date**: This object provides details about the date of the snapshot.
  - **dayOfTheWeek**: The day of the week when the snapshot was taken.
  - **dayOfTheYear**: The day of the year when the snapshot was taken.
  - **weekOfTheYear**: The week of the year when the snapshot was taken.

- **details**: This object contains additional details about the snapshot.
  - **label**: A label for the snapshot.
  - **unit**: The unit of measurement for the metric.

- **device**: An array specifying the location of the device generating the data.

- **global**: An array of strings representing tags and identifiers related to the device and its environment.

- **iot**: This object contains the timestamp of the snapshot.
  - **time**: The timestamp indicating when the data was generated, in ISO 8601 format.

- **snapshot**: This object provides details about the snapshot category and metric.
  - **category**: The category of the device.
  - **metric**: The type of metric being measured (e.g.`"sf"` for, signal frequency).
