---
layout: docs
title: Rodent Event
description: Let's take a look at the Microshare™ rodent event data structure.
toc: true
---




{% include image.html url="/assets/img/banner-2.jpg" description="thumbnail 2" %}

## Introduction
---------------------------------------

This page provides an overview of the data structure for a motion detection event, specifically for a motion into a rodent trap. The data is presented in JSON format and contains information about the device, event, and metadata related to the device and event. 
 

## 2. Data Fields
---------------------------------------


### Main Fields: Contains information about type of event detected by the device 

**solution:** Name of the solution at microshare (string), the solution is here Eversmart Alert so the name is "alert"

**alert:** The type of alert this data is related to (string). "rodent" for the rodent use cases.

**event:** The type of event detected by the device (string). 

**change:** How many count of event do we get (integer). 

**time:** Iso Time of the event (string). 


### Device: Contains information about the physical end device 

**battery:** Contains information about the device's battery. 

**power:** The current battery power level in percentage (integer). 

**power_label:** The current battery power level as a string with a percentage symbol. 

**voltage:** The current battery voltage (float). 

**voltage_label:** The current battery voltage as a string with a voltage unit (V). 

**count:** The number of events detected by the device (integer). 

**id:** The unique identifier for the device (string). 
 

### Meta: Contains location and network information 

**device:** An array containing information about the device’s location. 

**global:** An array containing information related to the device cluster containing the device. 

**iot:** Contains information about the IoT communication and network. 

**bw:** The bandwidth used by the device (integer). 

**channel:** The communication channel used by the device (integer). 

**device_id:** The unique identifier for the device (string). 

**fcnt_dwn:** The downlink frame counter (integer). 

**fcnt_up:** The uplink frame counter (integer). 

**fport:** The device's communication port (integer). 


## 3. Example
---------------------------------------


{% highlight javascript %}
{
    "alert": "rodent",
    "change": 1,
    "current": {
      "sum": 1
    },
    "device": {
      "battery": {
        "power": 0,
        "power_label": "0%",
        "voltage": 3.6,
        "voltage_label": "3.6V"
      },
      "count": 5740,
      "id": "E8-E1-E1-00-01-AA-AA-AA"
    },
    "event": "rodent_present",
    "history": {
      "sum": 1
    },
    "label": "Rodent Detected: Work Shop",
    "meta": {
      "device": [
        "Mall",
        "Building A",
        "Bakery",
        "Kitchen",
        ""
      ],
      "global": [
        "Europe",
        "London",
        "Paddington",
        "trap"
      ],
      "iot": {
        "bw": 125,
        "channel": 1,
        "device_id": "E8-E1-E1-00-01-AA-AA-AA",
        "fcnt_dwn": 1385,
        "fcnt_up": 13457,
        "fport": 102,
        "freq": 867.3,
        "iso_time": "2023-10-17T10:15:17.952Z",
        "ns_version": "v3.0",
        "payload": "010b3102006c1600",
        "payload_fmt": 1,
        "rssi": -113,
        "sf": 10,
        "snr": -2.2,
        "time": "2023-10-17T10:15:17.952Z",
        "type": "uplink"
      },
      "source": [],
      "usecase": "SC05"
     },
    "solution": "alert",
    "time": "2023-10-17T10:15:17.952Z"
  }
{% endhighlight %}
