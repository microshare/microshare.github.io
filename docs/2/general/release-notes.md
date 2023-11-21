---
layout: docs
title: Release Notes
description: Take a look at our latest updates
toc: true
---

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

  
