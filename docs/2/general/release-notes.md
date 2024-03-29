---
layout: docs
title: Release Notes
description: Take a look at our latest updates
toc: true
---

---------------------------------------

## Release Notes for March 20, 2024

**New Features**

- n/a

**Feature Enhancements**

- n/a

**Bug Fixes**

DeployM
- Resolved issue with DeployM sometimes reverting the DevEUI for a previously updated device within a Device Cluster. 
- Fixed a stability issue related to tapping the map icon in DeployM on Android devices. 
- Addressed a problem on Android devices with entering data for tag 4 on Gateways. 

**Additional Resources**

- n/a

**Ops**

- n/a


---------------------------------------


## Release Notes for February 7, 2024

**New Features**

- n/a

**Feature Enhancements**

Suite App

- The tab name and icon of a user’s browser page updates to display the current application as users switch between applications in the Suite App.

EverSmart

- EverSmart now displays the same icon in the upper right corner of the dashboard interface as is displayed on the apps list. This creates a more consistent app branding style.

DeployM

- The “Use development/training server” button has been moved from the sign-in screen to the Settings page.

EverSmart and DeployM

- Labels (aka headings) for the location tags displayed in the EverSmart dashboard now align with the labels as displayed in DeployM. If the labels changed unexpectedly in this new release, please contact support@microshare.io.

**Bug Fixes**

- Moving from Suite App to any app and then clicking Back in browser immediately returns the user to the Suite App as expected.
- The operators for the Traffic data field in EverSmart Clean have been updated and now include sum, average, max, sumMean, and sumMax. 

**Additional Resources**

- n/a

**Ops**

- n/a


---------------------------------------


## Release Notes for December 14, 2023

**New Features**

Data

- Our systems now annotate sensor GPS data (if available from a device) to the data stream.

Manage > Devices

- All asset types now include ownership details in the info panel.  Simply select a Device Cluster and click the “i” Info button.  Ownership information then appears in the slide-out panel on the right side of the screen. 

**Feature Enhancements**

- n/a

**Bug Fixes**

- n/a

**Additional Resources**

- n/a

**Ops**

- n/a


---------------------------------------


## Release Notes for November 20, 2023

**New Features**

The following changes have been completed to allow EverSmart Alert to meet demands for a “push button” service request. This solution is an MVP and is at an Alpha status.

- EverSmart Alert now supports One-Button alarm sources. Initially, this will be with Smilio A devices, but other hardware devices are being looked at and could be considered based on the use case.
- Any of our Smilio A devices can now be configured as a 1-button device with support for Service Requests (Push Button requests).

IoT Monitor

- We now show the faults from the Indoor Foot Traffic devices on the Overview page. This provides better visibility/awareness so that end users can more easily find and address hardware issues reported by these sensors.

**Feature Enhancements**

IoT Monitor

- Device Health no longer reports devices as “Unhealthy” when they are not visible in the UI.
- Change how IoT monitor interprets device health from Smilio A devices.
- To ensure IoT Monitor correctly shows healthy devices as healthy, Intermittency is no longer used as a metric for these devices when determining device health. We now handle Smilio device health as a special use case.
- Poor Signal to Noise ratio is no longer a primary metric for device health as some amount of weak connectivity is expected in real-world environments.

- Other minor improvements in EverSmart include:
  - Renamed field “Missing Records” as “Data Loss”
  - Renamed field “Total Records” as “Expected Records”
  - Added “Realtime” tab

Platform Authorization

- A show/eye icon has been added to the password input field on login so that end users may now choose to unmask their password when typing it.
- To improve the login screen, the Organization (Optional) field is no longer displayed on the log-in screen.
- Login UI now displays which "special characters" are allowed and properly allows/disallows special characters as indicated.

Suite App

- We've added a new menu item in the "hamburger" menu of the Suite App. "Exit to Console" is an advanced menu item that now appears at the bottom of the menu. Users can click on this link to exit directly to the Microshare Management Console with all of the usual advanced features. To return to the Suite App sandbox, users can either use the "back" functionality in their browser, or they can click on the "Dashboard" item in the top menu bar, or they can click back on the Suite App icon.

**Bug Fixes**

- n/a

**Additional Resources**

- n/a

**Ops**

- n/a

  
