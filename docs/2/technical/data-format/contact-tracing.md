---
layout: docs
title: Contact Tracing
description: A page dedicated to breaking down how you receive data 
toc: true
---

---------------------------------------

{% include image.html url="\assets\img\uct\uct-4.png" width="500" height="200" description="uct-2" %}

---------------------------------------
#### Summary:
1. [Overview](./#1-overview)
2. [Dataflow](./#2-dataflow)
3. [Unpacking](./#3-unpacking)
4. [Contact Tracing Examples](./#4-contact-tracing-example-data)
5. [Frequently Asked Questions](./#5-frequently-asked-questions)


## 1. Overview
---------------------------------------
**The Microshare® Contact Tracing solution functions as follows:**
{% include image.html url="\assets\img\Contact_tracing1.png" width="500" height="500" description="contact tracing image" %}

**Using the recommended default settings from Kerlink, the following behaviour is expected.**

<br>
**1.** Personal beacons scan for 220ms duration at an interval period of 40,000ms.

<br>
**2.** Personal beacons advertise at an interval period of 200ms.

<br>
**3.** Personal beacons record a contact event while in the proximity of other personal/location beacons if the following conditions are met:
  - Contact is seen at least 4/7 times within the sliding contact window.
  - Contact has an RSSI level equal to or greater than the -70dBm RSSI threshold.
  
<br>
**4.** Wave device retrieves contact events from personal beacons via BLE transport. 
  - Upon successful retrieval, the personal beacons memory and clock is reset.
  
<br>
**5.** Wave transmits data to LoRaWAN gateway via LoRaWAN transport.

<br>
**6.** Microshare® Smart Network receives and processes the raw payload data.
  - Processed event contact data includes id of the beacon, voltage, average RSSI, contact duration & relative timestamp.

<br>
## 2. Dataflow
---------------------------------------

{% include image.html url="\assets\img\uct\uct-3.png" description="uct-3" %}

Using the recommended default settings from Kerlink, the following behaviour is expected.

- Personal beacons scan for 220ms duration at an interval period of 40,000ms.
- Personal beacons advertise at an interval period of 200ms.
- Personal beacons record a contact event while in the proximity of other personal/location beacons if the following conditions are met:
  - Contact is seen at least 4/7 times within the sliding contact window.
  - Contact has an RSSI level equal to or greater than the -70dBm RSSI threshold.
- Wave device retrieves contact events from personal beacons via BLE transport. 
  - Upon successful retrieval, the personal beacons memory and clock is reset.
- Wave transmits data to LoRaWAN gateway via LoRaWAN transport.
- Microshare® Smart Network receives and processes the raw payload data.
  - Processed event contact data includes id of the beacon, voltage, average RSSI, contact duration & relative timestamp.

## Dataflow

1. Beacon to Beacon via BLE transport, we expect some data loss due to BLE collisions or missing an advertisement due to timing. This is averted by using the contact threshold of 4/7 times within the sliding contact window.
2. Beacon to Wave via BLE transport, wave only resets the personal beacon upon successful retrieval of contact event data.
3. Wave to LoRaWAN gateway via LoRaWAN transport. Wave only sends data once. If a LoRaWAN gateway isn't listening, data will be lost.
4. Microshare® Smart Network receives and processes the raw payload data. Data has been stored within Microshare® database .unpacked recType and therefore can be re-played if required.
5. Microshare® Smart Network LoRaWAN unpacker Libary unpacks raw data to .packed recType.
6. Microshare® Smart Network Robot flattens recorded contact events into individual events usually stored in .unpacked.event recType and therefore can be re-played if required.
7. Streamed to event hub using a streaming mechanism.......................


<br>
**3.** Wave to LoRaWAN gateway via LoRaWAN transport. Wave only sends data once. If a LoRaWAN gateway isn't listening, data will be lost.

<br>
**4.** Microshare® Smart Network receives and processes the raw payload data. Data has been stored within Microshare® database .unpacked recType and therefore can be re-played if required.

<br>
**5.** Microshare® Smart Network LoRaWAN unpacker Libary unpacks raw data to .packed recType.

<br>
**6.** Microshare® Smart Network Robot flattens recorded contact events into individual events usually stored in .unpacked.event recType and therefore can be re-played if required.

<br>
**7.** Streamed to event hub using a streaming mechanism.

<br>
## 3. Unpacking
---------------------------------------

#### Unpacking and Outputting the data

The unpacked data is outputted into a more readable format:

{% include image.html url="\assets\img\Contact_tracing2.png" description="contact tracing image 2" %}

#### Unpack data from wave devices

Unpacked data does the following: 
- Determine if beacon is a location beacon or personal.
- Calculate start/end time from relative timestamps.
- Flatten record into individual events.

#### Output event data 
- `originatingDevice` - Id of personal beacon that detected a contact event.
- `originatingDeviceBattery` - Voltage level of personal beacon.
- `detectingDevice` - ID of personal beacon that contact event was made with.
- `startTime` - starting time of contact in UTC.
- `start` - offset in minutes from receiving time that contact event began.
- `duration` - length of contact event in minutes.
- `endTime` - ending time of contact in UTC.
- `locationBeacon` - true if contact was with location beacon, false if personal beacon.
- `averageRSSI` - average RSSI over the contact event duration.

## Contact Tracing Example Data
---------------------------------------

{% highlight java %}
"source":{
                    "device":[
                        "Location1",
                        "Location2",
                        "Location3",
                        "Location4"
                    ],
                    "global":[
                        "GlobalTag1",
                        "GlobalTag2",
                        "GlobalTag3",
                        "GlobalTag4"
                    ],

{% endhighlight %}

The Kerlink Waves, also referred to as 'bluetooth sniffers' and are LoRaWAN devices. Along with the personal and location beacons, the Waves are apart of the [device cluster](/docs/2/technical/microshare-platform/device-cluster-guide/), and their information is grouped together. Within the device cluster's data, the individual location is provided. This gives the "device" section of the code snippet above. Additionally, the device cluster will detail the location for the entire group of data, such as a specific building. This is the purpose for the "global" Metadata. 

In summary, the device locations are the specific locations of each device while the global data details the location of the device cluster (the group of waves and personal beacons).

**Confused on what to name your tags? Check out the [Contact Tracing Installation Page.](/docs/2/installer/deploy-m/contact-tracing-installation-guide/)**

## 4. Contact Tracing Example Data
---------------------------------------
Depending on at what section of the pipeline you are viewing, your JSON file will look different. Hence, your JSON code may vary from the following examples. The JSON code below is broken down into sections to help you decipher your data.  

#### Example 1: a .unpacked.event output file of a Personal Beacon to Location Beacon detection.

{% highlight javascript %}
  {
    "meta": {
        "currentCount": 1,
        "currentPage": 1,
        "perPage": 1,
        "source": "db",
        "totalCount": 1,
        "totalPages": 1
    },
{%  endhighlight %}
    
The section above details the amount of data given in the JSON file. There is one page and the information comes from the database. 

{% highlight javascript %}
    "objs": [
        {
            "_id": "5ee136f146e0fb00282cb???",
            "checksum": "8E6E2AD84157FA0E152B0AD419FB5290ED54808139E67A98F76116B8C0CC51EAL825",
            "createDate": "2020-06-10T19:39:29.798Z",
            "creatorId": "yourname@microshare.io",
            "data": {
                "averageRSSI": -89,
                "detectedDevice": "000003BAB???",
                "device": {
                    "id": "AC233F664???"
                },
                "duration": 3,
                "endTime": "2020-06-10T19:37:28.331Z",
                "locationBeacon": true,
                "meta": {
                    "device": {},
                    "iot": {
                        "device_id": "AC233F664???"
                    },
                    "source": {
                        "device": [
                            "Wokingham",
                            "Ground",
                            "Lounge",
                            ""
                        ],
{% endhighlight %}

This section gives the data from the device that created the record. The device `AC233F664???` was in contact with the device `000003BAB???` for three minutes in the Lounge. Additionally, the device identifications are given along with the time at which the recording was made. The field `locationBeacon` is true, signifying that this record is a personal beacon to location beacon exchange. 

{% highlight javascript %}
                        "global": [],
                        "iot": {
                            "device_id": "70-76-FF-00-69-04-??-??",
                            "fcnt_dwn": 5,
                            "fcnt_up": 347,
                            "fport": 95,
                            "ns_version": "v3.0",
                            "payload": "a16176818346ac233f6644ab190b4e8b851831437cbf000604358500433406000605348500432f00000806308500430200000805348500430100000804358500430100000301368500430100000403358500430300000605318500440163fa0009063585004401560000080631850043190000050334",
                            "payload_fmt": 1,
                            "time": "2020-06-10T19:39:28.331Z",
                            "type": "uplink"
                        },
                        "source": []
                    }
                },

{% endhighlight %}
            

This section details the device cluster that the source device is apart of. The device cluster id is given along with the payload, the time that the payload was recieved and the number of communications between the device cluster and the gateway (`fcnt_dwn` and `fcnt_up`).

{% highlight javascript %}
                "originatingDevice": "AC233F664???",
                "originatingDeviceBattery": 2.894,
                "start": 5,
                "startTime": "2020-06-10T19:34:28.331Z"
            },
            "desc": "",
            "id": "5ee136f146e0fb00282cb???",
            "name": "",
            "origin": {
                "checksum": "8E6E2AD84157FA0E152B0AD419FB5290ED54808139E67A98F76116B8C0CC51EAL825",
                "createDate": "2020-06-10T19:39:29.798Z",
                "creatorId": "yourname@microshare.io",
                "desc": "Record of Type io.microshare.contact.unpacked.event",
                "id": "5ee136f146e0fb00282cb???",
                "name": "io.microshare.contact.unpacked.event",
                "remoteAddress": "000.00.00.000",
                "tokendata": {
                    "id": "a1c1541d-3a3d-4255-951a-499311c5e???",
                    "ip": "000.00.00.000"
                }
            },
            "owner": {
                "appid": "51C54CDB-D278-4CFD-B8378EF13462E???",
                "org": "io.microshare",
                "owners": [],
                "user": "yourname@microshare.io"
            },
            "recType": "io.microshare.contact.unpacked.event",
            "tags": [
                "Wokingham",
                "Ground",
                "Lounge"
            ],
            "tstamp": 1591817969798,
            "updateDate": "2020-06-10T19:39:29.798Z",
            "updaterId": "yourname@microshare.io"
        }
    ]
}
{% endhighlight %} 

The final section of this example reiterates information given above but also details the information of the creator of the device cluster, including their email, id, ip address, and organization. Additionally, the recType that this JSON data is saved under is given as `io.microshare.contact.unpacked.event`.

#### Example 2: a .unpacked.event output data of a Personal Beacon to Personal Beacon contact.

The following is an example of the output data you would see from a personal beacon to personal beacon exchange. 

{% highlight java %}
{
    "event_type":"create",
    "id":"5edfb7e246e0fb00297b5???",
    "obj":{
        "checksum":"E418D6462C167B01655652EA9F0987D42490DBFABBBDD64EFA324A384A3394C3L1496",
        "createDate":1591719906298,
        "creatorId":"yourname@microshare.io",
        "data":{
            "averageRSSI":-6,
            "detectedDevice":"C96E9E87F???",
            "duration":11,
            "endTime":"2020-05-07T14:41:00.000Z",
            "locationBeacon":false,
{% endhighlight %}

This section details that the record is a source personal beacon to detected personal beacon exchange as the field `locationBeacon` is false. Additionally, the creator's email is given along with the the data of creation, the time of the detection, the duration of the contact, and the strength of the signal. 

{% highlight javascript %}
            "originatingDevice":"EEA0E0E2D???",
            "originatingDeviceBattery":"2.658V",
            "start":5,
            "startTime":"2020-05-07T14:35:00.000Z",
            "device":{
                "id":"EEA0E0E2D???"
            },
{% endhighlight %}

This is the information about the source personal beacon in the exchange. The source personal beacon's identification is given, the time of detection and its battery level. 

{% highlight javascript %}
            "meta":{
                "device":{
                },
                "iot":{
                    "device_id":"EEA0E0E2D???"
                },
                "source":{
                    "device":[
                        "Location1",
                        "Location2",
                        "Location3",
                        "Location4"
                    ],
                    "global":[
                        "GlobalTag1",
                        "GlobalTag2",
                        "GlobalTag3",
                        "GlobalTag4"
                    ],
                    
{% endhighlight %}

This part of the JSON code gives the lcation details of the device cluster the source personal beacon is apart of.

{% highlight javascript %}
                    "iot":{
                        "device_id":"70-76-FF-00-69-04-??-??",
                        "fcnt_dwn":1,
                        "fcnt_up":79,
                        "fport":85,
                        "iso_time":"2020-06-09T19:47:39.185Z",
                        "ns_version":"v3.0",
                        "payload":"a16162958346a0e6f8a0c537350083460b3c470150923200834170340083410433008342746e3100834104340083410531008341013400834101330083419631008346185318127e423600834610e4d899208b300083460897b3c3ac4a3300834603b21606e77035008346069f0f8d92003200834604124eca6ea426008346034325f968da3300834601c64aac0f57310083460df476b95daa320083452a01caba0d29008341812600",
                        "payload_fmt":1,
                        "time":"2020-06-04T19:30:00.185Z",
                        "type":"uplink"
                    },
                    "source":[

                    ]
                }
            }
        },


{% endhighlight %}

This section details the device cluster that the source device is apart of. The device cluster id is given along with the payload, the time that the payload was recieved and the number of communications between the device cluster and the gateway (`fcnt_dwn` and `fcnt_up`).

{% highlight javascript %}

        "desc":"",
        "id":"5edfb7e246e0fb00297b5???",
        "name":"",
        "origin":{
            "checksum":"E418D6462C167B01655652EA9F0987D42490DBFABBBDD64EFA324A384A3394C3L1496",
            "createDate":"2020-06-09T16:25:06.298Z",
            "creatorId":"yourname@microshare.io",
            "desc":"Record of Type io.microshare.contact.unpacked.event",
            "id":"5edfb7e246e0fb00297b5???",
            "name":"io.microshare.contact.unpacked.event",
            "remoteAddress":"113.90.8.233",
            "tokendata":{
                "id":"5d548231-7b91-4040-bff6-ad4a92ee3???",
                "ip":"000.00.00.000"
            }
        },
        "owner":{
            "appid":"51C54CDB-D278-4CFD-B8378EF13462E???",
            "meta":{

            },
            "org":"io.microshare",
            "owners":[

            ],
            "user":"yourname@microshare.io"
        },
        
        
{% endhighlight %}

This section details the creator's email, id, ip address, app id, organization, and the token id. This example's JSON file is saved under the recType `io.microshare.contact.unpacked.event`.

{% highlight javascript %}


        "recType":"io.microshare.contact.unpacked.event",
        "tags":[
            "Europe",
            "Ireland",
            "Leinster",
            "Dublin"
        ],
        "tstamp":1591719906298,
        "updaterId":"yourname@microshare.io"
    },
    "obj_type":"objs",
    "recType":"io.microshare.contact.unpacked.event",
    "source":"ShareService"
}
{% endhighlight %}

This final section details the location of the device cluster and reiterates the creator's email and the recType. 

## 5. Frequently Asked Questions
---------------------------------------
<br>
**Question:** Where can the information containing all the wristbands in a contact be found?

<br>
**Answer:** This can be found under the .unpacked.event which also includes the MetaData (The location of the device cluster and link). If you are looking for data on a specific wristband, you can query the data using [Microshare big tools](/docs/2/technical/api/simple-requests/#3-read-data).

<br>

**Question:** I am seeing two different files of information, one titled `.unpacked` and the other `.event`. What is the difference between these two and which one should I pay attention to?

<br>
**Answer:** The `.unpacked` file is the information sent from a single wristband, while the `.event` file is a refined version of that information which includes MetaData (information about the device cluster such as the location of the device cluster) which is used for your dashboard. You will only need to look at the `.event` file as it gives the information context and is easier to interpret. 

<br>

**Question:** When searching for those in contact, do we need to look at both the detection and source categories ?

<br>
**Answer:** This question assumes that the contact will only be recorded under either the detection or the source category. When a contact is detected, both the wristbands will ‘see’ each other as all wristbands are continuously broadcasting and scanning. Hence, it is safe to search for contacts under one wristband. The only disparity between the contact detections (one recording for each device) would be the time of recording, as their information does not reach the cloud at the exact same time. 

<br>
**Have a question not answered here? Contact `support@microshare.io` for more help.**

{% include image.html url="\assets\img\clean-safe.png" description="clean safe" %}
{% include image.html url="\assets\img\microshare-logo.png" description="logo" %}