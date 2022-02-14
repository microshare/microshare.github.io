---
layout: docs
title: Data Format Overview
description: Let's take a look at the Microshare™ data structure.
toc: true
---




{% include image.html url="/assets/img/thumbnail-14.jpg" description="thumbnail 2" %}


---------------------------------------


#### Summary:

1. [Introduction](./#introduction)
2. [Available Metrics](./#available-metrics)
2. [Data Envelope](./#data-envelope)
3. [Go Further](./#go-further)

---------------------------------------


## Introduction
---------------------------------------

To best use Microshare data, it is important to understand how the data is structured,
 particularly for use of views, robots, APIs and the creation of Applications.

As described in the Microshare Platform Advanced section, data unpacking follows data ingestion. But what does this mean in terms of data? 

When the raw data is ingested in Microshare it is stored in a simple form, while at the same time the unpacked data is stored in the unpacked recType. The new unpacked recType contains much more data according to the Microshare formalism.

RecTypes are further explored in the [API Collection page](/docs/2/technical/api/api-collection/#api-structures).

This guide serves to help you discern the different components of a Microshare data payload. 


## Available Metrics
---------------------------------------

Telematics data is drawn from various Certified Sensing Devices and can capture many physical characteristics of both the device itself and the environment in which the device is situated. A single device may be outfitted with multiple sensors and so may report multiple metrics. The metrics are defined below.

### Device Domain Metrics

msg_type Vendor-specific support for multipurpose devices.

fault Vendor-specific single that device/sensor is malfunctioning.

voltage measured in V. Electrical potential of battery or power-source.

battery measured in %. Percentage of battery power remaining.

charge measured in %. Percentage of battery charge remaining.

period measured in s. Frequency of device reporting.

rssi measured in dBm. Relative Signal Strength Indicator measuring wireless network signal strength.

snr measured in dB. Signal to Noise Ratio indicator measuring wireless network signal interference.

reports_since_reset Count of reports since device power-up or reset.

temperature measured in °C. Temperature at the printed circuit board.

mode Vendor-specific unit to support configurable operating modes.

### Sensing Domain Metrics

#### Environmental

temperature measured in °C. Measure of hotness or coldness expressed in Celsius scale.

humidity measured in %RH. Measure of concentration of water vapour present in the air relative to maximum (aka Relative Humidity).

pressure measured in hPa. Measure of atmospheric pressure in force per unit area exerted by an atmospheric column.

illuminance measured in lx. Measure of the amount of light falling onto and spreading over a given surface area.

voc measured in ppb. Measure of Volatile Organic Compounds present in the air.

co2 measured in ppm. Measure of Carbon Dioxide present in the air.

iaq Vendor-specific measure of Air Quality relative to ideal for human-use.

loudness measured in dBa. Measure of magnitude of the auditory sensation conducted through the air.

haziness measured in %. Percentage of transmission light blocked by particles in the air.

smokiness measured in %. Percentage of transmission light blocked by smoke in the air.

gas measured in %. Percentage of the gas composition of air by mole fraction.

#### Electrical and Mechanical

vibration measured in Hz. Measure of oscillation of or in a solid object.

current measured in A. Measure of electrical flow or movement of charge carriers through a conductive medium.

voltage measured in V. Measure of electrical potential of battery or power-source.

multiplier Mathematical multiplier to set scale for an electrical measure.

#### Motion and Occupancy

presence Binary measure representing the detection of a warm object.

motions_since_reset Count of warm object positional changes (motions) since device power-up or reset.

events_since_reset Count of state changes since device power-up or reset.

motions_since_transmit Count of warm object positional changes (motions) since last report.

acceleration measured in m/s2. Measure of the change in velocity of a solid object.

velocity measured in m/s. Measure of the speed of motion of a solid object.

x Position relative to an arbitrary starting point in horizontal plane.

y Position relative to an arbitrary starting point in vertical plane.

z Position relative to an arbitrary starting point in longitudinal plane.

#### Container State (eg. Waste Barrel/Bin)

closed Binary measure representing the proximate relative location (close) of two magnetic objects (Hall Effect).

open Binary measure representing the proximate relative location (far) of two magnetic objects (Hall Effect).

fill measured in %. Percentage measure of the reduction in capacity of a fixed depth container.

distance measured in m. Measure of unobstructed space between two solid objects.

#### Location

gps Measure of location relative to the surface of the Earth following the geographic coordinate system.

lat measured in °. Measure of the North/South distance relative to the Earth's equator.

lon measured in °. Measure of the East/West distance relative to the Earth's prime meridian.

accuracy measured in m. Measure of the expected radius of uncertainty for a positional measurement.

#### Feedback Button

push Binary measure of button or switch mechanical activation.

swipe Binary measure of electro-mechanical activation.

pushes_since_reset Count of mechanical activation (pushes) since device power-up or reset.

count_since_reset Count of generic events since device power-up or reset.

count_since_transmit Count of generic events since last report.

#### Alarms and Generic Events

leak Binary presence of electrically detectable liquid.

alarm Binary measure of generic event occurance (see SubTypes).

#### Time

time Measure of the thing that keeps on slipping into the future in seconds since Jan 1, 1970.

iso_time Measure of the thing that keeps on slipping into the future in ISO 8601 format.

seconds_since_change measured in s. Count of seconds since last event state change.

## Data Envelope
---------------------------------------

To start with something simple we'll take the piece of data we generated with the API tutorial: [API Share API](/docs/2/technical/api/share-api/#2-write-data).


{% highlight javascript %}
{
    "meta": {
        "currentCount": 1,
        "currentPage": 1,
        "perPage": 999,
        "source": "db",
        "totalCount": 1,
        "totalPages": 1
    },
    "objs": [
        {
            "_id": "5ed1123046e0fb0028b70???",
            "checksum": "05B21996343E63CDEF5F8DB6F2D20FB96B61FA60B1E35D900F3875E2822AB12EL15",
            "createDate": "2020-05-29T13:46:24.779Z",
            "creatorId": "yourname@microshare.io",
            "data": {
                "Test": "Data"
            },
            "desc": "",
            "id": "5ed1123046e0fb0028b70???",
            "name": "",
            "origin": {
                "checksum": "05B21996343E63CDEF5F8DB6F2D20FB96B61FA60B1E35D900F3875E2822AB12EL15",
                "createDate": "2020-05-29T13:46:24.779Z",
                "creatorId": "yourname@microshare.io",
                "desc": "Record of Type your.name",
                "id": "5ed1123046e0fb0028b70???",
                "name": "your name",
                "remoteAddress": "your remote address",
                "tokendata": {
                    "id": "006f6b5f-171e-46cf-8f70-c4fa15b6????",
                    "ip": "your ip address"
                }
            },
            "owner": {
                "appid": "B8E2F5B2-969D-4EFF-BD45-B8CFF2F2????",
                "org": "io.microshare",
                "owners": [],
                "user": "yourname@microshare.io"
            },
            "recType": "your.name",
            "tstamp": 1590759984779,
            "updateDate": "2020-05-29T13:46:24.779Z",
            "updaterId": "yourname@microshare.io"
        }
    ]
}
{% endhighlight %}

#### A) Meta

In the above example, the information was requested without specification of the number of pages or the amount of data per page.  By default, the number of pages (`totalPages`) is set to 1 and the number of data `perPage` is set to 999. Because the example has only one piece of data, it has `one count and one page`. 

The `source` object represents where the information came from. In this case, the data payload is from the database or `db`.

Please note that if you have access to the `meta` data but not the `obj` data, this is because you lack the privileges necessary to read it. Your privileges can be adjusted by the creation of a [share Rule](/docs/2/technical/microshare-platform/rules-guide).


#### B) Objs

The `Objs` section of the data stores most of the descriptors of the interaction. `Objs` stores data as an array, hence using more than one entry may be necessary depending on the call.   

##### B.1 Simple values

{% highlight javascript %}
"_id": "5ed1123046e0fb0028b70???",
"checksum": "05B21996343E63CDEF5F8DB6F2D20FB96B61FA60B1E35D900F3875E2822AB12EL15",
"createDate": "2020-05-29T13:46:24.779Z",
"creatorId": "yourname@microshare.io",

"desc": "",
"id": "5ed1123046e0fb0028b70???",
"name": "",

"recType": "your.name",
"tstamp": 1590759984779,
"updateDate": "2020-05-29T13:46:24.779Z",
"updaterId": "yourname@microshare.io"
{% endhighlight %}

* `"_id"` and `"id"`

The Id of the data is its unique identifier. It is used by a Microshare Technician to find a particular piece of data in the datalake.

* `"checksum"`

The checksum is a cryptographic hash of the data portion of the record. Using the sha-256 hashing algorithm to generate a new hash from the contents of the Data element, a comparison can be made to ensure that the data has not be compromised. A checksum is also included in the Origin section of the JSON structure that captures the data contents when the record was first introduced to the system. By comparing these two checksums, you can prove that the data has not be modified inside the Microshare  system.

* `"createDate"`

CreateDate is an ISO 8601 date/time stamp in the YYYY-MM-DDThh:mm:ss.sTZD pattern that represents the date/time of the data's introduction to the Microshare  system.

* `"creatorId"`

CreatorId suplies the email address of the creator this piece of data.

* `"desc"`

This object serves to describe the sensor the information comes from. Usually, this object is empty. 

* `"name"`

This object gives the name of the sensor that the information comes from. This field is usually empty. 

* `"recType"`

The recType is a notation that describes the format of the data. It is used to direct the flow of processing throughout the Smart Network. It is the most important tag used in the storage and retrieval of information in the Microshare system. recTypes that begin with io.microshare are using a canonical JSON format that is managed by Microshare . You will find these canonical formats described here. You can learn more about [recTypes here](/docs/2/technical/microshare-platform-advanced/data-ingestion/#2-lorawan-network-ingestion-via-device-cluster).

* `"tstamp"`

This is the timestamp (in milliseconds)in the Unix epoch unit. The Unix epoch (or Unix time or POSIX time or Unix timestamp) is the number of seconds that have elapsed since January 1, 1970 (midnight UTC/GMT), not counting leap seconds (in ISO 8601: 1970-01-01T00:00:00Z). Literally speaking the epoch is Unix time 0 (midnight 1/1/1970), but 'epoch' is often used as a synonym for Unix time. Some systems store epoch dates as a signed 32-bit integer, which might cause problems on January 19, 2038 (known as the Year 2038 problem or Y2038). The converter on this page converts timestamps in seconds (10-digit), milliseconds (13-digit) and microseconds (16-digit) to readable dates.

[https://www.epochconverter.com/](https://www.epochconverter.com/)

Here the value is 1590759984779 so the date is Friday 29 May 2020 13:46:24.779 which is exactly the `createDate` value : "2020-05-29T13:46:24.779Z".

* `"updateDate"`

UpdateDate is an ISO 8601 date/time stamp in the YYYY-MM-DDThh:mm:ss.sTZD pattern that represents the date/time of the data's last update in the Microshare  system. If the data has not been updated, it will be the same as the createDate.

* `"updaterId"`

The `updaterId`notes which user has last updated the data. If the data has not been updated, the `updaterId` will be the same as the `creatorId`.

##### B.2 Data

{% highlight javascript %}
"data": {
    "Test": "Data"
},
{% endhighlight %}

This section contains the core information as ingested by the Microshare Smart Network. The format of the data section will vary based on the recType. If the recType begins with io.microshare, then the cannonical format of this section will be documented in this section.

##### B.3 Origin

{% highlight javascript %}
"origin": {
    "checksum": "05B21996343E63CDEF5F8DB6F2D20FB96B61FA60B1E35D900F3875E2822AB12EL15",
    "createDate": "2020-05-29T13:46:24.779Z",
    "creatorId": "yourname@microshare.io",
    "desc": "Record of Type your.name",
    "id": "5ed1123046e0fb0028b70???",
    "name": "your name",
    "remoteAddress": "your remote address",
    "tokendata": {
        "id": "006f6b5f-171e-46cf-8f70-c4fa15b6????",
        "ip": "your ip address"
    }
},
{% endhighlight %}

Here you find the origin of the data, who created it, when, and under which recType (`name`).

You will also find even more information about the PIs of the systems that created this data.

The origin can be useful when the data is shared with you as you can easily decipher where it comes from.


##### B.4 Owner

{% highlight javascript %}
"owner": {
    "appid": "B8E2F5B2-969D-4EFF-BD45-B8CFF2F2????",
    "org": "io.microshare",
    "owners": [],
    "user": "yourname@microshare.io"
},
{% endhighlight %}

The ownership of the data is an essential part of the data, here you will find who owns the data, which account (`user`) and under which identity (`org`). There may be multiple owners for every piece of data. Owners have the ability to create share Rules that grant privileges to other users. 

The additional information in the `appid` corresponds to the app-key that is used to create the data. The app- key creates a token or pipe token to securely create the data. 

## Go further
---------------------------------------


Next, you should follow the [Microshare Standards](/docs/2/technical/data-format/microshare-standards) to dive further into the data ingestion process by device clusters and how to request information using a push action. This guide will describe the components of IoT data packets and IPSO data. 


