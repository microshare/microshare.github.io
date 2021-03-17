---
layout: docs
title: Asset Zoning Installation Guide
description: How to install a Microshare Asset Zoning solution
toc: true
---

---------------------------------------

Asset Zoning Installation Guide

This document includes important details on the correct, safe and efficient methods of installation for Microshare Smart FM Solutions.

_We have delivered and installed thousands of sensors to clients all over the world across a wide range of range of applications, so please get in contact with us if you need any assistance. Our expert team are on hand and ready to support you._

Contact [installation@microshare.io](mailto:installation@microshare.io) should you require any assistance

**Note**

Using your Microshare solutions safely

- Follow the stated battery requirements before installing any batteries. 
- Never force a connector into a port. If the connector and port don't join with reasonable ease, they probably don&#39;t match. Make sure that the connector matches the port and that you have positioned the connector correctly in relation to the port.
- Protect Microshare sensors from direct sunlight, wherever possible.
- Use Microshare solutions in environments according to their specification. Most products arefor indoor use only. 
- There are no user-serviceable parts inside Microshare sensors. For service personnel: Always unplug external power supply, remove batteries, and turn off UPS battery before service operation. 
- Microshare sensors may be damaged by improper storage or handling. Take care not to drop them during transport and installation.

{% include image.html url="/assets/img/installation_tabs/security.png" description="Banner" %}

WARNING: Do not attempt to open or disassemble any Microshare solutions. You run the risk of electric shock and voiding the limited warranty. No user-serviceable parts are inside.

This information could include technical inaccuracies or typographical errors. Changes are periodically made to the information herein; these changes will be incorporated in new editions of the publication. Microshare may make improvements and/or changes in the product(s) and/or the program(s) described in this publication at any time without notice.

### ST01 – Asset Zoning

The Asset Zoning solution from Microshare is a complete sensing service for facilities managers looking to monitor and track the wherabouts of key assets around their facilities. 

What’s in the box? In terms of deploying quickly, the Asset Zoning solution from Microshare includes easily installed IoT scanners, location markers and individual asset tags, device connectivity, access to data and alerts via Microshare Business Tools dashboards or direct API access to data through Microshare Smart Network.

**Installation instructions:**

