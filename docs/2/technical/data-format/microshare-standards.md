---
layout: docs
title: Microshare™ Standards
description: Let's take a look at the Microshare™ data structure.
toc: true
---




{% include image.html url="/assets/img/banner-2.jpg" description="thumbnail 2" %}


---------------------------------------

##### SUMMARY : 

1. [Microshare unpacked format](./#1-microshare-unpacked-format)
2. [Microshare Standards Data](./#2-microshare-standards-data)
    - A. [General Structure](./#a-general-structure)
    - B. [{Data}](./#b-data)
    - C. [Microshare Field Types](./#c-field-types)
    - D. [Meta/IoT](./#d-metaiot)
    - E. [Origin](./#e-origin)
    - F. [Unpacker](./#f-unpacker)
    - G. [recTypes](./#g-recTypes)
3. [Standards Data Table](./#3-standards-data-table)
4. [Example](./#4-example)
    - A. [Motion Data](./#a-motion-data)
    - B. [Temperature Data](./#b-temperature-data)
    - C. [Feedback Data](./#c-feedback-data)
    - D. [Contact tracing](./#d-contact-tracing)
    - E. [Asset Zoning](./#e-asset-zoning)
    - F. [Heartbeat Data](./f-heartbeat-data)

---------------------------------------


## 1. Microshare unpacked format
---------------------------------------


Data is sent as a payload from the IoT devices to the Microshare unpackers as raw, compressed data for efficiency. The data is then transformed and enriched by the Microshare unpacker into comprehensible information using one of our canonical json formats. This process ensures that the data can be analyzed consistently regardless of device vendor or the network used to transmit. The final format is referred to as unpacked data.

This guide will provide details on the processes involved in collecting the raw data and decompressing it into unpacked data. **Please note that the information supplied may differ slightly to that required for your network server, as details differ from server to server.**

Additionally, this guide will discuss tags. Tags are labels or descriptions attached to your device clusters for ease of identification. 




## 2. Microshare Standards Data
---------------------------------------

Example : 

```
{
  "meta": {
    "currentCount": 337,
    "currentPage": 1,
    "perPage": 1000,
    "source": "db",
    "totalCount": 1000,
    "totalPages": 1
  },
  "objs": [
    {
      "_id": "5ed1123046e0fb0028b70???",
      "checksum": "09BE84FF7E4E9CF6E4777C9900EDCDE0C0397956F251C8BCF08A5226A387FFA1L1521",
      "createDate": "2023-10-02T13:28:32.556Z",
      "creatorId": "yourname@microshare.io",
      "data": {
          co2": [
              {
                  "unit": "ppm",
                  "value": 462
              }
          ],
          "device_health": {
              "id": "00-16-16-00-00-00-0C-BB",
              "voltage": [
                  {
                      "unit": "V",
                      "value": 3.6
                  }
              ]
          },
          "humidity": [
              {
                  "unit": "%RH",
                  "value": 35
              }
          ],
          "temperature": [
              {
                  "unit": "°C",
                  "value": 23
              }
          ],
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
                "channel": 7,
                "device_id": "70-B3-D5-32-6B-00-08-8E",
                "fcnt_dwn": 0,
                "fcnt_up": 6,
                "fport": 2,
                "freq": 903.7,
                "iso_time": "2023-10-02T13:28:32.556Z",
                "ns_version": "v3.0",
                "payload": "0200dd001a02f2005a002f",
                "payload_fmt": 1,
                "rssi": -79,
                "sf": 10,
                "snr": 9.5,
                "time": "2023-10-02T13:28:32.556Z",
                "type": "uplink"
            },
            "source": [],
            "usecase": "SE09"
        },
        "time": "2023-10-02T13:28:32.556Z"
        "desc": "",
            "id": "651ac581c280e00aef5407dd",
            "name": "",
            "origin": {
                "checksum": "1FA94476E4CAA524F2622E41805A0484AD03D4DCA50FB0C0BC6B8933441E6445L650",
                "createDate": "2023-10-02T13:28:33.029Z",
                "creatorId": "yourname@microshare.io",
                "desc": "Record of Type io.microshare.environment.unpacked",
                "id": "651ac581c280e00aef5407dd",
                "name": "io.microshare.environment.unpacked",
                "remoteAddress": "172.172.172.35",
                "tokendata": {
                    "id": "58fb08bc-5b6f-4607-9606-8f8a821a0477",
                    "ip": "172.172.172.114"
                }
            },
            "owner": {
                "appid": "51C54CDB-D278-4CFD-B8378EF13462E5FB",
                "org": "io.microshare",
                "owners": [],
                "user": "yourname@microshare.io"
            },
            "recType": "io.microshare.environment.unpacked",
            "tags": [
              "Europe",
              "United Kingdom",
              "London",
              "Building 1",
              "1st Floor",
              "Men-West",
              "Men"
            ],
            "tstamp": 1696253313029,
            "updateDate": "2023-10-02T13:28:33.029Z",
            "updaterId": "yourname@microshare.io"
    }
  }
]}
```

#### A. General Structure

The majority of the information within the packet of data details the settings of the device cluster. The remaining pieces of information contain the data collected by the devices. 

This is how the device cluster is set up:


{% include image.html url="\assets\img\dc-data-formatnew.png" width="800" description="dc" %}

<br>

#### B. {Data}

Now let's talk about the `{Data}`, which contains the device information.

The various components include: 
  - C. [Microshare Field Types](./#c-field-types)
  - D. [Meta/IoT](./#d-metaiot)
  - E. [Origin](./#e-origin)
  - F. [Unpacker](./#f-unpacker)

Above is the device data within `{Data}`. 

All these values are explained with their units in the following table: 

##### > [Standards Data Table](./#3-standards-data-table)

`{Data}` contains information about the device that provided the data payload. This usually includes the device id, battery type, battery type, etc. The code supplied will look like: 

```
"device_health": {
    "id": "00-16-16-00-00-00-0C-BB",
    "voltage": [
        {
            "unit": "V",
            "value": 3.6
        }
    ]
},
```

#### C. Microshare Field Types

Microshare® has dedicated substantial effort towards developing a comprehensive library of Field Types to standardize the categorization of measurement data derived from sensors.

We have enhanced the precision and clarity of data collected from various sensors where sensor data forms the foundation of decision-making, such as environmental monitoring, industrial automation, and smart city management. 

Each Field Type within the library encapsulates a set of attributes:
- Unique identifier.
- Standard unit of measure.
- Comprehensive description that clearly explains what the sensor is measuring and how it should be interpreted.

This level of detail ensures that users across different domains can understand the significance of the sensor data without ambiguity whilst reducing errors in data interpretation and promoting interoperability across systems and applications that rely on sensor data.

The maintenance of this library is an ongoing process, reflecting the dynamic nature of technology and the emergence as new Field Types are introduced and existing ones refined. Microshare® ensures that its library remains an authoritative source for sensor data categorization, ultimately aiding in creating more intelligent, responsive, and efficient systems.

#### D. Meta/IoT

```
"meta": {
  "device": [
    "London",
    "1st Floor",
    "Office 3"
  ],
  "global": [
    "Europe",
    "United Kingdom",
    "London",
    "5 Merchant Square",
    "your environment"
  ],
  "iot": {
    "device_id": "58-A0-CB-00-00-40-??-??",
    "fcnt_dwn": 749,
    "fcnt_up": 4510,
    "fport": 103,
    "iso_time": "2020-06-17T09:48:08.494Z",
    "ns_version": "v3.0",
    "payload": "08cb3340ffffffff",
    "payload_fmt": 1,
    "time": "2020-06-17T09:48:08.494Z",
    "type": "uplink"
  },
  "source": []
},
```

##### The `meta` will provide:

- `device` - the device's specific location.

- `global` - location of the device's device cluster.

- `device_id` - the device's unique identification number.

- `type` - whether the information is an uplink (data is sent from the device up to the network server) or a downlink (data is sent from the network server down to the device). This will almost always be an uplink.

- `fcnt_up` -  the up count; the number of uplink interactions between the device and the network server.

- `fcnt_down` - the down count. 

- `fport` - the port where the device’s packet is sent to the network server.

- `iso_time` or `time`- the time at which the network received the device's data.

- `ns_version` - the version of the network server.

- `payload` - the data that the device sends out to the network server.



#### E. Origin

```
"origin": {
  "checksum": "09BE84FF7E4E9CF6E4777C9900EDCDE0C0397956F251C8BCF08A5226A387FFA1L1521",
  "createDate": "2020-06-17T09:48:08.980Z",
  "creatorId": "yourname@microshare.io",
  "desc": "Record of Type io.microshare.yourenvironment.unpacked",
  "id": "5ed1123046e0fb0028b70???",
  "name": "io.microshare.yourenvironment.unpacked",
  "remoteAddress": "your ip address",
  "tokendata": {
    "id": "006f6b5f-171e-46cf-8f70-c4fa15b6????",
    "ip": "your ip address"
  }
},
```

A thorough explanation of the origins can be found in the  [Overview page](/docs/2/technical/data-format/overview/#b3-origin). 

Some information may differ if you unpack the data in an account that is not the one hosting the packed data. This is unadvised and be cautious to avoid this mistake.

#### F. Unpacker

```
"unpacker": {
  "class": "io.tracknet.healthy.TBHV100.Decoder",
  "library": "lorawan_device_unpack",
  "version": "0.5.5"
},
```

The last block of data in `{Data}` describes the device cluster that is permitted to unpack the payload. This is important as Microshare has a large number of unpackers and sending the payload to the wrong unpacker may result in lost information. Below is the `library` of all the various Microshare unpackers and where it is located. The descriptors 'class'  and 'version' helps navigate this library. 

#### G. recTypes

| Solutions                     | packed RecType                      | unpacked RecType                                 |
| ----------------------------- | ----------------------------------- | ------------------------------------------------ |
| Activity Level Indicator      | io.microshare.motion.packed	      |   io.microshare.motion.unpacked                  |
| Brightness Monitoring         | io.microshare.light.packed	      |    io.microshare.light.unpacked                  |
| Decibel Monitoring         	| io.microshare.sound.packed	      |    io.microshare.sound.unpacked                  |
| Desk Occupancy Monitoring     | io.microshare.occupancy.packed	  |   io.microshare.occupancy.unpacked               |
| Feedback Stations             | io.microshare.feedback.packed	      |   io.microshare.feedback.unpacked(.event.meta)   |
| Fridge temperature Monitoring	| io.microshare.environment.packed	  |    io.microshare.environment.unpacked            |
| Indoor Air Quality Monitoring | io.microshare.environment.packed	  |    io.microshare.environment.unpacked            |
| Leak Detection                | io.microshare.leak.packed	          |    io.microshare.leak.unpacked                   |
| Open Shut Indicator	        | io.microshare.openclose.packed	  |   io.microshare.openclose.unpacked               |
| Room Occupancy Monitoring     | io.microshare.occupancy.packed	  |   io.microshare.occupancy.unpacked               |
| Smart Activity Timestamping   | io.microshare.feedback.packed	      |    io.microshare.feedback.unpacked(.event.meta)  |
| Smart Waste Management        | io.microshare.bin.packed	          |    io.microshare.bin.unpacked                    |
| Touchfree Feedback        	|                                     |  io.microshare.feedback.unpacked.event.meta      |
| Electricity Usage Monitoring	| io.microshare.current.packed	      |  io.microshare.current.unpacked                  |
| People Counting	            | io.microshare.peoplecounting.packed |	io.microshare.peoplecounting.unpacked            |


## 3. Standards Data Table
---------------------------------------

|**Measurement**|**Field**|**Unit**|**Device Field**|**Meaning**|
| - | - | - | - |- |
|Message Type|msg_type||true|Vendor-specific support for multipurpose devices|
|Device Fault|fault||true|Vendor-specific single that device/sensor is malfunctioning|
|Device Alert|alert||true|Vendor-specific single that device/sensor has alert|
||||||
|Device battery voltage |voltage|V|true|Electrical potential of battery or power-source|
|Device battery charge|charge|A|true|Percentage of battery charge remaining|
|Transmission Period|period|s|true|Frequency of device reporting|
|Transmission RSSI|rssi|dBm|true|Relative Signal Strength Indicator measuring wireless network signal strength|
|Transmission SNR|snr|dB|true|Signal to Noise Ratio indicator measuring wireless network signal interference|
|Device Reports since reset|reports_since_reset||true|Count of reports since device power-up or reset|
|PCB Temperature|temperature|°C|true|Temperature at the printed circuit board|
||||||
|Temperature|temperature|°C||Measure of hotness or coldness expressed in Celsius scale|
|Relative Humidity|humidity|%||Measure of concentration of water vapour present in the air relative to maximum (aka Relative Humidity)|
|Pressure|pressure|hPa||Measure of atmospheric pressure in force per unit area exerted by an atmospheric column|
|Illuminance|illuminance|lx||Measure of the amount of light falling onto and spreading over a given surface area|
|VOC|voc|ppb||Measure of Volatile Organic Compounds present in the air|
|CO2|co2|ppm||Measure of Carbon Dioxide present in the air|
|IAQ - Indoor Air Quality|iaq|||Vendor-specific measure of Air Quality relative to ideal for human-use|
|AQI- Air Quality Index|air_quality_index|||Vendor-specific measure of Air Quality relative to ideal for human-use|
|Loudness|loudness|dBA||Measure of magnitude of the auditory sensation conducted through the air|
|Haze Luminous Transmittance|haze_luminous_transmittance|%||Percentage of transmission light blocked by particles in the air|
|Smoke Optical Density|smoke_optical_density|dBm||Percentage of transmission light blocked by smoke in the air|
|Gas|gas|%LEL||Percentage of the gas composition of air by mole fraction|
|Particulate Matter|particulate_matter|µg/m³|||
|Particulate Matter Mass|particulate_matter_number|µg/m³|||
|Particulate Matter Typical Particle Size|particulate_matter_typical_particle_size|µm|||
||||||
| Formaldehyde          | formaldehyde         | µg/m³                |                  |Measure of presence of element within air|
| Benzene               | benzene              | µg/m³                |                  |Measure of presence of element within air|
| Ozone                 | ozone                | µg/m³                |                  |Measure of presence of element within air|
| Carbon Monoxide       | carbon_monoxide      | µg/m³                |                  |Measure of presence of element within air|
| Chlorine              | chlorine             | µg/m³                |                  |Measure of presence of element within air|
| Hydrogen              | hydrogen             | µg/m³                |                  |Measure of presence of element within air|
| Hydrogen Sulphide     | hydrogen_sulphide    | µg/m³                |                  |Measure of presence of element within air|
| Hydrogen Chloride     | hydrogen_chloride    | µg/m³                |                  |Measure of presence of element within air|
| Hydrogen Cyanide      | hydrogen_cyanide     | µg/m³                |                  |Measure of presence of element within air|
| Hydrogen Fluoride     | hydrogen_fluoride    | µg/m³                |                  |Measure of presence of element within air|
| Ammonia               | ammonia              | µg/m³                |                  |Measure of presence of element within air|
| Nitrogen Dioxide      | nitrogen_dioxide     | µg/m³                |                  |Measure of presence of element within air|
| Nitrogen Oxide        | nitrogen_oxide       | ppb                  |                  |Measure of presence of element within air|
| Oxygen                | oxygen               | µg/m³                |                  |Measure of presence of element within air|
| Sulfur Dioxide        | sulfur_dioxide       | µg/m³                |                  |Measure of presence of element within air|
| Sulfurous Odours      | sulfurous_odours     | OU           |                  |Measure of presence of element within air|
||||||
| Lighting Color                | lighting_color               | °K    |                  |Represents the color temperature of lighting, measured in Kelvin|
| Lighting Flickering           | lighting_flickering          | %   |                  |Measures the fluctuation in light output as a percentage|
||||||
| Health Index                  | health_index                 | %   |                  ||
| Cognitivity Index             | cognitivity_index            | %   |                  ||
| Sleep Index                   | sleep_index                  | %   |                  ||
| Throat Irritation Index       | throat_irritation_index      | %   |                  ||
| Building Health Index         | building_health_index        | %   |                  ||
| Virus Spreading Index         | virus_spreading_index        | %   |                  ||
||||||
|Leak|leak|||Binary presence of electrically detectable liquid|
|Lighter|lighter||||
|Darker|darker||||
|Dismantle|dismantle||||
||||||
|Current|current|A||Measure of electrical flow or movement of charge carriers through a conductive medium|
|Electric Multiplier|multiplier|||Mathematical multiplier to set scale for an electrical measure|
|Power|power|kW|||
|Power Consumption|power_consumption|kWh|||
||||||
|Presence|presence|||Binary measure representing the detection of a warm object|
|Motions since reset|motions_since_reset|||Count of warm object positional changes (motions) since device power-up or reset|
|Events since reset|events_since_reset|||Count of state changes since device power-up or reset|
|Motion since transmit|motions_since_transmit|||Count of warm object positional changes (motions) since last report|
|Acceleration|acceleration|m/s2||Measure of the change in velocity of a solid object|
|Velocity|velocity|m/s||Measure of the speed of motion of a solid object|
|*Compound field* X|x|||Position relative to an arbitrary starting point in horizontal plane|
|*Compound field* Y|y|||Position relative to an arbitrary starting point in vertical plane|
|*Compound field* Z|z|||Position relative to an arbitrary starting point in longitudinal plane|
||||||
|Closed status|closed|||Binary measure representing the proximate relative location (close) of two magnetic objects (Hall Effect) or electronic circuit ON|
|Open status|open|||Binary measure representing the proximate relative location (far) of two magnetic objects (Hall Effect) or electronic circuit OFF|
||||||
|Fill status|fill|%||Percentage measure of the reduction in capacity of a fixed depth container|
|Distance status|distance|m||Measure of unobstructed space between two solid objects|
||||||
|GPS|gps|||Measure of location relative to the surface of the Earth following the geographic coordinate system|
|*Compound field* Latitude|lat|||Measure of the North/South distance relative to the Earth's equator|
|*Compound field* Longitude|lon|||Measure of the East/West distance relative to the Earth's prime meridian|
|Accuracy|accuracy|m||Measure of the expected radius of uncertainty for a positional measurement|
||||||
|Push|push|||Binary measure of button or switch mechanical activation|
|Swipe|swipe|||Binary measure of electro-mechanical activation|
|Push since reset|push_since_reset|||Count of mechanical activation (pushes) since device power-up or reset|
||||||
| Learning Percentage                         | learning_percentage                            | %     |                  |Represents the percentage completion of a machine learning process or the degree to which a system has 'learned' from its dataset|
| Peak Frequency Index                        | peak_frequency_index                           | Hz       |                  |Denotes the index or position of the peak frequency within a spectrum, commonly used in signal processing to identify the dominant frequency component|
| Learning Type                               | learning_type                                  |       |                  |Indicates the category or method of learning employed by a system, such as supervised, unsupervised, reinforcement, or semi-supervised learning|
| Fast Fourier Transform                      | fast_fourier_transform                         | Hz       |                  |Refers to the result of a Fast Fourier Transform computation, which transforms a signal from the time domain into the frequency domain, revealing the frequency components of the signal|
||||||
| Vibration                                   | vibration                                      | Hz       |                  |Measure of oscillation of or in a solid object|
| Vibration Amplitude                         | vibration_amplitude                            | G     |                  |Measure of the maximum extent of a vibration or oscillation, taken from the position of equilibrium|
| Vibration Drift                             | vibration_drift                                | %     |                  |Percentage change in the vibration frequency or position over time|
| Vibration Drift Duration                    | vibration_drift_duration                       | min      |                  |Time duration over which vibration drift is observed or measured|
| Vibration Drift Prediction 24 Hours         | vibration_drift_prediction_24_hours            | hour        |                  |Predicted change in vibration behavior or characteristics 24 hours into the future|
| Vibration Drift Prediction 30 Days          | vibration_drift_prediction_30_days             | day         |                  |Predicted change in vibration behavior or characteristics 30 days into the future|
| Vibration Drift Prediction 6 Months         | vibration_drift_prediction_6_months            | month       |                  |Predicted change in vibration behavior or characteristics 6 months into the future|
| Operating Time                              | operating_time                                 | min      |                  ||
| Alarm Number                                | alarm_number                                   |       |                  ||
| Report Period                               | report_period                                  | min      |                  ||
||||||
|Count Since Reset|count_since_reset|||Count of generic events since device power-up or reset|
|Count Since Transmit|count_since_transmit|||Count of generic events since last report|
||||||
|Alarm |alarm|||Binary measure of generic event occurance (see SubTypes)|
||||||
|Time seconds since 1970|time|s||Measure of the thing that keeps on slipping into the future in seconds since Jan 1, 1970|
|ISO Time (ISO TIME - general field)|iso_time|||Measure of the thing that keeps on slipping into the future in ISO 8601 format|
|Seconds since change|seconds_since_change|s||Count of seconds since last event state change|
|Seconds|seconds|s||Measurement of time|
||||||

## 4. Example
---------------------------------------

#### A. Motion Data

```
{
    "meta": {
        "currentCount": 355,
        "currentPage": 1,
        "perPage": 1000,
        "source": "db",
        "totalCount": 1000,
        "totalPages": 1
    },
    "objs": [
        {
            "_id": "5eea1d8d46e0fb0028a0b???",
            "checksum": "8BAA297C7FC219B1EFFA2846C5B9C9EZE34CAC3671A7D3AF90C89CEC5DAABC2L1425",
            "createDate": "2023-10-02T13:28:32.556Z",
            "creatorId": "yourname@microshare.io",
            "data": {
                "device_health": {
                      "charge": [
                          {
                              "unit": "%",
                              "value": 0
                          }
                      ],
                      "id": "E8-E1-E1-00-01-03-C8-57",
                      "temperature": [
                          {
                              "unit": "°C",
                              "value": 6
                          }
                      ],
                      "voltage": [
                          {
                              "unit": "V",
                              "value": 3.6
                          }
                      ]
                  },
                  "motions_since_reset": [
                    {
                        "value": 86282
                    }
                ],
                "presence": [
                    {
                        "value": false
                    }
                ],
                "seconds_since_change": [
                    {
                        "unit": "s",
                        "value": 129900
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
                        "channel": 7,
                        "device_id": "70-B3-D5-32-6B-00-08-8E",
                        "fcnt_dwn": 0,
                        "fcnt_up": 6,
                        "fport": 2,
                        "freq": 903.7,
                        "iso_time": "2023-10-02T13:28:32.556Z",
                        "ns_version": "v3.0",
                        "payload": "0200dd001a02f2005a002f",
                        "payload_fmt": 1,
                        "rssi": -79,
                        "sf": 10,
                        "snr": 9.5,
                        "time": "2023-10-02T13:28:32.556Z",
                        "type": "uplink"
                    },
                    "source": [],
                    "usecase": "SC03"
                },
                "time": "2023-10-02T13:28:32.556Z"
            },
            "desc": "",
            "id": "651ac581c280e00aef5407dd",
            "name": "",
            "origin": {
                "checksum": "1FA94476E4CAA524F2622E41805A0484AD03D4DCA50FB0C0BC6B8933441E6445L650",
                "createDate": "2023-10-02T13:28:33.029Z",
                "creatorId": "yourname@microshare.io",
                "desc": "Record of Type io.microshare.feedback.unpacked.event.meta",
                "id": "651ac581c280e00aef5407dd",
                "name": "io.microshare.feedback.unpacked.event.meta",
                "remoteAddress": "172.172.172.35",
                "tokendata": {
                    "id": "58fb08bc-5b6f-4607-9606-8f8a821a0477",
                    "ip": "172.172.172.114"
                }
            },
            "owner": {
                "appid": "51C54CDB-D278-4CFD-B8378EF13462E5FB",
                "org": "io.microshare",
                "owners": [],
                "user": "yourname@microshare.io"
            },
            "recType": "io.microshare.feedback.unpacked.event.meta",
            "tags": [
              "Europe",
              "United Kingdom",
              "London",
              "Building 1",
              "1st Floor",
              "Men-West",
              "Men"
            ],
            "tstamp": 1696253313029,
            "updateDate": "2023-10-02T13:28:33.029Z",
            "updaterId": "yourname@microshare.io"
        },
```

The count represents the number of movements triggered, the range is 0 - 16,777,215. It resets at any power-cycle or battery replacement. 
The time represents the number of minutes since the last movement have been triggerd. The range is 0 – 65,535, it will be reset at the same time as the count. 



#### B. Temperature Data

```
{
  "meta": {
    "currentCount": 337,
    "currentPage": 1,
    "perPage": 1000,
    "source": "db",
    "totalCount": 1000,
    "totalPages": 1
  },
  "objs": [
    {
      "_id": "5ed1123046e0fb0028b70???",
      "checksum": "09BE84FF7E4E9CF6E4777C9900EDCDE0C0397956F251C8BCF08A5226A387FFA1L1521",
      "createDate": "2023-10-02T13:28:32.556Z",
      "creatorId": "yourname@microshare.io",
      "data": {
          co2": [
              {
                  "unit": "ppm",
                  "value": 462
              }
          ],
          "device_health": {
              "id": "00-16-16-00-00-00-0C-BB",
              "voltage": [
                  {
                      "unit": "V",
                      "value": 3.6
                  }
              ]
          },
          "humidity": [
              {
                  "unit": "%RH",
                  "value": 35
              }
          ],
          "temperature": [
              {
                  "unit": "°C",
                  "value": 23
              }
          ],
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
                "channel": 7,
                "device_id": "70-B3-D5-32-6B-00-08-8E",
                "fcnt_dwn": 0,
                "fcnt_up": 6,
                "fport": 2,
                "freq": 903.7,
                "iso_time": "2023-10-02T13:28:32.556Z",
                "ns_version": "v3.0",
                "payload": "0200dd001a02f2005a002f",
                "payload_fmt": 1,
                "rssi": -79,
                "sf": 10,
                "snr": 9.5,
                "time": "2023-10-02T13:28:32.556Z",
                "type": "uplink"
            },
            "source": [],
            "usecase": "SE09"
        },
        "time": "2023-10-02T13:28:32.556Z"
        "desc": "",
            "id": "651ac581c280e00aef5407dd",
            "name": "",
            "origin": {
                "checksum": "1FA94476E4CAA524F2622E41805A0484AD03D4DCA50FB0C0BC6B8933441E6445L650",
                "createDate": "2023-10-02T13:28:33.029Z",
                "creatorId": "yourname@microshare.io",
                "desc": "Record of Type io.microshare.environment.unpacked",
                "id": "651ac581c280e00aef5407dd",
                "name": "io.microshare.environment.unpacked",
                "remoteAddress": "172.172.172.35",
                "tokendata": {
                    "id": "58fb08bc-5b6f-4607-9606-8f8a821a0477",
                    "ip": "172.172.172.114"
                }
            },
            "owner": {
                "appid": "51C54CDB-D278-4CFD-B8378EF13462E5FB",
                "org": "io.microshare",
                "owners": [],
                "user": "yourname@microshare.io"
            },
            "recType": "io.microshare.environment.unpacked",
            "tags": [
              "Europe",
              "United Kingdom",
              "London",
              "Building 1",
              "1st Floor",
              "Men-West",
              "Men"
            ],
            "tstamp": 1696253313029,
            "updateDate": "2023-10-02T13:28:33.029Z",
            "updaterId": "yourname@microshare.io"
    }
  }
]}
```

#### C. Feedback Data

```
{
  "meta": {
    "currentCount": 337,
    "currentPage": 1,
    "perPage": 1000,
    "source": "db",
    "totalCount": 1000,
    "totalPages": 1
  },
  "objs": [
    {
      "_id": "5ed1123046e0fb0028b70???",
      "checksum": "09BE84FF7E4E9CF6E4777C9900EDCDE0C0397956F251C8BCF08A5226A387FFA1L1521",
      "createDate": "2023-10-02T13:28:32.556Z",
      "creatorId": "yourname@microshare.io",
      "data": {
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
                "channel": 7,
                "device_id": "70-B3-D5-32-6B-00-08-8E",
                "fcnt_dwn": 0,
                "fcnt_up": 6,
                "fport": 2,
                "freq": 903.7,
                "iso_time": "2023-10-02T13:28:32.556Z",
                "ns_version": "v3.0",
                "payload": "0200dd001a02f2005a002f",
                "payload_fmt": 1,
                "rssi": -79,
                "sf": 10,
                "snr": 9.5,
                "time": "2023-10-02T13:28:32.556Z",
                "type": "uplink"
            },
            "source": [],
            "usecase": "SF01"
        },
        "time": "2023-10-02T13:28:32.556Z"
        "desc": "",
            "id": "651ac581c280e00aef5407dd",
            "name": "",
            "origin": {
                "checksum": "1FA94476E4CAA524F2622E41805A0484AD03D4DCA50FB0C0BC6B8933441E6445L650",
                "createDate": "2023-10-02T13:28:33.029Z",
                "creatorId": "yourname@microshare.io",
                "desc": "Record of Type io.microshare.feedback.unpacked",
                "id": "651ac581c280e00aef5407dd",
                "name": "io.microshare.environment.unpacked",
                "remoteAddress": "172.172.172.35",
                "tokendata": {
                    "id": "58fb08bc-5b6f-4607-9606-8f8a821a0477",
                    "ip": "172.172.172.114"
                }
            },
            "owner": {
                "appid": "51C54CDB-D278-4CFD-B8378EF13462E5FB",
                "org": "io.microshare",
                "owners": [],
                "user": "yourname@microshare.io"
            },
            "recType": "io.microshare.feedback.unpacked",
            "tags": [
              "Europe",
              "United Kingdom",
              "London",
              "Building 1",
              "1st Floor",
              "Men-West",
              "Men"
            ],
            "tstamp": 1696253313029,
            "updateDate": "2023-10-02T13:28:33.029Z",
            "updaterId": "yourname@microshare.io"
    }
  }
]}
```

#### D. Contact Tracing

```
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
```

```
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
```


#### E. Asset Zoning

See below the code for more detail on the meaning of the different fields.

```
  {
        "_id": "5fb54be9a401e8001d80c7fb",
        "checksum": "AC23F16DDC3330223DEC3AE9B60DF4FC03BC9CD633A07294BF1BE2B97D9E5BA7L633",
        "createDate": "2020-10-17T16:29:29.769Z",
        "creatorId": "admin@microshare.io",
        "data": {
          "device": {
            "id": "AC754B6636BC"
          },
          "event": "confirm",
          "external_id": "",
          "meta": {
            "device": [
              "Machine",
              "Xray",
              "Xray1"
            ],
            "iot": {
              "device_id": "AC754B6636BC"
            },
            "source": {
              "device": [
                "Main Building",
                "First Floor",
                "Entrance",
                ""
              ],
              "global": [
                "UK",
                "London",
                "West Hill",
                "Asset Zoning"
              ],
              "iot": {
                "device_id": "78-70-EE-00-69-04-02-50",
                "fcnt_dwn": 12694,
                "fcnt_up": 12841,
                "fport": 85,
                "ns_version": "v3.0",
                "payload": "a1616381831ab76eda4f3600",
                "payload_fmt": 1,
                "time": "2020-10-17T16:29:29.172Z",
                "type": "uplink"
              },
              "source": []
            }
          },
          "movement": false,
          "signal": {
            "unit": "rssi",
            "value": -93
          },
          "time": "2020-10-17T16:29:29.172Z"
        },
        "desc": "",
        "id": "5fb54be9a401e8001d80c7fb",
        "name": "",
        "origin": {
          "checksum": "AC23F16DDC3330223DEC3AE9B60DF4FC03BC9CD633A07294BF1BE2B97D9E5BA7L633",
          "createDate": "2020-10-17T16:29:29.769Z",
          "creatorId": "admin@microshare.io",
          "desc": "Record of Type io.microshare.zoning.unpacked.mock.event",
          "id": "5fb54be9a401e8001d80c7fb",
          "name": "io.microshare.zoning.unpacked.mock.event",
          "remoteAddress": "",
          "tokendata": {
            "id": "",
            "ip": ""
          }
        },
        "owner": {
          "appid": "51C54CDB-D278-4CFD-B8378EF13462E5FB",
          "org": "io.microshare",
          "owners": [],
          "user": "admin@microshare.io"
        },
        "recType": "io.microshare.zoning.unpacked.mock.event",
        "tags": [
          "Machine",
          "Xray",
          "Xray1"
          "UK",
          "London",
          "West Hill",
          "Main Building",
          "First Floor",
          "Entrance"
        ],
        "tstamp": 1605716969769,
        "updateDate": "2020-10-17T16:29:29.769Z",
        "updaterId": "admin@microshare.io"
      }
```

* data.event - this has 3 values:
* "new" - the device has entered the range of the wave scanner
* "remove" - the device was previously in range and has left the range of the wave scanner. RSSI will be 0
* "confirm" - the device was previously in range and is still in range of the scanner
* data.meta.device are the details of the detected asset
* data.meta.source.device and .global are the details of the wave scanner that detected the device
* data.movement  - ( True – Asset is moving/False – Asset is not moving)
* data.device.id - Tag ID (BLE Tag) 
* data.signal - Signal Strength 
* data.time - Event Time (Last Seen) 


#### F. Heartbeat Data

Used in contact tracing and asset zoning solutions, a heartbeat record indicates a communication between Microshare and a wearable device to ensure that the device is operating properly. Heartbeat records are used for devices in storage mode and active devices with no previous contact records (which would otherwise not be detailed in the event data in contact tracing solutions). 

**Parameters:**

- `id`: The identification number of your device in communication.
- `deviceBattery`: The battery level of your device.
- `messageType`: This feild will be "contact" for a contact tracing solution and "asset" for a asset zoning solution. 
- `mode`: This field will read "storage" if the device in contact is in storage and inactive. If "nominal", the device in contact is active but has no previous contact records. 

```
{
  "device": {
    "id": "ACD340663???"
  },
  "deviceBattery": 2.673,
  "messageType": "contact",
  "meta": {
    "device": [],
    "iot": {
      "device_id": "ACD340663???"
    },
    "source": {
      "device": [
        "HQ",
        "Main Floor",
        "Break Room",
        ""
      ],
      "global": [],
      "iot": {
        "device_id": "AA-BB-CC-DD-00-??-??-??"
      },
      "source": {}
    }
  },
  "mode": "nominal",
  "time": "2020-10-05T17:19:02.855Z"
}
```
