---
layout: docs
title: Release Notes
description: Take a look at our latest updates
toc: true
---

---------------------------------------
---------------------------------------

## Release Notes for February 5, 2025

**New Features**

- n/a 

**Feature Enhancements**

React-M v1.1.41
- Background Loading & Caching – Tasks now load and cache in the background, reducing loading times and improving app responsiveness.
- Automatic Task Refresh on Notification – When a new notification arrives, React-M will now automatically refresh tasks to ensure users always see the latest updates.
- Email & Password Validation on Submission – Prevents UI glitches by checking the validity of email-password combinations upon submission, reducing issues with keyboard behavior while typing.

**Bug Fixes**

React-M v1.1.41
- Optimized app performance with background caching, reducing lag and improving efficiency.
- Fixed an issue where invalid email-password combinations could cause UI inconsistencies during login.

**Additional Resources**

- n/a

**Ops**

- n/a


---------------------------------------
---------------------------------------

## Release Notes for January 30, 2025

**New Features**

- n/a 

**Feature Enhancements**

Smart Office Masters
- The Trending and Realtime forms have been updated to use Window.accessToken now provided by the App service.  

**Bug Fixes**

- n/a

**Additional Resources**

- n/a

**Ops**

- n/a


---------------------------------------
---------------------------------------

## Release Notes for December 18, 2024

**New Features**

- n/a 

**Feature Enhancements**

EverSmart 
- The Device Health > Battery “Voltage” now displays the last voltage reading to be the average over last 24 hours.

**Bug Fixes**

EverSmart
- In the Settings app, uploading users now also updates the role of existing users if needed.
- The table on the Smilio Device Health Trending page is now filled in properly when any state variable is selected for Today.  Each row should show one category as 100% and the other categories as 0%.
- Voltage and Battery Health now match up on the Device Health Overview page. 

**Additional Resources**

- n/a

**Ops**

- n/a


---------------------------------------
---------------------------------------

## Release Notes for November 27, 2024

**New Features**

- n/a 

**Feature Enhancements**

Platform
- The Wizard has been updated to set the use case of gateway for all rodent solutions to GATEWAY.  This will allow DeployM to show gateway specific tag labels. 

EverSmart 
- Settings App: New Rules should default to listen for incident alerts - event: "incident_start".   
  - New notification rules are now created by default to notify the user when an "Incident" is "Created".  This means that the first time an alert (like a rodent presence prediction) occurs, the user is notified, but they will not be notified for subsequent alerts at that same location until the incident is resolved (for example, times out). 
  - Grouping multiple alerts into a single incident (where it results in a single notification) is called "bundling".  The user can instead opt to be notified when individual alerts occur by choosing "Rodent Alert" instead. 
  - In the past, users could ONLY listen for the creation of the bundled incident. This type of notification rule used to be shown in the Settings app as "Rodent Alert".  Now that we differentiate between listening to the bundled "incident" vs listening for individual alerts, we have updated the meaning of "Rodent Alert" to mean getting notified for individual alerts.  This means that in order to achieve the same functionality that our users previously experienced, we have updated all existing "Rodent Alert" rules to "Incident Created" rules.
- Routing App: After performing an action on an incident, the loading spinner is now displayed only on the incident and the rest of the Routing app remains usable while the action gets processed in the background.
- Settings App: Added an option to Settings for an Admin to be CC’d on user invitation/creation for single and bulk invites to the platform.

**Bug Fixes**

Platform
- SMS exceptions no longer cause other notifications to fail.

**Additional Resources**

- EverSmart Rodent online help has been updated.

**Ops**

- n/a


---------------------------------------
---------------------------------------

## Release Notes for November 7, 2024

**New Features**

- n/a 

**Feature Enhancements**

Platform
- The User Creation API now allows the creation of an admin email to be CC'd on invitation emails. 
- Our /config endpoint now interprets “rules” consistently based on a combination of input of solution-type, alert-type, event-type, and locations array, factoring both asset account product default rules and at least one organizational override config record. 
- The Manage > Configs section now supports a JSON editor for creating, reading, updating, and deleting records. 

