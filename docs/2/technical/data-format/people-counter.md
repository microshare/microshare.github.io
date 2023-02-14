---
layout: docs
title: People Counter Data
description: The stages of data for the IMBuildings People Counter device 
toc: true
---



#### Summary:
1. [Overview](./#1-overview)
2. [Unpacked](./#2-unpacked-data)
3. [Doorway Level Data](./#3-doorway-level-data)
4. [Room Level Data](./#3-room-level-data)


## 1. Overview
---------------------------------------


The IMBuildings people counter measures the number of people passing between its two components.  This device is most commonly installed across a doorway or passageway and can be used to count the people entering and leaving a room.

---------------------------------------

## 1) Unpacked Data

The first stage is the telematic data sent by the physical device.  Beyond the standard meta-data that accompanies each telematic record produced by Microshare (such as twinning information in meta.device and meta.global, etc), the device specific data includes 
- **count_since_transmit** - a count of how many people have passed through the people counter *in each direction* since the last transmission
- **count_since_reset** - how many people have passed through the people counter *in each direction* since the last time the device was reset. 
- **device.fault** and **device.alert** the faults and/or alerts reported by the device
- the battery voltage on the device


RECTYPE : io.microshare.peoplecounter.unpacked

Example data:

```
{
  "_warning_": "This data is not real data and is provided solely for demo purposes.",
  "count_since_reset": [
    {
      "context_id": "A",
      "value": 2565
    },
    {
      "context_id": "B",
      "value": 2672
    }
  ],
  "count_since_transmit": [
    {
      "context_id": "A",
      "value": 0
    },
    {
      "context_id": "B",
      "value": 0
    }
  ],
  "device": {
    "alert": [
      {
        "context_id": "Placed_battery_not_full",
        "value": false
      },
      {
        "context_id": "Receiver_low_battery",
        "value": false
      },
      {
        "context_id": "Reconnect",
        "value": false
      },
      {
        "context_id": "Settings_changed",
        "value": false
      }
    ],
    "fault": [
      {
        "context_id": "IR_signal_not_at_full_strength",
        "value": false
      },
      {
        "context_id": "Infrared_blocked",
        "value": false
      },
      {
        "context_id": "Receiver_detected_disturbance_on_the_sensor",
        "value": false
      }
    ],
    "voltage": [
      {
        "unit": "V",
        "value": 2.6
      }
    ]
  },
	"meta": {
    "device": [
      "Building A",
      "4th Floor",
      "Room 71",
      "Doorway A"
    ],
    "global": [
      "Microshare",
      "demo",
      "solutions",
      "people"
    ],
    "reset_hour": 0,
    "timezone": "Europe/London"
  }
}

```

At this stage in the data, we do not know which direction is which, that is, we don't know whether the first element (context_id: A) counts the people entering the room or leaving the room.  


## 2) Doorway Level Data

In this stage, we assign a direction to the data and count how many people *entered* and how many *left*.  We also track daily totals for how many people entered or left via this doorway *today* to produce an estimate of how many people might be in a room *right now* (at least according to this single doorway).  Using the daily total to estimate the current people count in the room helps limit the data "drift" as any inaccuracies that occur in one day's data do not carry over into the next day.

Note that the daily totals are reset at a configurable reset time, which is defaulted to midnight local time.

The doorway level data includes:
- change
	- **in** - how many people were counted as entering the doorway since the last report
	- **out** - how many people were counted as exiting the doorway since the last report
	- **traffic** - the sum of *in* and *out* since the last report
	- **count** - the diff of *in* minus *out* - how many more people entered a space via this doorway than exited it since the last report
	- **alerts** - how many alerts the device reported in this payload
	- **faults** - how many faults the device reported in this payload
- daily_total
	- **in** how many people were counted as entering the doorway *today* 
	- **out** how many people were counted as exiting the doorway *today*  
	- **traffic** the sum of *in* and *out*   
	- **count** the diff of *in* minus *out* - how many more people entered a space via this doorway than exited it *today*
	- **alerts** - how many alerts the device reported *today* 
	- **faults** - how many faults the device reported *today* 
- device
	- **fault** - the specific faults reported by the device in this payload
	- **alert** - the specific alerts reported by the device in this payload
	- **voltage** - battery voltage on the device


RECTYPE : io.microshare.peoplecounter.unpacked.event

Example data:

```
{
  "_warning_": "This data is not real data and is provided solely for demo purposes.",
  "change": {
		"alerts": 0,
		"count": 0,
		"faults": 0,
		"in": 0,
		"missing_records": 0,
		"out": 0,
		"source_record": "63ebd48af0849a56c66c7e3d",
		"traffic": 0
  },
  "daily_total": {
		"alerts": 0,
    "count": 10,
    "date": "2023-02-14",
    "day_of_the_week": 2,
		"faults": 0,
    "hour": 13,
    "in": 38,
    "missing_records": 2,
    "out": 28,
    "raw_count": 10,
    "reset_time": "2023-02-14T00:00:00.000Z",
    "start_of_total": false,
    "timezone": "Europe/London",
    "traffic": 66
  },
  "device": {
    "alert": [
      {
        "context_id": "Placed_battery_not_full",
        "value": false
      },
      {
        "context_id": "Receiver_low_battery",
        "value": false
      },
      {
        "context_id": "Reconnect",
        "value": false
      },
      {
        "context_id": "Settings_changed",
        "value": false
      }
    ],
    "fault": [
      {
        "context_id": "IR_signal_not_at_full_strength",
        "value": false
      },
      {
        "context_id": "Infrared_blocked",
        "value": false
      },
      {
        "context_id": "Receiver_detected_disturbance_on_the_sensor",
        "value": false
      }
    ],
    "voltage": [
      {
        "unit": "V",
        "value": 2.6
      }
    ]
  },
  "event": "people_counter",
  "meta": {
    "device": [
      "Building A",
      "4th Floor",
      "Room 71",
      "Doorway A"
    ],
    "global": [
      "Microshare",
      "demo",
      "solutions",
      "people"
    ],
    "reset_hour": 0,
    "timezone": "Europe/London"
  },
  "time": "2023-02-14T13:46:34.381Z"
}
```

Now we have a sense of how busy this doorway has been.  If the site is composed entirely of single doorway rooms, then this data is fully functional.


## 3) Room Level Data

At this stage, we aggregate the data across all doorways to produce room level data.  By default this is done via aggregating the latest reading from each device that was identical across the first three location tags.  If the tags are identical to the 3rd level, then they are treated as doorways of the same room.  In this stage of the pipeline, the 4th tag is removed from the resulting data format so that { "meta": { "device": [ "Building A", "4th Floor", "Room 71", "Doorway A" ] } } becomes { "meta": { "device": [ "Building A", "4th Floor", "Room 71" ] } }

The room level data includes:
- change
	- **in** - how many people were counted as entering the room since the last report
	- **out** - how many people were counted as exiting the room since the last report
	- **traffic** - the sum of *in* and *out* since the last report
	- **count** - the diff of *in* minus *out* since the last report

- daily_total
	- **in** how many people were counted as entering the room *today* 
	- **out** how many people were counted as exiting the room *today*  
	- **traffic** the sum of *in* and *out*   
	- **raw_count** - the diff of *in* minus *out* - how many "extra" people entered this room *today*
	- **count** - how many people are estimated to currently be in the room.  If the raw_count is less than zero, then the count is set to zero.
	- **percent_capacity** - the count divided by the capacity of the room (if configured) is the percent capacity
	- **alerts** - how many alerts the sensors on the doorways to this room reported *today* 
	- **faults** - how many faults the sensors on the doorways to this room reported *today* 


RECTYPE : io.microshare.peoplecounter.unpacked.event.agg

```
{
	"change": {
		"count": 0,
		"elapsed": {
			"minutes": 15
		},
		"in": 0,
		"missing_records": 0,
		"num_devices": 1,
		"out": 0,
		"raw_count": 0,
		"traffic": 0
	},
	"daily_total": {
		"alerts": 0,
		"count": 10,
		"date": "2023-02-14",
		"day_of_the_week": 2,
		"faults": 0,
		"hour": 13,
		"in": 38,
		"missing_records": 2,
		"num_devices": 1,
		"out": 28,
		"percent_capacity": 20,
		"raw_count": 10,
		"reset_time": "2023-02-14T00:00:00.000Z",
		"timezone": "Europe/London",
		"traffic": 66
	},
	"event": "people_counter_aggregate",
	"meta": {
		"capacity": 50,
		"device": [
			"Building A",
			"4th Floor",
			"Room 71"
		],
		"global": [
			"Microshare",
			"demo",
			"solutions",
			"people"
		],
		"reset_hour": 0,
		"tag_depth": 3,
		"timezone": "Europe/London"
	}
}
```


## Faults
If the counters are installed askew or are dislodged, they will not be able to measure the traffic.  In this case, they generate faults which then appear in the fault fields in the data.  Use the fault fields to filter out the bad data and/or respond and rectify the problem.

## Inaccuracy

An important thing to note is that inaccuracy is expected.  Tracking when an IR beam is interrupted is useful to detect when someone passes through a doorway.  But other things can interrupt an IR beam.  If someone stands in the doorway and blocks the beam while others are passing through, or if two people pass through at the same time, or if someone is gesticulating or pushing a cart filled with objects - all of these things can cause people to be missed and/or double-counted.  The two values for in vs out can drift away from each other due to these expected inaccuracies and then estimating a people count based on the in vs the out will be increasingly inaccurate.  So we reset the cumulative daily counters at the time of day when the space is most likely to be empty.  

<br>

**Have a question not answered here? Contact `support@microshare.io` for more information.**

