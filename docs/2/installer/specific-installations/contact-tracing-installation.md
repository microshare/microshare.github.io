---
layout: docs
title: Contact Tracing Installation
description: How to install a Microshare™ Contact Tracing Solution
toc: true
---

**Setup and Installation Guide**

_We have delivered and installed thousands of sensors to clients all over the world across a wide range of range of applications, so please get in contact with us if you need any assistance. Our expert team are on hand and ready to support you._

Contact [`installation@microshare.io`](mailto:installation@microshare.io) should you require any assistance

---------------------------------------

### ST05 – Universal Contact Tracing (UCT)

The Universal Contact Tracing solution from Microshare is a complete sensing service for organizations looking to provide a safer working environment by enabling anonymous monitoring and alerting of human-to-human and human-to-location contact events within a working environment such as a factory, office or construction site.

What&#39;s in the box? The Contact Tracing solution from Microshare includes:

* `Battery-operated Bluetooth enabled wearable devices [with wristband, armband and/or lanyard attachments]`

* `Bluetooth location markers [with adhesive strips]`

* `Wave devices`

* `LoRaWAN Gateway devices`

* `Portable USB QR scanning device`

Also included with our solutions is device connectivity, direct API and streaming data access via the Microshare Smart Network.

Alongside installation of the hardware, there are data processes to setup at your side in order to implement the UCT solution from Microshare. This document covers both the data set up steps and the steps required for installation of hardware.

We recommend that the hardware is installed/activated in the following order. After the installation/activation of each device, you can email [`installation@microshare.io`](mailto:installation@microshare.io) to confirm that each component is setup and registering with the network correctly:

* `1.   LoRaWAN Gateway`

* `2.   Wave devices`

* `3.   Location markers`

* `4.   Wearable devices`

---------------------------------------

