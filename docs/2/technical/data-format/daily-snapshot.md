---
layout: docs
title: Daily Snapshot Data Format
description: Let's take a look at the Microshare™ Daily Snapshot data format
toc: true
---

{% include image.html url="/assets/img/thumbnail-8.jpg" height="900" width="900" description="thumbnail 2" %}


<br>

---------------------------------------

##### SUMMARY: 

1. [Overview](./#1-overview)
2. [Daily snapshot data format](./#2-daily-snapshot-data-format)
    - A. [Current](./#a-current)
    - B. [Meta](./#b-meta)

---------------------------------------

## 1. Overview
---------------------------------------
This page provides an overview of the data structure for the daily snapshot data format used in the [predictive cleaning](https://www.microshare.io/eversmart-predictive-cleaning/) solution developed by Microshare™. The data is presented in JSON format and contains daily aggregated snapshots of a given metric produced by a device.

Daily snapshots create day-wise aggregations for collected data of a specific type of metric. This means that data points collected throughout the day are summarized into a single set of metrics for that day. By doing so, it becomes easier to manage and analyze large volumes of data, as the daily aggregation reduces the number of data points that need to be stored and processed. Daily snapshots are particularly useful for long-term monitoring and reporting, providing a clear and concise view of how metrics evolve on a daily basis.

Rectype for daily snapshots: io.microshare.lake.snapshot.daily

## 2. Daily snapshot data format
---------------------------------------
This is an example piece of data. Elements of this data will be explained in the further sections.

```
{
    "current": {
        "avg": 12.75,
        "count": 24,
        "delta": 0,
        "first": 0,
        "last": 0,
        "max": 148,
        "min": 0,
        "range": 148,
        "sum": 306
    },
    "meta": {
        "agg": {
            "period": {
                "day": 1
            }
        },
        "date": {
            "dayOfTheWeek": "6",
            "dayOfTheYear": "274",
            "weekOfTheYear": "40"
        },
        "details": {
            "label": "",
            "unit": "motion"
        },
        "device": [
            "Building A",
            "1st Floor",
            "Room 3",
            "Desk 39"
        ],
        "global": [
            "Microshare",
            "demo",
            "solutions",
            "occupancy"
        ],
        "iot": {
            "time": "2022-10-01T00:00:00.000Z"
        },
        "snapshot": {
            "category": "space",
            "metric": "activity"
        }
    },
    "time": "2022-10-01T00:00:00.000Z"
}
```

### A. Current
---------------------------------------

```
"current": {
    "avg": 12.75,
    "count": 24,
    "delta": 0,
    "first": 0,
    "last": 0,
    "max": 148,
    "min": 0,
    "range": 148,
    "sum": 306
}
```

The `current` object contains statistical metrics for the data collected over the specified period, which is over a day.

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
            "day": 1
        }
    },
    "date": {
        "dayOfTheWeek": "6",
        "dayOfTheYear": "274",
        "weekOfTheYear": "40"
    },
    "details": {
        "label": "",
        "unit": "motion"
    },
    "device": [
        "Building A",
        "1st Floor",
        "Room 3",
        "Desk 39"
    ],
    "global": [
        "Microshare",
        "demo",
        "solutions",
        "occupancy"
    ],
    "iot": {
        "time": "2022-10-01T00:00:00.000Z"
    },
    "snapshot": {
        "category": "space",
        "metric": "activity"
    }
}
```

### Meta Object Explanation

The `meta` object contains metadata about the daily snapshot. This metadata provides essential context for understanding the source, timing, and nature of the data collected.

- **agg**: This object contains information about the aggregation period.
  - **period**: Specifies the time period over which the data is aggregated.
    - **day**: The value `1` indicates that the data is aggregated on a daily basis.

- **date**: This object provides details about the date of the snapshot.
  - **dayOfTheWeek**: The day of the week when the snapshot was taken.
  - **dayOfTheYear**: The day of the year when the snapshot was taken.
  - **weekOfTheYear**: The week of the year when the snapshot was taken.

- **details**: This object contains additional details about the snapshot.
  - **label**: A label for the snapshot, which is currently empty.
  - **unit**: The unit of measurement for the metric.

- **device**: An array specifying the location of the device generating the data.

- **global**: An array of strings representing tags and identifiers related to the device and its environment.

- **iot**: This object contains the timestamp of the snapshot.
  - **time**: The timestamp indicating when the data was generated, in ISO 8601 format.

- **snapshot**: This object provides details about the snapshot category and metric.
  - **category**: The category of the device.
  - **metric**: The type of metric being measured.
