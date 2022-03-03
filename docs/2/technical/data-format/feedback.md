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
          "count_1": 4,
          "count_2": 58,
          "count_3": 7,
          "count_4": 18,
          "count_5": 99,
          "device": {
            "id": "70-B3-D5-32-60-00-01-00"
          },
          "ipso": {
            "3302": {
              "5500": false,
              "5751": "Hall Effect activated"
            },
            "3347": [
              {
                "5501": 4,
                "5502": false,
                "5527": "Button #1, Upper Left, count of reports since power-on/reset",
                "5750": "Push Button",
                "5853": "Button #1, Upper Left"
              },
              {
                "5501": 58,
                "5502": false,
                "5527": "Button #2, Upper Right, count of reports since power-on/reset",
                "5750": "Push Button",
                "5853": "Button #2, Upper Right"
              },
              {
                "5501": 7,
                "5502": false,
                "5527": "Button #3, Lower Left, count of reports since power-on/reset",
                "5750": "Push Button",
                "5853": "Button #3, Lower Left"
              },
              {
                "5501": 18,
                "5502": false,
                "5527": "Button #4, Lower Right, count of reports since power-on/reset",
                "5750": "Push Button",
                "5853": "Button #4, Lower Right"
              },
              {
                "5501": 99,
                "5502": false,
                "5527": "Button #5, Middle, count of reports since power-on/reset",
                "5750": "Push Button",
                "5853": "Button #5, Middle"
              }
            ],
            "10241": {
              "5905": "skiply.eu",
              "5906": "Smilio Action",
              "5908": "1.2.0.1"
            }
          },
          "meta": {
            "device": [
              "London",
              "1st Floor",
              "Bathroom"
            ],
            "global": [
              "Microshare",
              "Demo",
              "Feedback5B"
            ],
            "iot": {
              "device_id": "70-B3-D5-32-60-00-01-00",
              "iso_time": "2022-01-10T16:55:52.414Z",
              "time": "2022-01-10T16:55:52.414Z"
            },
            "source": []
          },
          "trigger": false,
          "unpacker": {
            "class": "eu.skiply.button.SmilioAction.Decoder",
            "library": "lorawan_device_unpack"
          }
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
            "sum": 99
          },
          "event": "Button #5, Middle",
          "history": {
            "sum": 98
          },
          "meta": {
            "device": [
              "London",
              "1st Floor",
              "Bathroom"
            ],
            "global": [
              "Microshare",
              "Demo",
              "Feedback5B"
            ],
            "iot": {
              "device_id": "70-B3-D5-32-60-00-01-00",
              "iso_time": "2022-01-10T16:55:52.414Z",
              "time": "2022-01-10T16:55:52.414Z"
            },
            "source": []
          },
          "time": "2022-01-10T16:55:52.414Z"
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
        "sum": 99
    },
    "event": "good",
    "history": {
        "sum": 98
    },
    "label": "Great job",
    "meta": {
        "device": [
            "London",
            "1st Floor",
            "Bathroom"
        ],
        "global": [
            "Microshare",
            "Demo",
            "Feedback5B"
        ],
        "iot": {
            "device_id": "70-B3-D5-32-60-00-01-00",
            "iso_time": "2022-01-10T16:55:52.414Z",
            "time": "2022-01-10T16:55:52.414Z"
        },
        "source": []
    },
    "time": "2022-01-10T16:55:52.414Z"
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
            `device_id`: `70-B3-D5-32-60-00-01-00`, which device is it
            `iso_time`: `2022-01-10T16:55:52.414Z`, and when the button have been pushed
            `time`: `2022-01-10T16:55:52.414Z`
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