#### Guide sections and installation steps: 
<br>
[Section 1 – Pre-installation data streaming test steps](./#section-1---pre-installation-data-streaming-test-steps)

[Section 2 – Hardware setup steps and LoRaWAN Gateway install instructions](./#section-2--lorawan-gateway-install-instructions)

[Section 3 – Set up the Wave](./#section-3---installing-the-kerlink-wave)

[Section 4 – Set up the Location Markers](./#section-4---set-up-the-location-markers)

[Section 5 – Activate the Wearable Devices](./#section-5--activate-the-wearable-devices)

   A. [Activate my wearable device (B7)](./#a--activate-my-wearable-device-b7)

   B. [Activate my Card-type wearable device (C10)](./#b--activate-my-card-type-wearable-device-c10)

[Section 6 – Move to a live installation](./#section-6--move-to-a-live-installation)

---------------------------------------

## Section 1 - Pre-installation data streaming test steps

*   Setup Streaming service to receive test data

*   Once set up, securely share your endpoint information with Microshare to allow for receipt of test data

*   Receive test streaming data and start to build artifacts to analyze the data

**Streaming Service Overview**

For Universal Contact Tracing, we provide streaming integration via multiple services. Contact Tracing data will be streamed to you via one of the services and you will be able to create dashboards, reports, and/or alerts within your own toolsets.

Streaming Integration Services:

**>** [Microsoft Azure Event Hub](http://docs.microshare.io/docs/2/technical/streaming-integration/azure-event-hub-integration/)

**>** [Microsoft Azure IoT Hub](http://docs.microshare.io/docs/2/technical/streaming-integration/azure-iot-hub-integration/)

**>** [AWS Kinesis](http://docs.microshare.io/docs/2/technical/streaming-integration/aws-kinesis-data-stream-integration/)

**>** [AWS SQS](http://docs.microshare.io/docs/2/technical/streaming-integration/aws-sqs-integration/)

**>** [Google Pub/Sub](http://docs.microshare.io/docs/2/technical/streaming-integration/google-pub-sub-integration/)

We can stream a set of UCT test data to you so that you can start to build the dashboards, reports, and/or alerts whilst waiting for the hardware to arrive and be installed. The steps below outline the general steps that can be used in conjunction with the specific stream steps above.

**Setup**

1.  Use the streaming service specific instructions to set up your test service. Provide your Microshare contact with the endpoint information requested (e.g. csv, primary connection string, private key, etc.) via a secure method

2.  Microshare will stream test data to your endpoint

3.  Create dashboards, reports, and/or alerts using the test data stream

4.  Use the streaming service specific instructions to set up your production stream. You can use the same stream previously provided to Microshare or create a new one. Provide your Microshare contact with the endpoint information requested via a secure method

5.  Once your hardware has been set up and data creation has been confirmed, Microshare will begin streaming your data to the new endpoint

## Section 2 – LoRaWAN Gateway install instructions

*   Receive shipment[s] of required hardware; LoRaWAN Gateway[s], Kerlink Wave, Location Markers and Wearable Devices

*   Set up LoRaWAN Gateways in locations as determined during the Site Checklist meeting

*   Once these steps are complete, notify Microshare on [`installation@microshare.io`](mailto:installation@microshare.io) to enable us to verify that the gateways are transmitting data with a good signal

**Installing LoRaWAN Gateways**

The LoRaWAN Indoor Gateway with 4G Backhaul from Microshare receives radio transmissions from the deployed Microshare IoT devices in and around your building and uses an integrated cellular/mobile connection to send data securely to the Microshare Smart Network.

Please make sure your selected physical install location will allow for a good cellular signal and is central to the IoT devices you will use in your facility. Contact Microshare if you have any queries on the best place to install the gateway. Bad placement will result in poor performance of the overall system.

**Indoor gateway installation instructions:**

Inside the box you will find the Indoor Gateway, the device antenna and the power supply unit or Power over Ethernet (POE) adaptor. Installation enables IoT device connectivity and access to data through the Microshare Smart Network.

| --- | --- |
| **1.** **Unboxing the Gateway** <br>Unbox your indoor gateway and all you need to have your LoRaWAN network up and running is to:<br>1. Connect the antenna<br>2. Plug into a mains power source or power over ethernet (POE) port<br>3. Wait 1-2 minutes for the connection to be established | {% include image.html url="/assets/img/UCT_Install_Images/IndoorGatewayBox.png" description="Banner" %}|
| **2.** **Connecting the Antenna** <br><br>-Screw the antenna to the gold connector in the right-hand side of the gateway | {% include image.html url="/assets/img/UCT_Install_Images/IndoorGatewayAntenna2.png" description="Banner" %}|
| |{% include image.html url="/assets/img/UCT_Install_Images/IndoorGatewayAntenna.png" description="Banner" %}|
| **3.** **Power the Gateway** <br><br>-Plug the power adaptor into the power socket on the gateway | {% include image.html url="/assets/img/UCT_Install_Images/IndoorGatewayPower.png" description="Banner" %} |
| -Plug the power adaptor into an electricity outlet [the LED&#39;s on the device will be red, showing that power is on] | {% include image.html url="/assets/img/UCT_Install_Images/IndoorGatewayPower2.png" description="Banner" %}  |
| -Alternatively use the Power Over Ethernet (POE) adaptor as shown in the image | {% include image.html url="/assets/img/UCT_Install_Images/POE_Adaptor1.jpg" description="Banner" %}  |
| **4.** **Wait 1-2 minutes** <br><br> -After 1-2 minutes, the two LEDs on the front will turn solid green, your LoRaWAN gateway is up and running and your sensors can be deployed in your building.** You&#39;re all done!**Please email [`installation@microshare.io`](mailto:installation@microshare.io) to indicate your gateway is up and running, so that we can confirm at our end. | {% include image.html url="/assets/img/UCT_Install_Images/POE_Adaptor2.jpg" description="Banner" %} |

**If you are installing an outdoor gateway, see [https://docs.microshare.io/docs/2/installer/lorawan/gateway-installations/outdoor-istation/](https://docs.microshare.io/docs/2/installer/lorawan/gateway-installations/outdoor-istation/) for the Outdoor Gateway Installation Instructions**

## Section 3 - Installing the Kerlink Wave:

The Wave device is the bridge between your wearable devices and the Microshare Smart Network. Data from the wearables is received/scanned by the Wave as they come within proximity of the device and is then transmitted to the LoRaWAN gateway and on to the Microshare Smart Network.

| --- | --- |
| **1.** **Unbox the Kerlink Wave** <br><br>-Take the Kerlink Wave out of the packaging | {% include image.html url="/assets/img/UCT_Install_Images/AssetZoning_WaveScanner.png" description="Banner" %} |
| **2.** **Deploying the Kerlink Wave (without screws - if using screws skip this part)** <br><br>-If you are not using screws, stick the adhesive tape pads onto the back of the device as shown in the picture. <br id="registerWave"> | {% include image.html url="/assets/img/UCT_Install_Images/DeployingKerlink.png" description="Banner" %}  |
| **3.** **Registering the Kerlink Wave** <br><br>-Using the scanning device, scan the QR code on the back of the Wave into the &quot;Digital Twinning&quot; excel spreadsheet provided<br>-We typically use three **tags** to annotate where a device is located - an example would be **&quot;Building A, Floor 2, Room 5&quot;** <br> Here you can find an example : [Data Format](/docs/2/technical/data-format/microshare-standards/#d-metaiot) | {% include image.html url="/assets/img/UCT_Install_Images/RegisteringKerlink.png" description="Banner" %}  |
| **4.** **Powering on the Kerlink Wave** <br><br> -Plug the mains cable into the plug socket-Plug the other end into the Kerlink wave <br>-A green light will show once the device has power | {% include image.html url="/assets/img/UCT_Install_Images/PoweringKerlink.png" description="Banner" %}  |
| **5.** **Installing the Kerlink Wave** <br><br>-Use the adhesive pads to stick the Wave onto the predesignated location, ensuring the cable is still connected properly | {% include image.html url="/assets/img/UCT_Install_Images/InstallingKerlink.png" description="Banner" %}  |
| **6.** **If you are using screws to attach the Kerlink Wave** <br><br> -Open the covers on the Kerlink Wave, exposing the screw holes -Mark out and drill suitable holes and use raw plugs in the wall as required.<br>-Attach the Wave to the wall with suitably sized screws. | {% include image.html url="/assets/img/UCT_Install_Images/ScrewingKerlink3.png" description="Banner" %}|


## Section 4 - Set up the Location Markers:

The Location Markers come in a variety of form factors and can be installed in various ways. The instructions below are for our devices that are in the most widespread use. If you have a marker that is not displayed below, contact [`installation@microshare.io`](mailto:installation@microshare.io) if you have any questions with the installation instructions.

| --- | --- |
| **1.** **Unboxing the Devices** <br><br>-Open the packaging and take out the Microshare Location Markers | {% include image.html url="/assets/img/UCT_Install_Images/LocationMarkerBoxed.jpg" description="Banner" %} |
| **2.** **Taking the device out of the packaging** <br><br>-Remove clear wrapping from the Location Marker<br><br>-NOTE: There are several different form factors of Location Markers,The Microshare C10 Card and the Microshare B7 marker as shown in these images for example | {% include image.html url="/assets/img/UCT_Install_Images/CardBeacon.png" description="Banner" %} |
| | {% include image.html url="/assets/img/UCT_Install_Images/LocationMarker.png" description="Banner" %} |
| **3.** **Powering on the Location Markers** <br><br>-To power on the Microshare C10 card device, press down on the side of the device with the Power symbol as shown. A red light will begin to flash – this signals that the device has been powered on. | {% include image.html url="/assets/img/UCT_Install_Images/PoweringLocationTag.png" description="Banner" %} |
| -For the Microshare B7 location markers, simply unscrew the top to expose the battery case and remove the plastic battery tag used for transporting the devices. | {% include image.html url="/assets/img/UCT_Install_Images/B7_LocationMarker.jpg" description="Banner" %} |
| **4.** **Attaching the adhesive tape** <br><br>-Stick the adhesive tape to the side of the device with the power symbol as shown | {% include image.html url="/assets/img/UCT_Install_Images/LocationWith3M.png" description="Banner" %} |
| **5.** **Attaching the Location markers to the Wall** <br><br>-Stick the device on to the preassigned location using the provided adhesive tape on the device.<br>-Ensure that the QR code is still visible – as shown in the picture. | {% include image.html url="/assets/img/UCT_Install_Images/LocationFixOnWall.png" description="Banner" %} |
| **6.** **Registering the Location Tag** <br><br>-Using your scanning device, scan the QR code into an Excel spreadsheet that will denote where the Location Marker is physically installed-Provide this spreadsheet to your data analysis team so that they can identify when users have been in contact with specific locations | {% include image.html url="/assets/img/UCT_Install_Images/RegisteringLocationTags.png" description="Banner" %} |


## Section 5 – Activate the Wearable Devices

*   You will need to **activate at least 2 wearable devices** and place them both near a Wave for at least 7 minutes **in order to test the solution**


###   A.  Activate my wearable device (B7)

*   See [https://www.youtube.com/watch?v=li0iHHcYhV8](https://www.youtube.com/watch?v=li0iHHcYhV8) for a demonstration of how to activate a typical wearable device

*   Once these steps are complete, notify Microshare on [`installation@microshare.io`](mailto:installation@microshare.io) to enable us to verify that the data is now flowing and once confirmed, we will begin a data stream to you test environment

*   Now you can view your test streaming data and trial the system using the two activated wearable devices

| --- | --- |
| **1.** **Unbox and activate the Microshare wearable badges** <br><br>-Open the packaging and take out the wearable badges.<br>-To activate these wearables, press the button on the front of the device twice quickly, then wait for the red indicator light to stop flashing. <br>Then press 3 times again and hold the third press. The indicator light will flash blue to indicate that the device is active. | {% include image.html url="/assets/img/UCT_Install_Images/allWearablesUnbox.png" description="Banner" %} |
| See [https://www.youtube.com/watch?v=li0iHHcYhV8](https://www.youtube.com/watch?v=li0iHHcYhV8) for a demonstration of how to activate | {% include image.html url="/assets/img/UCT_Install_Images/wearableUnbox.png" description="Banner" %}|
| **2.** **Registering the Microshare Wearable** <br><br>-Using the scanning device, scan the QR code and add to your spreadsheet or tracking system <br>-Check that the Device ID entry matches the ID on the wearable and register the next device | {% include image.html url="/assets/img/UCT_Install_Images/RegisteringWearables.png" description="Banner" %} |
| **3.** **Attaching the key chain to the wearable badge** <br><br>-Remove the straps from the device by pulling the strap through from the wider end <br>-Attach the keychain provided to the device-Leave the recipient with the bands in case they wish to use it as a wristband | {% include image.html url="/assets/img/UCT_Install_Images/AttachingWearableKeychain.png" description="Banner" %} |
| | {% include image.html url="/assets/img/UCT_Install_Images/AttachingWearableKeychain2.png" description="Banner" %} |
| | {% include image.html url="/assets/img/UCT_Install_Images/AttachingWearableKeychain3.png" description="Banner" %} |
| **4.** **Changing the batteries in your wearable badge** <br><br>-Removing the back cover: Turn the device upside down, so that the side with the QR code is facing away from you <br>-Place a coin or similar shaped object in the grove in the back of the device and turn until the back cover is removed from the device to reveal the battery | {% include image.html url="/assets/img/UCT_Install_Images/ChgBatteriesWearable.png" description="Banner" %} |
| -Take out the old battery and replace it with a new CR2032 3V battery-Make sure the battery is installed the correct way around (+ sign facing up towards you) | {% include image.html url="/assets/img/UCT_Install_Images/ChgBatteriesWearable2.png" description="Banner" %} |
| -Using a coin or similar shaped object, screw the back cover onto the device | {% include image.html url="/assets/img/UCT_Install_Images/ChgBatteriesWearable.png" description="Banner" %} |


Once all the devices are installed and logged please inform the Microshare team at [`installation@microshare.io`](mailto:installation@microshare.io)


###   B.  Activate my Card-type wearable device (C10)


The C10 Card-type wearable devices from Microshare are simple to activate following the steps below:

| --- | --- |
| **1.** **Checking the status of the device:** <br><br>-Press the Status button (Microshare circular logo) once to show the status of the device on the LED (shown in the image)<br>-*Flashing Red* indicates the device is *inactive*<br>-*Flashing Blue* indicates the device is *active*| {% include image.html url="/assets/img/UCT_Install_Images/C10-card-1.png" description="Banner" %} |
| **2.** **Activating and deactivating the device:** <br><br>-Press the Status Button 3 times in quick succesion, holding the third press (“dot-dot-dash”) until the LED stops flashing<br>-Flashing Blue to indicate the device is now active<br>-Flashing Red indicates the device is now inactive<br>-*Deactivation can be disabled* upon customer request to Microshare| {% include image.html url="/assets/img/UCT_Install_Images/C10-card-2.png" description="Banner" %} |

Once all the devices are installed and logged please inform the Microshare team at [`installation@microshare.io`](mailto:installation@microshare.io)


## Section 6 – Move to a live installation

Once all the testing is complete you are ready to move to a live installation. Follow these steps:

*   Notify Microshare that you have completed testing and are ready to deploy the live Contact Tracing installation. We will cease test data streaming at this point to prepare for live data ingest. _Note: Data from your Wave devices can only be streamed into one Azure environment_

*   Set up your live streaming environment and securely share your credentials with Microshare

*   Install the Gateway(s), Wave(s), and Location Tag(s) into their permanent location (as applicable) – use the

*   Place the two activated Wearable Devices near to each other and a Wave for at least 7 minutes

*   Notify Microshare that everything has been set up and approximately what time the devices were all set up. From this we will confirm that data is flowing correctly and start streaming the live data to you Azure environment

*   View your Live streaming data to ensure you are happy with the data flow

*   Activate and distribute Wearable Devices

Congratulations! You should now be live with your Contact Tracing Solution from Microshare. If you have any issues or questions, please feel free to contact us on [`installation@microshare.io`](mailto:installation@microshare.io)

<style>
    tr td:first-child {
        width:70%;
    }

    tr td:nth-child(2) {
        width:30%;
    }
</style>