| --- | --- |
| **1.** **Installing the Kerlink Wave** <br> - The Wave device is the bridge between your Asset Tags and the Microshare Smart Network. Data from the tags is received/scanned by the Wave as they come within proximity of the device and is then transmitted to the LoRaWAN gateway and on to the Microshare Smart Network. <br> - Take the Kerlink Wave out of the packaging |{% include image.html url="/assets/img/UCT_Install_Images/AssetZoning_WaveScanner.png" description="Banner" %}|
| **2.** **Deploying the Kerlink Wave (without screws - if using screws skip this part)** <br> - If you are not using screws, stick the adhesive tape pads onto the back of the device as shown in the picture. |{% include image.html url="/assets/img/UCT_Install_Images/DeployingKerlink.png" description="Banner" %}|
| **3.** **Registering the Kerlink Wave** <br> - Using the scanning device, scan the QR code on the Wave into the &quot;Digital Twinning&quot; excel spreadsheet provided <br> - We typically use three **tags** to annotate where a device is located - an example would be **&quot;Building A, Floor 2, Room 5&quot;** <br> Here you can find an example : [Data Format](/docs/2/technical/data-format/microshare-standards/#d-metaiot) |{% include image.html url="/assets/img/UCT_Install_Images/RegisteringKerlink.png" description="Banner" %}|
| **4.** **Powering on the Kerlink Wave** <br> - Plug the mains cable into the plug socket-Plug the other end into the Kerlink wave <br> - A green light will show once the device has power |{% include image.html url="/assets/img/UCT_Install_Images/PoweringKerlink.png" description="Banner" %}|
| **5.** **Fixing the Kerlink Wave** <br> - Use the adhesive pads to stick the Wave onto the predesignated location, ensuring the cable is still connected properly |{% include image.html url="/assets/img/UCT_Install_Images/InstallingKerlink.png" description="Banner" %}|
| **6.** **If you are using screws to attach the Kerlink Wave** <br> - Open the covers on the Kerlink Wave, exposing the screw holes - Mark out and drill suitable holes and use raw plugs in the wall as required. <br> - Attach the Wave to the wall with suitably sized screws. |{% include image.html url="/assets/img/UCT_Install_Images/ScrewingKerlink3.png" description="Banner" %}|
| **7.** **Registering using the Deploy-M app [iOS & Android]** <br> - You should already have the Deploy-M app and login details as part of your project set-up with Microshare <br> - Login using your credentials, if you are unsure or require assistance, please contact [installation@microshare.io](mailto:installation@microshare.io) |{% include image.html url="/assets/img/leak-installation/Image12.png" description="Banner" %}|
| - Select the correct device cluster for the devices you are installing. <br> Note – a "Device Cluster" is simply grouping of sensors, usually in one space, that helps identify and annotate the data you receive from your Microshare solution.|{% include image.html url="/assets/img/leak-installation/Image13.png" description="Banner" %}|
| - Select the correct location where the device will be installed. <br> - Click Add |{% include image.html url="/assets/img/leak-installation/Image14.png" description="Banner" %}|
| - Once the sensor has been added to the correct location on the app, click & RESCAN to open the devices camera |{% include image.html url="/assets/img/leak-installation/Image15.png.png" description="Banner" %}|
| - Scan the QR code located on the Sensor |{% include image.html url="/assets/img/Asset_Zoning_Installation/DeployM_Wave_Scan.jpg" description="Banner" %}|
| - Check that the Dev EUI [usually on the device under the QR code] shown matches the one on your device, then select save from the bottom of the screen. |{% include image.html url="/assets/img/leak-installation/Image17.png" description="Banner" %}|
| **8.** **Deploying the Asset Tags** <br> - Open the packaging and take out the Microshare Asset Tags |{% include image.html url="/assets/img/UCT_Install_Images/LocationMarkerBoxed.jpg" description="Banner" %}|
| **9.** **Taking the device out of the packaging** <br> - Remove clear wrapping from the Asset Tags<br><br>-NOTE: There are several different form factors of Asset Tags.The Microshare C10 Card and the Microshare E9 tag as shown in these images are attached to the assets you wish to track |{% include image.html url="/assets/img/UCT_Install_Images/CardBeacon.png" description="Banner" %} <br> {% include image.html url="/assets/img/UCT_Install_Images/LocationMarker.png" description="Banner" %}|
| **10.** **Powering on the Asset Tags** <br> - To power on the Microshare C10 card device, press down on the side of the device with the Power symbol as shown. A red light will begin to flash – this signals that the device has been powered on. |{% include image.html url="/assets/img/UCT_Install_Images/PoweringLocationTag.png" description="Banner" %}|
| - For the Microshare E9 Asset Tags, simply unscrew the top to expose the battery case and remove the plastic battery tag used for transporting the devices. | {% include image.html url="/assets/img/UCT_Install_Images/B7_LocationMarker.jpg" description="Banner" %}|
| **11.** **Attaching the adhesive tape** <br> - Stick the adhesive tape to the side of the device with the power symbol as shown |{% include image.html url="/assets/img/UCT_Install_Images/LocationWith3M.png" description="Banner" %}|
| **12.** **Fixing the Asset Tags** <br> - Stick the device on to the pre-assigned asset using the provided adhesive tape on the device, or use <br>-Ensure that the QR code is still visible – as shown in the picture. |{% include image.html url="/assets/img/UCT_Install_Images/LocationFixOnWall.png" description="Banner" %}|



**Once you have completed the registration of the Wave Scanner using the Deploy-M app, you are ready to log the Asset Tags.**

| --- | --- |
| **1.** **Logging your Asset Tags** <br> - When tracking multiple assets, we recommend using a portable QR scanner to obtain the device ID's. <br> - Log in to the web-based Microshare Asset Zoning Management portal using the dedicated login provided.|{% include image.html url="/assets/img/UCT_Install_Images/RegisteringLocationTags.png" description="Banner" %}|
| **2.** **Complete the fields accurately for your specific installation,. Failure to capture the correct information at this stage will create data management issues for your instance** <br>-**ID**: This is the ID of the Asset Tag, the device QR contains this <br> - **Type**: This field denotes the type of asset you are tracking (Equipment, Machine, Vehicle for example) <br> - **Category**: The is the sub-category for the asset Type (Equipment > Wheelchair, Vehicle > Forklift, Machine > Printer for example) <br> - **Label**: This is for giving your asset a unique label to help identify it in your data feed (Wheelchair-A23, Forklift-7 for example) <br>- **External_ID**: This optional field can be used to further identify items in your data instance |{% include image.html url="/assets/img/Asset_Zoning_Installation/AssetZoning_ManagementScreen1.png" description="Banner" %}|



**For larger asset listings, we recommend creating a CSV file with all the relevant details and use dummy Asset Tag ID's in order to scan and overwrite with the actual device using the QR scanner**

<style>
    tr td:first-child {
        width:60%;
        vertical-align:top;
    }

    tr td:nth-child(2) {
        width:40%;
    }
</style>