EverSmart 
- Settings dashboard > Test Notifications tab has been removed pending a redesign of the feature.    

**Bug Fixes**

Platform
- Under the Manage > Devices > Registered Devices section, we now indicate the sort order of the Device ID and Location Tags columns. 
- When clicking Cancel after editing in Manage > Devices > Registered Devices, changes are properly discarded as expected. 
- Text for long Org names displayed on cards under Manage > Apps no longer overrun the boundary of the cards. 

**Additional Resources**

- n/a

**Ops**

- n/a


---------------------------------------
---------------------------------------

## Release Notes for October 17, 2024

**New Features**

Platform
- An unpacker for the Xibu Hagleitner level sensor has been created.
- The Xibu Hagleitner Paper Towel Sensor has completed the development certification process.

**Feature Enhancements**

Platform
- The processes API has been enhanced to retrieve all details within a Task.

EverSmart
- The Exit to Console menu item is only displayed to Microshare users and admins.   
  - By default, Exit to Console should now be available for: 
    - users whose email ends with @microshare.io 
    - users whose email begins with “ms_admin@” 
    - users whose email begins with “root@” 
    - users whose isAdmin is true 
    - users whose roles contains “admin” 
  - If hideExitToConsoleForAdmin is set to true, then Exit to Console should ONLY be available for:  
    - users whose email ends with “@microshare.io” 
    - users whose email begins with “ms_admin@” 
    - users whose email begins with “root@”

   
- In the UI, in the “Summary” tiles on the Overview page and in Device Health, we have updated the description/naming of un-twinned devices to better reflect their status.
  - Un-twinned devices are no longer classed as “Unhealthy” by default. The devices are now described as “Unconfigured”. This will aid new users in understanding the information being displayed to them.   
  - Only devices with issues e.g. low battery will now be described as Unhealthy. 
  - These were the devices previously set-up with the "dummy" devEUI 00-00-00-00-00-00 (aka “unconfigured devices”). See in-app Help document for more details. 

**Bug Fixes**

Platform
- Identities in the Composer > Switch Org dropdown are now listed alphabetically.
- When viewing the Composer > Forms > Info slide-out (i), the Owner, Imported By, and Created By fields are now filled in.
- The Composer > App Update screen now displays the standard Update App surround and shows the app id with Copy-to-Clipboard enabled.
- Composer > Keys auth access for an account no longer incorrectly persists across a user signing out and signing back in as a different user.
- The Device Cluster > Quick Update loading icon now appears when expected.
- When clicking the Composer > Device Cluster > Network > Create button only a single call is made now.  This improvement has been made in order to reduce the load on the server and time on the browser to populate the drop-down.
- The API has been updated to automatically remove trailing spaces in all location tags (e.g. Loc1, Loc2, Loc3, Loc4) for devices in a Device Cluster.

EverSmart
- When refreshing an EverSmart app within the Suite app, the active page is now preserved.

**Additional Resources**

- n/a

**Ops**

- n/a


---------------------------------------
---------------------------------------

## Release Notes for September 26, 2024

**New Features**

- n/a

**Feature Enhancements**

Platform
- Console > Devices > Device IDs now persist when being edited.

EverSmart
- Suite App > Exit to Console redirects to console only in appropriate context – i.e. user is not a rodent user without Admin privileges.
- In the Settings app you can now pick if a new user is an Admin, Pro or Lite user. 
Important Note!!!: There is a request to have multiple Admins.  At this point the above features related to this are incomplete, so please avoid using them for now.    

**Bug Fixes**

- n/a

**Additional Resources**

- n/a

**Ops**

- n/a


---------------------------------------

---------------------------------------

## Release Notes for September 5, 2024

**New Features**

- n/a

**Feature Enhancements**

Platform
- Composer Search functionality is no longer case sensitive.
- Console allows escape from forced suite app start.
- Rule Editor now has "Configs", “Profiles” and “Streams” in the "RESOURCE TYPE" dropdown.
- When deleting a device in a Device Cluster, the prompt upon clicking Delete now includes the device tags.
- The search functionality of Composer has been updated and expanded with the ability to search on the Dev EUI.
- The Device Cluster CSV upload format no longer requires only semi-colons and now accepts comma delimited CSV files as well.

