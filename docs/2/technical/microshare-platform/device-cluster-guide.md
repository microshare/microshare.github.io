---
layout: docs
title: Device Cluster Guide

toc: true
---

Intro sentence [link](https://microshare.io) (non required)

---------------------------------------

##### SUMMARY : 

1. [Part1](./#1-part-A)
2. [Updating Device Clusters](/.#updating-a-device-cluster)

---------------------------------------

## 1. Adding Devices
---------------------------------------

List out the things that you have to do to edit the device/ make a cluster

## 2. Updating a Device Cluster
---------------------------------------
There's currently a bug that at times when a Device Cluster has been updated, there is duplicate data unpacked.  In order to mitigate this before the bug is fixed, do the following when you update a Device Cluster to confirm that there's only one Device Cluster 

1. Update the Device Cluster 

2. View the logs/write a query to see if duplicate data is being unpacked 

Query to check for a single device:

{% highlight js %}
  [ 

  { 

    "$match": { 

      "recType": "io.microshare.occupancy.unpacked", 

      "data.device.id": "58-A0-CB-00-00-10-B1-55" 

    } 

  }, 

  { 

    "$sort": { 

      "data.meta.iot.time": -1 

    } 

  }, 

  { 

    "$limit": 25 

  }, 

  { 

    "$project": { 

      "time": "$data.meta.iot.time", 

      "hour": { 

        "$hour": { 

          "date": { 

            "$dateFromString": { 

              "dateString": "$data.meta.iot.time" 

            } 

          }, 

          "timezone": "America/New_York" 

        } 

      }, 

      "status": "$data.status_label", 

      "length": "$data.time_label", 

      "sensor": "$data.device.id" 

    } 

  }, 

  { 

    "$group": { 

      "_id": "$sensor", 

      "pings": { 

        "$push": { 

          "time": "$time", 

          "status": "$status", 

          "length": "$length", 

          "hour": "$hour" 

        } 

      } 

    } 

  } 

]  
{% endhighlight %}



