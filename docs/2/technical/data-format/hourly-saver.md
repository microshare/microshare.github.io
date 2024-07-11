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
This page provides an overview of the data structure for the hourly saver data format used in the [predictive cleaning](https://www.microshare.io/eversmart-predictive-cleaning/) solution developed by Microshare™. The data is presented using the json format and contains information about the actual hourly metric, expected hourly metric, location data and statistical analysis of data from the same day and hour across the past few weeks.


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

- **coefficientOfVariation**: The ratio of the standard deviation to the mean, expressed as a percentage. It measures the relative variability of the data points.
- **relativeRange**: The ratio of the range (max - min) to the mean. It provides a normalized measure of the range.
- **variation**: A measure of the dispersion of the data points. It is often used interchangeably with variance but can also refer to other measures of spread.
- **within1Stddev**: Indicates whether the data points fall within one standard deviation of the mean.
- **within2Stddev**: Indicates whether the data points fall within two standard deviations of the mean.
- **within3Stddev**: Indicates whether the data points fall within three standard deviations of the mean.
- **zScore**: The number of standard deviations a data point is from the mean. It is used to identify how unusual a data point is within the distribution.

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

- **avg**: The average value of the data points, calculated as the sum of the data points divided by the count.
- **count**: The total number of data points.
- **first**: The first data point in the series.
- **last**: The last data point in the series.
- **max**: The maximum value among the data points.
- **median**: The middle value of the data points when they are sorted in ascending order. If the count is even, it is the average of the two middle numbers.
- **min**: The minimum value among the data points.
- **range**: The difference between the maximum and minimum values.
- **stddev**: The standard deviation of the data points, which measures the amount of variation or dispersion from the average.
- **sum**: The sum of all the data points.
- **variance**: The variance of the data points, which is the average of the squared differences from the mean. It is a measure of how spread out the data points are.

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

- **agg.period**: Start and end times for the current hour.
- **date**: Date range over which the expected data is aggregated.
- **device**: Location of the device generating this data.
- **global**: Organisation that owns the device. 
- **iot.time**: Timestamp of the time this data was generated.
- **snapshot**: An object containing:
  - **category**: The category of the device (e.g., "device").
  - **metric**: The type of metric that is calculated (e.g., "snr" for signal-to-noise ratio).
