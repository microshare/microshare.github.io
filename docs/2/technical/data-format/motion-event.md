---
layout: docs
title: Rodent Event
description: Let's take a look at the Microshare™ rodent event data structure.
toc: true
---




{% include image.html url="/assets/img/banner-2.jpg" description="thumbnail 2" %}

## Introduction
---------------------------------------

This page provides an overview of the data structure for a motion sensor event. This sensor is specifically used for motion/traffic (through a door) monitoring and also occupancy monitoring (inside a room). The data is presented in JSON format and contains information about the device, event, and metadata related to the device and event. 

Rectype: io.microshare.motion.unpacked.event or io.microshare.occupancy.unpacked.event

## 2. Data Fields
---------------------------------------

### Main Fields: Contains information about type of event detected by the device 

**elapsed.minutes:** Represent the time elapsed between the previous event and the current one (integer).

**motion.value:** Represent the number of motions detected between the previous event and the current one (integer).

**motion.hourly_rate:** From the time elapsed and the number of motions detected we calculate the hourly_rate of this event (long).

**presence.change:** Information about the presence detected by the sensor, indicate if it changed (boolean).

**presence.state_time.false:** Duration for which the state no presence lasted (minutes - integer).

**presence.state_time.true:** Duration for which the state no presence lasted (minutes - integer).

**presence.value:** The current state of presence. False indicates that no presence is currently detected (boolean).

**time**: The timestamp of this event data (string).

### Device: Contains information about the physical end device 

**connection_restart:** Indicates whether the device restarted its connection. In this case, it's false, so the device has not restarted (boolean).

**last_record:** The timestamp of the last record the device registered (string).

**missing_records:** Indicates the number of missing records. In this case, there are none (integer).

**id:** The unique identifier for the device (string). 
 

### Meta: Contains location and network information 

**device:** An array containing information about the device’s location. 

**global:** An array containing information related to the device cluster containing the device. 

**iot.time:** Contain the time the sensor captured and send the event. 



## 3. Example
---------------------------------------


{% highlight javascript %}
{
    "device": {
      "connection_restart": false,
      "id": "E8-E1-E1-00-01-AA-AA-AA",
      "last_record": "2023-10-17T13:54:07.493Z",
      "missing_records": 0
    },
    "elapsed": {
      "minutes": 60
    },
    "meta": {
      "device": [
        "Building A",
        "1st Floor",
        "Room C",
        "Door 4",
        ""
      ],
      "global": [
        "traffic",
        "Europe", 
        "London",
        "motion"
      ],
      "iot": {
        "iso_time": "2023-10-17T14:54:08.004Z",
        "time": "2023-10-17T14:54:08.004Z"
      },
      "source": [],
      "usecase": "SC05"
    },
    "motion": {
      "hourly_rate": 0,
      "value": 0
    },
    "presence": {
      "change": false,
      "state_time": {
        "false": {
          "minutes": 60
        },
        "true": {
          "minutes": 0
        }
      },
      "value": false
    },
    "time": "2023-10-17T14:54:08.004Z"
  }
{% endhighlight %}
