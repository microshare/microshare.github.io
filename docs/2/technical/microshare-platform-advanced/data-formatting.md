---
layout: docs
title: Data Formatting
description: How your data is decrypted and delivered to you
toc: true
---

---------------------------------------
##### SUMMARY : 

1. [What is Data Formatting?](./#1-what-is-data-formatting)
2. [New Process](./#2-new-process)
3. [Setting up Device Cluster for Data Formatting](./#3-setting-up-device-clsuter-for-data-formatting)
4. [How does the Data Formatting Process Work?](./#4-how-does-the-data-formatting-process-work)
5. [Set up your platfrom to post the data](./#5-set-up-your-platform-to-post-the-data)
6. [Contact Tracing](./#7-contact-tracing)
7. [What's next?](./#7-whats-next)



## 1. What is Data Formatting?
---------------------------------------

Data formatting or processing is the process by which Microshare® takes encrypted data from your device(s) and represents them onto your dashboard.  

## 2. New Process
---------------------------------------

Microshare® used to perform data formatting with a series of robots, but have hence engineered a new solution for representing your data through device clusters. You can learn a lot more about how Microshare® used to format data in the [Data Formatting by Robots](/docs/2/technical/microshare-platform-advanced/data-formatting-by-robots) page.

## 3. Setting up the Device Cluster for Data Ingestion
---------------------------------------

[The Device Cluster Guide](/docs/2/technical/microshare-platform/device-cluster-guide/) serves as a great tutorial for walking you through the process of setting up the device cluster. The data formatting page will be a more in depth description regarding the numerous parameters for the device cluster. 

## 4. How does the Data Formatting Process Work?
---------------------------------------

After completing the source and target recTypes, the next set of information that you give relates to the devices themselves. When you give the device model specifications, it automatically fills out the device payload unpacker.


{% include image.html url="/assets/img/data-formatting-1.png" description="DF1" %}

The device model specifications catagory is marked in green and the device payload unpacker is marked in blue. The device payload unpacker is specific to the format of information that you device sends, and relates to the specific function that  decrypts your information. 


You then give each of your devices' EUI or Id and the location tags. These specifications are underlined in red and orange. These specifications allow the unpacker code to only decipher information from your devices and differentiate from records coming from multiple devices. After being parsed, the payload is then transformed by the unpacker code. Depending on what you are recording, an event can be triggered and the data  is stored with extra information on the value that was decoded, its unit, the device it came from, the time the recording occurred and so on. 

Finally, the data is written to the data lake under the target recType.unpacked name along with the tags specified while creating the device cluster. The datawrite builds the audit trail of your data and allows the triggering of the next step in the workflow. 

#### The entire process looks like this:

Data from your sensors is sent via "Lora" signal to your LoRaWAN gateway. The gateways sends the data via WiFi or cellular signal to its corresponding network then to the Microshare® network under the source recType name. The device cluster program takes the data from the source recType, and pushes it into the Microshare® data lake under the target recType name. From there, the data goes through the decoding function corresponding to the type of your device. From there, the program POSTs your data in a digestible format to the Microshare® API so that it can be represented on your dashboard or app.  


## 5. Set up your platform to post the data
---------------------------------------

For [Actility ThingsPark](https://partners.thingpark.com/en/dashboard) or a Kerlink private gateway.
Some platforms can be configured to POST data. Configure them to do a POST /share/:recType call.

## 6. Contact Tracing
---------------------------------------
{% include image.html url="\assets\img\Contact_tracing1.png" description="contact tracing image" %}

- Wave devices download from personal beacons & transmit to gateway
- Event data is pulle from devices holding oldest data first
- Data is Microshare® Smart Network
- Personal Beacons constantly scan for other nearby beacons
- If beacons are detected nearby (within 2 meters for 10 minutes), then an event is recorded
- Data includes id of nearby device, voltage, average RSSI, contact duration & relative timestamp


#### Unpacking and Outputting the data

{% include image.html url="\assets\img\Contact_tracing2.png" description="contact tracing image 2" %}

#### Unpack data from wave devices

- Determine if beacon is a location beacon or wearable 
- Calculate start/ end time from relative timestamps
- Flatten record into individual events

#### Output event data 
- originatingDevice- Id of wearable that detected a contact
- originatingDeviceBattery- Voltage level of detecting wearable
- detectingDevice- ID of device that contact was made with
- startTime- starting time of contact in UTC
- start- offset in minutes from recieving time that contact began
- duration- length of contact in minutes 
- edndTime- ending time of contact in UTC
- locationBeacon- true if contact was with beacon device, false if wearable
- averageRSSI- average RSSI over the contact period

### Contact Tracing Example Data

{% highlight java %}
  {
    "meta": {
        "currentCount": 1,
        "currentPage": 1,
        "perPage": 1,
        "source": "db",
        "totalCount": 1,
        "totalPages": 1
    },
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
            "originatingDevice":"EEA0E0E2D???",
            "originatingDeviceBattery":"2.658V",
            "start":5,
            "startTime":"2020-05-07T14:35:00.000Z",
            "device":{
                "id":"EEA0E0E2D???"
            },
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


## 6. What's next?
---------------------------------------

Once your data is loaded in the data lake, you'll want to get it ready to be used in dashboards and applications. Build your multisteps worflow with a [Data Workflow](../data-workflow) to parse, transform and format your data automatically.  