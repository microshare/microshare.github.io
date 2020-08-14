---
layout: docs
title: Contact Tracing Installation Guide
description: 
toc: true
---


---------------------------------------
{% include image.html url="/assets/img/uct/uct-1.jpg"  width="800" description="demo" %}

#### Summary

1. [Overview](./#overview)
2. [Instructions](./#instructions)
3. [More on Tags](./#more-on-tags)
4. [Frequently Asked Questions](./#frequently-asked-questions)


For more a more technical walkthrough of Contact Tracing device data, check out the [Data Formatting Contact Tracing Page](/docs/2/technical/data-format/contact-tracing). 

## Overview
---------------------------------------

<br>
This guide outlines the prerequisites for preparing an environment for a Contact Tracing or Digital Twinning solution. These steps must be followed to ensure that the site is properly organized, as the placement of the devices is crucial for a successful installation.

{% include image.html url="/assets/img/digital-twinning-1.png" width="800" description="demo" %}




## Instructions
---------------------------------------

<br>
##### 1. Confirm the Identity and the Account structure.

Before preparing the environment, double-check that all of the client's associated identities have the necessary permissions. 


##### 2. Confirm the address(es) of the installation site(s).

Additionally, confirm the location of the environment with your client. This information will be used in the `Metatags` for your devices and are necessary for connecting the client's data with their dashboard(s). 


##### 3. Ask for a floor plan if not previously provided.

Floor plans will be used to designate the best locations for devices. CAD files are the preferred form of a floor plan, yet other forms of are feasible (something is better than nothing!).


##### 4. Review the devices the client has ordered. 

Check that you have all the necessary devices and that they are functioning properly. This would be a good time to copy down the device IDs for safekeeping.


##### 5. Establish the exact placement of the devices.

<br>
**Location Beacons**

Areas of congestion are the primary considerations for the placement of the Location Beacons. Additionally, the client should be consulted regarding any specific areas they are interested in covering.


**Waves**

For the installations of the Waves, primary points of entry or bottlenecks(high traffic areas) are the ideal placements. The placement should also give the Wave adequate area coverage and access to a power outlet while avoiding heavy machinery. The Waves should be installed higher up on a wall using screws, double-sided tape, or command strips. 

**Gateways**

Rooms to house the gateways should meet the following criteria:

- Have a power source
- Behind a locked door
- Ideally located close to the Waves
    - Generally in the Digital Twinning solution, the distance between the gateways and the Waves should be minimized. This is opposed to the installation process of the other Microhsare® solutions. 
- Have decent coverage
- Ideally do not have too much metal within the rooms.
- Ideally do not have many electronics in the rooms.

Before starting the process of selecting rooms, ask the client what rooms are available. 

##### 6. Establish the tags used to describe the Waves.

Tags are electronic location identifiers attached to the devices so the device's data can be distinguished and sent to the right dashboard. Microshare® uses three identifiers for a device with the first being the most general and the third being the most specific. **The level of specificity depends on the client.** Occasionally, the tags might start with a country then move to a state/county/providence and then the building **or** the tags will start from the building address, the floor and then a room such as the following:

- Tag1: `Main Street Office` 
- Tag2: `Floor 2`
- Tag3: `Room 205`
- All together: `Main Street Office`,`Floor 2`,`Room 205`

You must decide the naming convention as early as possible. The second option described above is the most common tag convention used. Still confused on the tags? Check out the [More on Tags Section.](./#more-on-tags)

##### 7. Fill out the Device Twinning document(s) for each device using the aforementioned naming conventions.

Some things to know while filling out the Device Twinning document(s):
- Each device type should have its tab on the spreadsheet.
- The documents should be filled out following the meeting with the client.
- The document(s) will be used for the installation process. 

##### 8. Set client expectations by broadly walking them through the installation process. 


Ensuring client engagement and involvement throughout the installation process is an utmost priority of Microshare®. Guide the client through each step and be transparent regarding important details such as the specifications of device placements or the management of their accounts. Building a connection with the client is vital for displaying their prioritization. **Ask for the email(s) of the installer(s).**


{% include image.html url="/assets/img/CleanSafeOverview4.png" width="800" description="demo" %}

## More on Tags
---------------------------------------

Digital Twinning is used to connect material assets to their corresponding device(s). These devices manifest as tags in Microshare® which, broadly speaking, are used to differentiate data within the same data record (recType). A Tag can fall under one of two categories: Meta and Device.

#### MetaTags

`MetaTags` give geographical contect in terms of country, state, county etc. Clients who prefer more privacy will typically not use this type of MetaTag.

The `MetaTag` most often includes the company or project owner's name. For example, Microshare® would use "microshare" as a `Metatag`. 

`MetaTags` will give context for the data by giving the specific location and type of data. For instance: Bathroom Feedback vs Meeting Room Feedback. This ensures that the data is going to the proper Microshare® Dashboard. 

A complete `MetaTag` example:

`America,USA,PA,Philadelphia,1635 Market Street, Microshare,Bathroom`


#### Device Tags

Device tags provide a more granular breakdown of device location. The device tags are determined during the site checklist meeting with the client. The determination of the tags are largely driven by what the client wants to see in the data. The tags typical go as follows:

- Tag1 = "Floor"
- Tag2 = "Part of building"
- Tag3 = "Room Number"

The naming conventions of the tags are flexible to accommodate variations. The variations depend on the size and shape of the installation site. For example:

- Tag1 = "Building"
- Tag2 = "Floor"
- Tag3 = "Room Number"

A complete device tag example:

- Tag1 = "Philadelphia Office"
- Tag2 = "1st Floor Mezzanine"
- Tag3 = "Gender Neutral (202)"


## Frequently Asked Questions
---------------------------------------
{% include image.html url="\assets\img\clean-safe.png" description="clean safe" %}

**Question** I am having trouble understanding the JSON data fields, what do they mean?

**Amswer** The [Data Formatting Contact Tracing Page](/docs/2/technical/data-format/contact-tracing) has a section that describes how your devices' data is formatted and what each field means. 

<br>
**Question** Is it safe to ignore a person-to-location beacon contact? 

**Answer** It may seem unnecessary to consider the person-to-location beacon contact as we are more interested in the person-to-person contact, but the person-to-location beacon contact **will be used** to determine what areas need to be cleaned if there is a COVID incident. Both contacts are important for the Contact Tracing solution.

<br>
**Have a question not answered here?**

**Check out the [Data Formatting Contact Tracing Page](/docs/2/technical/data-format/contact-tracing) or contact `support@microshare.io`.** 



{% include image.html url="/assets/img/microshare-logo.png" description="demo" %}

