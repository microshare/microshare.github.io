---
layout: docs
title: Feedback Data
description: A page dedicated to breaking down how you receive data 
toc: true
---



#### Summary:
1. [Overview](./#1-overview)
2. [Dataflow](./#2-dataflow)
3. [Business Event](./#3-business-event-data)
5. [Frequently Asked Questions](./#3-frequently-asked-questions)


## 1. Overview
---------------------------------------

**The Microshare Feedback inputs can be through the touchfree app or the feedback device:**
{% include image.html url="\assets\img\feedback\feedback.png" width="800" height="500" description="feedback" %}

This solution is based on 3 stack of data.


<br>
## 2. Dataflow
---------------------------------------

## 1) Unpacked data

The first stack is the raw data send by the phisical device, this one is simply the count for each button of how many times they have been pressed since the device reset. 

RECTYPE : io.microshare.feedback.unpacked

It looks like : 

```
{
  "_warning_": "This data is not real data and is provided solely for demo purposes.",
  "pushes_since_reset": [
      {
          "context_id": "Button #1, Upper Left",
          "value": 237
      },
      {
          "context_id": "Button #2, Upper Right",
          "value": 27
      },
      {
          "context_id": "Button #3, Lower Left",
          "value": 93
      },
      {
          "context_id": "Button #4, Lower Right",
          "value": 47
      },
      {
          "context_id": "Button #5, Middle",
          "value": 781
      }
  ],
  "swipe": [
      {
          "value": false
      }
  ]
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
          "channel": 1,
          "device_id": "70-B3-D5-32-6B-00-08-8E",
          "fcnt_dwn": 0,
          "fcnt_up": 2,
          "fport": 2,
          "freq": 902.5,
          "iso_time": "2023-11-05T01:25:25.673Z",
          "ns_version": "v3.0",
          "payload": "0200ed001b030d005d002f",
          "payload_fmt": 1,
          "rssi": -76,
          "sf": 10,
          "snr": 10.2,
          "time": "2023-11-05T01:25:25.673Z",
          "type": "uplink"
      },
      "source": [],
      "usecase": "SF01"
  },
}
```

This data is not really helpful, you always need 2 pieces of data to understand what happened, what's the real event. 



## 2) Event data


So we transform the previous data into an event, the goal is for any new piece of data to simply output which button have been pressed !

RECTYPE : io.microshare.feedback.unpacked.event

Here is what we get :

```
{
          "change": 1,
          "current": {
            "sum": 781
          },
          "event": "Button #5, Middle",
          "history": {
            "sum": 780
          },
          "meta": {
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
                "channel": 1,
                "device_id": "70-B3-D5-32-6B-00-08-8E",
                "fcnt_dwn": 0,
                "fcnt_up": 2,
                "fport": 2,
                "freq": 902.5,
                "iso_time": "2023-11-05T01:25:25.673Z",
                "ns_version": "v3.0",
                "payload": "0200ed001b030d005d002f",
                "payload_fmt": 1,
                "rssi": -76,
                "sf": 10,
                "snr": 10.2,
                "time": "2023-11-05T01:25:25.673Z",
                "type": "uplink"
            },
            "source": [],
            "usecase": "SF01"
          },
          "time": "2023-11-05T01:25:25.673Z"
        }
```

Now we know which button have been pressed, but we want to know more about this data, without haveing to go back to the device to check what Button 5 means..


## 3) Business event data


We know what button 5, or 1,2,3 ... means, so we will fill the data with this meta information about which business event it is. If it's the staff or a request. And what's the label on the backboard on site. 

RECTYPE : io.microshare.feedback.unpacked.event.meta

```
{
    "button": "Button #5, Middle",
    "change": 1,
    "current": {
        "sum": 781
    },
    "event": "good",
    "history": {
        "sum": 780
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
        "Europe",
        "United Kingdom",
        "London"
      ],
      "iot": {
          "bw": 125,
          "channel": 1,
          "device_id": "70-B3-D5-32-6B-00-08-8E",
          "fcnt_dwn": 0,
          "fcnt_up": 2,
          "fport": 2,
          "freq": 902.5,
          "iso_time": "2023-11-05T01:25:25.673Z",
          "ns_version": "v3.0",
          "payload": "0200ed001b030d005d002f",
          "payload_fmt": 1,
          "rssi": -76,
          "sf": 10,
          "snr": 10.2,
          "time": "2023-11-05T01:25:25.673Z",
          "type": "uplink"
      },
      "source": [],
      "usecase": "SF01"
    },
}
```

This is the data we will use, the data that needs two transformation from the device generation, while using the touchfree microshare app, it directly generate the business event data. 

So here is some explanations on the fields : 



- `button`: represents which button have been pressed

- `current`: represents the number of time this button has been pressed since reset now, while the `history` represent what was the status just before

- `change`: represents the difference between the history and now.

- `event`: represent the business event name identifier, here it's good but it can be (`clean`,`staff`,`leak` ....)

- `label`: represents what the users clicked for (the frontend label)

- `meta.device` : the device location inside the building (building, floor, room name), we can add a 4 tags to define with a better precision

- `meta.global` : global location of the building + usecase tagging. (the global tagging should be more like `Continent`,`Country`,`City`,`SiteName` ....)

- `iot`: {
            `device_id`: `70-B3-D5-32-6B-00-08-8E`, which device is it
            `iso_time`: `2023-11-05T01:25:25.673Z`, and when the button have been pushed
            `time`: `2023-11-05T01:25:25.673Z`
        }


## 5. Frequently Asked Questions
---------------------------------------
<br>
**Question:** What's the list of the possible event names ?

<br>
**Answer:** The event names are configurable, depending on the need it can be different, and the label will follow. 
The most used combination, as seen on our demo accoun is predictive cleaning oriented for the bathrooms : 

- `good` ("label": "Great job")

- `clean` ("label": "Please clean")

- `soap` ("label": "Low soap")

- `paper` ("label": "No paper")

- `leak` ("label": "Leak or water")

- `staff` ("label": "Staff arrival") can only be generated by the cleaning staff with a magnet
<br>


<br>
**Have a question not answered here? Contact `support@microshare.io` for more help.**