EverSmart
- Implemented a bulk user upload feature in the Settings app to assist in adding large numbers of users.

DeployM 
- The “Scan a real device” prompt message in Deploy-M has been updated to “! Scan a physical device’s QR code” this is intended to assist users in understanding the next action to take when starting to use Deploy-M.  
- The QR code icon has been updated to a camera icon to make it clearer that this starting point for a new user to begin at. 
– Deploy-M’s Search functionality now has the ability to search on the the data, such as a name, used in a tag field. So, for a User they could now search on a site name e.g. Gianni’s or Pizzeria to more quickly find the correct device in a device cluster. 
- There is now a warning when deleting a device in Deploy-M. 
- Improved the "purpose" string used to ask the user permission to access location data. 
- Improved usability and styling to give an improved look and feel 
– Deploy-M now provides a pre-populated list of suggestions for tag values where appropriate. This provides suggested terminology for users to select when tagging a device in the field and will hopefully deliver more consistency in tagging descriptions.  

**Bug Fixes**

Platform
- Device Cluster Downloads now support leading zeros in tags.

DeployM
- Users can now clearly see any Configuration tag in DeployM as it is being typed. 
- It’s now easier to view, scroll and select from the Language selection list in DeployM on iPhone. 
- Fixed issue when editing the tags out of order (for example - editing tag 3 before tag 1) where the “new tag” would incorrectly become the first tag instead of the third tag.  

**Additional Resources**

EULA
- Our EULA has been updated.

**Ops**

- n/a


---------------------------------------

## Release Notes for August 15, 2024

**New Features**

- n/a

**Feature Enhancements**

- n/a 

**Bug Fixes**

Platform
- Upon Device Cluster re-authorization, fields (except for password) are now pre-populated based on the currently logged-in user.
- Manage navigation menu is hidden unless a user is an admin or a Microshare employee.
- Fixes outstanding security patches for various CVEs for 3rd party libraries.

**Additional Resources**

- n/a

**Ops**

- n/a


---------------------------------------

## Release Notes for July 24, 2024

**New Features**

- n/a

**Feature Enhancements**

Platform
- We've added api.microshare.io to support /Link API to GET/POST/PUT/DELETE that supports the ability for apps to be shared with unauthenticated guests.  We’ve deprecated app.microshare.io /links2 endpoints which have been used to accomplish the same thing functionally.
- Web documentation: the Postman API Examples for Links, Apps, Icons and Forms has been updated.

EverSmart
- Saved Filters are now available for a user across all devices and browsers. 

**Bug Fixes**

Platform
- Pagination has been implemented for Devices, Robots, Views and Rules to address lag and/or crashes when updating 1500+ Device Clusters at a time.

**Additional Resources**

- n/a

**Ops**

- n/a


---------------------------------------

## Release Notes for May 23, 2024

**New Features**

- n/a

**Feature Enhancements**

EverSmart
- EverSmart now persists the value of the Time range filter, except when the duration is larger than 14 days.
- The “IoT Monitor” button in the EverSmart Alert - Rodent Control Overview page has been renamed to “Device Health”.
- Individual users can now save custom filter settings in the EverSmart dashboards.  See the “Saved Filters” option in the user interface. 

**Bug Fixes**

- n/a

**Additional Resources**

- n/a

**Ops**

- n/a


---------------------------------------

## Release Notes for April 11, 2024

**New Features**

- n/a

**Feature Enhancements**

- n/a

**Bug Fixes**

DeployM
- The default number of Gateways and Devices for a new Rodent instance in DeployM has been updated to be 2 Gateways and 12 Devices.

**Additional Resources**

- n/a

**Ops**

- n/a


---------------------------------------

## Release Notes for March 20, 2024

**New Features**

- n/a

**Feature Enhancements**

EverSmart
- A magnet swipe/touch against a Smilio A device is recognized as a button push and is associated with the service request button push. The magnet touch closes the incident / event.

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

  
